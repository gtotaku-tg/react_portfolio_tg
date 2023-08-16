import React from "react";
import portfolioCSSHTML from "../assets/projectimg/portfolioCSSHTML.png";
import swiftexchange from "../assets/projectimg/swiftexchange.png";

function Projects() {
  return (
    <div
      name="project"
      className="w-full md:h-screen bg-[#8E9AAF] text-[#DEE2FF]  ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-[#DEE2FF] border-[#6096BA]">Projects</p>
          <p className="py-6"> Recent projects </p>
        </div>
     {/* container  */}
      <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {/* grid */}
        <div  style={{backgroundImage: `url(${portfolioCSSHTML})`}}
              className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div">
          {/* hover */}
          <div className="opacity-0 group-hover:opacity-100">
            <spam className="text-2xl font-bold text-[#DEE2FF] tracking-wider">
              Portfolio (CSS+HTML)
            </spam>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#8E9AAF] text-[#DEE2FF] font-bold text-lg">Project</button>
              </a>
              <a href="/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#8E9AAF] text-[#DEE2FF] font-bold text-lg">Codes</button>
              </a>
            </div>
          </div>
        </div>
        <div  style={{backgroundImage: `url(${swiftexchange})`}}
              className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div">
          {/* hover */}
          <div className="opacity-0 group-hover:opacity-100">
            <spam className="text-2xl font-bold text-[#DEE2FF] tracking-wider">
              SwiftExchange
            </spam>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#8E9AAF] text-[#DEE2FF] font-bold text-lg">Project</button>
              </a>
              <a href="/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#8E9AAF] text-[#DEE2FF] font-bold text-lg">Codes</button>
              </a>
            </div>
          </div>
        </div>

        {/* grid */}
        <div  style={{backgroundImage: `url(${portfolioCSSHTML})`}}
              className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div">
          {/* hover */}
          <div className="opacity-0 group-hover:opacity-100">
            <spam className="text-2xl font-bold text-[#DEE2FF] tracking-wider">
              Portfolio (CSS+HTML)
            </spam>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#8E9AAF] text-[#DEE2FF] font-bold text-lg">Project</button>
              </a>
              <a href="/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#8E9AAF] text-[#DEE2FF] font-bold text-lg">Codes</button>
              </a>
            </div>
          </div>
        </div>
        <div  style={{backgroundImage: `url(${swiftexchange})`}}
              className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div">
          {/* hover */}
          <div className="opacity-0 group-hover:opacity-100">
            <spam className="text-2xl font-bold text-[#DEE2FF] tracking-wider">
              SwiftExchange
            </spam>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#8E9AAF] text-[#DEE2FF] font-bold text-lg">Project</button>
              </a>
              <a href="/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#8E9AAF] text-[#DEE2FF] font-bold text-lg">Codes</button>
              </a>
            </div>
          </div>
        </div>

        {/* grid */}
        <div  style={{backgroundImage: `url(${portfolioCSSHTML})`}}
              className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div">
          {/* hover */}
          <div className="opacity-0 group-hover:opacity-100">
            <spam className="text-2xl font-bold text-[#DEE2FF] tracking-wider">
              Portfolio (CSS+HTML)
            </spam>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#8E9AAF] text-[#DEE2FF] font-bold text-lg">Project</button>
              </a>
              <a href="/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#8E9AAF] text-[#DEE2FF] font-bold text-lg">Codes</button>
              </a>
            </div>
          </div>
        </div>
        <div  style={{backgroundImage: `url(${swiftexchange})`}}
              className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div">
          {/* hover */}
          <div className="opacity-0 group-hover:opacity-100">
            <spam className="text-2xl font-bold text-[#DEE2FF] tracking-wider">
              SwiftExchange
            </spam>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#8E9AAF] text-[#DEE2FF] font-bold text-lg">Project</button>
              </a>
              <a href="/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#8E9AAF] text-[#DEE2FF] font-bold text-lg">Codes</button>
              </a>
            </div>
          </div>
        </div>

        
        
      </div>
    </div>
    </div>
  );
}

export default Projects;
