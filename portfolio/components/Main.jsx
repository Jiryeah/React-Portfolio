import React from 'react';
import Link from 'next/link';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-500'>
            When We Come Together &
            <br />
            <span className='text-gray-900'>Collaborate</span>
            <br />
            We Develop Solutions For The
            <br />
            <span className='text-gray-900'>World</span>
          </p>
          <h1 className='py-4 text-gray-600'>
            Hi, I'm Fai<span className='text-blue-500'>ss</span>al
          </h1>
          <h1 className='py-4 text-gray-600'>A Full-Stack Web Developer</h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            I specialize in building mobile-first web applications utilizing the MERN stack.
            Although I can work both the front and back-end, I am currently focusing on furthering
            my back-end knowledge through Java and the awesome Spring Framework.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a href='https://www.linkedin.com/in/FaissalShabani' target='_blank' rel='noreferrer'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a href='https://github.com/Jiryeah' target='_blank' rel='noreferrer'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
