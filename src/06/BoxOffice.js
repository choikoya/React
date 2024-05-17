// import box from './BoxOffice.json' //.json파일을 box라는 이름으로 불러옴
import BoxOfficeTbody from './BoxOfficeTbody';
import BoxOfficeThead from './BoxOfficeThead';
import BoxOfficeInfo from './BoxOfficeInfo'; //자식컴포넌트 붙임

import { useState, useEffect, useRef } from 'react';

// export default function BoxOffice() {
//     console.log(box.boxOfficeResult.dailyBoxOfficeList)
//    const dailyList = box.boxOfficeResult.dailyBoxOfficeList;
//    const tags = dailyList.map(item => 
//                                 <li key={item.movieCd}>
//                                 {item.rank} : {item.movieNm}
//                                 </li>);

export default function BoxOffice() {
  // console.log(box.boxOfficeResult.dilyBoxOfficeList); 
//  const dailyList = box.boxOfficeResult.dailyBoxOfficeList;
const [dailyList, setDailyList] = useState([]); //usestate 쓰기위해 객체만듦
const [selMv, setSelMv] = useState(); //선택된게 인포에 넘어가서 계속 바뀌게
const selDate = useRef(); //ref변수를 선언하고

//데이터 가져오기
const getFetchData = (url) => {
  fetch(url)
      .then(resp => resp.json())
      
      .then(data => setDailyList(data.boxOfficeResult.dailyBoxOfficeList))
      // .then(data => setDailyList(data))
      //then(data => {
      //console.log(data)
      //setDailyList(data.boxOfficeResult.dailyBoxOfficeList)
      //})
      .catch(err => console.log(err))
}

//날짜가 선택 되었을때
const handleSelect = (e)=>{
  e.preventDefault();
  // console.log(selDate.current.value); //날짜눌렀을때 나옴. ref변수 사용시
  // console.log(e.target.value); //ref 변수 사용하지 않을때

  // http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101 
  
  let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`
  url = url+`key=${process.env.REACT_APP_MV_KEY}`;
  url = url+`&targetDt=${selDate.current.value.replaceAll('-','')}`;
  // console.log(url);

  getFetchData(url)
}

//  useEffect(()=>{ //함수. 내가 호출안해도 알아서 실행됨 리액트가 제어함 콜백함수실행됨 , 뒤에 [] 한개 있으면 컴포넌트실행될때 한번만 실행됨
//   setDailyList(box.boxOfficeResult.dailyBoxOfficeList);
//   // setSelMv(dailyList[0]); //디폴트. 대신 밑에처럼 씀
//  }, []);

 useEffect(()=>{
  setSelMv(dailyList[0]); //최초선택에 초기값(초기 선택된 영화 설정)
 }, [dailyList]); //dailyList가 바뀔 때마다 실행

    
  return (
    <div className="w-full h-full">
      BoxOffice
      <div className="w-full flex flex-col justify-start items-center mt-10">
      <form className='w-11/12'>
      <div className='w-full mb-5 flex justify-end items-center'>
          <label htmlFor='dateId'>날짜선택</label>
          <input type='date'
                id = "datdId"
                ref={selDate}  //input date와 연결
                onChange={handleSelect}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5 '/>
      </div>
      </form>
      <table
          className="w-11/12 text-left text-sm font-light text-surface">
          <BoxOfficeThead/>
          {/* 속성값으로 두개 넘김 이름은 마음대로 지정해도 됨 {}안에는 위에만든 state변수 값이 바뀌면 다시 그려짐 티바디에서 selMv가 바뀌게 됨*/}
          <BoxOfficeTbody dailyList = {dailyList} setSelMv={setSelMv}/> 
        </table>
        {selMv && <BoxOfficeInfo selMv={selMv}/>}
      </div>
    </div>

  )
}
