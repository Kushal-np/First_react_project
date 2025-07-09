import React from "react";
import MotherboardCard from "../../components/GridFeatures";
import LandingText from "../../components/Landing";
import Navbar from "../../components/Navbar";
import ProductJourney from "../../components/ProductJourney";
import ImageLanding from "../../components/Video";
import ProductTeams from "../../components/ProductTeams";
import ScalePictures from "../../components/Scalepictures";
import JoinPlatform from "../../components/Footer";

function HomeScreen() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* HERO + NAVBAR */}
      <div className="background_main min-h-screen w-full relative">
        <Navbar className="fixed" />
        <LandingText />
      </div>

      {/* VIDEO + PRODUCT FLOW */}
      <div className="relative z-10 w-full background_second_main">
        <ImageLanding />
        <ProductJourney />

        {/* GRID CARDS SECTION */}

      </div>
        <section className="h-auto min-h-screen background_third_main w-full flex flex-wrap justify-center items-center gap-6 px-4 py-16">
<MotherboardCard 
  title="Neural Sync" 
  details="Adaptive System Intelligence" 
  moreDetails="Seamlessly integrate hardware logic with cloud intelligence, delivering real-time feedback, control, and performance optimization at scale."
  imageUrl="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
/>

<MotherboardCard 
  title="Quantum Mesh" 
  details="Decentralized Device Network" 
  moreDetails="Enable autonomous communication between devices through a resilient mesh framework that self-heals and adapts under dynamic loads."
  imageUrl="https://images.pexels.com/photos/8919569/pexels-photo-8919569.jpeg"
/>

<MotherboardCard 
  title="CoreLink Engine" 
  details="Real-Time Protocol Fusion" 
  moreDetails="Synchronize diverse communication protocols into one cohesive control stream, reducing latency and boosting efficiency in mission-critical systems."
  imageUrl="https://images.pexels.com/photos/113850/pexels-photo-113850.jpeg"
/>

<MotherboardCard 
  title="Pulse Grid" 
  details="Intelligent Power Orchestration" 
  moreDetails="Manage energy flows across micro-modules with smart voltage mapping, real-time diagnostics, and predictive fault detection."
  imageUrl="https://images.pexels.com/photos/57007/pexels-photo-57007.jpeg"
/>


        </section>

        <div className="h-[100vh]w-full flex background_third_main ">
            <ProductTeams />
        </div>
        <div >
      <ScalePictures />
        </div>

        <div>
          <JoinPlatform />
        </div>
    </div>
  );
}

export default HomeScreen;
