import { contacts } from "@/data/contact";
import ContactDetail from "./ContactDetail";

export default function ContactDetails() {
  return (
    <div className="col-span-12 mt-20 xl:ml-10 xl:mt-0 xl:col-span-5">
      <div>
        <h3 className="mb-4">Contact Info</h3>
        {contacts.map((contact) => (
          <ContactDetail key={contact.mobile} contact={contact} />
        ))}
      </div>

      <div className="mt-8 mt-lg-4">
        <h3>Contact Mail</h3>
        <a href="mailto:eeesoc@bitmesra.ac.in">eeesoc@bitmesra.ac.in</a>
      </div>
    </div>
  );
}
