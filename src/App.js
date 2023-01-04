import logo from './logo.svg';
import './App.css';
import EDGE3 from './components/Edge3';
import {BsArrowDownCircle} from "react-icons/bs"
function App() {

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
  return (
    <div className='w-full h-screen   overflow-y-scroll'>
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
                <div className="text-8xl hover:text-red-400 cursor-pointer duration-500">{key?.titleHeader}</div>
                <div className="text-4xl">{key?.subTitle}</div>
              </div>
            )
          })
         }
        </div>

      </div>
  
      </div>
      <BsArrowDownCircle className="text-white text-6xl animate-bounce duration-1000 z-50 -mt-24 mx-auto" />
      </div>
      <div>
        <div className="flex flex-col bg-white h-[100vh] py-24">
          <div className="mx-auto flex flex-col text-center text-4xl font-sans ">
          <span>At EDGE3 we cut the noise. We do 3 things. </span>
          <span>1. Connect</span>
          <span>2. Grow</span>
          <span>3. Expand</span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
