"use client";

import Image from "next/image";
import { Motion, slideInBottom, slideInLeft, slideInRight } from "@/animations";

const WorkspaceSolution: React.FC = () => {
  return (
    <section>
      <div className="workspace-bg relative w-full h-[80vh] md:h-[75vh] lg:h-[72vh] overflow-hidden flex items-center justify-center text-center">
        <Motion
          as="h1"
          variants={slideInBottom}
          className="sangBlue-font text-white text-[60px] md:leading-loose lg:text-[65px]"
        >
          Workspace Solutions
        </Motion>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <div className="w-full flex flex-col md:flex-row-reverse items-center gap-10 mt-16 md:mt-28">
          <div className="md:w-[46%] space-y-6">
            <div>
              <Motion
                as={"h2"}
                variants={slideInBottom}
                className="sangBlue-font text-[40px] leading-tight mb-4"
              >
                Digital Signage
              </Motion>

              <Motion
                as={"p"}
                variants={slideInBottom}
                className="text-[17px] leading-loose"
              >
                Our workplace solutions leverage technology to optimize and
                enhance productivity in the workplace. By integrating various
                devices, systems, and software, these solutions create a
                connected and intelligent environment. They offer a range of
                benefits, including increased efficiency, improved
                collaboration, and enhanced comfort.
              </Motion>
            </div>

            <div>
              <Motion
                as={"h3"}
                variants={slideInBottom}
                className="sangBlue-font text-xl md:text-2xl mb-4 leading-tight"
              >
                One touch experience
              </Motion>
              <Motion
                as={"p"}
                variants={slideInBottom}
                className="text-[17px] leading-loose"
              >
                One key aspect of smart office solutions is automation. They
                automate routine tasks like adjusting lighting, controlling
                temperature, and managing energy usage. This not only saves time
                but also reduces energy costs and promotes sustainability. For
                example, motion sensors can detect occupancy and adjust lighting
                and HVAC systems accordingly, ensuring optimal comfort and
                energy efficiency.
              </Motion>
            </div>
          </div>

          <Motion
            as={"div"}
            variants={slideInBottom}
            className="w-full md:w-[50%] h-full rounded-xl overflow-hidden"
          >
            <Image
              src="/images/Workspace-2.webp"
              alt="Residential Solutions"
              unoptimized
              width={400}
              height={100}
              className="w-full h-full object-cover"
            />
          </Motion>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 my-16 md:my-28">
          <div className="md:w-[47%]">
            <Motion
              as={"h2"}
              variants={slideInLeft}
              className="sangBlue-font text-[40px] leading-tight mb-4"
            >
              Audio Visual solutions
            </Motion>
            <Motion
              as={"p"}
              variants={slideInBottom}
              className="text-[17px] leading-loose"
            >
              Collaboration is another area where smart office solutions excel.
              They enable seamless communication and information sharing among
              employees, regardless of their location. Video conferencing,
              instant messaging, and shared virtual workspaces foster real-time
              collaboration and teamwork. Additionally, smart whiteboards,
              interactive displays, and smart projectors enhance presentation
              capabilities, making meetings more interactive and engaging.
            </Motion>
          </div>
          <Motion
            as={"div"}
            variants={slideInBottom}
            className="w-full md:w-[50%] h-full rounded-xl overflow-hidden"
          >
            <Image
              src="/images/Workspace-3.webp"
              alt="Residential Solutions"
              unoptimized
              width={400}
              height={100}
              className="w-full h-full object-cover"
            />
          </Motion>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-10 mb-16 md:mb-28">
          <div className="md:w-[47%]">
            <Motion
              as={"h2"}
              variants={slideInRight}
              className="sangBlue-font text-[40px] leading-tight mb-4"
            >
              Security and Access control
            </Motion>
            <Motion
              as={"p"}
              variants={slideInBottom}
              className="text-[17px] leading-loose"
            >
              Furthermore, smart office solutions enhance security and access
              control. Advanced authentication methods such as biometric
              identification and smart card systems ensure only authorized
              personnel can access sensitive areas. Additionally, smart
              surveillance systems with video analytics provide real-time
              monitoring, alerts, and deterrence against potential security
              threats.
            </Motion>
          </div>
          <Motion
            as={"div"}
            variants={slideInBottom}
            className="w-full md:w-[50%] h-full rounded-xl overflow-hidden"
          >
            <Image
              src="/images/Workspace-4.webp"
              alt="Residential Solutions"
              unoptimized
              width={400}
              height={100}
              className="w-full h-full object-cover"
            />
          </Motion>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
          <div className="md:w-[47%]">
            <Motion
              as={"h2"}
              variants={slideInLeft}
              className="sangBlue-font text-[40px] leading-tight mb-4"
            >
              Small to large meeting rooms
            </Motion>
            <Motion
              as={"p"}
              variants={slideInBottom}
              className="text-[17px] leading-loose"
            >
              Overall, smart office solutions revolutionize the modern workplace
              by creating an intelligent ecosystem that maximizes efficiency,
              promotes collaboration, enhances security, and enables data-driven
              decision-making. With their ability to streamline operations and
              create a more productive and comfortable environment, they are
              becoming increasingly essential for organizations seeking to stay
              ahead in today’s competitive business landscape.
            </Motion>
          </div>
          <Motion
            as={"div"}
            variants={slideInRight}
            className="w-full md:w-[50%] h-full rounded-xl overflow-hidden"
          >
            <Image
              src="/images/Workspace-5.webp"
              alt="Residential Solutions"
              unoptimized
              width={400}
              height={100}
              className="w-full h-full object-cover"
            />
          </Motion>
        </div>
      </div>
    </section>
  );
};

export default WorkspaceSolution;
