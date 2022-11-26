import React from 'react'
import html from '../assets/experience/html.png'
import css from '../assets/experience/css.png'
import javascript from '../assets/experience/javascript.png'
import reactImage from '../assets/experience/reactImage.png'
import nextjs from '../assets/experience/nextjs.png'
import github from '../assets/experience/github.png'
import tailwind from '../assets/experience/tailwind.png'
import graphql from '../assets/experience/graphql.png'
const Experience = () => {
    const techs=[
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:javascript,
            title:'JAVASCRIPT',
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src:reactImage,
            title:'REACT',
            style:'shadow-blue-600'
        },
        {
            id:5,
            src:tailwind,
            title:'TailWIND',
            style:'shadow-sky-400'
        },
        {
            id:6,
            src:nextjs,
            title:'NEXTJS',
            style:'shadow-white'
        },
        {
            id:7,
            src:graphql,
            title:'GRAPHQL',
            style:'shadow-pink-400'
        },
        {
            id:8,
            src:github,
            title:'GITHUB',
            style:'shadow-gray-400'
        },
    ]
  return (
    <div name="experience" className=' pt-56  h-screen bg-gradient-to-b from-gray-800 to-black w-full  text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div>
                <p className=' text-4xl font-bold border-b-4 border-gray-500  inline'>
                    Experience
                </p>
                <p className='py-6'>
                    These are the technologies I've worked with
                </p>
            </div>
            <div className=' w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                 {
                    techs.map(({id,src,title,style})=>{
                        return <div key={id} 
                        className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg} ${style}`}>
                        <img src={src} alt="" className=' w-20 mx-auto' />
                        <p className=' mt-4'>{title}</p>
                    </div>
                    })
                 }
                
            </div>
        </div>
    </div>
  )
}

export default Experience