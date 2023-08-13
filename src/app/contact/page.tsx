import ContactDetails from "@/components/contact/ContactDetails";
import MailForm from "@/components/contact/MailForm";
import { pageTitle } from "@/data/constants";

export const metadata = {
  title: `${pageTitle} | Get in touch`,
};

export default function Contact() {
  return (
    <section className="my-16 w-5/6 md:w-4/5 mx-auto">
      <h2 className="text-3xl md:text-4xl">Get in touch</h2>
      <p className="mt-2">
        Have a project on mind? Want to collaborate with us?
      </p>
      <p>
        Don&apos;t hesistate to contact us. Let&apos;s have a talk together.
      </p>

      <div className="grid gap-20 grid-cols-12 mt-8">
        <MailForm />
        <ContactDetails />
      </div>
    </section>
  );
}
