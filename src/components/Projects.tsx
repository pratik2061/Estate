import React from 'react'
import { assets, projectsData } from '../assets/assets'
import { useState } from 'react'
import { useEffect } from 'react'
function Projects() {
    const [currentIndex,setCurrentIndex] = useState(0)
    const [cardsToShow,setCardToShow] = useState(1)
    useEffect(()=>{
        const updateCardsToShow = ()=>{
            if(window.innerWidth >= 1024){
                setCardToShow(projectsData.length)
            }else {
                setCardToShow(1)
            };}
            updateCardsToShow()
            window.addEventListener('resize', updateCardsToShow);
            return()=>   window.removeEventListener('resize', updateCardsToShow);
    },[])
    const next = () : void =>{
        setCurrentIndex((prev)=>( prev + 1) % projectsData.length)
    }
    const previous = () : void =>{
        setCurrentIndex((prev)=>(prev === 0 ? projectsData.length - 1 : prev - 1))
    }
  return (
    <div id='Projects' className=' container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 w-full overflow-hidden'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Projects <span className='underline underline-offset-4 decoration-1 font-light'>Completed</span></h1>
        <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Crafting Spaces , Building Legacies-Explore Our Portfolio.</p>

    {/* --------SLider Button -------- */}

        <div className='flex justify-end items-center mb-8'>
            <button onClick={previous} className='p-3 bg-gray-200 mr-2' aria-label='Previous Project'>
                <img src={assets.left_arrow} alt="previous" />
            </button>
            <button onClick={next} className='p-3 bg-gray-200 mr-2' aria-label='Next Project'>
                <img src={assets.right_arrow} alt="Next" />
            </button>
        </div>

        {/* --Project Slider Container -- */}
        <div className='overflow-hidden'>
            <div style={{transform : `translateX(-${(currentIndex * 100)/cardsToShow}%)`}} className='flex gap-8 transition-transform duration-500 ease-in-out'>
                {projectsData.map((project ,index : number)=>(
                    <div className='relative flex-shrink-0 w-full sm:w-1/4' key={index}>
                        <img src={project.image} alt={project.title} className='w-full h-auto mb-14' />
                        <div className='absolute left-0 bottom-5 right-0 flex justify-center'>
                            <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                            <h2 className='text-xl font-semibold text-gray-800'>{project.title}</h2>
                            <p className='text-gray-500 text-sm'>
                                {
                                    project.price 
                                } <span>{project.location}</span>
                            </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Projects