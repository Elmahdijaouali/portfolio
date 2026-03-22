

import './contact.css';
import Lottie from "lottie-react";
import doneAnimation from "../../animations/done.json";
import contact_usAnimation from "../../animations/contact_us.json";
import emailjs from '@emailjs/browser';
import { useState } from 'react';
export default function Contact() {
const [formData, setFormData] = useState({
name: '',
email: '',
message: '',
});
const [status, setStatus] = useState('');
const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState(false);
const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};
const handleSubmitFormContact = (e) => {
e.preventDefault();
setLoading(true);

const { name, email, message } = formData;

emailjs.send(
  'service_5i2k52m',          // Your service ID
  'template_o63hqkb',        // Your template ID
  { name, email, message },  // Variables
  'HmxZYCcFM4xQBqdiV'          // Your public key (user ID)
)
.then((response) => {
  console.log("Email sent:", response);
  setLoading(false);
  setSuccess(true);
  setStatus("Your message has been sent!");

  // Clear form
  setFormData({ name: "", email: "", message: "" });
})
.catch((error) => {
  console.log("Email error:", error);
  setLoading(false);
  setStatus("Error sending message. Please try again.");
});
};
return (
<div className="contact" id="contact">
<div className="left-section">
<div>
<h1><i className="fa-solid fa-envelope"></i> Contact us</h1>
<p>Contact us for more information and get notified when I publish something new.</p>
</div>

<div>
      <form onSubmit={handleSubmitFormContact}>
        
        <div>
          <label>Full Name:</label><br />
          <input 
            type="text"
            id="name"
            autoComplete="off"
            value={formData.name}
            onChange={handleChange}
            required
            name="name"
            placeholder="Enter full name"
          />
        </div>

        <div>
          <label  >Email Address:</label>
          
             <input 
            type="email"
            id="email"
            autoComplete="off"
            value={formData.email}
            onChange={handleChange}
            required
            name="email"
            placeholder="Enter email address"
          />
          
        </div>

        <div>
          <label>Your Message:</label><br />
          <textarea
            id="message"
            required
            value={formData.message}
            onChange={handleChange}
            name="message"
            placeholder="Enter your message"
          ></textarea>
        </div>

        <button type="submit" id="btn_send_message" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>

        {success && (
          <p id="messageSubmitting">
            <Lottie loop={false} className="animationDone" animationData={doneAnimation} />
            <span>Your message has been sent successfully!</span>
          </p>
        )}

        {status && !success && <p style={{ color: "red" }}>{status}</p>}
      </form>
    </div>
  </div>

  <div className="right-section">
    <Lottie className="animation" animationData={contact_usAnimation} />
  </div>
</div>
);
}