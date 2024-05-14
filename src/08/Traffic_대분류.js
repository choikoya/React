import { useState, useEffect } from "react";
import ButtonC from "../UI/ButtonC";

//대분류 뽑아냄

export default function TrafficMain() {


    let url = 'https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?'
    url = `${url}page=1&perPage=17&returnType=json`;
    url = `${url}&serviceKey=${process.env.REACT_APP_APIKEY}`;
    // url=url+'page=1&perPage=17&returnType=json'
    // url=url + '&serviceKey=`${prcess.env.REACT_API_KEY}`';

    console.log(url)


    const[tdata, setTdata] = useState([]); //전체fetch데이터
    const [c1, setC1] = useState(); //대분류
    const [c1Tag, setC1Tag] = useState(); //대분류 버튼
    const [c1Sel, setC1Sel] = useState(); //선택된 대분류

    const [c2, setC2] = useState(); //중분류
    const [c2Tag, setC2Tag] = useState(); //중분류 버튼
    const [c2Sel, setC2Sel] = useState(); //선택된 중분류



    //대분류를 선택할 때 실행
    const handleC1Select = (item)=>{
        setC1Sel(item) //c1sel의 item
    }


    //Fetch 함수로 데이터 가져오기
    const getFetchData = (url) => { //fetch가 url 받음
        fetch(url)
            .then(resp => resp.json()) //data가 갔다왔을때의 그 시점. json만들어짐
            // .then(data => console.log(data.data))
            .then(data => setTdata(data.data)) //fetch해서 state변수에 넣어둔 17개의 데이터를 Tdata에 저장
            .catch(err => console.log(err));
            //변수 선언을 여기서 하면 getfetch안에서만 쓸수있음 지역변수
    }

    //컴포넌트 생성시 한번 실행
    useEffect(() => {
        let url = 'https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?'
        url = `${url}page=1&perPage=17&returnType=json`;
        url = `${url}&serviceKey=${process.env.REACT_APP_APIKEY}`;
        console.log(url)
        getFetchData(url); //fetch가 url 받게 던져줌
    }, []);

    //tdata가 변경이 되면 실행
    useEffect(()=>{
        if(tdata.length === 0) return; //갯수없으면 return

    console.log("tdata=",tdata);
    let tm = tdata.map(item=> item['사고유형_대분류']) //맵을 다 돌면 데이터 17만큼 
    tm = [...new Set(tm)]; //데이터 타입의 집합을 배열로 만듦
  

    console.log(tm)
    setC1(tm);
}, [tdata]);
    

   

    //대분류 생성후
    useEffect(()=>{
        if (!c1) return ;
        console.log('c1=', c1) ;
        let tm = c1.map((item)=> <ButtonC caption={item}
                                        key={item}
                                        // bcolor={c1Sel===item?'orange':'blue'}
                                        bcolor='blue'
                                        handleClick={()=>handleC1Select(item)}/>)
        setC1Tag(tm);
      }, [c1]);

      //대분류 선택 -> 중분류
      useEffect(()=>{
        console.log(c1Sel)
        let tm = tdata.filter(item=>item['사고유형_대분류']===c1Sel);//중분류 가져오기
        setC2(tm);
      },[c1Sel]); //선택한 대분류가 찍혀나오게


      //중분류가 만들어졌을때
      useEffect(()=>{
        console.log(c2)
      }, [c2]);


    return (
        <div className="w-10/12 h-full flex flex-col justify-start items-start">
            <div className="w-full flex justify-between items-center my-10">
            <div className="w-1/4 justify-start items-center">교통사고 대분류</div>
            <div className="w-3/4 flex justify-between">
                {/* 대분류 */}
                {c1Tag}
            </div>
            </div>
        </div>
    )
}
