import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { FiEdit, FiPlusSquare,} from 'react-icons/fi';
import { BiMenu } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';
import { CiPhone } from 'react-icons/ci';

const StaggeredDropDown = () => {
      const [open, setOpen] = useState(false);
    
      return (
        <div className="flex items-center justify-center">
          <motion.div animate={open ? "open" : "closed"} className="relative">
            <button
              onClick={() => setOpen((pv) => !pv)}
            >
                {open === false ? <BiMenu size={20}/> : <CgClose size={20}/>}
            </button>
    
            <motion.ul
              initial={wrapperVariants.closed}
              variants={wrapperVariants}
              style={{ originY: "top", translateX: "-50%" }}
              className="flex flex-col gap-2 p-2 rounded-lg bg-white/10 backdrop-blur-sm text-white shadow-xl absolute top-[120%] -left-[150%] w-32 overflow-hidden"
            >
              <Option setOpen={setOpen} Icon={FiEdit} text="Services"  id='services'/>
              <Option setOpen={setOpen} Icon={FiPlusSquare} text="Portfolio" id='portfolio'/>
              <Option setOpen={setOpen} Icon={CiPhone} text="Contact" id='contact-us'/>
            </motion.ul>
          </motion.div>
       </div>
      );
    };
    
    const Option = ({ text, Icon, setOpen, id }) => {
      return (
        <motion.li
          variants={itemVariants}
          onClick={() => {
            setOpen(false)
            document.getElementById(id)?.scrollIntoView({
                behavior: "smooth",
              });
        }}
          className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-white/30 text-white transition-colors cursor-pointer"
        >
          <motion.span variants={actionIconVariants}>
           <Icon size={15}/>
          </motion.span>
          <span>{text}</span>
        </motion.li>
      );
    };
    export default StaggeredDropDown;
    
    const wrapperVariants = {
      open: {
        scaleY: 1,
        transition: {
          when: "beforeChildren",
          staggerChildren: 0.1,
        },
      },
      closed: {
        scaleY: 0,
        transition: {
          when: "afterChildren",
          staggerChildren: 0.1,
        },
     },
    };
    
    const itemVariants = {
      open: {
        opacity: 1,
        y: 0,
        transition: {
          when: "beforeChildren",
        },
      },
      closed: {
        opacity: 0,
        y: -15,
        transition: {
          when: "afterChildren",
        },
      },
    };
    
    const actionIconVariants = {
      open: { scale: 1, y: 0 },
      closed: { scale: 0, y: -7 },
    };
