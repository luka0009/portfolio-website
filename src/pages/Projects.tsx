import { projects } from '../data/projects';
import Project from '../components/Project';

export default function Projects() {
  return (
    <div className='mb-[-200px] text-center
     bg-[#1F0A3A]
     bg-gradient-to-r from-[#1F0A3A] via-black to-[#1F0A3A]
      p-10'>
     <div className='mt-[-40px] md:mt-[-40px] lg:mt-[-20px] header-container'>
      <span className='text-[27px] md:text-[48px] text-white'> 
      <br />
      Personal Projects 
      </span>
      {/* <p className='text-rose-600 text-[33px] mt-5'>Warning: MERN apps will take about a minute to load</p> */}
      </div>
     <hr className='mt-7 -mb-6'/>
      <div className='projects-div mx-[50px] my-16 grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-14 md:gap-y-20 lg:gap-y-24'>
        {projects.map((project) => {
            return <Project key={project.id} project={project}/>
        })}
      </div>
    </div>
  )
}
