import React from 'react'
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.div initial={{ y: 48, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ ease: "easeInOut", duration: 0.75 }}
    className="mx-auto max-w-5xl grid justify-between items-center grid-cols-2 gap-2 bg-white/10 px-8 py-24 text-white"
    >
        <div className=''>
      <FlipLink href="mailto:innova8ify@gmail.com">GMail</FlipLink>
      <FlipLink href="https://www.linkedin.com/company/innova8ify">Linkedin</FlipLink>
      <FlipLink href="https://www.facebook.com/people/Innova8ify/61565507580638/?mibextid=ZbWKwL">Facebook</FlipLink>
      <FlipLink href="https://www.instagram.com/innova8ify/?igsh=MWNuZGVpYzlxb3MyaQ%3D%3D">Instagram</FlipLink>
        </div>
        <div>
<h2 className='float-right text-2xl font-bold'>Innova8ify</h2>
        </div>
    </motion.div>
  )
}


const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      target='_blank'
      className="relative block overflow-hidden whitespace-nowrap font-black uppercase text-xl md:text-2xl lg:text-3xl"
      style={{
        lineHeight: 0.75,
      }}
   >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
             delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default Footer