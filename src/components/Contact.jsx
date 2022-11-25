import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className=' w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
        <div className=' flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className=' pb-8 '>
                <p className=' t-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className=' py-6'>Submit the form below to get in touch with me </p>
            </div>
            <div className=' flex justify-center items-center'>
                <form method='POST' action="https://getform.io/f/111fe2e5-391a-4b53-9916-8fd0e92653a0" className=' flex flex-col w-full md:w-1/2'>
                    <input type="text" name='name' placeholder='Enter your name' className=' p-2 bg-transparent border-2 text-white rounded-md focus:outline-none'/>

                    <input type="email" name='email' placeholder='Enter your email' className=' my-4 p-2 bg-transparent border-2 text-white rounded-md focus:outline-none'/>
                    <textarea name="message" placeholder='Enter your message' rows="10" className=' p-2 bg-transparent border-2 rounded-none text-white focus:outline-none'></textarea>
                    <button className=' text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 my-8 mx-auto flex-items-center rounded-md hover:scale-110 duration-300'>Let's Connect</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact