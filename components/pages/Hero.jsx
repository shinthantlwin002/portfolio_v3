import { FlipWords } from '@/components/ui/flip-words';
import Navbar from '@/components/ui/Navbar';
import Image from 'next/image';
import { cn } from "@/lib/utils";
import {motion as m} from "framer-motion";

const Hero = () => {
    const words = ["shin thant lwin", "frontend developer"];
    return(
        <div className='bg-[#050922] md:h-screen'>
      <Navbar />

        <div className="container flex flex-col md:flex-row h-full pt-32 md:pt-10">
          
        {/* left content */}
        <div className='flex items-center gap-6 md:gap-10 w-full md:w-[60%]'>
          <div className='bg-[#D9D9D9] w-2 h-60 md:h-80 shadow-[0px_0px_20px_4px_rgba(200,221,235,1)] shadow-white rounded-full'></div>
          <div>
            <m.h1 className='text-white text-xl md:text-4xl font-regular mb-8 uppercase' initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0, duration:1}}>
              Transform Your Ideas into Stunning Digital Experiences <br /> With<FlipWords words={words}  className={cn('font-bold text-white')}/>
            </m.h1>
            <m.p className='text-[#D9D9D9] text-sm md:text-base mb-10' initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5, duration:1}}>
              I specialize in React and Next.js, creating dynamic, highly
              performant web applications tailored to your business needs.
            </m.p>
            <m.button className='bg-[#01B2F6] text-[#050922] px-3 py-2 rounded-md'  initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1, duration:1}}>
            <a
                href="/files/CV.pdf" 
                download="CV.pdf" 
            >
                Download CV
            </a>
            </m.button>
          </div>
        </div>
        {/* left content end */}

        {/* right content  */}
        <m.div className="w-full md:w-[40%] min-h-[500px] md:min-h-full relative" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5, duration:1}}>
          <Image src="/images/ellipse-hero.png" alt="ellipse" width="400" height="400" className="absolute top-20 right-0 md:right-10"/>
          <Image src="/images/shin.png" alt="shin thant lwin" width="500" height="500" className="absolute bottom-0 right-0" />
        </m.div>
        {/* right content end */}
        </div>
      </div>
    )
}

export default Hero