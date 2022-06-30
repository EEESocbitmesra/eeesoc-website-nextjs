import { useState } from "react";
import styles from "./Contact.module.css";

export default function MailForm() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleContactForm = (e) => {
    setContactForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setContactForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="col-lg-7">
      <form
        className="contact__form w-100"
        // target="_blank"
        // action="mailto:eeesocbitmesra@bitmesra.ac.in"
        onSubmit={handleSubmit}
      >
        <div className="row">
          <div className="col-12">
            <div
              className="alert d-none alert-success contact__msg"
              role="alert"
            >
              Your message was sent successfully.
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 form-group">
            <input
              name="name"
              className="form-control p-2"
              value={contactForm.name}
              placeholder="Name"
              required
              onChange={handleContactForm}
            />
          </div>
          <div className="col-md-6 mt-3 mt-md-0 form-group">
            <input
              name="email"
              type="email"
              value={contactForm.email}
              className="form-control p-2"
              placeholder="Email"
              onChange={handleContactForm}
              required
            />
          </div>
          <div className="col-md-12 form-group">
            <input
              name="subject"
              value={contactForm.subject}
              className="form-control mt-3 p-2"
              placeholder="Subject"
              required
              onChange={handleContactForm}
            />
          </div>
          <div className="col-12 form-group">
            <textarea
              name="message"
              className="form-control mt-3 p-2"
              value={contactForm.message}
              rows={6}
              placeholder="Message"
              onChange={handleContactForm}
              required
            />
          </div>
          <div className="mt-4 w-100">
            <button
              type="submit"
              className={"px-3 py-2 btn btn-secondary " + styles.sendBtn}
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
