import box from './BoxOffice.json' //.json파일을 box라는 이름으로 불러옴
import BoxOfficeTbody from './BoxOfficeTbody';
import BoxOfficeThead from './BoxOfficeThead';
import BoxOfficeInfo from './BoxOfficeInfo'; //자식컴포넌트 붙임

import { useState, useEffect} from 'react';

// export default function BoxOffice() {
//     console.log(box.boxOfficeResult.dailyBoxOfficeList)
//    const dailyList = box.boxOfficeResult.dailyBoxOfficeList;
//    const tags = dailyList.map(item => 
//                                 <li key={item.movieCd}>
//                                 {item.rank} : {item.movieNm}
//                                 </li>);

export default function BoxOffice() {
  console.log(box.boxOfficeResult.dailyBoxOfficeList); 
//  const dailyList = box.boxOfficeResult.dailyBoxOfficeList;
const [dailyList, setDailyList] = useState([]); //usestate 쓰기위해 객체만듦
const [selMv, setSelMv] = useState(); //선택된게 인포에 넘어가서 계속 바뀌게

 useEffect(()=>{ //함수. 내가 호출안해도 알아서 실행됨 리액트가 제어함 콜백함수실행됨 , 뒤에 [] 한개 있으면 컴포넌트실행될때 한번만 실행됨
  setDailyList(box.boxOfficeResult.dailyBoxOfficeList);
  // setSelMv(dailyList[0]); //디폴트. 대신 밑에처럼 씀
 }, []);

 useEffect(()=>{
  setSelMv(dailyList[0]); //최초선택에 초기값
 }, [dailyList]); //dailyList바뀌면

    
  return (
    <div className="w-full h-full">
      BoxOffice
      <div className="w-full flex flex-col justify-start items-center mt-10">
  
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
