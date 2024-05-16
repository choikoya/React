

import TrafficNav from "./TrafficNav"
import { useState, useEffect } from "react"

export default function Traffic() {

    //fetch 데이터
    const [tdata, setTdata] = useState();


    const [c1, setC1] = useState();  //대분류 데이터
    const [selC1, setSelC1] = useState(); //선택된 대분류

    const [c2, setC2] = useState();  //중분류 데이터
    const [selC2, setSelC2] = useState(); //선택된 중분류

    //25
    const [info, setInfo] = useState(); //상세정보

    //사용자 정의함수
    const getFetchData = (url) => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => setTdata(data.data))
            .catch(err => console.log(err))

    }
    //컴포넌트 생성시
    useEffect(() => {
        let url = 'https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?'
        url = `${url}page=1&perPage=17&returnType=json`;
        url = `${url}&serviceKey=${process.env.REACT_APP_APIKEY}`;
        console.log(url)

        getFetchData(url);

    }, []);


    //tdata가 변경될때
    useEffect(() => {
        if (!tdata) return;

        console.log(tdata)
        let tm = tdata.map(item => item['사고유형_대분류'])
        tm = [...new Set(tm)];
        setC1(tm);

    }, [tdata]);
    //대분류가 생성이 되면
    useEffect(() => {
        if (!tdata || !c1) return;
        console.log("c1=", c1)
    }, [c1])

    //대분류를 선택하면 => c2생성
    useEffect(() => {
        if (!tdata || !c1 || !selC1) return;

        let tm = tdata.filter(item => item['사고유형_대분류'] === selC1)
            .map(item => item['사고유형_중분류'])

        console.log("중분류 tm", tm)
        setC2(tm);
        setInfo(''); //c1이 눌러질때 info 삭제


        console.log("대분류선택", selC1)

    }, [selC1]);


    //24 중분류가 선택되면
    useEffect(() => {
        if (!tdata || !c1 || !selC1 || !selC2) return;
        let tm = tdata.filter(item => item['사고유형_대분류'] === selC1 && 
            item['사고유형_중분류'] === selC2); //배열
            tm = tm[0]; //배열을 오브젝트로
            console.log("상세", tm)

            
        const infoKey = ['사고건수','사망자수','중상자수','경상자수','부상신고자수'] //오브젝트로 뽑은 키 고정

        tm = infoKey.map(item => <div key={item}
                            className="flex flex-col">
            <div className="flex justify-center items-center bg-lime-100">
                {item}
            </div>
            <div className="flex justify-center items-center bg-lime-300">
            {parseInt(tm[item]).toLocaleString()}
            </div>


        </div>
        );


        setInfo(tm);
        console.log("대분류", selC1, "중분류", selC2)
    }, [selC2])






    return (
        <div className="w-full h-full flex flex-col justify-start items-center">
            {/* <TrafficNav/>  */}
            <div className="w-full flex justify-start items-start">
                {c1 && <TrafficNav
                    title="대분류"
                    c={c1}
                    sel={selC1}
                    setSel={setSelC1}
                />}
            </div>
            <div>
                {c2 && <TrafficNav
                    title="중분류"
                    c={c2}
                    sel={selC2}
                    setSel={setSelC2}
                />}
            </div>

                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
                        {info}
                    </div>
        </div>
    )
}
