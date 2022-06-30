export default function ContactDetail({
  name,
  mobile,
  designation,
  linkedinUrl,
}) {
  return (
    <div className="d-flex flex-column flex-lg-row gap-1 gap-lg-3 justify-content-center justify-content-lg-start mt-4 mt-lg-2">
      {/* LinkedinUrl, name and designation */}
      <div>
        <a
          className="link-primary"
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}{" "}
        </a>
        ({designation})
      </div>

      {/* Contact no */}
      <div className="ml-3">{mobile}</div>
    </div>
  );
}
