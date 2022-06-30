import { presidents } from "../../data/presidentsList";
import styles from "./Home.module.css";

export default function EEESoc() {
  return (
    <section className="d-flex vertical-padding flex-column">
      <h4 className="text-center fs-2">EEESoc</h4>

      <div className="mt-5 mx-auto w-md">
        <div className="row">
          <div className="col-lg-6">
            <h4 className="mb-3 text-purple text-center">How it all began?</h4>
            <p>
              EEESoc was established in the year 2013 to promote technical
              growth and overall development of the students of EEE department.
            </p>
            <p>
              The first president of the society was Jaivardhan Shivam under the
              patronage of Dr. T. Ghose and the faculty advisor Dr. R.C. Jha.
            </p>
          </div>

          <div className="col-lg-6 mt-5 mt-lg-0">
            <h4 className="text-purple text-center">Our Presidents</h4>
            <ul className={"mt-3 " + styles.squaredList}>
              {presidents.map((president) => (
                <li key={president.name + president.tenure}>
                  {president.tenure}: {president.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <h4 className="text-center fs-2 vertical-padding pb-0">Our Motive</h4>

      <div className="mt-5 mx-auto w-md">
        <div className="row">
          <div className="col-lg-6">
            <h4 className="text-purple text-center">
              For Academic Development
            </h4>
            <ul className={"mt-3 " + styles.squaredList}>
              <li>Project Programmes for 1st &amp; 2nd year students</li>
              <li>EEESoc Sessions</li>
              <li>Workshops</li>
            </ul>
          </div>

          <div className="col-lg-6 mt-5 mt-lg-0">
            <h4 className="text-purple text-center">
              For Personal Development
            </h4>
            <ul className={"mt-3 " + styles.squaredList}>
              <li>Interviews of final year students</li>
              <li>Pantheon &amp; Bitotsav Events</li>
              <li>Induction Programmes for new batches</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
