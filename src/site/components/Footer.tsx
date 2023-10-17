// import { MdClose } from "react-icons/md";
import { FaTwitter, FaInstagram, FaLinkedinIn, FaGithub, FaExternalLinkSquareAlt } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { motion } from 'framer-motion';
// import { FormEvent, useState } from "react";
import { Element } from 'react-scroll';

export const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <Element name='contact'>
      <div className='shadow-lg pt-10'/>
      <div className="container mx-auto py-12 my-5 px-5 md:px-32">
        <div className="">
          <p className="text-3xl font-semibold">Get in touch with us</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 mt-12 text-sm">
          <div className="grid gap-5">

            <dl className="grid gap-3">

              <div className='flex gap-2'>
                <dt className="font-semibold">Phone:</dt>
                <dd>
                  <a href="tel:+2348140389939" className="text-blue-500">
                    0 (234) 814-038-9939
                  </a>
                </dd>
              </div>

              <div className='flex gap-2'>
                <dt className="font-semibold">Email:</dt>
                <dd>
                  <a href="mailto:alphadevking@gmail.com" className="text-blue-500">
                    alphadevking@gmail.com
                  </a>
                </dd>
              </div>

            </dl>

            <ul className="grid gap-5 my-5">
              <li className='flex gap-2'>
                <span className=''>Linkedin</span>
                <a href="https://www.linkedin.com/in/favour-orukpe-31432725b" target="_blank" className='py-1 hover:opacity-70'>
                  <FaExternalLinkSquareAlt />
                </a>
              </li>
              <li className='flex gap-2'>
                <span className=''>GitHub</span>
                <a href="https://www.github.com/alphadevking/" target="_blank" className='py-1 hover:opacity-70'>
                  <FaExternalLinkSquareAlt />
                </a>
              </li>
            </ul>

          </div>

          <div className='text-center my-5'>
            <IconContext.Provider value={{ className: "social-media-icon", size: "2em" }}>
              <div className='flex justify-center space-x-4 mt-3'>
                <a href='https://www.twitter.com/alphadevking_1/' target='_blank'>
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <FaTwitter />
                  </motion.div>
                </a>
                <a href='https://www.github.com/alphadevking/' target='_blank'>
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <FaGithub />
                  </motion.div>
                </a>
                <a href='https://www.instagram.com/alphadevking/' target='_blank'>
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <FaInstagram />
                  </motion.div>
                </a>
                <a href='https://www.linkedin.com/in/favour-orukpe-31432725b/' target='_blank'>
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <FaLinkedinIn />
                  </motion.div>
                </a>
              </div>
            </IconContext.Provider>
            <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="HORIZONTAL" data-vanity="favour-orukpe-31432725b" data-version="v1"><a className="badge-base__link LI-simple-link" href="https://ng.linkedin.com/in/favour-orukpe-31432725b?trk=profile-badge">Favour Orukpe</a></div>
          </div>
          
          <div className='p-2 text-xs text-[#8e8e8e] text-center'> Copyright {currentYear} SpotOnTech <span className=''>|</span> Creating technologies at peak speed!div</div>
        </div>
      </div>
    </Element>
  );
};
