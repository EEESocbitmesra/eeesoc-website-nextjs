import ContactDetails from "../components/contact/ContactDetails";
import MailForm from "../components/contact/MailForm";
import Layout from "../layouts/Layout";

export default function Contact() {
  return (
    <Layout title="Get in touch">
      <section className="vertical-padding pb-3">
        <div className="container mt-5">
          <h2 className="mb-2">Get in touch</h2>
          <div>Have a project on mind? Want to collaborate with us?</div>
          <div>
            Don&apos;t hesistate to contact us. Let&apos;s have a talk together.
          </div>

          <div className="row align-items-stretch h-100 mt-5">
            <MailForm />
            <div className="divider d-lg-none mt-5 w-100"></div>
            <ContactDetails />
          </div>
        </div>
      </section>
    </Layout>
  );
}
