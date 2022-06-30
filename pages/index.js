import AboutEEE from "../components/home/AboutEEE";
import Banner from "../components/home/Banner";
import EEESoc from "../components/home/EEESoc";
import ExecutiveBody from "../components/home/ExecutiveBody";
import Mentors from "../components/home/Mentors";
import Layout from "../layouts/Layout";

export default function Home() {
  return (
    <Layout title="EEESoc BIT Mesra">
      <Banner />
      <AboutEEE />
      <EEESoc />
      <Mentors />
      <ExecutiveBody />
    </Layout>
  );
}
