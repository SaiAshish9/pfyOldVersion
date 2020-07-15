import React, { Suspense, lazy } from "react";
import { useMediaQuery } from "react-responsive";

const Navbar = lazy(() =>
  import("../landingPage/components/mobile/Navbar")
);
const MFooter = lazy(() =>
  import("../landingPage/components/mobile/Footer")
);
const Footer = lazy(() =>
  import("../landingPage/components/desktop/Footer")
);



const Content = lazy(() => import("./Content"));

const Terms = () => {

      const mediaSIze = useMediaQuery({
        query: "(min-width:1000px)",
      });


  return (
    <React.Fragment>
      <Suspense fallback={<div></div>}>
      {!mediaSIze&&<Navbar/>}
        <Content />
        {mediaSIze?<Footer/>:<MFooter/>}
      </Suspense>
    </React.Fragment>
  );
};

export default Terms;
