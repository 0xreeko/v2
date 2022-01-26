import data from './data.json';

function Contact() {
  return (
    <div className='contact'>
      <h1 className='text-2xl py-2'>Contact Me</h1>
      <div className='h-0.5 border-t-2 border-dotted mb-4'></div>
      <p className='mb-3'>$contact ls <span className='italic'>-l</span></p>
      <div className="details">
        {data.contact.map((contact, idx) => {
          return (
            <div className='detail' key={idx}>
              <h1 className='text-xl py-2'>{contact.platform}</h1>
              <p className='text-md'>
                {`-> ${contact.username}`}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Contact
