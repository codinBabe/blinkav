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
            text: "Smart home automation empowers homeowners to have greater control over their living spaces, optimize energy consumption, enhance security, and enjoy a seamless and convenient lifestyle.",
          },
          {
            type: "paragraph",
            text: "Our Smart home solutions encompasses several areas such as",
          },
          {
            type: "list",
            items: [
              "Lighting",
              "Climate control",
              "Security systems",
              "Home cinema",
              "Distributed Music system",
              "Smart Mirror TV",
              "Motorized shades",
            ],
          },
        ],
      },

      {
        title: "Entertainment Unleashed",
        titleAnimation: "left",
        content: [
          {
            type: "list",
            items: ["Home theater systems", "Audio speakers"],
          },
          {
            type: "paragraph",
            text: "Seamlessly connected, allowing users to control their multimedia experience throughout the house. Integration with virtual assistants enables voice commands for a hands-free and immersive entertainment setup.",
          },
        ],
        image: "/images/Residential-2.webp",
        imagePosition: "left",
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
            text: "Audiovisual solutions encompass a range of technologies and services designed to enhance audio and visual experiences in various settings. These solutions leverage audio and visual components to create immersive and engaging environments for entertainment, communication, education, and business purposes.",
          },
          {
            type: "paragraph",
            text: "One key aspect of audiovisual solutions is the integration of audio and visual equipment. This includes high-quality displays, projectors, screens, and audio systems that work together to deliver clear and impactful visuals and sound. These components can be used in conference rooms, classrooms, theaters, event spaces, and other venues to create captivating experiences for the audience.",
          },
        ],
        image: "/images/Audio-visual-1.webp",
        imagePosition: "right",
      },
      {
        content: [
          {
            type: "paragraph",
            text: "Audiovisual solutions also involve content creation and management. They enable the production and distribution of multimedia content, such as videos, presentations, and interactive displays. Content management systems allow for seamless control and scheduling of audiovisual content, ensuring the right media is displayed at the right time and in the right location.",
          },
          {
            type: "paragraph",
            text: "Furthermore, audiovisual solutions often incorporate advanced technologies to enhance the user experience. This may include interactive touchscreens, virtual reality (VR) or augmented reality (AR) experiences, immersive sound systems, and video conferencing capabilities. These technologies enable interactive engagement, remote collaboration, and realistic simulations.",
          },
          {
            type: "paragraph",
            text: " In the business environment, audiovisual solutions are utilized for effective presentations, video conferencing, and digital signage. They enhance communication and collaboration among teams, facilitate remote meetings, and provide visually appealing displays for advertising and informational purposes",
          },
        ],
        image: "/images/Audio-visual-2.webp",
        imagePosition: "left",
      },
      {
        content: [
          {
            type: "paragraph",
            text: "In the entertainment industry, audiovisual solutions are employed in theaters, stadiums, and theme parks to create captivating experiences for audiences. They enhance the visual effects, audio quality, and overall immersion of live performances, movies, concerts, and sporting events.",
          },
          {
            type: "paragraph",
            text: "In educational settings, audiovisual solutions aid in delivering engaging and interactive lessons. They enable the use of multimedia content, virtual simulations, and interactive displays to enhance learning experiences and improve information retention.",
          },
        ],
        image: "/images/Audio-visual-3.webp",
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
            text: "Smart security solutions leverage advanced technologies to enhance the safety and protection of people, assets, and properties. These solutions combine various components, such as sensors, cameras, access control systems, and analytics, to create intelligent and proactive security systems.",
          },
          {
            type: "paragraph",
            text: "One key feature of smart security solutions is real-time monitoring and alerts. They employ video surveillance cameras with advanced analytics capabilities to detect and identify potential security threats. These systems can automatically generate alerts for suspicious activities, intrusions, or unauthorized access, allowing for immediate response and intervention.",
          },
        ],
        image: "/images/security.jpg",
        imagePosition: "right",
      },
      {
        content: [
          {
            type: "paragraph",
            text: "Another aspect of smart security solutions is access control. They utilize technologies like biometric identification, smart cards, or facial recognition to ensure only authorized individuals can access specific areas or resources. Access control systems can also track and log entry and exit events, providing a comprehensive audit trail for security purposes.",
          },
          {
            type: "paragraph",
            text: " Smart security solutions also incorporate automation and remote management capabilities. They can integrate with other smart devices, such as motion sensors, door locks, and alarm systems, to automate security processes. For example, smart security systems can arm or disarm alarms, lock or unlock doors, and adjust lighting based on predefined rules or remote commands.",
          },
        ],
        image: "/images/security-solution-1.webp",
        imagePosition: "left",
      },
      {
        content: [
          {
            type: "paragraph",
            text: " Furthermore, smart security solutions enable centralized monitoring and management. Through a unified platform or software, security personnel can monitor and control multiple security systems and devices from a single interface. This simplifies operations, improves response times, and enhances situational awareness.",
          },
          {
            type: "paragraph",
            text: "Data analytics and insights are also integral to smart security solutions. By analyzing data from various sources, such as security cameras, access logs, and environmental sensors, these solutions can identify patterns, detect anomalies, and provide valuable insights for improving security measures and decision-making.",
          },
          {
            type: "paragraph",
            text: "Additionally, smart security solutions may incorporate features like video analytics, facial recognition, and object tracking to enhance surveillance and threat detection capabilities. These technologies enable intelligent video analysis, behavior recognition, and proactive identification of potential risks or threats.",
          },
        ],
        image: "/images/security-solution-2.webp",
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
        title: "Digital Signage",
        content: [
          {
            type: "paragraph",
            text: "Our workplace solutions leverage technology to optimize and enhance productivity in the workplace. By integrating various devices, systems, and software, these solutions create a connected and intelligent environment. They offer a range of benefits, including increased efficiency, improved collaboration, and enhanced comfort.",
          },
          {
            type: "h3",
            text: "One touch experience",
          },
          {
            type: "paragraph",
            text: "One key aspect of smart office solutions is automation. They automate routine tasks like adjusting lighting, controlling temperature, and managing energy usage. This not only saves time but also reduces energy costs and promotes sustainability. For example, motion sensors can detect occupancy and adjust lighting and HVAC systems accordingly, ensuring optimal comfort and energy efficiency.",
          },
        ],
        image: "/images/Workspace-2.webp",
        imagePosition: "right",
      },
      {
        title: "Audio Visual solutions",
        content: [
          {
            type: "paragraph",
            text: "Collaboration is another area where smart office solutions excel. They enable seamless communication and information sharing among employees, regardless of their location. Video conferencing, instant messaging, and shared virtual workspaces foster real-time collaboration and teamwork. Additionally, smart whiteboards, interactive displays, and smart projectors enhance presentation capabilities, making meetings more interactive and engaging.",
          },
        ],
        image: "/images/Workspace-3.webp",
        imagePosition: "left",
      },
      {
        title: "Security and Access control",
        titleAnimation: "right",
        content: [
          {
            type: "paragraph",
            text: "Furthermore, smart office solutions enhance security and access control. Advanced authentication methods such as biometric identification and smart card systems ensure only authorized personnel can access sensitive areas. Additionally, smart surveillance systems with video analytics provide real-time monitoring, alerts, and deterrence against potential security threats.",
          },
        ],
        image: "/images/Workspace-4.webp",
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
