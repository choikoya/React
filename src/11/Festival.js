
import { useState, useEffect, useRef } from "react";
import TailSelect from "../UI/TailSelect";
import GalleryCard from "../10/GalleryCard";


export default function Festival() {


    const [tdata, setTdata] = useState(); //부산축제정보
    const [ops, setOps] = useState();     //축제 구정보
    const [cards, setCards] = useState(); //카드 실제로 뿌려줌
    const selRef = useRef();    //옵션선택

    const getFetchData = (url) => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                console.log("fetch", data)
                setTdata(data.getFestivalKr.item)
            });

        console.log(url)
    };

    //구선택
    const handleGuSelect = ()=>{
        console.log(selRef.current.value)
        let tm = tdata.filter(item => item.GUGUN_NM === selRef.current.value) //선택된걸 카드로 화면에 뿌리기 (셀렉트 박스와 같으면)
                      .map(item => <GalleryCard //필터링해서 나온 데이터를 카드에 넣음
                        key={item.UC_SEQ}
                        imgUrl={item.MAIN_IMG_THUMB}
                        title={item.MAIN_TITLE}
                        content={item.TRFC_INFO}
                        spTag={item.ADDR1}
                      />);
        console.log(tm)
        setCards(tm);
    };

    //컴포넌트 생성
    useEffect(() => {
        let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?`;
        url = url + `serviceKey=${process.env.REACT_APP_APIKEY}&pageNo=1&numOfRows=37&resultType=json`;


        getFetchData(url);

    }, []);
    //   https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=rMb4GWtBQBlF%2B7t1T7boyzpS4dJxKuKe9mbYcrHINEzHGRLWGFa7wavQiaIcztXT0LMfF5vTfYl0YscLA%2FGZFA%3D%3D&pageNo=1&numOfRows=37&resultType=json


    useEffect(() => {
        if (!tdata) return;
        console.log(tdata);
        let tm = tdata.map(item => item.GUGUN_NM); //구별로 뽑아내기
        tm = [...new Set(tm)].sort(); //정렬
        // console.log(tm)
        setOps(tm);

    }, [tdata]);

    return (
        <div>
            <div className="w-full h-full flex flex-col justify-start items-start">

                <form className="w-full flex justify-center items-center">
                    <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 my-5">
                        <label htmlFor="op"
                            className="block mb-2 text-sm font-medium text-gray-900">
                            부산축제정보
                        </label>
                        {/* <select id='op' //select 컴퍼넌트 만들기
                            onChange={handleSelect}
                            className="bg-gray-50 border border-gray-300 text-gray-50 focus:ring-blue-500 block w-full p-2.5">
                            <option defaultValue={''}>---지역선택</option>
                                <option value="US">u</option>
                                <option value="US">u</option>
                                <option value="US">u</option>
                                <option value="US">u</option>
                                
                        </select> */}
                        {ops && <TailSelect id='op'
                                    selRef={selRef}
                                    ops = {ops}
                                    inittext='---부산 지역 구 선택'
                                    handleChange={handleGuSelect}
                        />}

                    </div>
                </form>
                <div className="w-full grid grid-cols-1 
                  md:grid-cols-2 lg:grid-cols-3 
                  gap-2"></div>
                {cards}
            </div>
        </div>
    )
}
