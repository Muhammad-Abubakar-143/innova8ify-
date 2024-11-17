import React, { useRef } from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'

const Services = () => {
  return (
    <section id="services"
    className="mx-auto max-w-5xl px-4 py-48 text-white">
<motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 text-4xl font-black uppercase text-zinc-50"
      >
        Services
     </motion.h1>
     <div>
      <TextParallaxContent
        subheading="Optimize"
        heading="Optimize Your Business"
      >
        <motion.div initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}>
        <ExampleContent title="Google Business Profile Optimization" para="Our team will ensure your profile is fully optimized with accurate information, compelling descriptions, and engaging visuals. " />
        <ExampleContent title="Seo Services" para="Our SEO services are tailored to improve your website’s visibility on search engines, ensuring you reach your target audience effectively." />
        <ExampleContent title="Social Media Marketing" para="We develop tailored social media marketing strategies that resonate with your audience and foster engagement. " />
        </motion.div>
      </TextParallaxContent>
      <TextParallaxContent
        subheading="Call Center"
        heading="Support Your Business"
      >
        <motion.div initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}>
        <ExampleContent title="Customer Support" para="Experienced agents provide voice support through voice interactions, ensuring exceptional customer service and resolving issues promptly. Their voice support team represents your brand professionally and empathically." />
        <ExampleContent title="Technical Support" para="Our technical support specialists offer a wide range of services to customers, addressing a variety of issues, ensuring timely and effective solutions, enhancing productivity and minimizing downtime." />
        <ExampleContent title="Outsourcing Solutions" para="Flexible models offer specific services with cost-effective strategies, allowing businesses to adapt to their specific needs and invest resources back into core activities." />
        <ExampleContent title="Client handling" para="Our team specializes in professional call handling, ensuring efficiency and enhancing brand reputation. We offer customized solutions to align with specific business objectives and customer expectations." />
        </motion.div>
      </TextParallaxContent>
      <TextParallaxContent
        subheading="Development"
        heading="Web Development"
      >
        <motion.div initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}>
        <ExampleContent title='Web Development' para="Our experienced developers design and build responsive, user-friendly websites and applications that not only look great but also drive conversions." />
        </motion.div>
      </TextParallaxContent>
    </div>
    </section>
  )
}



const IMG_PADDING = 12;
const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
      return (
        <div
          style={{
            paddingLeft: IMG_PADDING,
            paddingRight: IMG_PADDING,
          }}
        >
          <div className="relative h-[100vh]">
            <StickyImage imgUrl={imgUrl} />
            <OverlayCopy heading={heading} subheading={subheading} />
          </div>
          {children}
        </div>
      );
    };



    const StickyImage = () => {
          const targetRef = useRef(null);
          const { scrollYProgress } = useScroll({
            target: targetRef,
            offset: ["end end", "end start"],
          });
        
          const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
          const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
        
          return (
            <motion.div
              style={{
                backgroundColor:'white',
                height: `calc(60vh - ${IMG_PADDING * 2}px)`,
                top: IMG_PADDING,
                scale,
              }}
              ref={targetRef}
              className="sticky z-0 overflow-hidden rounded-3xl"
            >
              <motion.div
                className="absolute inset-0 bg-neutral-950/70"
                style={{
                  opacity,
                }}
              />
            </motion.div>
          );
        };
        
        const OverlayCopy = ({ subheading, heading }) => {
          const targetRef = useRef(null);
          const { scrollYProgress } = useScroll({
            target: targetRef,
            offset: ["start end", "end start"],
          });
        
          const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
          const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);
        
          return (
            <motion.div
              style={{
                y,
                opacity,
              }}
              ref={targetRef}
              className="absolute left-0 top-0 flex h-[65vh] w-full flex-col items-center justify-center text-white"
            >
              <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
                {subheading}
              </p>
              <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
            </motion.div>
          );
        };
        
        const ExampleContent = ({title, para}) => (
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-14 pt-12 md:grid-cols-12">
            <h2 className="col-span-1 text-xl font-bold md:col-span-4">
              {title}
            </h2>
            <div className="col-span-1 md:col-span-8">
              <p className="mb-4 text-lg text-neutral-600">
                {para}
              </p>
            </div>
          </div>
        );

export default Services
