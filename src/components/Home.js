function Home() {
  return (
    <div className='home'>
      <h1 className='text-2xl py-2'>0xreeko's Terminal <span className="text-xs">(Scrollable: Activated)</span></h1>
      <div className='h-0.5 border-t-2 border-dotted mb-4'></div>
      <div className="terminal-display space-y-0">
        {/* content deya */}
        <p> <span className='font-bold text-sky-500'>$</span> yarn <span className='italic'> init system -y</span></p>
        <p>[INFO] Welcome my young padawan!</p>
        <p>[INFO] You are currently in the root directory.</p>
        <p>[TIP] reload = random status message</p>
        <p>[TIP] reload = random background image</p>
        <p>[INFO] Fetching data...</p>
        <p>[SUCCESS] Data found!</p>
        <p>[DATA]: {`[{`}
          <br />
          "alias": "0xreeko",
          <br />
          "desc": "I'm an investor and developer that is
          currently working on projects that contribute to the
          cryptosphere."
          {`}]`}
        </p>
        <p>[INFO] Display message attached to data?<span className='italic text-gray-100'>(y/n): </span>y</p>
        <p>[MESSAGE] For more information, have a look around the system, my
          young padawan.
        </p>
        <p>...</p>
        <p>[WARNING] ...:Terminal forcefully disconnected:...</p>
      </div>
    </div>
  )
}

export default Home
