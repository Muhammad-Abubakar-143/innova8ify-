import React from 'react'
import { FiMapPin } from 'react-icons/fi';
import {motion} from 'framer-motion'

const Schedule = () => {
  return (
    <section
      id="portfolio"
      className="mx-auto max-w-5xl px-4 py-48 text-white"
    >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 text-4xl font-black uppercase text-zinc-50"
      >
        Portfolio
     </motion.h1>
      <ScheduleItem title="NG-21" date="Dec 9th" location="Florida" />
      <ScheduleItem title="Starlink" date="Dec 20th" location="Texas" />
      <ScheduleItem title="Starlink" date="Jan 13th" location="Florida" />
      <ScheduleItem title="Turksat 6A" date="Feb 22nd" location="Florida" />
      <ScheduleItem title="NROL-186" date="Mar 1st" location="California" />
      <ScheduleItem title="GOES-U" date="Mar 8th" location="California" />
      <ScheduleItem title="ASTRA 1P" date="Apr 8th" location="Texas" />
    </section>
  )
}


const ScheduleItem = ({ title, date, location }) => {
    return (
      <motion.div
       initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
      >
        <div>
         <p className="mb-1.5 text-xl text-zinc-50">{title}</p>
         <p className="text-sm uppercase text-zinc-500">{date}</p>
        </div>
        <div className="flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500">
          <p>{location}</p>
          <FiMapPin />
        </div>
      </motion.div>
    );
  };

export default Schedule
