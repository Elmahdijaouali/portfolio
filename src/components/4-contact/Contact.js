import "./contact.css";
import Lottie from "lottie-react";
import doneAnimation from "../../animations/done.json";
import contact_usAnimation from "../../animations/contact_us.json";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
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

    emailjs
      .send(
        "service_5i2k52m", // Your service ID
        "template_o63hqkb", // Your template ID
        { name, email, message }, // Variables
        "HmxZYCcFM4xQBqdiV" // Your public key (user ID)
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
    <section className="contact" id="contact">
      <div className="left-section">
        <header>
          <h2>
            <i className="fa-solid fa-envelope"></i> Contact us
          </h2>
          <p>
            Contact us for more information and get notified when I publish
            something new.
          </p>
        </header>

        <div>
          <form onSubmit={handleSubmitFormContact} aria-label="Contact form">
            <div>
              <label htmlFor="name">Full Name:</label>
              <br />
              <input
                type="text"
                id="name"
                autoComplete="off"
                value={formData.name}
                onChange={handleChange}
                required
                name="name"
                placeholder="Enter full name"
                aria-label="Full Name"
              />
            </div>

            <div>
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                autoComplete="off"
                value={formData.email}
                onChange={handleChange}
                required
                name="email"
                placeholder="Enter email address"
                aria-label="Email Address"
              />
            </div>

            <div>
              <label htmlFor="message">Your Message:</label>
              <br />
              <textarea
                id="message"
                required
                value={formData.message}
                onChange={handleChange}
                name="message"
                placeholder="Enter your message"
                aria-label="Your Message"
              ></textarea>
            </div>

            <button type="submit" id="btn_send_message" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p id="messageSubmitting" aria-live="polite">
                <Lottie
                  loop={false}
                  className="animationDone"
                  animationData={doneAnimation}
                />
                <span>Your message has been sent successfully!</span>
              </p>
            )}

            {status && !success && (
              <p style={{ color: "red" }} aria-live="polite">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>

      <aside className="right-section">
        <Lottie className="animation" animationData={contact_usAnimation} />
      </aside>
    </section>
  );
}