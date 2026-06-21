import Hero from "./Hero"
import MarqueeSection from "./Marquee"
import Pros from "./Pros";
import Projects from "./Projects";
import Poster from "./Poster";
import BentoGrid from "./BentoGrid";
import Career from "./Career";
import Skills from "./Skills";

export default function Main(){
    return(
        <div>
            <Hero/>
            <MarqueeSection/>
            <Pros/>
            <Projects/>
            <BentoGrid/>
            <Poster/>
            <Career/>
            <Skills/>
        </div>
    )
};