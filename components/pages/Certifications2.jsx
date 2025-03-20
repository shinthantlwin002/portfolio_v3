"use client";
import Image from "next/image";
import { motion as m } from "framer-motion";

const Certifications = () => {
  return (
    <div className="bg-[#050922] py-10 md:py-20 px-4 md:px-10 lg:px-20">
      <h1 className="uppercase text-2xl md:text-[60px] font-medium md:font-semibold text-center mb-10 md:mb-20 text-[#FCFFFF]">
        Certifications
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
              Frontend Web Development (SWD)
            </h1>
            <h1 className="text-lg mb-4 text-start md:text-end text-[#D9D9D9]">
              MMS One Stop IT Solutions(MMSIT)
            </h1>
            <p className="text-start md:text-end text-[#D9D9D9]">
              MMSIT’s Fronted Development certification program offers a
              comprehensive curriculum covering HTML, CSS, JavaScript, and
              react, ensuring students are well prepared for employment in
              fronted development roles. with a focus on practical skills and
              real-world projects, students acquire the expertise needed to
              succeed in the industry upon completion of the program{" "}
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
                <a href="https://1drv.ms/i/c/e1567b3d30f0650e/EfC3kDRJQMhGnK1GGrqQnaUBHROi1ARa8koePDgGw30w5A?e=BN7qjK">
                  View Certificate
                </a>
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
                <a href="https://1drv.ms/b/c/e1567b3d30f0650e/EemQk1hRQ35Mo-WsU0nSeWkBE-NecWbtu-TqCWrsaA4_Yw?e=YfKgbw">
                  View Certificate
                </a>
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
              React JS
            </h1>
            <h1 className="text-lg mb-4 text-start text-[#D9D9D9]">Compass</h1>
            <p className="text-start text-[#D9D9D9]">
              Compass's Advanced ReactJS course delves deep into advanced
              concepts like state management, component patterns, and
              performance optimization. Students emerge proficient in leveraging
              React for complex projects, ready to excel in frontend development
              roles.
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
              UI/UX Design
            </h1>
            <h1 className="text-lg mb-4 text-start md:text-end text-[#D9D9D9]">
              Binary Digital Toolbox
            </h1>
            <p className="text-start md:text-end text-[#D9D9D9]">
              Completed a UI/UX Design Certification at Binary Digital Toolbox,
              where I developed a strong foundation in designing intuitive and
              user-centered interfaces. The program emphasized practical,
              hands-on experience, enabling me to master tools like Figma and
              Adobe XD while refining my skills in wireframing, prototyping, and
              user research. This certification enhanced my ability to create
              seamless user experiences and deliver visually appealing,
              functional designs that meet client needs effectively.
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
                <a href="https://1drv.ms/b/c/e1567b3d30f0650e/EVptJcGgqwNKs05KeqE_VG0B3zp-CAwe6UyE52YKAaKTvQ?e=GqGSSh">
                  View Certificate
                </a>
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
                <a href="https://1drv.ms/i/c/e1567b3d30f0650e/ESJL3YaAIEpGk_rrsIoFHZoBjRrSwKEX80cASWF2cXo7jg?e=1STSiB">
                  View Certificate
                </a>
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
              Chinese HSK Level 2
            </h1>
            <h1 className="text-lg mb-4 text-start text-[#D9D9D9]">
              Learn Chinese With Merry
            </h1>
            <p className="text-start text-[#D9D9D9]">
              I successfully achieved HSK 2, demonstrating the ability to
              communicate in basic Chinese for everyday situations. Gained
              proficiency in using approximately 300 common words and essential
              sentence structures to engage in simple conversations about daily
              activities, shopping, transportation, and personal interests.
              Developed skills in listening comprehension, reading short
              passages, and forming grammatically correct sentences.
              Strengthened pronunciation and fluency through pinyin practice
              while improving character recognition.
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
              Chinese Basic
            </h1>
            <h1 className="text-lg mb-4 text-start md:text-end text-[#D9D9D9]">
              Learn Chinese With Merry
            </h1>
            <p className="text-start md:text-end text-[#D9D9D9]">
              I completed a foundational Chinese language course, covering
              essential components such as stroke order, pinyin, basic grammar,
              and common vocabulary. Learned to recognize and write fundamental
              Chinese characters, improving reading and pronunciation skills. I
              gained proficiency in recognizing and writing fundamental Chinese
              characters while understanding their composition and meaning.
              Developed listening and speaking skills through practice
              exercises, improving pronunciation accuracy and conversational
              ability.
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
                <a href="https://1drv.ms/i/c/e1567b3d30f0650e/ESJL3YaAIEpGk_rrsIoFHZoBjRrSwKEX80cASWF2cXo7jg?e=aUaNtD">
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        </m.div>
      </div>
    </div>
  );
};

export default Certifications;
