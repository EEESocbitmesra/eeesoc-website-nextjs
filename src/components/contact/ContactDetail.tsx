import { Contact } from "@/types/types";

interface Props {
  contact: Contact;
}

export default function ContactDetail({ contact }: Props) {
  return (
    <div className="flex flex-col mb-4">
      <span>
        <a
          className="text-purple hover:underline"
          href={contact.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {contact.name}
        </a>{" "}
        ({contact.designation})
      </span>
      <div className="text-sm text-neutral-600">{contact.mobile}</div>
    </div>
  );
}
