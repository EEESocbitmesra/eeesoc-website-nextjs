import { contacts } from "@/data/contact";
import ContactDetail from "./ContactDetail";

export default function ContactDetails() {
  return (
    <div className="col-span-5">
      <div>
        <h4 className="text-xl mb-4 md:text-2xl">Contact Info</h4>
        {contacts.map((contact) => (
          <ContactDetail key={contact.mobile} contact={contact} />
        ))}
      </div>

      <div className="mt-5 mt-lg-4">
        <h4 className="text-xl md:text-2xl">Contact Mail</h4>
        <a href="mailto:eeesoc@bitmesra.ac.in" className="text-purple">
          eeesoc@bitmesra.ac.in
        </a>
      </div>
    </div>
  );
}
