import Hero from "./Hero"
import MarqueeSection from "./Marquee"
import Pros from "./Pros";
import Projects from "./Projects";
import Poster from "./Poster";
import Footer from "./Footer";
// import BentoGrid from "./BentoGrid";

export default function Main(){
    return(
        <div>
            <Hero/>
            <MarqueeSection/>
            <Pros/>
            <Projects/>
            {/* <BentoGrid/> */}
            <Poster/>
            <Footer/>
        </div>
    )
};