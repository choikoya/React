import bank from './img/bank.png';
import busan from './img/busan.png';
import market from './img/market.png';

import { useState } from 'react';




// export default function FoodCard({}) { //아래 const data했던걸 data로 받아옴
    export default function FoodCard({data}) { 

    //변수 isShow의 초기값을 false(안보여줌)로 설정. 클릭시 보여주는 함수 필요. ishow가 부정일때 true가 됨(setIsshow)
    const [isShow, setIsShow] = useState(false);
    const handleShow = () =>{
        setIsShow(!isShow);
    }

    // const data = {
    //     "구분": "기초푸드뱅크",
    //     "시군구": "수영구",
    //     "사업장명": "수영구기초푸드뱅크",
    //     "신고기준": "임의",
    //     "사업장 소재지": "부산광역시 수영구 금련로43번길 54(망미동)",
    //     "연락처(대표번호)": "051)755-3367",
    //     "팩스번호": "051)755-2268",
    //     "운영주체 분류": "1. 사회복지법인",
    //     "운영주체명": "부산종합사회복지관"
    //   }

  return (
    <div className='flex w-full h-40 
                    justify-center items-start'>
        <div className='w-40 h-80'>
            {/* <img src={bank}/> */}
            <img src={data["구분"] === "광역지원센터" ? busan : 
                    data["구분"] === "기초푸드뱅크" ? bank : market}/>

        </div>
        <div className='flex flex-col 
                        justify-start items-start mx-5'>
            <div className='my-5'>
                <h1 className='text-2xl font-bold text-gray-600'>
                    {data["사업장명"]}
                </h1>
                <h2 className='text-xl text-gray-500 font-bold'>
                    {data["운영주체명"]}
                </h2>
                <p className='text-sm text-gray-400 font-bold'>
                    {data["사업장소재지"]}
                </p>
            </div>
            <div className='w-full p-2 h-10 bg-slate-400'
                onClick={handleShow}>
                {isShow && <p className='text-white font-bold'>
                    Tel. {data["연락처(대표번호)"]}
                </p>
                }
            </div>

        </div>
    </div>

  )
}
