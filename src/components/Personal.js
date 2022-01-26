function Personal() {
  return (
    <div className='personal'>
      <h1 className='text-2xl py-2'>0xreeko's Projects</h1>
      <div className='h-0.5 border-t-2 border-dotted mb-4'></div>
      <div className="terminal-display space-y-4">
        <div className='project'>
          <h1> <span className='font-bold text-sky-500'>$</span> yarn <span className='italic'> init projects -y</span></h1>
          <p>[INFO] Fetching  Project #1 data..</p>
          <p>[WARNING] You don't have authorisation. Reverting request!</p>
          <p>[INFO] Currently unable to fetch data.</p>
          <p>[INFO] Fetching Project #2 data..</p>
          <p>[INFO] Fetching Project #2 data..</p>
          <p>[WARNING] You don't have authorisation. Reverting request! </p>
          <p>[WARNING] You have exceeded the block gas limit! </p>
          <p>[INFO] Currently unable to fetch data.</p>
          <p>{`$ `}<span className='text-black italic font-medium opacity-80'>Autosuggestion: mkdir Project #1 && mkdir Project #2👀</span></p>
        </div>
      </div>
    </div>
  )
}

export default Personal
