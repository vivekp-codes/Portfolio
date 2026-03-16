import React, { useRef, useState } from 'react';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {

  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs.sendForm(
      'Service_vivekp',
      'template_vivekp',
      form.current,
      'wiL7SldyilR_pZndG'
    )
      .then(() => {

        setLoading(false);
        setSuccess(true);

        form.current.reset();

        setTimeout(() => {
          setSuccess(false);
        }, 4000);

      })
      .catch((error) => {

        setLoading(false);
        console.log(error);
        alert("Failed to send message");

      });
  };

  return (
    <article className="contact" data-page="contact">

      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="social-marquee">

        <div className="marquee-row">

          <div className="marquee-track">
            <img src="/Images/react.png" alt="github" />
            <img src="/Images/javas.png" alt="linkedin" />
            <img src="/Images/github.png" alt="twitter" />
            <img src="/Images/css-new.png" alt="instagram" />
            <img src="/Images/vs.png" alt="youtube" />
            <img src="/Images/chat-gpt.png" alt="discord" />

            <img src="/Images/linkedin.png" alt="python" />
            <img src="/Images/node-js.png" alt="flutter" />
            <img src="/Images/Postman.png" alt="firebase" />
            <img src="/Images/python.png" alt="html" />
            <img src="/Images/social.png" alt="css" />
            <img src="/Images/whatsapp.png" alt="vscode" />

            <img src="/Images/cursor.png" alt="react" />
            <img src="/Images/git.png" alt="node" />
            <img src="/Images/chrome.png" alt="mongo" />
            <img src="/Images/flutter.png" alt="tailwind" />
            <img src="/Images/google.png" alt="git" />
            <img src="/Images/html-new.png" alt="javascript" />

            
          </div>

        </div>

        <div className="marquee-row">

          <div className="marquee-track">
            <img src="/Images/cursor.png" alt="react" />
            <img src="/Images/git.png" alt="node" />
            <img src="/Images/chrome.png" alt="mongo" />
            <img src="/Images/flutter.png" alt="tailwind" />
            <img src="/Images/google.png" alt="git" />
            <img src="/Images/html-new.png" alt="javascript" />

            <img src="/Images/facebook.png" alt="github" />
            <img src="/Images/android.png" alt="linkedin" />
            <img src="/Images/pinteres.png" alt="twitter" />
            <img src="/Images/firebase.png" alt="instagram" />
            <img src="/Images/windows.png" alt="youtube" />
            <img src="/Images/yt.png" alt="discord" />

            <img src="/Images/linkedin.png" alt="python" />
            <img src="/Images/node-js.png" alt="flutter" />
            <img src="/Images/Postman.png" alt="firebase" />
            <img src="/Images/python.png" alt="html" />
            <img src="/Images/social.png" alt="css" />
            <img src="/Images/whatsapp.png" alt="vscode" />

           

            

            

            
          </div>

        </div>

        <div className="marquee-row">

          <div className="marquee-track">
            <img src="/Images/linkedin.png" alt="python" />
            <img src="/Images/node-js.png" alt="flutter" />
            <img src="/Images/Postman.png" alt="firebase" />
            <img src="/Images/python.png" alt="html" />
            <img src="/Images/social.png" alt="css" />
            <img src="/Images/whatsapp.png" alt="vscode" />

            <img src="/Images/react.png" alt="github" />
            <img src="/Images/javas.png" alt="linkedin" />
            <img src="/Images/github.png" alt="twitter" />
            <img src="/Images/css-new.png" alt="instagram" />
            <img src="/Images/vs.png" alt="youtube" />
            <img src="/Images/chat-gpt.png" alt="discord" />

            <img src="/Images/cursor.png" alt="react" />
            <img src="/Images/git.png" alt="node" />
            <img src="/Images/chrome.png" alt="mongo" />
            <img src="/Images/flutter.png" alt="tailwind" />
            <img src="/Images/google.png" alt="git" />
            <img src="/Images/html-new.png" alt="javascript" />

            

           
          </div>

        </div>

      </section>

      <section className="contact-form">

        <h3 className="h3 form-title">Contact Form</h3>

        <form ref={form} onSubmit={sendEmail} className="form">

          {/* spam protection */}
          <input type="text" name="_honey" style={{ display: 'none' }} />

          <div className="input-wrapper">

            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
            />

            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
            />

          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
          ></textarea>

          <button className="form-btn" type="submit" disabled={loading}>

            {loading ? (
              <>
                <Send size={18} />
                <span>Sending</span>
              </>
            ) : (
              <>
                <Send size={18} />
                <span>Send Message</span>
              </>
            )}

          </button>

          {success && (
            <p className="success-msg">
              Message sent successfully !
            </p>
          )}

        </form>

      </section>

    </article>
  );
};

export default Contact;