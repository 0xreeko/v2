import "./index.css";
import punkProfile from './img/punk4596.png';
import { useEffect, useState } from 'react';
import oneBg from './img/cyberpunkish-background.jpeg';
import twoBg from './img/neon-samuraipunk.jpeg';
import threeBg from './img/silhouette-ciy.jpeg';

import home from './img/dockIcons/homeIcon.png';
import personal from './img/dockIcons/persIcon.png';
import skills from './img/dockIcons/skillsIcon.png';
import contact from './img/dockIcons/contactIcon.png';
import projects from './img/dockIcons/sideIcon.png';

// import { home, personal, projects, skills, contact } from './components/DockIcons';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Personal from './components/Personal';
import Home from './components/Home';

function App() {
  // mudando img de fundo
  let changeBackground = () => {
    let randomNumber = Math.floor(Math.random() * background.length);
    let selectedBackground = background[randomNumber];
    setBackgroundImage(selectedBackground);
  }

  let changeStatus = () => {
    let randomNumber = Math.floor(Math.random() * status.length);
    let selectedStatus = status[randomNumber];
    setCurrentStatus(selectedStatus);
  }

  // init: bg vars
  let [backgroundImage, setBackgroundImage] = useState('null');
  let background = [oneBg, twoBg, threeBg];

  // init: nav vars
  let date = new Date();
  let [currentStatus, setCurrentStatus] = useState('');
  let status = ['Solidity Alquimista', 'Learning🤓', 'Working on DAOs👀', 'TradingView💻📈', 'Working out💪🏼', 'Reading📖📚', 'In a Lambo Urus🚗', 'In a Porsche Taycan🚗', '...'];

  // init: page x dock vars
  let [currentPage, setCurrentPage] = useState(Home);
  let [activePage, setActivePage] = useState('Home');

  useEffect(() => {
    changeBackground();
    changeStatus();
  }, []);

  let dockIcons = [
    { title: 'Home', icon: home, altText: 'home', component: Home },
    { title: 'About Me', icon: punkProfile, altText: 'about-me', component: About },
    { title: 'Personal Projects', icon: personal, altText: 'personal-projects', component: Personal },
    { title: 'Projects', icon: projects, altText: 'projects', component: Projects },
    { title: 'Skills', icon: skills, altText: 'skills', component: Skills },
    { title: 'Contact', icon: contact, altText: 'contact', component: Contact },
  ]

  return (
    <div className="backdrop flex flex-col w-full min-h-screen text-white bg-center bg-cover bg-no-repeat bg-fixed" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="header bg-black text-sm overflow-clip flex items-center justify-between px-6 h-7 shadow-lg" key={1}>
        <div className="flex px-3 py-1 text-white rounded-full space-x-0 items-center">
          <div className="font-semibold">Portfolio</div>
          {["File", "Edit", "View", "Go", "Help"].map((item, idx) => (
            <div className="px-3 hidden sm:block" key={idx}>{item}</div>
          ))}
        </div>
        <div className="flex text-xs space-x-6 items-baseline font-mono">
          <div>{`Jan ${date.getDate()}, 11:11`}</div>
          <div className='flex text-clip'>
            <span>{`User:0xreeko `}</span>
            <span className="ml-2 hidden md:flex">| Status: {currentStatus}</span></div>
        </div>
      </div>
      <div className='flex min-h-full sm:min-h-0 flex-col-reverse py-6 lg:py-12 md:flex-grow'>

        <div className="sidebar absolute bottom-0 md:top-[12%] md:right-auto md:bottom-auto flex w-auto sm:flex-col md:w-20  justify-center md:items-center bg-black bg-opacity-60 rounded-t-2xl md:rounded-tl-none md:rounded-r-2xl py-1 md:py-5">
          <div className="sidebar">
            <div className="flex md:flex-col items-center md:space-y-6">
              {
                dockIcons.map((item, idx) => (
                  <div onClick={() => { setCurrentPage(item.component); setActivePage(item.title) }} className="flex sm:pb-2 transition transform items-center hover:bg-slate-200 hover:bg-opacity-10 rounded p-1" key={idx}>
                    <div className="rounded-full h-9 w-9 sm:h-14 sm:w-14 flex items-center justify-center bg-gradient-to-tr from-rose-500 to-indigo-500 overflow-hidden">
                      {item.altText === 'about-me' ?
                        (<img src={item.icon} alt={item.altText} />) :
                        (<img className='w-9 h-9  sm:w-14 sm:h-14' src={item.icon} alt={item.altText} />)}
                    </div>
                    {activePage === item.title ? <span className='absolute h-1 w-1 rounded-full bg-white  md:-left-1 md:bottom-auto left-[45%] -bottom-0.5'></span> : null}
                  </div>
                ))
              }
            </div>
          </div>
        </div>

        <div className="md:opacity-70 sm:absolute cursor-default sm:bottom-4 sm:right-4 italic opacity-0 text-sm">Developed by Twitter: @0xreeko</div>
        <div className="md:absolute md:top-16 md:bottom-32 mx-auto right-[5%] md:right-auto md:translate-x-1/2 mb-6">

          <div className="terminal w-[300px] h-[420px] sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[450px] border border-opacity-10 rounded-t-lg hover:shadow-2xl hover:border-opacity-50 transition transform delay-100 overflow-hidden">
            <div className="header px-3 h-6 bg-black flex items-center justify-between shadow-xl">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 bg-red-500 rounded-full cursor-not-allowed"></div>
                <div className="h-3 w-3 bg-amber-500 rounded-full"></div>
                <div className="h-3 w-3 bg-green-500 rounded-full"></div>
              </div>
              <p className='font-bold text-gray-300'>Terminal</p>
              <p className=''>v0.49.1</p>
            </div>
            <div className="terminal-main relative w-full h-full">
              <div className="absolute w-full bg-gradient-to-tr from-fuchsia-500 to-rose-500 h-full opacity-60">
              </div>
              <div className="relative px-4 h-full overflow-auto pb-12 font-mono">
                {currentPage}
              </div>

            </div>

          </div>

          {/* <div className='min-w-full min-h-full flex bg-sky-50'>
          <div className="launchbar text-2xl inset-x-0 flex fixed bottom-4 items-center justify-center h-14 ">
          <div className="content shadow flex space-x-4">
          <div className="">Main</div>
          <div className="">About Me</div>
          <div className="">Skills</div> 
          <div className="">Projects</div>
          <div className="">Contact</div>
          </div>
          <div className="bg absolute px-72 w-full h-full">
          <div className="bg-white bg-opacity-30 w-full h-full rounded-xl"></div>
          </div>
          </div>
        </div> */}
        </div>
      </div>
    </div>

  );
}

export default App;
