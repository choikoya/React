// 뭐가 문제였는지 비교해서 보기
import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import TailSelect from "../UI/TailSelect";
import ButtonC from "../UI/ButtonC";
import TailInput from "../UI/TailInput";
import getxy from "./getxy.json";

export default function Frcst() {

    const navigate = useNavigate();
    const [ops, setOps] = useState();
    const [x, setX] = useState();
    const [y, setY] = useState();
    const [area, setArea] = useState();
    
    const inRef = useRef();
    const selRef = useRef();

    const handleArea = () => {
        let tm = getxy.filter(item => item["1단계"] === selRef.current.value)  ;
        tm = tm[0] ;
        console.log(tm)  
        setX(tm["격자 X"]) ;
        setY(tm["격자 Y"])
        setArea(selRef.current.value) ;
    }

    const handleUrl = (gubun) => {
        if (!x || !y || !inRef.current.value ) {
          alert('날짜와 지역을 선택하세요.') ;
          return;
        }
    
        navigate(`/frcstlt?gubun=${gubun}&x=${x}&y=${y}&dt=${inRef.current.value.replaceAll('-','')}&area=${area}`)
      }

      //컴포넌트 생성시
  useEffect(() => {
    let tm = getxy.map(item => item["1단계"]) ;
    // console.log(tm)
    setOps(tm);
  } , []) ;

  useEffect(() => {
    console.log('x=', x, 'y=', y, 'area=', area, 'dt=', inRef.current.value)
  })


    return (
        <div className="w-full h-full flex flex-col
    justify-start items-center">
            <h1 className="w-10/12 text-2xl font-bold 
 flex justify-center items-center m-5">
                단기예보
            </h1>
            <div className="w-full flex justify-center items-center ">
                <div className="w-10/12 
grid grid-cols-1 md:grid-cols-2 p-2 gap-2">
                    <TailInput id="dt"
                        type="date"
                        inRef={inRef} />
                    <TailSelect id="sel"
                        ops={ops}
                        selRef={selRef}
                        initText="--- 지역선택 ---"
                        handleChange={handleArea} />
                    <ButtonC caption="초단기예보"
                        bcolor="blue"
                        handleClick={() => handleUrl('초단기')} />
                    <ButtonC caption="단기예보"
                        bcolor="blue"
                        handleClick={() => handleUrl('단기')} />
                </div>
            </div>
        </div>
    )
}