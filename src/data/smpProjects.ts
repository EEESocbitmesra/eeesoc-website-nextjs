import { IProjectProgram } from "@/types/types";

export const smpProjects: IProjectProgram = {
  type: "SMP",
  title: "Student Mentorship Program",
  description:
    "Student Mentorship Programme (in collaboration with Mathworks) is a technical and creative project programme, spanned over 5 months that delves into different domains of Electrical and Electronics Engineering. The project covers major fields like power electronics & drives, neutral network , IOT , cloud computing, digital image processing & computer vision, embedded systems, power systems, machine learning & artificial intelligence etc.",
  yearWiseProjects: [
    {
      year: 2019,
      projects: [
        {
          name: "OCR",
          title: "OPTICAL CHARACTER RECOGNITION",
          image: "/project_programs/smp2019/ocr.png",
          description:
            "The main aim of the project is to design and develop an OPTICAL CHARACTER READER(OCR) to convert any non–editable text based file(.jpeg, .png, .tif) to a editable form by using Tesseract-OCR engine, OpenCV and python. Image processing techniques like de-skewing, layout analysis, Morphological Operations etc. are used to process the input image to a desired output to be processed by Tesseract. The Optical Character Reader was completed in four stages which includes conversion of .pdf file to .jpeg format, pre-processing the input image to improve accuracy of the Tesseract-OCR engine, character recognition by the Tesseract-OCR Engine and finally writing the output text in notepad or word file. For this project, input images, which were scanned pages of a novel, were pre- processed using various image processing techniques to obtain an output in which the text could be efficiently and accurately recognised by the Tesseract-OCR engine. The recognized text were then written in notepad. The overall efficiency of this Optical Character Reader was found to be 95%.",

          reportLink:
            "https://drive.google.com/file/d/1oK9meF6OxyIdMXv-DhOO9ZnoSQwdkC4U/view?usp=sharing",
        },
        {
          name: "APFC",
          title: "AUTOMATIC POWER FACTOR CORRECTION",
          image: "/project_programs/smp2019/hitesh.jpg",
          description:
            "To design of an automatic power factor correction (APFC) system for single-phase domestic loads. The proposed design uses an electro-mechanical relay to switch the capacitor banks in order to correct the power factor of inductive loads. The switching of relays is controlled by an Arduino board. The Arduino is programmed to non-stop monitor and calculate the power factor of the connecting load by sensing the signal from CT, PT and Zero Cross Detectors (ZCDs), and keep the power factor of the load above the reference value (0.9) by appropriately energizing the capacitors in parallel to the connecting load through relay switching. The values of power factor along with the current and voltage before and after improvement is displayed on LCD. The hardware prototype of the proposed APFC design is also developed to validate its operation. The satisfactory and acceptable results of the APFC system testing have confirmed that the suggested design yields a reliable output and can be further used in any single phase practical application to ensure the power factor close to unity.",
          reportLink: null,
        },
        {
          name: "Power Saving Mechanism For Street Light",
          title: "POWER SAVING MECHANISM FOR STREET LIGHT",
          image: "/project_programs/smp2019/street_light.png",
          description:
            "This project intends to develop a controlling operation of street lights in Real Time Application, which enables Operation in Bright and Dim Mode. Depending upon the Light Intensity this Street lights Can be turned ON and OFF or Dim and Bright. In this project, mechanism used to control street lights with Automatic Dim-Bright control by using LDR and PIR sensor. PIC Microcontroller is used for Controlling and enhancing all the operations. When any Human Being or Any vehicle is Detected then PIR will send command to Microcontroller, then Particular street light will be turned bright as compared to others.",
          reportLink: null,
        },
      ],
    },
    {
      year: 2021,
      projects: [
        {
          name: "SMART ENERGY METER WITH HOME AUTOMATION",
          title: "SMART ENERGY METER WITH HOME AUTOMATION",
          image: "/project_programs/smp2021/smart_energy_meter.jpg",
          description:
            "High energy consumption by our household appliances is quite a challenge for consumers. All the efforts in trying to control and avoid power wastage for the entire month goes in vain ,as the bill shows up. Smart energy meter is a next generation meter which is highly efficient and user friendly, which provides a great way to save and control the usage of energy. The smart meter is wirelessly connected to users by the means of IoT. Along with this, it integrates home automation to connect appliances wirelessly.",
          githubLink:
            "https://github.com/Setika-Raj/Smart-Energy-Meter-with-Home-Automation",
          demoLink: "https://www.youtube.com/watch?v=036s2Dgk7Kw",
          reportLink:
            "https://drive.google.com/file/d/1aIS08deAQa_Q41OBiwsMSdvKmjjFnfLL/view?usp=sharing",
        },
        {
          name: "ONLINE CODE EDITOR",
          title: "ONLINE CODE EDITOR",
          image: "/project_programs/smp2021/programming_input.png",
          description:
            "The aim of this project is to build an online code editor using ReactJS. ReactJS is an open-source, component-based front end library responsible only for the view layer of the application. In this project, the user chooses any language or mode – C, C++, Java, Python and web technologies, to code. The user then writes the code in the selected language and then they can compile the code and see the output of the code. The compilation of the code is done in the backend server built with NodeJS and ExpressJS. There, the JDoodle API is used that returns an output object of the code after providing appropriate input. The package used to render text editors in this project is the React-ace package from the NPM packages. It comes with various themes that also makes the editor in this project customizable. Settings such as font family, font size, wrap enabled, etc., are also included in this editor.",
          githubLink: "https://github.com/ankitk26/ReactPen",
          demoLink: "https://next-pen.vercel.app/",
          reportLink:
            "https://drive.google.com/file/d/1_M6hfLvIyN91e6qTzROD3yk_hyXT2e8n/view?usp=sharing",
        },
      ],
    },
    {
      year: 2022,
      projects: [
        {
          name: "STOCK MARKET PREDICTOR",
          title: "STOCK MARKET PREDICTOR",
          image: "/project_programs/smp2022/stock_market_predictor.JPG",
          description:
            "Ztockify is a stock market prediction web application.It is trained using Long Short Term Memory(LSTMs) on past 200 days stock to predict next 50 days stock prices. The frontend is built using Streamlit. This can help individuals and institutions speculate on the stock price trend and help them decide whether to buy or short the stock price to maximize their profit.",
          githubLink: "https://github.com/Ayushmandutta997/Ztockify",
          demoLink: "https://ztockify.herokuapp.com/",
          reportLink:
            "https://drive.google.com/file/d/1KAszdjcqvEpEYhPHcG2vcvpUTtxYIX8v/view",
        },
        {
          name: "SKILL HUB",
          title: "SKILL HUB",
          image: "/project_programs/smp2022/skill_hub.png",
          description:
            "The project is a mobile application developed in Flutter using Dart as a programming language, wireframe as UI and Firestore as backend server. This app can be operated in both iOS and Android. The idea of the project is as an intra-organizational employment-oriented service that operates via mobile apps. The organisation that we have used as a test case is BIT Mesra, however, it can be oriented towards any other organisation as well. The main goal is to bring convenience to freelancers and startups by hiring people from within the community from where they are based. The app can be handy to foster the experience of networking to those who have no prior industry experience and also to those looking for a cost competitive employability from within their organizational structure.",
          githubLink: "https://github.com/bodhi996/Skill-Hub",
          reportLink:
            "https://drive.google.com/file/d/1_ltgguF_B_mx6nVkHiMX6z0RQnwI8Nku/view?usp=sharing",
        },
      ],
    },
  ],
};
