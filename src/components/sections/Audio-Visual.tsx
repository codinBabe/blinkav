"use client";

import Image from "next/image";
import Motion from "../global/motion";
import { slideInBottom } from "@/animations";

const AudioVisualSolution: React.FC = () => {
  return (
    <section>
      <div className="audio-visual-bg relative w-full h-[80vh] md:h-[75vh] lg:h-[72vh] overflow-hidden flex items-center justify-center text-center">
        <Motion
          as="h1"
          variants={slideInBottom}
          className="sangBlue-font text-white text-[60px] md:leading-loose lg:text-[65px]"
        >
          Audio Visual Solutions
        </Motion>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="w-full flex flex-col md:flex-row-reverse items-center gap-10 mt-16 md:mt-20">
          <Motion
            as={"div"}
            variants={slideInBottom}
            className="md:w-[46%] space-y-6 text-[17px] leading-loose"
          >
            <p>
              Audiovisual solutions encompass a range of technologies and
              services designed to enhance audio and visual experiences in
              various settings. These solutions leverage audio and visual
              components to create immersive and engaging environments for
              entertainment, communication, education, and business purposes.
            </p>
            <p>
              One key aspect of audiovisual solutions is the integration of
              audio and visual equipment. This includes high-quality displays,
              projectors, screens, and audio systems that work together to
              deliver clear and impactful visuals and sound. These components
              can be used in conference rooms, classrooms, theaters, event
              spaces, and other venues to create captivating experiences for the
              audience.
            </p>
          </Motion>

          <Motion
            as={"div"}
            variants={slideInBottom}
            className="w-full md:w-[50%] h-full rounded-xl overflow-hidden"
          >
            <Image
              src="/images/Audio-visual-1.webp"
              alt="Audio Visual Solutions"
              unoptimized
              width={400}
              height={100}
              className="w-full h-full object-cover"
            />
          </Motion>
        </div>

        <div className="relative my-16 md:my-28 overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="audio-bg" />
            <Motion
              as={"div"}
              variants={slideInBottom}
              className="md:w-[46%] space-y-6 text-[17px] leading-loose"
            >
              <p>
                Audiovisual solutions also involve content creation and
                management. They enable the production and distribution of
                multimedia content, such as videos, presentations, and
                interactive displays. Content management systems allow for
                seamless control and scheduling of audiovisual content, ensuring
                the right media is displayed at the right time and in the right
                location.
              </p>
              <p>
                Furthermore, audiovisual solutions often incorporate advanced
                technologies to enhance the user experience. This may include
                interactive touchscreens, virtual reality (VR) or augmented
                reality (AR) experiences, immersive sound systems, and video
                conferencing capabilities. These technologies enable interactive
                engagement, remote collaboration, and realistic simulations.
              </p>
              <p>
                In the business environment, audiovisual solutions are utilized
                for effective presentations, video conferencing, and digital
                signage. They enhance communication and collaboration among
                teams, facilitate remote meetings, and provide visually
                appealing displays for advertising and informational purposes
              </p>
            </Motion>
            <Motion
              as={"div"}
              variants={slideInBottom}
              className="w-full md:mt-20 md:w-[45%] h-full rounded-xl overflow-hidden"
            >
              <Image
                src="/images/Audio-visual-2.webp"
                alt="Audio Visual Solutions"
                unoptimized
                width={400}
                height={100}
                className="w-full h-full object-cover"
              />
            </Motion>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-10 mb-20">
          <Motion
            as={"div"}
            variants={slideInBottom}
            className="md:w-[46%] space-y-6 text-[17px] leading-loose"
          >
            <p>
              In the entertainment industry, audiovisual solutions are employed
              in theaters, stadiums, and theme parks to create captivating
              experiences for audiences. They enhance the visual effects, audio
              quality, and overall immersion of live performances, movies,
              concerts, and sporting events.
            </p>
            <p>
              In educational settings, audiovisual solutions aid in delivering
              engaging and interactive lessons. They enable the use of
              multimedia content, virtual simulations, and interactive displays
              to enhance learning experiences and improve information retention
            </p>
          </Motion>

          <Motion
            as={"div"}
            variants={slideInBottom}
            className="w-full md:w-[50%] h-full rounded-xl overflow-hidden"
          >
            <Image
              src="/images/Audio-visual-3.webp"
              alt="Audio Visual Solution"
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

export default AudioVisualSolution;
