
import { AtomN, AtomN2 } from "./AtomN";
import { useRecoilState, useRecoilValue } from "recoil";
import { useEffect } from "react";


import RecoilDiv2 from "./RecoilDiv2";



export default function RecoilDiv1() {
    const [n, setN] = useRecoilState(AtomN)
    const n2 = useRecoilValue(AtomN2)

    useEffect(()=>{
        if(!localStorage.getItem("n"))return; //개발자도구에서 저장된 id값 없을때
        setN(parseInt(localStorage.getItem("n")));
    },[]);


  return (
    <div className="flex flex-col justify-center items-center text-2xl font-bold">
       <div> 
        RecoilDiv1 : n={n}, n2={n2}
        
      </div>
      <RecoilDiv2/>
      {/* n을 num이름으로 div2에 보냄 n2=n2로, setN=setN 이름으로 */}
    </div>
  )
}
