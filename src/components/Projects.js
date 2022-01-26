import data from './data.json';

function Projects() {
  return (
    <div className='projects'>
      <h1 className='text-2xl py-2'>0xreeko's Side Projects</h1>
      <div className='h-0.5 border-t-2 border-dotted mb-4'></div>
      <p className='mb-3'>
        {`$sideProjects ls`}<span className='italic'> {`-gridStylee`}</span>
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-y-4 gap-y-2 justify-items-center">
        {data.projects.map((project, idx) => {
          let projectImage = "portfolio/" + project.image;
          return (
            <div key={idx}>
              <div className='project group pb-6 grid hover:text-gray-200 hover:bg-opacity-70 transition transform'>
                <div className='group'>
                  <img className='w-auto h-16 md:w-auto md:h-20 group-hover:opacity-30 rounded transition transform' src={projectImage} alt={project.title} />
                  <a href={project.url}><h1 className='text-sm py-3 p-1'><span className='text-gray-100'>Link: </span>{project.title}</h1></a>
                </div>
                <div className="text-transparent group-hover:text-gray-50 absolute w-32 px-2 py-2 h-auto flex flex-wrap text-xs">
                  {project.category}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
