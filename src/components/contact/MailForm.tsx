"use client";

import { email, emailUrl } from "@/data/socialLinks";
import { ChangeEvent, useState, useTransition } from "react";
import { MdClose } from "react-icons/md";
import { RiLoader2Fill } from "react-icons/ri";
import { Resend } from "resend";

interface Props {
  resendAPIKey: string | undefined;
}

export default function MailForm({ resendAPIKey }: Props) {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [messageSent, setMessageSent] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const handleContactForm = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setContactForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // setIsPending(true);

    // const resend = new Resend(resendAPIKey);
    // await resend.emails.send({
    //   from: contactForm.email,
    //   to: email,
    //   subject: contactForm.subject,
    //   text: contactForm.message,
    // });

    // setIsPending(false);
    // setMessageSent(true);

    setContactForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <form
      className="flex flex-col max-w-full col-span-12 xl:col-span-7"
      onSubmit={handleSubmit}
    >
      {messageSent && (
        <div
          role="alert"
          className="flex items-center p-4 mb-4 text-green-900 bg-green-200 rounded"
        >
          <span className="flex-1">Your message was sent successfully.</span>
          <button onClick={() => setMessageSent(false)}>
            <MdClose />
          </button>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4 xl:gap-8 xl:w-full">
        <input
          name="name"
          className="col-span-2 p-2 border rounded xl:col-span-1 border-gray focus:ring focus:ring-light-purple"
          value={contactForm.name}
          placeholder="Name"
          onChange={handleContactForm}
          required
        />
        <input
          name="email"
          type="email"
          value={contactForm.email}
          className="col-span-2 p-2 border rounded xl:col-span-1 border-gray focus:ring focus:ring-light-purple"
          placeholder="Email"
          onChange={handleContactForm}
          required
        />
      </div>
      <input
        name="subject"
        value={contactForm.subject}
        className="col-span-1 p-2 mt-4 border rounded border-gray focus:ring focus:ring-light-purple"
        placeholder="Subject"
        required
        onChange={handleContactForm}
      />
      <textarea
        name="message"
        className="col-span-1 p-2 mt-4 border rounded border-gray focus:ring focus:ring-light-purple"
        value={contactForm.message}
        rows={6}
        placeholder="Message"
        onChange={handleContactForm}
        required
      />
      <button
        type="submit"
        className="px-4 py-2 mt-8 text-sm text-white transition-all rounded xl:self-start bg-zinc-500 hover:bg-zinc-600"
      >
        {isPending ? (
          <RiLoader2Fill className="animate-spin" />
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
