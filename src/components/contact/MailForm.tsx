"use client";

import { ChangeEvent, useState } from "react";
import styles from "./Contact.module.css";

export default function MailForm() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleContactForm = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setContactForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <form
      className="w-full col-span-7 flex items-stretch flex-col"
      onSubmit={handleSubmit}
    >
      <div className="hidden" role="alert">
        Your message was sent successfully.
      </div>

      <div className="grid mt-4 grid-cols-2 gap-8">
        <input
          name="name"
          className="col-span-1 p-2 border border-gray rounded focus:ring focus:ring-light-purple"
          value={contactForm.name}
          placeholder="Name"
          onChange={handleContactForm}
          required
        />
        <input
          name="email"
          type="email"
          value={contactForm.email}
          className="col-span-1 p-2 border border-gray rounded focus:ring focus:ring-light-purple"
          placeholder="Email"
          onChange={handleContactForm}
          required
        />
      </div>
      <input
        name="subject"
        value={contactForm.subject}
        className="col-span-1 p-2 mt-4 border border-gray rounded focus:ring focus:ring-light-purple"
        placeholder="Subject"
        required
        onChange={handleContactForm}
      />
      <textarea
        name="message"
        className="col-span-1 p-2 mt-4 border border-gray rounded focus:ring focus:ring-light-purple"
        value={contactForm.message}
        rows={6}
        placeholder="Message"
        onChange={handleContactForm}
        required
      />
      <button
        type="submit"
        className="px-4 py-2 text-sm bg-zinc-500 text-white rounded self-start mt-8"
      >
        Send Message
      </button>
    </form>
  );
}
