import React from 'react'
import{HiArrowNarrowRight} from 'react-icons/hi'
import himage from "../assets/projectimg/himage.jpeg";




const Home = () => {
    return (
      <div name='home' className='w-full h-screen bg-[#8E9AAF]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <div className='realtive mx-auto items-end'>
            
          </div>
          <img src={himage} alt="logo" className='shadow-md shadow-[#485565] w-[150px] h-[200px] rounded-lg ' />
          <p className='text-[#bdd5e6] mt-3'>   Hi, my name is </p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#A3CEF1]'>  Tian Guo </h1>
          
          <p className='text-[#DEE2FF] py-4 max-w-[700px]'>
            I’m a full-stack developer. Currently, I’m focused on
            building responsive full-stack web applications.
          </p>
          
          <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#6096BA] hover:border-[#6096BA]'>
              View All Project
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  };
  
export default Home 