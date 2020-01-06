import React,{useRef} from "react";
import FrontBlock from "./frontBlock"
import StepIncluded from './stepIncluded';
import WhyItWork from './whyItWork';
import CompanyWhoTrust from './companyWhoTrust';
import Testimonial from './testimonial';
import Footer from './footer';

const Home = () => {
//   const myRef=useRef()

// const handleScroll=()=>{
//   myRef.current.scrollIntoView({behavior: 'smooth'})
// }

  return (
    <>
      <FrontBlock />
      <StepIncluded />
      <WhyItWork />
      <CompanyWhoTrust />
      <Testimonial />
      <Footer />
    </> 
  );
};

export default Home;