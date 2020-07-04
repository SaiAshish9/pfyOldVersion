import React,{Suspense, lazy} from 'react'
const GetStarted =lazy(() =>import('../../components/mobile/GetStarted'))
const Navbar =lazy(() =>import("../../components/mobile/Navbar"))
const Tasks=lazy(()=>import("../../components/mobile/Tasks"))
const Section3=lazy(()=>import("../../components/mobile/Section3"))
const Experience=lazy(()=>import("../../components/mobile/Experience"))
const Badges=lazy(()=>import("../../components/mobile/Badges"))
const JoinUs=lazy(()=>import("../../components/mobile/JoinUs"))
const Footer=lazy(()=>import("../../components/mobile/Footer"))

const Mobile= () => {
    return (
      <Suspense fallback={<div></div>}>
        <div style={{overflowX: 'hidden'}}>
            <Navbar />
            <GetStarted/>
            <Tasks/>
            <Section3/>
            <Experience />
            <Badges />
            <JoinUs/>
            <Footer />
        </div>
      </Suspense>
    );
}

export default Mobile