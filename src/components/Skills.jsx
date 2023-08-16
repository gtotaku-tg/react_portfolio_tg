import React from 'react';

import HTML from '../assets/skillsets/html.png';
import CSS from '../assets/skillsets/css.png';
import JavaScript from '../assets/skillsets/javascript.png';
import ReactImg from '../assets/skillsets/react.png';
import Node from '../assets/skillsets/node.png';
import Mongo from '../assets/skillsets/mongo.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen  bg-[#8E9AAF] text-[#DEE2FF]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-[#6096BA] '>Skills</p>
              <p className='py-4'> These are the tools I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] rounded-lg hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] rounded-lg hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] rounded-lg hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="JS icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] rounded-lg hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
                  <p className='my-4'>REACT</p>
              </div>
              
              <div className='shadow-md shadow-[#040c16] rounded-lg hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Node} alt="Node icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] rounded-lg hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Mongo} alt="Mongo icon" />
                  <p className='my-4'>MONGO DB</p>
              </div>
              
          </div>
      </div>
    </div>
  );
};

export default Skills;