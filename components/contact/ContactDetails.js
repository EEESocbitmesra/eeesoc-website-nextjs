import { currentPresident } from "../../data/currentPresident";
import ContactDetail from "./ContactDetail";

export default function ContactDetails() {
  return (
    <div className="text-center text-lg-start mt-5 col-lg-5 mt-lg-0">
      <div>
        <h4>Address</h4>
        <address className="mb-3">
          Department of Electrical and Electronics Engineering,
          <br />
          Birla Institute of Technology, Mesra
          <br />
          Ranchi, Jharkhand.
          <br />
          Pin Code - 835215.
        </address>
      </div>

      <div className="mt-5 mt-lg-4">
        <h4>Contact Info</h4>

        <ContactDetail
          name={currentPresident.name}
          linkedinUrl={currentPresident.linkedinUrl}
          designation="President"
          mobile={currentPresident.mobile}
        />

        <ContactDetail
          name="Ankit Kumar"
          linkedinUrl="https://www.linkedin.com/in/ankit-kumar-3a93b5196/"
          designation="Website Developer"
          mobile="+91 9723750157"
        />
      </div>

      <div className="mt-5 mt-lg-4">
        <h4>Contact Mail</h4>
        <p className="mb-3">eeesoc@bitmesra.ac.in</p>
      </div>
    </div>
  );
}
