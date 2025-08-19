export type ServiceSection = {
  title?: string;
  titleAnimation?: "left" | "right";
  content: Array<
    | {
        type: "paragraph";
        text: string;
      }
    | { type: "list"; items: string[] }
    | {
        type: "h2" | "h3";
        text: string;
      }
  >;
  image: string;
  imagePosition?: "left" | "right";
};

export type ServicePageData = {
  slug: string;
  pageTitle: string;
  bgImage: string;
  sections: ServiceSection[];
};

export const servicePages: ServicePageData[] = [
  {
    slug: "residential-solutions",
    pageTitle: "Residential Solutions",
    bgImage: "/images/home-automation.jpg",
    sections: [
      {
        title: "Smart Home Automation",
        titleAnimation: "right",
        image: "/images/Residential-3.webp",
        imagePosition: "right",
        content: [
          {
            type: "paragraph",
            text: "Smart home automation gives homeowners full control over their living spaces—enhancing comfort, boosting energy efficiency, improving security, and creating a seamless, connected lifestyle.",
          },
          {
            type: "paragraph",
            text: "Our integrated smart home solutions cover a wide range of systems, including:",
          },
          {
            type: "list",
            items: [
              "Automated Lighting",
              "Climate Control & Thermostats",
              "Advanced Security & Surveillance",
              "Home Cinema Systems",
              "Multiroom Music Distribution",
              "Smart Mirror TVs",
              "Motorized Blinds & Shades",
            ],
          },
        ],
      },

      {
        title: "Intercom",
        titleAnimation: "left",
        content: [
          {
            type: "list",
            items: [],
          },
          {
            type: "paragraph",
            text: "Stay connected and in control with a modern intercom system designed for today's smart homes. we install easy-to-use audio and video intercoms that let you communicate within your home and safely mnage who comes to your door. Whether you're speaking to a visitor at the gate, checking in on a family member in another room, or answering from your phone while you're away, our intercom solutions offer convenience, security, and peace of mind.",
          },
        ],
        image: "/images/intercom.png",
        imagePosition: "left",
      },

      {
        title: "Internet Distribution",
        titleAnimation: "right",
        content: [
          {
            type: "list",
            items: [],
          },
          {
            type: "paragraph",
            text: " A modern smart home needs more than just Wi-Fi — it needs a reliable, high speed network that reaches every corner of the house. At BlinkAV, we design and install robust internet and network distribution systems that ensure fast, stable, and secure connectivity for all your devices.",
          },
          {
            type: "paragraph",
            text: "Whether you’re streaming movies, gaming, working from home, or controlling smart devices, our solutions keep you connected without lag or dead zones.",
          },
        ],
        image: "/images/Internet distribution.jpg",
        imagePosition: "right",
      },
    ],
  },

  {
    slug: "audio-visual-solutions",
    pageTitle: "Audio Visual Solutions",
    bgImage: "/images/hero-4.jpg",
    sections: [
      {
        content: [
          {
            type: "paragraph",
            text: "Imagine stepping into a room where sound moves all around you, dialogue is crisp, visuals are razor- sharp, and every detail is felt as much as it is seen.This is not the future—this is today’s media room, engineered with cutting - edge audiovisual technology and world- class design.",
          }
        ],
        image: "/images/audio/1.jpeg",
        imagePosition: "right",
      },
      {
        content: [
          {
            type: "paragraph",
            text: "At the heart of the modern AV experience lies the Dolby Atmos-powered media room.Unlike traditional surround sound, Dolby Atmos delivers three - dimensional, immersive audio that flows above and around you—pulling you deeper into your favorite movies, games, or music performances.",
          },
          {
            type: "paragraph",
            text: "Whether it's the roar of a helicopter flying overhead or the quiet drop of rain behind you, every sound has its place,making your home entertainment feel larger than life.",
          }
        ],
        image: "/images/audio/2.jpeg",
        imagePosition: "left",
      },
      {
        content: [
          {
            type: "paragraph",
            text: "Modern audiovisual systems are no longer confined to home theaters. They're now shaping executive boardrooms, retail environments, hospitality venues, and smart homes—creating immersive spaces where communication, branding, and ambiance are elevated to new levels."
          },
          {
            type: "paragraph",
            text: " Whether it’s a sleek digital signage display in a hotel lobby or a high performing Zoom Room with auto - framing cameras and acoustic echo cancellation, the impact of AV technology is everywhere."
          }
        ],
        image: "/images/audio/3.jpeg",
        imagePosition: "right",
      },
    ],
  },

  {
    slug: "security-solutions",
    pageTitle: "Security Solutions",
    bgImage: "/images/hero-5.jpg",
    sections: [
      {
        content: [
          {
            type: "paragraph",
            text: "Our CCTV systems are designed to give you full visibility of your property— whether it's a private home, a gated estate, or a commercial facility. We deploy high-resolution cameras with features like night vision, wide-angle coverage, motion-triggered recording, and cloud storage. From discreet dome cameras in homes to rugged outdoor PTZ cameras in warehouses or needs of each location.",
          }
        ],
        image: "/images/security.jpg",
        imagePosition: "right",
      },
      {
        content: [
          {
            type: "paragraph",
            text: "Security isn’t just about recording what happened—it’s about responding in real-time. Our systems support both local monitoring(via indoor screens or control rooms) and remote access through secure mobile apps or web portals.Monitor your property from anywhere in the world, receive instant push notifications, and even communicate through two- way audio with visitors or intruders.",
          },
          {
            type: "paragraph",
            text: "For estates, commercial buildings, or multi-tenant properties, we offer centralized monitoring setups that allow security personnel to supervise multiple cameras and sensors from a single location—ensuring faster, smarter response",
          },
        ],
        image: "/images/security/2.jpeg",
        imagePosition: "left",
      },
      {
        content: [
          {
            type: "paragraph",
            text: " Pair your cameras with intelligent intrusion detection. Our motion sensors and smart alarm systems are the first line of defense against unauthorized access.Using infrared or microwave technology, these devices can detect movement even in low- light conditions and trigger immediate alerts or alarms. Integrated systems can also activate lights, lock doors, or send instant notifications to your mobile device.",
          }
        ],
        image: "/images/security/3.jpeg",
        imagePosition: "right",
      },
    ],
  },

  {
    slug: "workspace-solutions",
    pageTitle: "Workspace Solutions",
    bgImage: "/images/orange-room.jpg",
    sections: [
      {
        title: "Video Conferencing",
        content: [
          {
            type: "paragraph",
            text: "We design and deploy state-of-the-art video conferencing systems tailored to your business needs.From huddle rooms to large boardrooms, we integrate high- quality cameras, microphones, displays, and cloud platforms like Zoom, Microsoft Teams, and Google Meet—ensuring crystal - clear communication, seamless collaboration, and a professional meeting experience every time.",
          }
        ],
        image: "/images/Commercial service 1.jpeg",
        imagePosition: "right",
      },
      {
        title: " Network Infrastructure",
        content: [
          {
            type: "paragraph",
            text: " BlinkAV delivers high-performance network and internet infrastructure tailored for commercial environments.We deploy enterprise- grade firewalls, switches, structured cabling, and seamless Wi - Fi systems to support VoIP, video conferencing, security, and business - critical applications.Our solutions ensure secure, reliable, and scalable connectivity—built to handle the demands of modern offices, retail, and corporate spaces.",
          },
        ],
        image: "/images/Network Infrastructure.jpg",
        imagePosition: "left",
      },
      {
        title: "Digital Signage & Entertainment",
        titleAnimation: "right",
        content: [
          {
            type: "paragraph",
            text: " Deliver dynamic digital signage and commercial entertainment systems that engage, inform, and elevate brand experiences.From LED displays to video walls and integrated audio solutions, these systems are tailored for retail, hospitality, and corporate environments—powered by reliable control platforms for seamless content scheduling, real- time updates, and immersive visual impact.",
          },
        ],
        image: "/images/Digital Signage and entertainment.png",
        imagePosition: "right",
      },
      {
        title: "Small to large meeting rooms",
        titleAnimation: "left",
        content: [
          {
            type: "paragraph",
            text: " Overall, smart office solutions revolutionize the modern workplace by creating an intelligent ecosystem that maximizes efficiency, promotes collaboration, enhances security, and enables data-driven decision-making. With their ability to streamline operations and create a more productive and comfortable environment, they are becoming increasingly essential for organizations seeking to stay ahead in today’s competitive business landscape.",
          },
        ],
        image: "/images/Workspace-5.webp",
        imagePosition: "left",
      },
    ],
  },
  {
    slug: "web-development-solutions",
    pageTitle: "Web Development Solutions",
    bgImage: "/images/bg3.jpg",
    sections: [
      {
        content: [
          {
            type: "paragraph",
            text: "At Blinkav, we craft modern web solutions that empower businesses to thrive in the digital space. Our development process is rooted in performance, user experience, and cutting-edge technologies that ensure robust, scalable, and beautiful digital products.",
          },
          {
            type: "paragraph",
            text: "From UI/UX design to full-stack development and mobile app integration, our goal is to provide end-to-end services that meet your business needs and elevate your digital presence.",
          },
        ],
        image: "/images/frontend-dev.jpg",
        imagePosition: "right",
      },
      {
        title: "Frontend Development",
        titleAnimation: "left",
        content: [
          {
            type: "paragraph",
            text: "We build responsive, fast, and accessible interfaces using technologies like React, Next.js, Vue.js, and TailwindCSS. Every element is crafted to ensure an engaging user experience across all devices and platforms.",
          },
          {
            type: "paragraph",
            text: "Our approach prioritizes performance, SEO, and interactivity using modern frameworks and best practices.",
          },
        ],
        image: "/images/frontend-dev.jpg",
        imagePosition: "left",
      },
      {
        title: "Backend Development",
        titleAnimation: "right",
        content: [
          {
            type: "paragraph",
            text: " We build secure, scalable, and high-performance backends using Node.js, Express, NestJS, and PostgreSQL. Our APIs are designed to support complex systems with ease, including real-time functionality and secure data handling.",
          },
          {
            type: "paragraph",
            text: "From database architecture to authentication and cloud integration, we manage the heavy lifting so your product stays efficient and maintainable.",
          },
        ],
        image: "/images/backend-dev.jpg",
        imagePosition: "right",
      },
      {
        title: "UI/UX Design",
        titleAnimation: "left",
        content: [
          {
            type: "paragraph",
            text: "Design is at the heart of everything we build. Our designers use tools like Figma, Adobe XD, and Sketch to create visually compelling and highly functional interfaces that delight users and drive engagement.",
          },
          {
            type: "paragraph",
            text: " We prioritize usability, consistency, and branding to turn concepts into intuitive digital experiences.",
          },
        ],
        image: "/images/ui-ux.jpg",
        imagePosition: "left",
      },
      {
        title: "Mobile App Development",
        titleAnimation: "right",
        content: [
          {
            type: "paragraph",
            text: "We develop cross-platform mobile applications using React Native and Flutter to ensure smooth performance and native-like experiences across Android and iOS devices.",
          },
          {
            type: "paragraph",
            text: " Whether you need a companion app for your web platform or a stand-alone mobile solution, we ensure speed, reliability, and scalability.",
          },
        ],
        image: "/images/mobile-app.jpg",
        imagePosition: "right",
      },
    ],
  },
];
