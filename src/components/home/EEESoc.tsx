import { presidents } from "@/data/presidentsList";

export default function EEESoc() {
  return (
    <section className="wrapper">
      <h2>EEESoc</h2>

      <div className="grid w-full grid-cols-2 mt-8">
        <div className="flex flex-col items-center col-span-2 md:col-span-1">
          <h3 className="text-purple">How it all began?</h3>
          <p className="mt-4">
            EEESoc was established in the year 2013 to promote technical growth
            and overall development of the students of EEE department.
          </p>
          <p className="mt-4">
            The first president of the society was Jaivardhan Shivam under the
            patronage of Dr. T. Ghose and the faculty advisor Dr. R.C. Jha.
          </p>
        </div>
        <div className="flex flex-col items-center col-span-2 md:col-span-1">
          <h3 className="mt-8 text-purple md:mt-0">Our Presidents</h3>
          <ul className="mt-4 list-square">
            {presidents.map((president) => (
              <li key={president.name}>
                {president.tenure}: {president.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h2 className="mt-24">Our Motive</h2>

      <div className="grid w-full grid-cols-2 mt-8">
        <div className="flex flex-col items-center col-span-2 md:col-span-1">
          <h3 className="text-purple">For Academic Development</h3>
          <ul className="mt-4 list-square">
            <li>Project Programs for first and second year students</li>
            <li>EEESoc Sessions</li>
            <li>Workshops</li>
          </ul>
        </div>
        <div className="flex flex-col items-center col-span-2 mt-8 md:mt-0 md:col-span-1">
          <h3 className="text-purple">For Personal Development</h3>
          <ul className="mt-4 list-square">
            <li>Interviews of final year students</li>
            <li>Pantheon & Bitotsav Events</li>
            <li>Induction programs for new batches</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
