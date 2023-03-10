import { useState } from "react"

const EDGE3 = ()=>{
    const [hover3, setHover3] = useState(false)
    return (
        <div onMouseEnter={()=>{setHover3(true)}} onMouseOut={()=>{setHover3(false)}} className={`cursor-pointer`}>
            <span className={`cursor-pointer ${hover3 && " rounded-sm "} duration-500 px-2 py-1 transition-all w-full`}>edge</span><span className={`${hover3 && " text-red-400 "} duration-500 px-2 py-1 transition-all`}>3</span>
        </div>

    )
}
export default EDGE3