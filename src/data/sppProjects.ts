import { IProjectProgram } from "@/types/types";

export const sppProjects: IProjectProgram = {
  type: "SPP",
  title: "Summer Project Program",
  description:
    "Summer project programme (in collaboration with Mathworks), being a 2 months programme, 2nd semester students are guided by EEESoc members to create basic projects which helps them to learn various tools like MATLAB, Arduino, Python, Enbedded C etc so that they can get acquainted with these tools and learn the very idea of approaching a problem statement and its challenges. This programme helps the students to get started with tools which can enhance their technical proficiency.",
  yearWiseProjects: [
    {
      year: 2019,
      projects: [
        {
          name: "OMR READER (DIP)",
          title: "OMR READER USING IMAGE PROCESSING",
          image: "/project_programs/spp2019/omr.png",
          description:
            "OMR sheets has been widely used across the globe for grading purpose it is a process of evaluating a human marked data from the documents such as survey, and test. This technology acts as a guiding tool or helping tool for processing large amount of data mainly questionnaires and multiple choice test. Today we come across various entrance exams that use the OMR technology. These exams are made up of MCQs. The exam taker has to fill the bubble or the box as an appropriate answer to the question. The following proposed system helps to scan the input sheets and display the corresponding results. Using various image processing techniques such as median filtering, RGB to Gray, edge detection, compliment of the image, the answers marked for each of the questions helps to evaluate the sheet and display the total marks. This system eliminates the installation of heavy machinery, and expensive scanners in return saving time and cost.",
          reportLink:
            "https://drive.google.com/file/d/0Bxa0GGPmDHUrTWg3ZzJjMHduVEh3Tm8tZ1N0TVEySGUwNWJN/view?usp=sharing",
        },
        {
          name: "Bluetooth Bot",
          title: "BLUETOOTH CONTROLLED BOT",
          image: "/project_programs/spp2019/bluetooth_bot.png",
          description:
            "A remote control vehicle is defined as any mobile device that is controlled by a means that does not restrict its motion with an origin external to the device. This is often a radio control device, cable between control and vehicle or an infrared or Bluetooth controller. A remote control vehicle (also known as RCV) is always controlled by a human and takes no positive action autonomously. It is vital that a vehicle should be capable of proceeding accurately to a target area; maneuvering within that area to fulfil its mission and returning equally accurately and safely to base. In this project we are using Bluetooth wireless technology to control our robot car which is a very simple communication system. The remote in this project is an Android device which has Bluetooth feature built-in. The user has to install an application on his/her mobile and turn on the Bluetooth in the mobile phone. User can perform various actions like moving Forward, Backward, Left and Right using commands that are sent from the android mobile. The Bluetooth is a serial communication medium though which we can connect two devices wirelessly. Here we have used a Bluetooth module in a robot car which gets connected to the phone Bluetooth, that allows us to communicate and allows to take command over it. The task of controlling the car is done by the Arduino UNO which houses the microcontroller ATMEGA32. Arduino has played a major role in the robotic section and has made it easier to convert digital and analog signal to physical movements. The project is Bluetooth based because it gives us a wider range of control and more efficiency. It also gives us the advantage of changing the remote anytime, meaning that we can use any android devices including, phones, tablets, computers. Physical barriers like walls, doors, etc. do not effect in controlling the car.",
          reportLink:
            "https://drive.google.com/file/d/0Bxa0GGPmDHUrbEJjbFZuaFNmaURuS1hESlhwTWRPa1U3dU1B/view?usp=sharing",
        },
        {
          name: "Home Automation",
          title: "HOME AUTOMATION USING MATLAB",
          image: "/project_programs/spp2019/home_automation.png",
          description:
            "Automation performs an increasingly vital role in daily experience and global economy. Engineers strive to combine automated devices with mathematical and organizational tools to create complex systems for a rapidly expanding range of applications and human activities.The concept of home automation has been around since the late 1970s. But with the enhancement of technology and smart services, people’s expectations have changed a lot during the course of time to perfectly turn the traditional house into smart home, and also think that what a home should do or how the services should be provided and accessed at home to became a smart home and so has the idea of home automation systems. If we look at different home automation systems over time, they have always tried to provide efficient, convenient, and safe ways for home inhabitants to access their homes. Regardless of the change in user’s hope, growing technology, or change of time, the appearance of a home automation system has remained the same. Many existing, well- established home automation systems are based on wired communication such as Arduino based and raspberry pi based home automation systems. This does not pose a problem until the system is planned well in advance and installed during the physical construction of the building. But for already existing buildings the implementation cost goes very high. In contrast, Wireless systems can be of great help for automation systems like Bluetooth, Wi-Fi and IOT based home automation systems. With the advancement of wireless technologies such as Wi-Fi, cloud networks in the recent past, wireless systems are used every day and everywhere.",
          reportLink:
            "https://drive.google.com/file/d/0Bxa0GGPmDHUrYzlSVUduLWRJSUc4VlBqOFllY0tNLUdhMTVV/view?usp=sharing",
        },
      ],
    },
  ],
};
