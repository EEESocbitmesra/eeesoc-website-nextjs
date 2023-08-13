import { presidents } from "@/data/presidentsList";

export default function EEESoc() {
  return (
    <section className="flex w-5/6 md:w-4/5 mx-auto flex-col items-center mt-20">
      <h2 className="text-2xl md:text-3xl">EEESoc</h2>

      <div className="grid mt-8 w-full grid-cols-2">
        <div className="col-span-2 md:col-span-1 flex flex-col items-center">
          <h3 className="text-xl md:text-2xl text-purple">How it all began?</h3>
          <p className="mt-4">
            EEESoc was established in the year 2013 to promote technical growth
            and overall development of the students of EEE department.
          </p>
          <p className="mt-4">
            The first president of the society was Jaivardhan Shivam under the
            patronage of Dr. T. Ghose and the faculty advisor Dr. R.C. Jha.
          </p>
        </div>
        <div className="col-span-2 md:col-span-1 flex flex-col items-center">
          <h3 className="text-xl md:text-2xl text-purple mt-8 md:mt-0">
            Our Presidents
          </h3>
          <ul className="mt-4 list-square">
            {presidents.map((president) => (
              <li key={president.name}>
                {president.tenure}: {president.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h2 className="text-2xl md:text-3xl mt-24">Our Motive</h2>

      <div className="grid mt-8 w-full grid-cols-2">
        <div className="col-span-2 md:col-span-1 flex flex-col items-center">
          <h3 className="text-xl md:text-2xl text-purple">
            For Academic Development
          </h3>
          <ul className="list-square mt-4">
            <li>Project Programs for first and second year students</li>
            <li>EEESoc Sessions</li>
            <li>Workshops</li>
          </ul>
        </div>
        <div className="col-span-2 mt-8 md:mt-0 md:col-span-1 flex flex-col items-center">
          <h3 className="text-xl md:text-2xl text-purple">
            For Personal Development
          </h3>
          <ul className="mt-4 list-square">
            <li>Interviews of final year students</li>
            <li>Pantheon & Bitotsav Events</li>
            <li>Induction programs for new batches</li>
          </ul>
        </div>
      </div>
    </section>
  );

  // return (
  //   <section className="d-flex vertical-padding flex-column">
  //     <h4 className="text-center fs-2">EEESoc</h4>

  //     <div className="mt-5 mx-auto w-md">
  //       <div className="row">
  //         <div className="col-lg-6">
  //           <h4 className="mb-3 text-purple text-center">How it all began?</h4>
  //           <p>
  //             EEESoc was established in the year 2013 to promote technical
  //             growth and overall development of the students of EEE department.
  //           </p>
  //           <p>
  //             The first president of the society was Jaivardhan Shivam under the
  //             patronage of Dr. T. Ghose and the faculty advisor Dr. R.C. Jha.
  //           </p>
  //         </div>

  //         <div className="col-lg-6 mt-5 mt-lg-0">
  //           <h4 className="text-purple text-center">Our Presidents</h4>
  //           <ul className={"mt-3 " + styles.squaredList}>
  //             {presidents.map((president) => (
  //               <li key={president.name + president.tenure}>
  //                 {president.tenure}: {president.name}
  //               </li>
  //             ))}
  //           </ul>
  //         </div>
  //       </div>
  //     </div>

  //     <h4 className="text-center fs-2 vertical-padding pb-0">Our Motive</h4>

  //     <div className="mt-5 mx-auto w-md">
  //       <div className="row">
  //         <div className="col-lg-6">
  //           <h4 className="text-purple text-center">
  //             For Academic Development
  //           </h4>
  //           <ul className={"mt-3 " + styles.squaredList}>
  //             <li>Project Programmes for 1st &amp; 2nd year students</li>
  //             <li>EEESoc Sessions</li>
  //             <li>Workshops</li>
  //           </ul>
  //         </div>

  //         <div className="col-lg-6 mt-5 mt-lg-0">
  //           <h4 className="text-purple text-center">
  //             For Personal Development
  //           </h4>
  //           <ul className={"mt-3 " + styles.squaredList}>
  //             <li>Interviews of final year students</li>
  //             <li>Pantheon &amp; Bitotsav Events</li>
  //             <li>Induction Programmes for new batches</li>
  //           </ul>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );
}
