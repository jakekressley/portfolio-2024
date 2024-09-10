import React from 'react'
import { ExpandableCard } from './ui/ExpandableCard'

const Projects = () => {
  return (
    <div className='py-32' id='projects'>
        <h1 className='font-bold text-4xl md:text-5xl text-center mb-16'>A small sample of <span className="text-purple">my projects</span></h1>
      <ExpandableCard />
    </div>
  )
}

export default Projects