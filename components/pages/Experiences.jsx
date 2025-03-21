"use client";
import Image from "next/image";
import { motion as m } from "framer-motion";

const Experiences = () => {
  return (
    <div className="bg-[#050922] py-10 md:py-20 px-4 md:px-10 lg:px-20">
      <h1 className="uppercase text-2xl md:text-3xl font-medium md:font-semibold text-center mb-10 md:mb-20 text-[#FCFFFF]">
        Experiences
      </h1>

      <div>
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0, duration: 1 }}
          className="flex flex-col-reverse md:flex-row w-full mb-8 md:mb-4"
        >
          <div className="w-full">
            <h1 className="text-2xl font-semibold mb-1 text-start md:text-end text-[#FCFFFF]">
              Frontend Web Developer
            </h1>
            <h1 className="text-lg mb-4 text-start md:text-end text-[#D9D9D9]">
              Circles X
            </h1>
            <p className="text-start md:text-end text-[#D9D9D9] text-sm">
              As a frontend developer at Circles X, I build user friendly
              websites such as JPlus, PyaySar, CarSpa and several dashboards
              using React and Next JS. I worked closely with designers and
              backend developers to create seamless experiences for users. It's
              been a great learning experience in a supportive team environment.
            </p>
          </div>

          <div className="flex flex-col gap-2 items-center w-[10%] max-md:hidden">
            <Image
              src="/icons/check-circle-white.svg"
              alt="check-circle"
              width={30}
              height={30}
            />

            <hr className="h-[180px] border border-[#D9D9D9]" />
          </div>
          <div className="w-full">
            <div className="flex items-center">
              <Image
                src="/icons/arrow-fill-white.svg"
                alt="check-circle"
                width={10}
                height={10}
                className="rotate-180 max-md:hidden"
              />
              <div className="bg-[#D9D9D9] hover:bg-white text-[#050922] text-sm font-semibold w-fit px-2 py-1 mb-2 md:mb-0 rounded-md">
                2023 - 2024
              </div>
            </div>
          </div>
        </m.div>

        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="flex flex-col md:flex-row gap-2 md:gap-0 w-full mb-8 md:mb-4"
        >
          <div className="w-full">
            <div className="flex items-center justify-start md:justify-end">
              <div className="bg-[#D9D9D9] hover:bg-white text-[#050922] text-sm font-semibold w-fit px-2 py-1 mb-2 md:mb-0 rounded-md">
                2022 - 2023
              </div>
              <Image
                src="/icons/arrow-fill-white.svg"
                alt="check-circle"
                width={10}
                height={10}
                className="max-md:hidden"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center w-[10%] max-md:hidden">
            <Image
              src="/icons/check-circle-white.svg"
              alt="check circle white"
              width={30}
              height={30}
            />
            <hr className="h-[180px] border border-[#D9D9D9]" />
          </div>
          <div className="w-full">
            <h1 className="text-2xl font-semibold mb-1 text-start text-[#FCFFFF]">
              Frontend Web Developer
            </h1>
            <h1 className="text-lg mb-4 text-start text-[#D9D9D9]">
              MMS One Stop Solutions SWD Course Workshop
            </h1>
            <p className="text-start text-[#D9D9D9] text-sm">
              After completing the Frontend Web Development or SWD course, I
              teamed up with 3 Frontend Developers to work on total 4 projects,
              Hotale, Hotale Dashboard, Contact Dashboard and Team Portfolio
              with React and Tailwind CSS. These experiences enhanced my
              collaboration skills, technical proficiency, and understanding of
              project dynamics.
            </p>
          </div>
        </m.div>

        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="flex flex-col-reverse md:flex-row gap-2 md:gap-0 w-full mb-8 md:mb-4"
        >
          <div className="w-full">
            <h1 className="text-2xl font-semibold mb-1 text-start md:text-end text-[#FCFFFF]">
              Frontend Web Developer
            </h1>
            <h1 className="text-lg mb-4 text-start md:text-end text-[#D9D9D9]">
              Premio Plus Movie Streaming Platform
            </h1>
            <p className="text-start md:text-end text-[#D9D9D9] text-sm">
              In this collaborative endeavor, I had the privilege of working
              alongside with a Frontend Developer and a UI/UX designer. I was
              responsible for building interactive UI with Framer Motion
              animations and integrating TMDB API for real-time movie data.
              Through open communication and shared vision, we navigated
              challenges, refined ideas, and transformed concepts into reality.
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center w-[10%] max-md:hidden">
            <Image
              src="/icons/check-circle-white.svg"
              alt="check-circle"
              width={30}
              height={30}
            />
            <hr className="h-[180px] border border-[#D9D9D9]" />
          </div>
          <div className="w-full">
            <div className="flex items-center">
              <Image
                src="/icons/arrow-fill-white.svg"
                alt="arrow fill"
                width={10}
                height={10}
                className="rotate-180 max-md:hidden"
              />
              <div className="bg-[#D9D9D9] hover:bg-white text-[#050922] text-sm font-semibold w-fit px-2 py-1 mb-2 md:mb-0 rounded-md -ml-[1px]">
                2022 - 2023
              </div>
            </div>
          </div>
        </m.div>

        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="flex flex-col md:flex-row gap-2 md:gap-0 w-full mb-8 md:mb-4"
        >
          <div className="w-full">
            <div className="flex items-center justify-start md:justify-end">
              <div className="bg-[#D9D9D9] hover:bg-white text-[#050922] text-sm font-semibold w-fit px-2 py-1 mb-2 md:mb-0 rounded-md">
                2022 - 2023
              </div>
              <Image
                src="/icons/arrow-fill-white.svg"
                alt="check-circle"
                width={10}
                height={10}
                className="max-md:hidden"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center w-[10%] max-md:hidden">
            <Image
              src="/icons/check-circle-white.svg"
              alt="check circle white"
              width={30}
              height={30}
            />
            <hr className="h-[180px] border border-[#D9D9D9]" />
          </div>
          <div className="w-full">
            <h1 className="text-2xl font-semibold mb-1 text-start text-[#FCFFFF]">
              UI/UX Instructor
            </h1>
            <h1 className="text-lg mb-4 text-start text-[#D9D9D9]">
              Study Online Myanmar (SOM)
            </h1>
            <p className="text-start text-[#D9D9D9] text-sm">
              As an UI/UX instructor at SOM, I shared my expertise with eager
              learners, guide them in understanding design principles and
              user-centered thinking. I mentored students through 3 design
              projects to apply their skills.
            </p>
          </div>
        </m.div>

        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="flex flex-col-reverse md:flex-row gap-2 md:gap-0 w-full mb-8 md:mb-4"
        >
          <div className="w-full">
            <h1 className="text-2xl font-semibold mb-1 text-start md:text-end text-[#FCFFFF]">
              Fashion Design Assistant
            </h1>
            <h1 className="text-lg mb-4 text-start md:text-end text-[#D9D9D9]">
              Hikari Fashion
            </h1>
            <p className="text-start md:text-end text-[#D9D9D9]">
              As an assistant at Hikari Fashion, I assisted in designing and
              creating patterns for new collections. I helped the head designer
              showcase clothing, products, and other merchandise directly to
              consumers or retailers. I helped in hiring and coordinating
              sewers. I also participate in fittings, making necessary
              adjustments and minor alterations to ensure a perfect fit.
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center w-[10%] max-md:hidden">
            <Image
              src="/icons/check-circle-white.svg"
              alt="check-circle"
              width={30}
              height={30}
            />
            <hr className="h-[180px] border border-[#D9D9D9]" />
          </div>
          <div className="w-full">
            <div className="flex items-center">
              <Image
                src="/icons/arrow-fill-white.svg"
                alt="arrow fill"
                width={10}
                height={10}
                className="rotate-180 max-md:hidden"
              />
              <div className="bg-[#D9D9D9] hover:bg-white text-[#050922] text-sm font-semibold w-fit px-2 py-1 mb-2 md:mb-0 rounded-md -ml-[1px]">
                2021 - 2022
              </div>
            </div>
          </div>
        </m.div>
      </div>
    </div>
  );
};

export default Experiences;
