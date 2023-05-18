import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-800'>About</p>
            </div>
            <p className='text-xl mt-2'>
            Hello, I'm <span className='font-bold'> Adeniran Sulyman Adebayo</span>. <br />
            In this era of modern scientific technology, web development has become a driving force, and it perfectly aligns with my passion for delivering exceptional front-end user experiences. I am constantly motivated to explore the ever-evolving world of web development, combining my curiosity with a strong desire to create visually stunning and immersive digital experiences.
            </p>
            <br />
            <p className='text-xl'>
            Welcome to my portfolio, where you'll discover a showcase of my finest work. Take a moment to explore and immerse yourself in the world of captivating web design. I look forward to connecting with you and bringing your ideas to life.
            </p>
        </div>
    </div>
  )
}

export default About