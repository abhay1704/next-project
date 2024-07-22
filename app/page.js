import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FullDevCycle from "../components/FullDevCycle";
import TopIndustries from "../components/TopIndustries";
import TopProjects from "../components/TopProjects";
import Contact from "../components/Contact";
import ApplicationStages from "../components/ApplicationStages";
import OurTeam from "../components/OurTeam";
// import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import LogosSection from "../components/LogosSection";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          User-Centric Excellence: Our App Development Services Tackles Your
          Points
        </title>
        <meta
          name="description"
          content="Experience a Seamless Digital Journey with Desum - Where Every Line of Code Resolves Your Challenges and Elevates Your App Experience to Unparalleled Heights"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="User-Centric Excellence: Our App Development Services Tackles Your Points"
        />
        <meta
          property="og:description"
          content="Experience a Seamless Digital Journey with Desum - Where Every Line of Code Resolves Your Challenges and Elevates Your App Experience to Unparalleled Heights"
        />
        <meta property="og:type" content="website" />
      </Head>
      <Header />
      <HeroSection />
      <LogosSection />
      <FullDevCycle />
      <TopIndustries />
      <TopProjects />
      <Contact />
      <ApplicationStages />
      <OurTeam />
      {/* <FAQ /> */}
      <Footer />
    </>
  );
}
