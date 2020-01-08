import React,{useRef} from "react";
import FrontBlock from "./frontBlock"
import StepIncluded from './stepIncluded';
import WhyItWork from './whyItWork';
import WorkWeExecute from './workWeExecute';
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
      <WorkWeExecute />
      <Testimonial />
      <Footer />
    </> 
  );
};

export default Home;