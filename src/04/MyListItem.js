
import { useState, useEffect } from "react"; //useState : 변수상태관리  useEffect : 어떤걸 할때 뭘 실행해줄까(동작) 

export default function MyListItem({title, imgUrl, content}) { //함수명 뒤에 속성(값)이 ()에 들어감
    const [cnt, setCnt] = useState(0);

    const handleClick =()=>{
        setCnt(cnt+1) ; //setCnt = cnt +1 방식으로 쓰면안됨
        console.log(title, 'cnt = ', cnt)
        
    }

//컴포넌트 생성시 최초 한번만 실행
    useEffect(()=>{
        console.log(title, '생성');
    }, []); //콜백함수가 리턴값으로 들어감 두개 쓸수도 있음 . 콜안해도 useEffect는 실행먼저하고 시작됨

//state변수가 변경됐을때
useEffect(()=>{
    console.log(title,'변경 cnt =', cnt); //
}, [cnt]);


//컴포넌트가 변경되면 항상 실행(디펜던시 어레이가 없는때)
useEffect(()=>{
    console.log(title, '변경됨');
});
  return (
    <div className='flex w-full h-full justify-center items-start p-2 bg-slate-200'>
        <div className='flex w-1/3 m-2'>
            {/* 원래 img src= 상대경로로 처음 이미지 지정했다가  변수로 바꾸면 4가지 다 나옴 */}
            <img src={imgUrl} alt={title}/>
        </div>
        <div className='flex flex-col h-full justify-between w-2/3 m-5 p-2'>
            <div>
            <h1 className='text-xl font-bold'>{title}</h1>
            {/* </div>
            <div>
                HTML... */}
                <p>{content}</p>
            </div>
            <div className='flex justify-end items-center p-2'>
                
                <span onClick={handleClick}>💛</span>
                <span className='inline-flex mx-2 font-bold'>좋아요</span>
                <span className='font-bold text-xl '>{cnt}</span>
               
               
                
            
            </div>

        </div>
      
    </div>
  )
}
