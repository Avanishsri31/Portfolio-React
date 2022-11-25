import React from 'react'
import { FaGithub,FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsfillPersonLinesfill} from 'react-icons/bs'
import { Fragment,Component } from 'react'
const SocialLinks = () => {
    const links=[
        {
            id:1,
            child:{
                <Fragment>
                Linkedin <FaLinkedin size={30}/>
                <Fragment/>
            }
            ,
            href:'https://linkedin.com',
            sytle:'rounded-tr-md'
         },
        {
            id:2,
            child:{
               <Fragment>
                Github <FaGithub size={30}/>
                </Fragment>},
            href:'https://github.com/AtharvaBhatnagar',
            sytle:'rounded-tr-md'
        
        },
        {
            id:3,
            child:{
                <Fragment>
                Mail <HiOutlineMail size={30}/>
                </Fragment>},
            href:'mailto:foo@gmail.com',
            sytle:'rounded-tr-md'
        
        },
        {
            id:4,
            child:{
                <Fragment>
                Resume <BsfillPersonLinesfill size={30}/>
                </Fragment>},
            href:'/resume.pdf',
            sytle:'rounded-tr-md',
            download:true
        
        }
    ]
  return (
    <div className='hidden lg:flex-col top-{35%} left-0 fixed'>
        <ul>
            {links.map(({id,child,style,download,href})=>{
  return <li key={id} className='{ flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-100px] hover:rounded-md duration-300 bg-gray-500+""+style}'>
  <a href={href} className=' flex justify-between items-center w-full text-white' download={download} target="_blank" rel='noreffer' >
    
    {child}
    
  </a>
</li>
            })}
          
        </ul>
    </div>
  )
}

export default SocialLinks