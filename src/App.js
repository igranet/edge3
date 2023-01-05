import logo from './logo.svg';
import './App.css';
import EDGE3 from './components/Edge3';
import {BsArrowDownCircle} from "react-icons/bs"
import { useRef } from 'react';
import about from "./about.png"
function App() {
  const myRef = useRef(null);

  const scrollToRef = (ref) => ref.current.scrollIntoView({ behavior: 'smooth' });
  const tiles = [
    {
      titleHeader: "730 Million",
      subTitle:"NIL BRAND DEALS"
    },
    {
      titleHeader: "6.5 Million",
      subTitle:"Advisor Network Reach"
    },
    {
      titleHeader: "1.5 Million",
      subTitle:"Athlete Reach"
    }, 
   
  ]
  const footOpt = [
    {
      title: "About"
    },
    {
      title: "Contact"
    },
    {
      title:"Advisory Services"
    }, {
      title: "Advisory Network"
    }
  ]
  return (
    <div className='w-full h-screen   overflow-y-scroll relative'>
      <div className="flex flex-col">
      <div className="h-[100vh] flex md:flex-row flex-col bg-black px-4 py-4">
      <div className="w-full my-auto text-left flex flex-col">
        <div className="md:text-9xl text-6xl text-white ml-8 md:-mt-12"><EDGE3 /></div>
        <div className="text-2xl text-white ml-10 mt-4 italic">The next generation of Athletic Intelligence.</div>
      </div>
      <div className="w-3/4 flex flex-col my-auto text-center text-white">
        <div className="md:-mt-24 ">
         {
          tiles.map((key, idx)=>{
            return (
              <div className="flex flex-col text-left mt-6">
                <div className="md:text-8xl text-6xl hover:text-red-400 hover:text-9xl cursor-pointer duration-500">{key?.titleHeader}</div>
                <div className="md:text-4xl text-2xl">{key?.subTitle}</div>
              </div>
            )
          })
         }
        </div>

      </div>
  
      </div>
      <BsArrowDownCircle onClick={()=>{console.log("Poop"); scrollToRef(myRef)}} className="text-white cursor-pointer text-6xl animate-bounce duration-1000 z-50 -mt-24 mx-auto" />
      </div>
      <div>
        <div className="flex flex-col bg-white h-full py-24">
        <div ref={myRef}></div>
          <div className="mx-auto flex flex-col text-center text-4xl font-sans ">
          <span className="md:text-8xl text-4xl">At EDGE3 we cut the noise. <br></br>We are built on <span className="italic">3</span> things. </span>
          <div className="flex flex-col text-red-700 mt-12 font-semibold text-gray-800 md:text-7xl text-3xl w-2/3 mx-auto">
          <span>1. Shared Purpose</span>
          <span>2. Real Time Intelligence</span>
          <span>3.Unique insights and absolute prioritization
</span>
</div>
          </div>
          <div className="flex flex-col md:mt-24 mt-12">
        <div className="md:text-8xl text-4xl font-bold px-8 flex justify-between"><span>Who We Are.</span><span className="text-right text-xl my-auto"><BsArrowDownCircle /></span></div>
         <img src={about} />
      </div>
        </div>
        
      </div>
    
      <div className="flex flex-row mt-12 bottom-0 pt-4 pb-8 bg-black px-12">
        <div className="w-full md:text-8xl text-4xl text-white">
        <EDGE3 />
          <div className="md:w-3/4 w-full pl-4 mt-4  font-light text-white md:text-xl text-sm">
        EDGE3 is creating the first 
        Athlete Management System 
        with all the tools necessary for 
        athlete success; artificial intelligence, 
        1 on 1 coaching, data aggregation and enrichment, 
        powerful technology, and an experienced team. 
        A platform for athletes, by athletes.
        </div>
        </div>
        <div className="text-white my-auto text-right flex flex-col text-8xl w-full">
       

          <div classNae="flex flex-col">
              {
                footOpt.map((key, idx)=>{
                  return (
                    <div className="text-3xl py-2 hover:text-red-400 duration-400 cursor-pointer">{key?.title}</div>
                  )
                })
              }
          </div>
        </div>

      </div>
      

    </div>
  );
}

export default App;
