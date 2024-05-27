import { useSearchParams } from "react-router-dom" ; //경로매칭
import { useState, useEffect, useRef } from "react";
import TailSelect from "../UI/TailSelect";

import getcode from './getcode.json' ;

export default function FrcstList() {
  //url 전달 값 url에서 필요한정보 뽑아올때 씀
  const [sParms] = useSearchParams() ;
  const gubun = sParms.get('gubun') ;
  const x = sParms.get('x') ;
  const y = sParms.get('y') ;
  const dt = sParms.get('dt') ;
  const area = sParms.get('area') ;
  console.log(gubun, x, y, dt, area) ;
  
  //state 변수
  const [tdata, setTdata] = useState();       //예보 정보
  const [ops, setOps] = useState([]) ;
  // const [selItem, setSelItem] = useState(); //선택한 항목 코드 정보
  
  //ref 변수
  const selRef = useRef() ;
  
  //항목선택
// data fetch
  const getFetchData = (url) => {
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        console.log("fetch", data)
        setTdata(data.response.body.items.item)
      })
      ;
  }
  const handleSelect = () => {
    console.log(selRef.current.value)
    
  }
  //컴포넌트 생성시
  useEffect(() => {
    //항목 select 
    let tm = getcode.filter( item => gubun === '단기' 
                                      ? item["예보구분"] === "단기예보"
                                      : item["예보구분"] === "초단기예보")
                    .map( item => item["항목명"])

    console.log(tm)
    setOps(tm) ;

    let url ;
    if ( gubun === '초단기') {
      url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?`;
      url = url + `serviceKey=${process.env.REACT_APP_API_KEY}&numOfRows=900&pageNo=1`;
      url = url + `&dataType=json&base_date=${dt}&base_time=0630&nx=${x}&ny=${y}` ;
    }
    else {
      url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?`;
      url = url + `serviceKey=${process.env.REACT_APP_API_KEY}&numOfRows=900&pageNo=1`;
      url = url + `&dataType=json&base_date=${dt}&base_time=0500&nx=${x}&ny=${y}` ; 
    }

    getFetchData(url) ;
  } , []);

  useEffect(() => {
    console.log(tdata)
  } , [tdata]);

  return (
    <div className="w-full h-full flex flex-col
                        justify-start items-center">
      <div className="w-10/12 
                    grid grid-cols-1 md:grid-cols-2 p-2 gap-2">
        <h1 className="w-full text-2xl font-bold 
                     flex justify-center items-center m-5">
          {gubun}예보 ( <div className="text-blue-800">{area}</div> )
        </h1>              
        <div className="flex justify-center items-center m-5">
            <TailSelect id="sel"
                      ops={ops}
                      selRef={selRef}
                      initText="--- 항목선택 ---"
                      handleChange={handleSelect} />
        </div>
      </div>
      

    </div>
  )
}