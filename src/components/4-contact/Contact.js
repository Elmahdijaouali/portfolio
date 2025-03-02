import './contact.css' ;
import Lottie from "lottie-react";
import doneAnimation from "../../animations/done.json"
import contact_usAnimation from "../../animations/contact_us.json"
import emailjs from 'emailjs-com';
// npm install @formspree/react
import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';

export default function Contact(){
   const [state, handleSubmit] = useForm("mgvwylnl");
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
    const [status, setStatus] = useState('');
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmitFormContact = (e) => {
      e.preventDefault();
  
      const { name, email, message } = formData;
  
      // Send email using EmailJS
      emailjs
        .send(
          'YOUR_SERVICE_ID',      // Service ID
          'YOUR_TEMPLATE_ID',      // Template ID
          { name, email, message }, // Template variables
          'YOUR_USER_ID'           // User ID (from EmailJS dashboard)
        )
        .then(
          (response) => {
            console.log('Email sent successfully:', response);
            setStatus('Email sent successfully!');
          },
          (error) => {
            console.log('Error sending email:', error);
            setStatus('Error sending email. Please try again later.');
          }
        );
    };
    return (
   
  <div className='contact' id="contact">
     <div className='left-section'>
               <div>
                  <h1><i class="fa-solid fa-envelope"></i> Contact us</h1>
                  <p>contact us for more information and get notified  when I publish something new .</p>
               </div>
               <div> 
          
                <form  onSubmit={handleSubmit}>
                    <div>
                       <label >Full Name  : </label> <br></br>
                       <input type="text" autoComplete='off' value={formData.name} onChange={handleChange} required id='name' name='name'  placeholder='Enter full name ' />
                    </div>
                    <div></div>
                    <div>
                       <label>Email Address :</label><br></br>
                       <input type="email" autoComplete='off' value={formData.email} onChange={handleChange} required id='email' name='email' placeholder='Enter email address'  />
                    </div>
                       <ValidationError style={{color:"red"}}
                         prefix="Email" 
                         field="email"
                         errors={state.errors}
                        />
                    <div>
                       <label>Your Message :</label><br></br>
                       <textarea required id='message' value={formData.message} onChange={handleChange} name='message' placeholder='Enter your message'>

                       </textarea>
                    </div>
                       <ValidationError style={{color:"red"}}
                         prefix="Message" 
                         field="message"
                         errors={state.errors}
                        />
                    <button type='submit'  disabled={state.submitting} id='btn_send_message'>
                      { state.submitting ? "Submitting ..." : "Submit"}
                    </button>
                    {
                     state.succeeded && ( <p id='messageSubmitting'><Lottie loop={false} className='animationDone'  animationData={doneAnimation} /><span> your message has been sent successfully </span></p>)
                    }
                    {
                     state.errors && ( <p>errors ,message not sent !!! </p>)
                    }
                </form>
             </div>
             </div>

       <div className='right-section'>
           <Lottie className='animation'  animationData={contact_usAnimation} />
       </div>
       
     </div>
  
    )
}