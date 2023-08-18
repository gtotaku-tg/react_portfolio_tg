import React from "react";
import portfolioCSSHTML from "../assets/projectimg/portfolioCSSHTML.png";
import swiftexchange from "../assets/projectimg/swiftexchange.png";
import booksearch from "../assets/projectimg/booksearch.png";
import texteditor from "../assets/projectimg/texteditor.png";
import dicandtran from "../assets/projectimg/dicandtran.png";
import Ecommerce from "../assets/projectimg/Ecommerce.png";
import finalMusic from "../assets/projectimg/finalMusicApp.png";

function Projects() {
  return (
    <div
      name="projects"
      className="w-full md:h-screen bg-[#8E9AAF] text-[#DEE2FF]  ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-[#DEE2FF] border-[#76b8e4]">
            Projects
          </p>
          <p className="py-6"> Recent projects </p>
        </div>
        {/* container  */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* grid */}
          <div
            style={{ backgroundImage: `url(${finalMusic})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <spam className="text-2xl font-bold text-[#DEE2FF] tracking-wider">
                Music and chat
              </spam>
              <div className="pt-8 text-center">
                <a href="https://musicapp-g7-8464089b4e0f.herokuapp.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#8E9AAF] text-[#DEE2FF] font-bold text-lg">
                    Project
                  </button>
                </a>
                <a href="https://github.com/gtotaku-tg/MusicApp">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#8E9AAF] text-[#DEE2FF] font-bold text-lg">
                    Codes
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid */}
          <div
            style={{ backgroundImage: `url(${portfolioCSSHTML})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <spam className="text-2xl font-bold text-[#DEE2FF] tracking-wider">
                Portfolio (CSS+HTML)
              </spam>
              <div className="pt-8 text-center">
                <a href="https://gtotaku-tg.github.io/Portfolio-Homepate_TG/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#8E9AAF] text-[#DEE2FF] font-bold text-lg">
                    Project
                  </button>
                </a>
                <a href="https://github.com/gtotaku-tg/Portfolio-Homepate_TG">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#8E9AAF] text-[#DEE2FF] font-bold text-lg">
                    Codes
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${swiftexchange})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <spam className="text-2xl font-bold text-[#DEE2FF] tracking-wider">
                SwiftExchange
              </spam>
              <div className="pt-8 text-center">
                <a href="https://swiftexchange-c3d0475c88b3.herokuapp.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#8E9AAF] text-[#DEE2FF] font-bold text-lg">
                    Project
                  </button>
                </a>
                <a href="https://github.com/WenboNi/MarketPlace">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#8E9AAF] text-[#DEE2FF] font-bold text-lg">
                    Codes
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* grid */}
          <div
            style={{ backgroundImage: `url(${booksearch})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <spam className="text-2xl font-bold text-[#DEE2FF] tracking-wider">
                Book Search Engine
              </spam>
              <div className="pt-8 text-center">
                <a href="https://book-engine-tg-fecb6ddc4a1b.herokuapp.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#8E9AAF] text-[#DEE2FF] font-bold text-lg">
                    Project
                  </button>
                </a>
                <a href="https://github.com/gtotaku-tg/Book_Search_Engine">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#8E9AAF] text-[#DEE2FF] font-bold text-lg">
                    Codes
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${texteditor})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <spam className="text-2xl font-bold text-[#DEE2FF] tracking-wider">
                JATE Text Editor
              </spam>
              <div className="pt-8 text-center">
                <a href="https://floating-escarpment-58734-4b36e92841a4.herokuapp.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#8E9AAF] text-[#DEE2FF] font-bold text-lg">
                    Project
                  </button>
                </a>
                <a href="https://github.com/gtotaku-tg/Text_Editor">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#8E9AAF] text-[#DEE2FF] font-bold text-lg">
                    Codes
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* grid */}
          <div
            style={{ backgroundImage: `url(${dicandtran})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <spam className="text-2xl font-bold text-[#DEE2FF] tracking-wider">
                Dic and Trans
              </spam>
              <div className="pt-8 text-center">
                <a href="https://phillipkujawa.github.io/dictionary-translator-project1/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#8E9AAF] text-[#DEE2FF] font-bold text-lg">
                    Project
                  </button>
                </a>
                <a href="https://github.com/gtotaku-tg/dictionary-translator-project1">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#8E9AAF] text-[#DEE2FF] font-bold text-lg">
                    Codes
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Ecommerce})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <spam className="text-2xl font-bold text-[#DEE2FF] tracking-wider">
                E-commerce Back End
              </spam>
              <div className="pt-8 text-center">
                <a href="https://watch.screencastify.com/v/y0WcKAdD4noooBj2d8dP">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#8E9AAF] text-[#DEE2FF] font-bold text-lg">
                    Project
                  </button>
                </a>
                <a href="https://github.com/gtotaku-tg/E-commerce_back_end">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#8E9AAF] text-[#DEE2FF] font-bold text-lg">
                    Codes
                  </button>
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
