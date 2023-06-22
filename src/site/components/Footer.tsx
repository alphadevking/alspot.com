// import { MdClose } from "react-icons/md";
import { FaTwitter, FaInstagram, FaLinkedinIn, FaGithub, FaExternalLinkSquareAlt } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { motion } from 'framer-motion';
import { FormEvent, useState } from "react";
import Link from "next/link";

export const Footer = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');

  // const handleSubmit = (e: FormEvent) => {
  //   e.preventDefault();
  //   // Handle form submission logic here.
  // };

  const currentYear = new Date().getFullYear();

  return (
    <div>
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
                  <Link href="tel:+2348140389939" className="text-blue-500">
                    0 (234) 814-038-9939
                  </Link>
                </dd>
              </div>

              <div className='flex gap-2'>
                <dt className="font-semibold">Email:</dt>
                <dd>
                  <Link href="mailto:alphadevking@gmail.com" className="text-blue-500">
                    alphadevking@gmail.com
                  </Link>
                </dd>
              </div>

            </dl>

            <ul className="grid gap-5 my-5">
              <li className='flex gap-2'>
                <span className=''>Linkedin</span>
                <Link href="https://www.linkedin.com/in/favour-orukpe-31432725b" target="_blank" className='py-1 hover:opacity-70'>
                  <FaExternalLinkSquareAlt />
                </Link>
              </li>
              <li className='flex gap-2'>
                <span className=''>GitHub</span>
                <Link href="https://www.github.com/alphadevking/" target="_blank" className='py-1 hover:opacity-70'>
                  <FaExternalLinkSquareAlt />
                </Link>
              </li>
            </ul>

          </div>

          <div>
            {/* <p className="font-semibold text-lg">Or just write me a letter here</p>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded-md"
                />
                <MdClose className="absolute right-2 top-2" aria-hidden="true" />
              </div>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your e-mail"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded-md"
                />
                <MdClose className="absolute right-2 top-2" aria-hidden="true" />
              </div>
              <div className="relative">
                <textarea
                  placeholder="Type the message here"
                  required
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded-md"
                />
                <MdClose className="absolute right-2 top-2" aria-hidden="true" />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 text-white bg-blue-600 rounded-md"
              >
                Submit
              </button>
            </form> */}
            <div className='text-center my-5'>
              <IconContext.Provider value={{ className: "social-media-icon", size: "2em" }}>
                <div className='flex justify-center space-x-4 mt-3'>
                  <Link href='https://www.twitter.com/alphadevking_1/' target='_blank'>
                    <motion.div whileHover={{ scale: 1.2 }}>
                      <FaTwitter />
                    </motion.div>
                  </Link>
                  <Link href='https://www.github.com/alphadevking/' target='_blank'>
                    <motion.div whileHover={{ scale: 1.2 }}>
                      <FaGithub />
                    </motion.div>
                  </Link>
                  <Link href='https://www.instagram.com/alphadevking/' target='_blank'>
                    <motion.div whileHover={{ scale: 1.2 }}>
                      <FaInstagram />
                    </motion.div>
                  </Link>
                  <Link href='https://www.linkedin.com/in/favour-orukpe-31432725b/' target='_blank'>
                    <motion.div whileHover={{ scale: 1.2 }}>
                      <FaLinkedinIn />
                    </motion.div>
                  </Link>
                </div>
              </IconContext.Provider>
            </div>
            <div className='p-2 text-xs text-[#8e8e8e] text-center'> Copyright {currentYear} SpotOnTech <span className=''>|</span> Creating technologies at peak speed!</div>
          </div>
        </div>
      </div>
    </div>
  );
};
