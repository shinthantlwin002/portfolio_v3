import { User2, CalendarDays, CircleCheckBig } from "lucide-react";
import { motion as m } from "framer-motion";

const About = () => {
  return (
    <div className="bg-[#050922]">
      <div className="flex flex-col-reverse md:flex-row items-center gap-20 container mx-auto py-20">
        {/* left content */}
        <div>
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0, duration: 1 }}
            className="flex items-center gap-2 mb-8"
          >
            <div className="bg-[#D9D9D9] w-1 h-6 md:h-10 shadow-[0px_0px_20px_4px_rgba(200,221,235,1)] shadow-white rounded-full"></div>
            <h1 className="text-white text-lg md:text-xl lg:text-3xl font-semibold uppercase">
              About me
            </h1>
          </m.div>
          <m.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 1 }}
            className="text-white text-sm md:text-base lg:text-xl font-medium mb-8 uppercase"
          >
            Hello, I am Shin Thant lwin
          </m.h1>

          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="flex flex-wrap gap-4 md:gap-6 lg:gap-10 mb-8 md:mb-12"
          >
            <div className="flex items-center gap-2">
              <User2 color="#329EEB" size={24} />
              <div>
                <p className="text-white text-sm md:text-md font-medium uppercase">
                  Age
                </p>
                <p className="text-white text-xs md:text-sm">20 Years</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <CalendarDays color="#E95CFF" size={24} />
              <div>
                <p className="text-white text-sm md:text-md font-medium uppercase">
                  Experience
                </p>
                <p className="text-white text-xs md:text-sm">2+ Years</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <CircleCheckBig color="#00FF55" size={24} />
              <div>
                <p className="text-white text-sm md:text-md font-medium uppercase">
                  Projects Completed
                </p>
                <p className="text-white text-xs md:text-sm">30 ++</p>
              </div>
            </div>
          </m.div>

          <m.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-xs md:text-sm font-light text-white mb-2 md:mb-4"
          >
            {" "}
            I'm a Fullstack developer specializing in Next.js, React.js, and PHP
            Laravel. A native Burmese speaker, fluent in English, with basic
            Chinese skills, I began my web development journey in 2022. Over the
            past two years, I’ve worked on 30+ projects, including admin
            dashboards, job seeker platforms, invoicing systems, and
            entertainment websites.
          </m.p>
          <m.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-xs md:text-sm font-light text-white mb-2 md:mb-4"
          >
            I specialize in building responsive, user-friendly web applications
            using React, Next.js, Tailwind CSS, and Fullstack frameworks like
            ShadCN, Material UI, and Framer Motion. On the backend, I leverage
            PHP Laravel to create scalable and efficient server-side solutions.
            Additionally, I work with various Fullstack tools and libraries to
            enhance functionality and design.
          </m.p>
          <m.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-xs md:text-sm font-light text-white mb-6 md:mb-8"
          >
            I’m passionate about crafting intuitive UIs, optimizing performance,
            and solving complex Fullstack challenges. If you're looking for a
            developer with experience in both frontend and backend development,
            feel free to get in touch!
          </m.p>

          <m.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="bg-[#01B2F6] text-[#050922] uppercase text-sm md:text-base font-medium px-3 py-2 rounded-md"
          >
            <a href="#contact">Hire me</a>
          </m.button>
        </div>
        {/* left content end */}

        {/* right content */}
        <m.img
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            delay: 0.4,
            duration: 1,
            stiffness: 20,
            type: "spring",
          }}
          src="images/shin-2.png"
          className="w-[200px] h-[200px] md:w-[350px] md:h-[350px] object-cover"
        />
        {/* right content end */}
      </div>
    </div>
  );
};

export default About;
