import "animate.css/animate.min.css";
import "antd/dist/antd.css";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { lazy, Suspense, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import "./App.css";
import "./assets/fonts/Inter-Black.ttf";
import "./assets/fonts/Inter-Bold.ttf";
import "./assets/fonts/Inter-ExtraBold.ttf";
import "./assets/fonts/Inter-ExtraLight.ttf";
import "./assets/fonts/Inter-Light.ttf";
import "./assets/fonts/Inter-Medium.ttf";
import "./assets/fonts/Inter-Regular.ttf";
import "./assets/fonts/Inter-SemiBold.ttf";
import "./assets/fonts/Inter-Thin.ttf";
import "./index.css";

const Desktop = lazy(() => import("./containers/desktop"));
const Mobile = lazy(() => import("./containers/mobile"));

function LandingPage() {
  useEffect(() => {
    Aos.init({ duration: 400 });
  }, []);

  const mediaSIze = useMediaQuery({
    query: "(min-width:600px)",
  });

  return (
    <Suspense fallback={<div></div>} className="landing-page-main">
      {mediaSIze ? <Desktop /> : <Mobile />}
    </Suspense>
  );
}

export default LandingPage;
