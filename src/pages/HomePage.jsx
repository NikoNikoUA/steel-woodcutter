import { AboutUs } from "../components/HomePage/AboutUs/AboutUs";
import { ContactUs } from "../components/HomePage/ContactUs/ContactUs";
import { Hero } from "../components/HomePage/Hero/Hero";
import { OurWorks } from "../components/HomePage/OurWorks/OurWorks";
import { WhatWeDo } from "../components/HomePage/WhatWeDo/WhatWeDo";

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <WhatWeDo />
      <OurWorks />
      <ContactUs />
    </>
  );
};

export default HomePage;
