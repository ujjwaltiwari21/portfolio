import Hero from "./Hero"
import MarqueeSection from "./Marquee"
import Pros from "./Pros";
import Projects from "./Projects";
import BentoGrid from "./BentoGrid";

export default function Main(){
    return(
        <div>
            <Hero/>
            <MarqueeSection/>
            <Pros/>
            <Projects/>
            <BentoGrid/>
        </div>
    )
};