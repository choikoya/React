//1. 중분류 컴포넌트도 trafficNav와 똑같음 traffic.js만들고 trafficNav.js연결

import TrafficNav from "./TrafficNav"
import { useState, useEffect } from "react"

export default function Traffic() {

    //fetch 데이터
    const [tdata, setTdata] = useState(); //2.전체데이터 바꾸기위해 useState사용 tdata라는 현재상태변수, setTdata라는 상태업데이트함수 선언

   
    const [c1, setC1] = useState();  //대분류 데이터 13
    const [selC1, setSelC1] = useState(); //선택된 대분류 14

    const [c2, setC2] = useState();  //중분류 데이터 21
    const [selC2, setSelC2] = useState(); //선택된 중분류 22

    //사용자 정의함수(내가 정한 함수)
    const getFetchData  = (url)=>{     //6. 넘겨준 데이터의 url받을수있는 변수명 아무거나 써도됨
        fetch(url) //7. 이 url주소에서 데이터 던져줘 요청
        .then(resp => resp.json())//8.정상적으로 데이터 반환되면 .then에 걸림>json형태로 바꿔줘 요청(로드걸림)
        .then(data => setTdata(data.data))//9.setTdata에 data넣어라
        .catch(err=>console.log(err))//10.오류났을때 

    }
    //컴포넌트 생성시
    useEffect(()=>{
        let url = 'https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?'
        url = `${url}page=1&perPage=17&returnType=json`;
        url = `${url}&serviceKey=${process.env.REACT_APP_APIKEY}`; //4. 공공데이터 주소가져옴 (서비스키 안보이게끔->환경변수는 root에 히든파일로 보이게 만들어야 함 .env파일에 만든 이름을 그대로 가져와서 써야함
        console.log(url) 

        getFetchData(url); //5.내가 만든 데이터 url을 넘겨줌 

    }, []); //3. , [] : 처음 실행시 react가 한번만 호출하도록


    //tdata가 변경될때
    useEffect(()=>{
        if(!tdata) return; //12.tdata가 false면 빠져라>undefined 사라짐

        console.log(tdata)
        let tm = tdata.map(item => item['사고유형_대분류']) //15
        tm = [...new Set(tm)];
        setC1(tm);

    }, [tdata]); //11. //처음 초기화 시킬때  const [tdata, setTdata] = useState(); 가 undefined로 나오고 tdata값이 나옴 (2번출력)

    //대분류가 생성이 되면 16
    useEffect(()=>{
        if(!tdata || !c1) return;
        console.log("c1=",c1)
    }, [c1])

    //대분류를 선택하면 => c2생성
    useEffect(()=>{  //19
        if(!tdata || !c1) return;

        let tm = tdata.filter(item=>item['사고유형_대분류']===selC1) //20
                        .map(item => item['사고유형_중분류'])
        setC2(tm); //23
        

        console.log(selC1)

    },[selC1]); 

    //24 중분류가 선택되면
    useEffect(()=>{
      console.log("대분류", selC1, "중분류", selC2)
    },[selC2])


  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
      {/* <TrafficNav/>  17 */}
      <div className="w-full flex justify-start items-start">
        {c1 && <TrafficNav //18
                    title = "대분류" 
                    c={c1} 
                    sel = {selC1} 
                    setSelC1={setSelC1} //중분류는 여기서 바뀜
                    />}
        </div>
        <div className="w-full flex justify-start items-start">
        {c1 && <TrafficNav //24
                    title = "중분류" 
                    c={c2} 
                    sel = {selC2} 
                    setSelC2={setSelC2} //중분류는 여기서 바뀜
                    />}
        </div>
    
    </div>
  )
}
