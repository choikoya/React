
import { useState, useEffect } from "react";
import RecoilDiv2 from "./RecoilDiv2";

export default function RecoilDiv1() {
    const[n, setN] = useState(0); //초기값 0
    const[n2, setN2] = useState();
    
    useEffect(()=>{
        setN2(n*2);
    }, [n])

  return (
    <div className="flex flex-col justify-center items-center text-2xl font-bold">
       <div> 
        RecoilDiv1 : n={n}, n2={n2}
        
      </div>
      <RecoilDiv2 num={n} n2={n2} setN={setN}/>
      {/* n을 num이름으로 div2에 보냄 n2=n2로, setN=setN 이름으로 */}
    </div>
  )
}
