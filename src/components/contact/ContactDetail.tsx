import { Contact } from "@/types/types";

interface Props {
  contact: Contact;
}

export default function ContactDetail({ contact }: Props) {
  return (
    <div className="flex flex-col mb-4">
      {/* LinkedinUrl, name and designation */}
      <span>
        <a
          className="link-primary"
          href={contact.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {contact.name}{" "}
        </a>
        ({contact.designation}){/* Contact no */}
      </span>
      <div className="text-neutral-600">{contact.mobile}</div>
    </div>
  );
}
