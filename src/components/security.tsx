"use client";

import Image from "next/image";

import { Motion, slideInBottom } from "@/animations";

const SecuritySolution = () => {
  return (
    <section>
      <div className="relative w-full h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/images/hero-5.jpg"
          alt="cctv camera"
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
          Security Solutions
        </Motion>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 md:px-8 space-y-16 md:space-y-28">
        <div className="w-full flex flex-col md:flex-row-reverse items-center gap-10 md:gap-20">
          <Motion
            as={"p"}
            variants={slideInBottom}
            className="md:w-[50%] text-[17px] leading-loose"
          >
            Our CCTV systems are designed to give you full visibility of your
            property— whether it&apos;s a private home, a gated estate, or a
            commercial facility. We deploy high-resolution cameras with features
            like night vision, wide-angle coverage, motion-triggered recording,
            and cloud storage. From discreet dome cameras in homes to rugged
            outdoor PTZ cameras in warehouses or needs of each location.
          </Motion>
          <Motion
            as={"div"}
            variants={slideInBottom}
            className="w-full md:w-[50%] h-full rounded-xl overflow-hidden"
          >
            <Image
              src="/images/security.jpg"
              alt="Security Solutions"
              unoptimized
              width={400}
              height={100}
              className="w-full h-full object-cover"
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
                Security isn&apos;t just about recording what happened—it&apos;s
                about responding in real-time. Our systems support both local
                monitoring(via indoor screens or control rooms) and remote
                access through secure mobile apps or web portals.Monitor your
                property from anywhere in the world, receive instant push
                notifications, and even communicate through two- way audio with
                visitors or intruders.
              </p>
              <p>
                For estates, commercial buildings, or multi-tenant properties,
                we offer centralized monitoring setups that allow security
                personnel to supervise multiple cameras and sensors from a
                single location—ensuring faster, smarter response
              </p>
            </Motion>
            <Motion
              as={"div"}
              variants={slideInBottom}
              className="w-full md:w-[50%] h-full rounded-xl overflow-hidden"
            >
              <Image
                src="/images/security/2.jpeg"
                alt="Security Solutions"
                unoptimized
                width={400}
                height={100}
                className="w-full h-full md:h-96 object-cover"
              />
            </Motion>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-20">
          <Motion
            as={"p"}
            variants={slideInBottom}
            className="md:w-[50%] text-[17px] leading-loose"
          >
            Pair your cameras with intelligent intrusion detection. Our motion
            sensors and smart alarm systems are the first line of defense
            against unauthorized access.Using infrared or microwave technology,
            these devices can detect movement even in low- light conditions and
            trigger immediate alerts or alarms. Integrated systems can also
            activate lights, lock doors, or send instant notifications to your
            mobile device.
          </Motion>

          <Motion
            as={"div"}
            variants={slideInBottom}
            className="w-full md:w-[50%] h-full rounded-xl overflow-hidden"
          >
            <Image
              src="/images/security/3.jpeg"
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

export default SecuritySolution;
