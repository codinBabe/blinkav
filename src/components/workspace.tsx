"use client";

import Image from "next/image";
import { Motion, slideInBottom, slideInLeft, slideInRight } from "@/animations";

const WorkspaceSolution = () => {
  return (
    <section>
      <div className="relative w-full h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/images/orange-room.jpg"
          alt="a beautiful smart home"
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40 z-0" />
        <Motion
          as="h1"
          variants={slideInBottom}
          className="relative z-10 font-klav-bold text-white text-[60px] lg:text-[65px] px-4"
        >
          Workspace Solutions
        </Motion>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 md:px-8 space-y-16 md:space-y-28">
        <div className="w-full flex flex-col md:flex-row-reverse items-center gap-10 md:gap-20">
          <div className="md:w-[50%] space-y-6">
            <div>
              <Motion
                as={"h2"}
                variants={slideInBottom}
                className="font-klav-bold text-[40px] leading-tight mb-4"
              >
                Video Conferencing
              </Motion>

              <Motion
                as={"p"}
                variants={slideInBottom}
                className="text-[17px] leading-loose"
              >
                We design and deploy state-of-the-art video conferencing systems
                tailored to your business needs.From huddle rooms to large
                boardrooms, we integrate high- quality cameras, microphones,
                displays, and cloud platforms like Zoom, Microsoft Teams, and
                Google Meet—ensuring crystal - clear communication, seamless
                collaboration, and a professional meeting experience every time.
              </Motion>
            </div>
          </div>

          <Motion
            as={"div"}
            variants={slideInBottom}
            className="w-full md:w-[50%] h-full rounded-xl overflow-hidden"
          >
            <Image
              src="/images/Commercial service 1.jpeg"
              alt="Residential Solutions"
              unoptimized
              width={400}
              height={100}
              className="w-full h-full md:h-96 object-cover"
            />
          </Motion>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
          <div className="md:w-[50%]">
            <Motion
              as={"h2"}
              variants={slideInLeft}
              className="font-klav-bold text-[40px] leading-tight mb-4"
            >
              Network Infrastructure
            </Motion>
            <Motion
              as={"p"}
              variants={slideInBottom}
              className="text-[17px] leading-loose"
            >
              BlinkAV delivers high-performance network and internet
              infrastructure tailored for commercial environments.We deploy
              enterprise- grade firewalls, switches, structured cabling, and
              seamless Wi - Fi systems to support VoIP, video conferencing,
              security, and business - critical applications.Our solutions
              ensure secure, reliable, and scalable connectivity—built to handle
              the demands of modern offices, retail, and corporate spaces.
            </Motion>
          </div>
          <Motion
            as={"div"}
            variants={slideInBottom}
            className="w-full md:w-[50%] h-full rounded-xl overflow-hidden"
          >
            <Image
              src="/images/Network Infrastructure.jpg"
              alt="Residential Solutions"
              unoptimized
              width={400}
              height={100}
              className="w-full h-full object-cover"
            />
          </Motion>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-20">
          <div className="md:w-[50%]">
            <Motion
              as={"h2"}
              variants={slideInRight}
              className="font-klav-bold text-[40px] leading-tight mb-4"
            >
              Digital Signage & Entertainment
            </Motion>
            <Motion
              as={"p"}
              variants={slideInBottom}
              className="text-[17px] leading-loose"
            >
              Deliver dynamic digital signage and commercial entertainment
              systems that engage, inform, and elevate brand experiences.From
              LED displays to video walls and integrated audio solutions, these
              systems are tailored for retail, hospitality, and corporate
              environments—powered by reliable control platforms for seamless
              content scheduling, real- time updates, and immersive visual
              impact.
            </Motion>
          </div>
          <Motion
            as={"div"}
            variants={slideInBottom}
            className="w-full md:w-[50%] h-full rounded-xl overflow-hidden"
          >
            <Image
              src="/images/Digital Signage and entertainment.png"
              alt="Residential Solutions"
              unoptimized
              width={400}
              height={100}
              className="w-full h-full object-cover"
            />
          </Motion>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
          <div className="md:w-[50%]">
            <Motion
              as={"h2"}
              variants={slideInLeft}
              className="font-klav-bold text-[40px] leading-tight mb-4"
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
              ahead in today&apos;s competitive business landscape.
            </Motion>
          </div>
          <Motion
            as={"div"}
            variants={slideInRight}
            className="w-full md:w-[50%] h-full rounded-xl overflow-hidden"
          >
            <Image
              src="/images/Video Conferencing.jpeg"
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
