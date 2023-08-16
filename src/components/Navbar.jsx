import React, {useState} from 'react';
import {FaGithub, FaLinkedin, FaTimes, FaBars} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/skillsets/logo.png';
import { Link } from 'react-scroll';


const Navbar = () => {

const[nav, setNav] = useState(false)
const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#8E9AAF] text-[#DEE2FF]'>
        <div>
            <img src={Logo} alt="logo" className='w-[100px] h-[50px] rounded-lg' />
        </div>

        {/* navmenu */}
        <ul className='hidden md:flex' >
            <li>
                <Link to ='home' smooth={true} duration={500}> 
                    Home 
                </Link>
            </li>
            <li>
                <Link to ='about' smooth={true} duration={500}> 
                    About 
                </Link>
            </li>
            <li>
                <Link to ='skills' smooth={true} duration={500}> 
                    Skills 
                </Link>
            </li>
            <li>
                <Link to ='works' smooth={true} duration={500}> 
                Projects
                </Link>
            </li>
            <li>
                <Link to ='contact' smooth={true} duration={500}> 
                    Contact 
                </Link>
            </li>
        </ul>
        
    {/* sidelist */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* mobile menu */}
        <ul className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#8E9AAF] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to ='home' smooth={true} duration={500}> 
                    Home 
                </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to ='about' smooth={true} duration={500}> 
                    About 
                </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to ='skills' smooth={true} duration={500}> 
                    Skills 
                </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to ='projects' smooth={true} duration={500}> 
                Projects
                </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to ='contact' smooth={true} duration={500}> 
                    Contact 
                </Link></li>
        </ul>
    {/* icons  */}
        <ul className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#A1CCA5]'>
                <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/tian-guo04/">
                    Linkedin <FaLinkedin size={30} /> 
                </a>
            </li> 
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black'>
                <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/gtotaku-tg">
                    Github <FaGithub size={30} /> 
                </a>
            </li> 
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#A1CCA5]'>
                <a className='flex justify-between items-center w-full text-gray-300' href="mailto:gtotaku@live.com">
                    Mail <HiOutlineMail size={30} /> 
                </a>
            </li> 
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#709775]'>
                <a className='flex justify-between items-center w-full text-gray-300' href="https://docs.google.com/document/d/16TZyCVZYqASVo-cqxRj9hvpN0SNmiyNS/edit?usp=sharing&ouid=106756831962986098517&rtpof=true&sd=true">
                    Resume <BsFillPersonLinesFill size={30} /> 
                </a>
            </li> 
        </ul>
    </div>
  )
}

export default Navbar 