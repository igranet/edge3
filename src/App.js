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
      <div className="h-[100vh] flex flex-row bg-black px-4 py-4">
      <div className="w-full my-auto text-left flex flex-col">
        <div className="text-9xl text-white ml-8 -mt-12"><EDGE3 /></div>
        <div className="text-2xl text-white ml-10 mt-4 italic">The next generation of Athletic Intelligence.</div>
      </div>
      <div className="w-3/4 flex flex-col my-auto text-center text-white">
        <div className="-mt-24">
         {
          tiles.map((key, idx)=>{
            return (
              <div className="flex flex-col text-left mt-6">
                <div className="text-8xl hover:text-red-400 hover:text-9xl cursor-pointer duration-500">{key?.titleHeader}</div>
                <div className="text-4xl">{key?.subTitle}</div>
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
        <div className="flex flex-col bg-white h-[100vh] py-24">
        <div ref={myRef}></div>
          <div className="mx-auto flex flex-col text-center text-4xl font-sans ">
          <span className="text-8xl">At EDGE3 we cut the noise. <br></br>We are built on <span className="italic">3</span> things. </span>
          <div className="flex flex-col mt-12 font-semibold text-gray-800 text-7xl w-2/3 mx-auto">
          <span>1. Shared Purpose</span>
          <span>2. Real Time Intelligence</span>
          <span>3.Unique insights and absolute prioritization
</span>
</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="text-8xl font-bold px-8">Who We Are.</div>
         <img src={about} />
      </div>
      <div className="flex flex-row mt-12 bottom-0 pt-4 pb-8 bg-black px-12">
        <div className="w-full text-8xl text-white">
        <EDGE3 />
          <div className="w-3/4 pl-4 mt-4  font-light text-white text-xl">
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
