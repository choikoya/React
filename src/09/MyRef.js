import ButtonC from "../UI/ButtonC";
import { useState, useEffect, useRef } from "react";


export default function MyRef() {
let cVal = 0;
const [sVal , setSVal] = useState(0);
const rVal = useRef(0);

const x1 = useRef();
const x2 = useRef();
const x3 = useRef();

//컴포넌트 변수 증가
const handleClickComp =()=>{
    cVal++;
    console.log("cVal=",cVal);

}

const handleClickState=()=>{
    console.log("sVal=",sVal);
    setSVal(sVal+1);

}
const handleClickRef =()=>{
    rVal.current = rVal.current+1;
    console.log("rVal=",rVal)

}

const handleClick = ()=>{


    if(!x1.current.value){
        alert('값을 입력하라');
        x1.current.focus();
        return;
    }
    
    if (!x2.current.value) {
        alert('값을 입력하세요.') ;
        x2.current.focus();
        return;
      }

      console.log("x1 =", x1.current.value);
      console.log("x2 =", x2.current.value);

      x3.current.value = parseInt(x1.current.value) + parseInt(x2.current.value) ;


}

//변수 변경시
useEffect(()=>{
    console.log("sVal=", sVal);
},[sVal]);

  return (
    <div className="flex flex-col justify-center items-center ">
        <div className="h-20 p-5 m-5 font-bold text-xl">
            <span className="text-red-700">컴포넌트 변수 : {cVal}</span>
            <span className="mx-5 text-blue-700">state 변수 : {sVal}</span>
            <span className="text-green-700">ref 변수 : {rVal.current}</span>
        </div>
        <div>
            <span>
                <ButtonC
                caption="컴포넌트 변수"
                            bcolor="blue"
                            handleClick={handleClickComp}/>
            </span>
            <span>
                <ButtonC
                caption="state 변수"
                            bcolor="blue"
                            handleClick={handleClickState}/>
                            </span>
            <span>
                <ButtonC
                            caption="ref 변수"
                            bcolor="blue"
                            handleClick={handleClickRef}/>
                            </span>

        </div>
        <div className="w-4/5 bg-slate-200 grid grid-col-5 gap-2 m-10 p-10">
            <input type="number" id="txt1"
                    ref={x1}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg
                  text-center text-xl
                 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
            <span className="inline-flex justify-center items-center ">+</span>
            <input type="number" id="txt2" 
                    ref={x2}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg
                    text-center text-xl 
                   focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
            <ButtonC caption=" = "
                    bcolor="orange"
                    handleClick={handleClick}/>
            <input type="number" id="txt3" 
                    ref={x3}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg
                    text-center text-xl
                   focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" readOnly/>
        </div>
    </div>
  )
}
