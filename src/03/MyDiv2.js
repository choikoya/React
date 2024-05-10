
import MyDiv3 from "./MyDiv3"

export default function MyDiv2(probs) { //넘어오는걸 한번에 받기위해 probs
    return (
    <div className="flex flex-col p-10 m-10 w-3/4 h-3/4  bg-lime-700 text-white">
        
        {`${probs.dn1} > ${probs.dn2}`}
        {/* probs.속성 > 속성명 그대로 쓰기위해 구조분해 */}
        <MyDiv3  dn1={probs.dn1} dn2={probs.dn2} dn3={probs.dn3}/> 
        
       
    </div>      
  
    )}
