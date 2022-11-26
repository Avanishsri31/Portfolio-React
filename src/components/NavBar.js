import React from 'react'
import {useState} from 'react'
import {FaBars,FaTimes} from 'react-icons/fa' 
import {Link} from 'react-scroll'
const NavBar = () => {
const [nav, setNav] = useState(false);
    const links=[
        {
            id:1,
            link:'home'
        },
        {
            id:2,
            link:'about'
        },
        {
            id:3,
            link:'portfolio'
        },
        {
            id:4,
            link:'experience'
        },
        {
            id:5,
            link:'contact'
        }
    ]
  return (
    <div className='flex  justify-between  items-center w-full h-20 text-white fixed bg-gradient-to-r from-green-500 to-blue-400 px-4'>
        <div>
            <h1 className=" text-5xl font-signature ml-2">Atharva</h1>
        </div>

        <ul className='hidden md:flex'>
        {links.map(({id,link})=>{
                
                // note dont forget to write return keyword as you forgot the return keyword so it was not working vvip 
             return   <li 
                key={id} 
                className=' px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200 '>
                  <Link to={link} smooth duration={500}>  {link}</Link>
                    </li>
                
        })}
    
        <div onClick={()=>setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
          { nav?<FaTimes size={30}/>:<FaBars size={30}/>}
        </div>

        </ul>
     {nav && (<ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
            {/* simply do li*3 or li*n to get n number of li tages and you can do this with any tag it is very good shortcut */}
            {links.map(({id,link})=>{
                
                // note dont forget to write return keyword as you forgot the return keyword so it was not working vvip 
             return   <li 
                key={id} 
                className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                      <Link onClick={()=>setNav(!nav)}  to={link} smooth duration={500}>  {link}</Link>
                    </li>
                    
                
        })}
     
        </ul>)}
        
    </div>
  );
};

export default NavBar