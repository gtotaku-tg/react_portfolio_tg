import React from "react";


const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#8E9AAF] text-[#DEE2FF]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#6096BA]">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
        
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Tian Guo, nice to meet you. Look around.
            </p>
          </div>
          <div>
            <p>
              I used be a photographer, but now I'm a web developer. I love to create things, and I love to learn new things. I'm currently learning React and Next.js. I'm also learning how to use Tailwind CSS to make my website look better.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;
