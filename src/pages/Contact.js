import React, { useState } from 'react';
import saraImage from '../assets/sara.png';
import mikeImage from '../assets/mike.png';
import omerImage from '../assets/omer.png'; 
import Swal from 'sweetalert2'
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e78104d1-fdb4-4f28-8ebc-9c794de9a6fc");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success",
        text: "Message send successfully",
        icon: "success"
      });
    } else {
      console.log("Error", res);
    }
  };

  return (
    <div className="contact-page">
      {/* Contact Form Section */}
      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
<textarea
  name="message"
  placeholder="Your Message"
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  required
  rows="5"
  cols="50"
  style={{ color: 'black', fontSize: '14px' }}  // Makes text black and readable
></textarea>


          <button type="submit">Send</button>
        </form>
        <div className="contact-info">
          <p>If you prefer, you can reach me through the following platforms:</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/mayar-qutishat-1477a0326/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/Mayarqutishat" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials" id="testimonials">
        <div className="testimonials-container">
          <div className="testimonial-card">
            <img src={saraImage} alt="Sara testimonial" />
            <div className="testimonial-content">
              <h3>Sara</h3>
              <p>I just wanted to let you know that it’s been great working with you.</p>
              <div className="rating">
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <img src={mikeImage} alt="Mike testimonial" />
            <div className="testimonial-content">
              <h3>Mike</h3>
              <p>Mayar saved us from a web disaster.</p>
              <div className="rating">
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <img src={omerImage} alt="Omar testimonial" />
            <div className="testimonial-content">
              <h3>Omar</h3>
              <p>Mayar saved us from a web app disaster.</p>
              <div className="rating">
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
