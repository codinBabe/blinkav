"use client";

import Image from "next/image";
import { Motion, slideInBottom } from "@/animations";

const AudioVisualSolution = () => {
  return (
    <section>
      <div className="relative w-full h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src={"/images/hero-4.jpg"}
          alt="A big conference/seminar room"
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
          Audio Visual Solutions
        </Motion>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 md:px-8 space-y-16 md:space-y-28">
        <div className="w-full flex flex-col md:flex-row-reverse items-center gap-10 md:gap-20">
          <Motion
            as={"div"}
            variants={slideInBottom}
            className="md:w-[50%] space-y-6 text-[17px] leading-loose"
          >
            <p>
              Imagine stepping into a room where sound moves all around you,
              dialogue is crisp, visuals are razor- sharp, and every detail is
              felt as much as it is seen.This is not the future—this is today’s
              media room, engineered with cutting - edge audiovisual technology
              and world- class design.
            </p>
          </Motion>

          <Motion
            as={"div"}
            variants={slideInBottom}
            className="w-full md:w-[50%] h-auto rounded-xl overflow-hidden"
          >
            <Image
              src="/images/audio/1.jpeg"
              alt="Audio Visual Solutions"
              unoptimized
              width={400}
              height={100}
              className="w-full md:h-96 object-cover"
            />
          </Motion>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
            <Motion
              as={"div"}
              variants={slideInBottom}
              className="md:w-[50%] space-y-6 text-[17px] leading-loose"
            >
              <p>
                At the heart of the modern AV experience lies the Dolby
                Atmos-powered media room.Unlike traditional surround sound,
                Dolby Atmos delivers three - dimensional, immersive audio that
                flows above and around you—pulling you deeper into your favorite
                movies, games, or music performances.
              </p>
              <p>
                Whether it&apos;s the roar of a helicopter flying overhead or
                the quiet drop of rain behind you, every sound has its
                place,making your home entertainment feel larger than life.
              </p>
            </Motion>
            <Motion
              as={"div"}
              variants={slideInBottom}
              className="w-full md:w-[50%] h-full rounded-xl overflow-hidden"
            >
              <Image
                src="/images/audio/2.jpeg"
                alt="Audio Visual Solutions"
                unoptimized
                width={400}
                height={100}
                className="w-full h-full object-cover"
              />
            </Motion>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-20">
          <Motion
            as={"div"}
            variants={slideInBottom}
            className="md:w-[50%] space-y-6 text-[17px] leading-loose"
          >
            <p>
              Modern audiovisual systems are no longer confined to home
              theaters. They&apos;re now shaping executive boardrooms, retail
              environments, hospitality venues, and smart homes—creating
              immersive spaces where communication, branding, and ambiance are
              elevated to new levels.
            </p>
            <p>
              Whether it’s a sleek digital signage display in a hotel lobby or a
              high performing Zoom Room with auto - framing cameras and acoustic
              echo cancellation, the impact of AV technology is everywhere.
            </p>
          </Motion>

          <Motion
            as={"div"}
            variants={slideInBottom}
            className="w-full md:w-[50%] h-full rounded-xl overflow-hidden"
          >
            <Image
              src="/images/audio/3.jpeg"
              alt="Audio Visual Solution"
              unoptimized
              width={400}
              height={100}
              className="w-full h-full md:h-96 object-cover"
            />
          </Motion>
        </div>
      </div>
    </section>
  );
};

export default AudioVisualSolution;
