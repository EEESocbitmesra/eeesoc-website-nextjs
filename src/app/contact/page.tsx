import ContactDetails from "@/components/contact/ContactDetails";
import MailForm from "@/components/contact/MailForm";
import { pageTitle } from "@/data/constants";

export const metadata = {
  title: `${pageTitle} | Get in touch`,
};

export default function Contact() {
  return (
    <section className="items-stretch wrapper">
      <h1>Get in touch</h1>
      <p className="mt-2">
        Have a project on mind? Want to collaborate with us?
      </p>
      <p>
        Don&apos;t hesistate to contact us. Let&apos;s have a talk together.
      </p>

      <div className="grid grid-cols-12 gap-20 mt-8">
        <MailForm />
        <ContactDetails />
      </div>
    </section>
  );
}
