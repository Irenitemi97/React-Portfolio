import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-800'>About</p>
            </div>
            <p className='text-xl mt-20'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At magnam, accusantium esse consectetur quae molestiae nisi est maxime qui commodi architecto, ipsam sequi? Et alias mollitia dolorem natus asperiores sapiente, eaque quisquam ratione in soluta atque, qui neque delectus excepturi quibusdam at possimus, doloremque fugiat incidunt architecto ad consequatur eveniet?
            </p>
            <br />
            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae minima maxime ipsam rem molestiae. Quos quis cumque maxime dignissimos labore ratione recusandae delectus, vitae nulla fugiat mollitia corrupti debitis iusto.
            </p>
        </div>
    </div>
  )
}

export default About