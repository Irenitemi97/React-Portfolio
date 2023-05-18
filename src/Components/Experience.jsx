import React from 'react'
import html from '../asset/html.png'
import css from '../asset/css.png'
import js from '../asset/js.jpeg'
import reactimg from '../asset/react.png'
import angular from '../asset/angular.png'
import tailwind from '../asset/tailwind.jpeg'
import git from '../asset/gitimg.png'

const Experience = () => {

    const technologies = [
        {
            id:1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id:2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id:3,
            src: js,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id:4,
            src: reactimg,
            title: 'ReactJS',
            style: 'shadow-sky-300'
        },
        {
            id:5,
            src: angular,
            title: 'Angular',
            style: 'shadow-red-500'
        },
        {
            id:6,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-700'
        },
        {
            id:7,
            src: git,
            title: 'GitHub',
            style: 'shadow-black'
        },
        
    ]
  return (
    <div name="experience" className='w-full md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-gray-800 p-2'>Experience</p>
                <p className='py-6'>These are the technologies I work with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 px-12 py-8 text-center sm:px-0'>

                {
                    technologies.map(({ id, src, title, style }) =>(
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        <img src={src} alt=""  className='w-20 mx-auto'/>
                        <p mt>{title}</p>
                    </div>
                    )
                     )
                }
               
            </div>
        </div>
    </div>
  )
}

export default Experience