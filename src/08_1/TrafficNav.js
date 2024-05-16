import ButtonC from "../UI/ButtonC";

//4. 선택에 따라 화면 다시 뿌리려면 state 사용
import { useState } from "react";


export default function TrafficNav({title, c, sel, setSel}) {
    // const title = '대분류';
    // const c = ['차대사람','차대차','차량단독','철길건널목'];
    // //5.선택될때마다 색바뀌게
    // const [sel, setSel] = useState();


    console.log("nav", c)
    // 2. cTag만들어서 버튼으로 뿌려줌
    const cTag = c.map((item) =><ButtonC caption={item} //c.map하면 차대차~건널목까지 c맵을 다 돌아서 item의 값을 가져옴 
                                            key={item}
                                            //7.클릭했을때 색 변경
                                            bcolor={sel === item ? 'orange':'blue'}
                                            handleClick={() => handleSelect(item)} />);


    // 3. 버튼 눌러진경우
    const handleSelect =(item)=>{
        console.log(item) //변수이름은 i든 item이든 상관없음
        //6.
        setSel(item)
    }

  return (
    <div className="w-full flex justify-start items-center my-5">
       <div className="w-1/5 flex justify-start items-center">
        교통사고{title}
      </div>
      <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {/* 1. const c가 버튼으로 채워져야 함 > cTag */} 
        {cTag}
      </div>
    </div>
  )
}
