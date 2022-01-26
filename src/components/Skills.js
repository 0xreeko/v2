import data from './data.json';
function Skills() {

  return (
    <div className='skills'>
      <h1 className='text-2xl py-2'>0xreeko's Skills <span className="text-xs">(Tools I frequently use)</span></h1>
      <div className='h-0.5 border-t-2 border-dotted mb-4'></div>
      <p className='mb-3'>$skillsTools ls <span className='italic'>-gridStylee</span></p>
      <div className="grid grid-cols-3">
        {data.skills.map((skill, idx) => {
          let skillIcon = "techIcons/" + skill.icon;
          return (
            <div key={idx}>
              <div className='skill'>
                <img className="h-12 w-auto" src={skillIcon} alt={skill.altText} />
                <p className='text-sm py-2'>{skill.title}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills
