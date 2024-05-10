import MyDiv2 from "./MyDiv2" ;
//1. useState를 import //실제화면에서 카운트 보이기 위해 hook사용과정 (리액트가 바뀐걸 감지하게)
import { useState } from "react";


export default function MyDiv() {
  //2. state변수 선언
  const [n, setN] = useState(0); //useState hook이 n이라는 변수를 관리함 변수초기값 0 

  const dname1 = 'vdiv1'; //div이름대신 변수사용
  const dname2 = 'vdiv2'; 
  const dname3 = 'vdiv3'; 
  
  let cnt = 0;

  const handleCount = ()=>{
    cnt = cnt + 1; //cnt ++;
    setN(n+1);
    console.log("handelCount = ", cnt);
  }

  return (
    // <div className="bg-yellow-200"> //배경색 
    // width 풀로해서 텍스트 크게
    
   // <div className="w-1/2 h-1/2 w-full text-9xl"> 
  //    Tailwind CSS
      <div className="flex flex-col p-10 m-10 w-2/3 h-2/3 justify-center  bg-lime-900 text-white">
        <div className="flex w-full h-20 border p-5 m-5 justify-end items-center">

          <span className="inline-flex p-5 mx-5" onClick={handleCount}> 
            💛
            </span>
          <span>
            {n}
            </span>
        </div>
        <div className="w-full">
          {dname1}
        </div>
        {/* a href 처럼 사용 */}
        <MyDiv2 dn1={dname1} dn2={dname2} dn3={dname3} /> 
        
      </div>
    
  )
}
