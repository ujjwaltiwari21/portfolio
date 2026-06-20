import Hero from "./Hero"
import MarqueeSection from "./Marquee"
import Pros from "./Pros";
import Projects from "./Projects";
import Poster from "./Poster";
import Footer from "./Footer";
import BentoGrid from "./BentoGrid";
import Career from "./Career";
import Skills from "./Skills";
import Navbar from "./Navbar";

export default function Main(){
    return(
        <div>
            <Navbar/>
            <Hero/>
            <MarqueeSection/>
            <Pros/>
            <Projects/>
            <BentoGrid/>
            <Poster/>
            <Career/>
            <Skills/>
            <Footer/>
        </div>
    )
};