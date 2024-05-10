import BallN from "./BallN";
import ButtonC from "../UI/ButtonC";
import { useState } from "react";


export default function Lotto() {
    const [tags, setTags] = useState(); //버튼누를때마다 값이 바뀌게 state변수가 들어가야함

    const handleOK = ()=>{
        let arr = [];

     
        while(arr.length < 7){ 
            let n = Math.floor(Math.random() * 45)+ 1;
            
            if(!arr.includes(n)) arr.push(n)
        }

        let tm = arr.map(item => <BallN n={item} key={item}/>); 
        // arr갯수만큼 tm생성(배열)안에 Ball이 들어있음 7개만들어짐

        tm.splice(6, 0, <span className="text-3xl mx-2" key="sp">+</span>);//+나오게끔
        // console.log(tags)

        
        setTags(tm); //Tm배열을 setTagsd에 넣음 버튼눌러질때마다 tm이 바뀜
        
    }


  return (
    <div className="w-full flex flex-col">
    {/* 로또번호 부분 */}
    <div className="m-10"> 
       {/* ball 있었던 부분에 useState변수 넣음*/}
       {tags}  
       {/* 버튼이 눌러질때마다 바뀌어야함 */}
       {/* <BallN n = {42}/> */}
    </div>
    <div>
       <ButtonC caption={'로또번호생성'} bcolor={'blue'} handleClick={handleOK}/>
       {/* 버튼을 컴포넌트로 일반화 시킨것 */}
    </div>
    </div>
  )
}
