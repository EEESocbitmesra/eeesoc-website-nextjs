import ContactDetails from "@/components/contact/ContactDetails";
import MailForm from "@/components/contact/MailForm";
import { pageTitle } from "@/data/constants";

export const metadata = {
  title: `${pageTitle} | Get in touch`,
};

export default function Contact() {
  const resendAPIKey = process.env.RESEND_API_KEY;

  return (
    <section className="items-start wrapper">
      <h1>Get in touch</h1>
      <p className="mt-2">
        Have a project on mind? Want to collaborate with us?
      </p>
      <p>
        Don&apos;t hesistate to contact us. Let&apos;s have a talk together.
      </p>

      <div className="grid w-full grid-cols-12 mt-8">
        <MailForm resendAPIKey={resendAPIKey} />
        <ContactDetails />
      </div>
    </section>
  );
}
