import Image from "next/image";
import { Motion, slideInBottom, slideInLeft, slideInRight } from "@/animations";
import { ServicePageData } from "@/lib";

const ServiceLayout = ({ pageTitle, bgImage, sections }: ServicePageData) => (
  <section className="overflow-hidden">
    <div className="relative w-full h-[80vh] flex items-center justify-center text-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      <div className="absolute inset-0 bg-black/40 z-0" />

      <Motion
        as="h1"
        variants={slideInBottom}
        className="relative z-10 sangBlue-font text-white text-[60px] lg:text-[65px] px-4"
      >
        {pageTitle}
      </Motion>
    </div>

    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 md:px-8 space-y-16 md:space-y-28">
      {sections.map((sec, i) => {
        return (
          <div
            key={i}
            className={`flex flex-col ${
              sec.imagePosition === "left"
                ? "md:flex-row"
                : "md:flex-row-reverse"
            } items-center gap-10`}
          >
            <div className="md:w-[50%] space-y-6 text-[17px] leading-loose">
              {sec.title && (
                <Motion
                  as="h2"
                  variants={
                    sec.titleAnimation === "left"
                      ? slideInLeft
                      : sec.titleAnimation === "right"
                      ? slideInRight
                      : slideInBottom
                  }
                  className="sangBlue-font text-[40px] lg:text-[55px] mb-4 leading-tight"
                >
                  {sec.title}
                </Motion>
              )}

              {/* Dynamic content blocks */}
              <Motion as="div" variants={slideInBottom} className="space-y-6">
                {sec.content.map((block, index) => {
                  if (block.type === "h3") {
                    return (
                      <h3
                        key={index}
                        className="sangBlue-font text-xl md:text-2xl mb-4 leading-tight"
                      >
                        {block.text}
                      </h3>
                    );
                  }
                  if (block.type === "paragraph") {
                    return <p key={index}>{block.text}</p>;
                  }

                  if (block.type === "list") {
                    return (
                      <ul key={index} className="list-disc pl-8 space-y-1">
                        {block.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    );
                  }

                  return null;
                })}
              </Motion>
            </div>

            <Motion
              as="div"
              variants={slideInBottom}
              className="w-full md:w-[50%] h-full rounded-xl overflow-hidden"
            >
              <Image
                src={sec.image}
                alt={sec.title || ""}
                width={400}
                height={100}
                className="w-full h-full object-cover"
                unoptimized
              />
            </Motion>
          </div>
        );
      })}
    </div>
  </section>
);

export default ServiceLayout;
