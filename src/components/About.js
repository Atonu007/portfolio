import React, { useState } from 'react';
import hero from '../assets/heroo.png';
import { AiFillCheckCircle } from 'react-icons/ai';

export const About = () => {const [education, setEducation] = useState(false);
    const [experience, setExperience] = useState(false);
    const [active, setActive] = useState(null);
  
    const toggleEducation = () => {
      setActive(active === 'education' ? null : 'education');
      setExperience(false);
      setEducation((prevState) => !prevState);
    };
  
    const toggleExp = () => {
      setActive(active === 'experience' ? null : 'experience');
      setEducation(false);
      setExperience((prevState) => !prevState);
    };
  
  
    return (
        
      <div name='about' className='min-h-screen w-full flex justify-center items-center px-3 -mt-20 md:mt-10 '>
        <div className='flex flex-col md:flex-row justify-center items-center md:items-start'>
          <div className='rounded-2xl h-72  w-64  flex justify-center items-center '>
            <img src={hero} alt='hero ' />
          </div>
          <div className='flex flex-col md:w-2/5 md:ml-10'>
            <h1 className='font-bold  text-2xl underline underline-offset-8 md:ml-12 px-3  '>
              About Me
            </h1>
            <p className='font-medium mt-5 md:ml-3 px-3 '>
            I'm Atonu Proshad Shaha, An energetic engineer with a passion for innovation and
technology, majoring in computer science and engineering. I
appreciate working in various environments since it allows me
to gather knowledge and get to know different people's
characteristics. Always willing to take on new tasks. Passionate
about sharing experiences and encouraging others.
            </p>
            <div className='mt-5 flex md:ml-3 px-3 '>
              <h1
                className={`mr-10  font-bold cursor-pointer hover:scale-110 duration-200 inline-block ${
                  active === 'education'
                    ? 'underline decoration-black-400 decoration-2 underline-offset-4'
                    : ''
                }`}
                onClick={toggleEducation}
              >
                Education
              </h1>
              <h2
                className={`font-bold cursor-pointer hover:scale-110 duration-200 inline-block ${
                  active === 'experience'
                    ? 'underline decoration-black-400 decoration-2 underline-offset-4'
                    : ''
                }`}
                onClick={toggleExp}
              >
                Skill
              </h2>
            </div>
            {education && (
              <div className='mt-3 md:ml-3 px-3 '>
                <h1 className='font-semibold'>North South University</h1>
                <p className='font-medium'>BSc in Computer Science and Engineering</p>
                <h1 className='font-semibold mt-2'>Carmichael College, Bangladesh</h1>
                <p className='font-medium'>Higher Secondary Certificate</p>
                <h1 className='font-semibold mt-2'>Gaibandha Govt. Boys' High School, Bangladesh</h1>
                <p className='font-medium'>Secondary School Certificate</p>
              </div>
            )}
            {experience && (
            <div className='mt-3 md:ml-3 px-3 '>
                <h1 className='font-semibold'>Programming Language</h1>
                <p className='font-medium flex '>
                  <AiFillCheckCircle className='text-2xl mr-3 ' />
                  C Programming
                </p>
                <p className='font-medium flex'>
                  <AiFillCheckCircle className='text-2xl mr-3' />
                  JavaScript
                </p>
                <p className='font-medium flex'>
                  <AiFillCheckCircle className='text-2xl mr-3' />
                  Python
                </p>
                <p className='font-medium flex'>
                  <AiFillCheckCircle className='text-2xl mr-3' />
                  PHP
                </p>
                <p className='font-medium flex'>
                  <AiFillCheckCircle className='text-2xl mr-3' />
                  C++
                </p>


                <h1 className='font-semibold mt-4'>FrameWork</h1>
                <p className='font-medium flex'>
                  <AiFillCheckCircle className='text-2xl mr-3' />
                  React
                </p>
                <p className='font-medium flex'>
                  <AiFillCheckCircle className='text-2xl mr-3' />
                  Django
                </p>
                <p className='font-medium flex'>
                  <AiFillCheckCircle className='text-2xl mr-3' />
                  Laravel
                </p>
                <p className='font-medium flex'>
                  <AiFillCheckCircle className='text-2xl mr-3' />
                  Node.js
                </p>
                <p className='font-medium flex'>
                  <AiFillCheckCircle className='text-2xl mr-3' />
                  Android Studio
                </p>

                <h1 className='font-semibold mt-4'>Tools</h1>
                <p className='font-medium flex'>
                  <AiFillCheckCircle className='text-2xl mr-3' />
                  GitHub
                </p>
                <p className='font-medium flex'>
                  <AiFillCheckCircle className='text-2xl mr-3' />
                  PostMan
                </p>


                <h1 className='font-semibold mt-4'>DataBase</h1>
                <p className='font-medium flex'>
                  <AiFillCheckCircle className='text-2xl mr-3' />
                  SqlLite
                </p>
                <p className='font-medium flex'>
                  <AiFillCheckCircle className='text-2xl mr-3' />
                  MySql
                </p>
                <p className='font-medium flex'>
                  <AiFillCheckCircle className='text-2xl mr-3' />
                  Postgresql
                </p>
                <p className='font-medium flex'>
                  <AiFillCheckCircle className='text-2xl mr-3' />
                  FireBase
                </p>



                <h1 className='font-semibold mt-4'>TECHNOLOGY</h1>
                <p className='font-medium flex'>
                  <AiFillCheckCircle className='text-2xl mr-3' />
                  Amazon Aws
                </p>
                <p className='font-medium flex'>
                  <AiFillCheckCircle className='text-2xl mr-3' />
                  Web Socket
                </p>
                <p className='font-medium flex'>
                  <AiFillCheckCircle className='text-2xl mr-3' />
                  Apache
                </p>
              
              
               
            </div>

            
            )}
          </div>
        </div>
      </div>
    );
  };