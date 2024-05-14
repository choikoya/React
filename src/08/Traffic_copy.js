import { useState, useEffect } from "react";
import ButtonC from "../UI/ButtonC";


export default function TrafficMain() {


    // let url = 'https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?'
    // url = `${url}page=1&perPage=17&returnType=json`;
    // url = `${url}&serviceKey=${process.env.REACT_APP_APIKEY}`;
    // url=url+'page=1&perPage=17&returnType=json'
    // url=url + '&serviceKey=`${prcess.env.REACT_API_KEY}`';

    // console.log(url)


    const [tdata, setTdata] = useState([]); //전체fetch데이터저장 초기값[]
    const [c1, setC1] = useState(); //대분류 데이터 저장
    const [c1Tag, setC1Tag] = useState(); //대분류 버튼 클릭하면, 선택된 대분류(c1Sel)를 업데이트
    const [c1Sel, setC1Sel] = useState(); //선택된 대분류

    const [c2, setC2] = useState(); //중분류
    const [c2Tag, setC2Tag] = useState(); //중분류 버튼
    const [c2Sel, setC2Sel] = useState(); //선택된 중분류

    const [Info, setInfo] = useState(); //선택된 상세자료



    //대분류를 선택할 때 실행
    const handleC1Select = (item) => { //클릭된 대분류 버튼에 해당하는 항목(대분류 이름)이 item매개변수로 전달됨
        setC1Sel(item); // 전달받은 값이 c1Sel 상태로 설정. c1Sel 상태를 클릭된 대분류 항목(item)으로 업데이트.
        //사용자가 대분류 버튼을 클릭할 때마다 선택된 대분류 항목을 상태로 저장하여 다른 부분에서 사용할 수 있게 함
    }


    //중분류를 선택할 때 실행
    const handleC2Select = (item) => {
        setC2Sel(item);
    }

    //Fetch 함수로 데이터 가져오기
    const getFetchData = (url) => { //fetch가 url 받음>해당주소로 네트웤 요청보냄
        fetch(url)
            .then(resp => resp.json()) //응답받으면 json형태로 변환
            // .then(data => console.log(data.data))
            .then(data => setTdata(data.data)) //json데이터중 data속성값을(17개) Tdata 상태변수에 저장
            .catch(err => console.log(err));
        //함수 내부에서 선언된 변수는 해당 함수 내부에서만 쓸수있음 지역변수
    }

    //컴포넌트 생성시 한번 실행. 첫 번째 useEffect: 컴포넌트가 처음 렌더링될 때 실행되며, 초기 데이터를 가져오기 위해 getFetchData 함수를 호출합니다.
    useEffect(() => {
        let url = 'https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?'
        url = `${url}page=1&perPage=17&returnType=json`;
        url = `${url}&serviceKey=${process.env.REACT_APP_APIKEY}`;
        console.log(url)
        getFetchData(url); //함수에 최종 URL을 전달하여 데이터를 가져옴
    }, []); //useEffect의 두 번째 인자로 빈 배열 []을 전달하면, 이 훅은 컴포넌트의 첫 번째 렌더링 후에 한 번만 실행됨

    //tdata가 변경이 되면 실행./ 두 번째 useEffect: tdata가 변경될 때 실행되며, tdata가 변경되면 대분류 데이터를 추출하여 c1 상태 변수에 설정합니다.
    useEffect(() => {
        if (tdata.length === 0) return; // tdata의 배열이 변경될 때마다 실행. tdata 배열의 길이가 0이면 함수 실행을 중단하고 return. tdata가 비어 있을 때 불필요한 처리를 방지

        console.log("tdata=", tdata);
        let tm = tdata.map(item => item['사고유형_대분류']) //tdata 배열의 각 항목에서 사고유형_대분류 속성 값을 추출하여 새로운 배열 tm을 만듦
        tm = [...new Set(tm)]; //Set 객체를 사용하여 tm 배열의 중복 값을 제거. tm 배열을 Set 객체로 변환한 후 다시 배열로 변환> 이렇게 하면 중복된 값이 제거된 배열이 됨. 


        console.log(tm)
        setC1(tm); //tm 배열을 c1 상태 변수에 저장. c1은 대분류 데이터를 저장하는 상태 변수
    }, [tdata]);




    //대분류 생성후//useEffect: c1이 변경될 때 실행되며, 대분류가 변경되면 대분류 버튼을 생성합니다.
    useEffect(() => {
        if (!c1) return;
        console.log('c1=', c1);
        // c1 상태 변수가 변경될 때마다 실행되며, c1의 각 요소를 순회하여 해당하는 버튼을 생성하고, 이를 c1Tag 상태 변수에 설정합니다. 따라서 c1 상태 변수가 변경되면 대분류에 해당하는 버튼들이 동적으로 생성되어 화면에 표시됩
        let tm = c1.map((item) => <ButtonC caption={item}//c1 배열의 map 메서드를 사용하여 배열의 각 요소에 대해 반복 작업을 수행합니다. 이 때, 각 요소는 item으로 참조됩니다. 생성된 버튼들은 tm이라는 새로운 배열에 저장됩니다.item은 map 메서드에서 현재 반복되는 요소, 즉 대분류의 이름을 의미합니다.
            key={item}
            // bcolor={c1Sel===item?'orange':'blue'}
            bcolor='blue'
            handleClick={() => handleC1Select(item)} />)
        setC1Tag(tm);//tm 배열에 저장된 대분류 버튼들을 c1Tag 상태 변수에 설정합니다. 이렇게 하면 화면에 대분류 버튼들이 표시됩니다.
    }, [c1]);

    //대분류 선택 -> 중분류//네 번째 useEffect: c1Sel이 변경될 때 실행되며, 선택된 대분류에 해당하는 중분류 데이터를 추출하여 c2 상태 변수에 설정합니다.
    useEffect(() => {
        console.log("대분류선택 :", c1Sel)
        let tm = tdata.filter(item => item['사고유형_대분류'] === c1Sel)//중분류 가져오기/tdata 배열에서 대분류가 선택된 대분류 c1Sel과 일치하는 요소들을 필터링합니다
            .map(item => item['사고유형_중분류']);
        setC2(tm);//추출된 중분류 데이터를 c2 상태 변수에 설정합니다. 이렇게 하면 선택된 대분류에 해당하는 중분류 데이터가 c2에 저장되어 화면에 표시됩니다.
    }, [c1Sel]);


    //중분류가 만들어졌을때
    useEffect(() => {
        if (!c2) return;
        console.log("c2", c2)

        let tm = c2.map((item) => <ButtonC caption={item}
            key={item}
            bcolor={'blue'}
            handleClick={() => handleC2Select(item)} />)
        setC2Tag(tm);
    }, [c2]);

    //중분류 선택  => 상세정보
    useEffect(() => {
        console.log("대분류선택 :", c1Sel)
        console.log("중분류선택 :", c2Sel)

        if (!c1Sel || !c2Sel) return; //선택된 대분류나 중분류가 없는 경우, 즉 대분류나 중분류가 선택되지 않은 경우, 함수를 종료합니다. 이렇게 하면 선택된 대분류와 중분류가 모두 존재하는 경우에만 코드가 실행됩니다.
        let tm = tdata.filter(item => item['사고유형_대분류'] === c1Sel && //tdata 배열에서 선택된 대분류와 중분류에 해당하는 데이터를 필터링합니다. filter 메서드를 사용하여 조건에 맞는 요소만을 새로운 배열로 반환합니다.
            item['사고유형_중분류'] === c2Sel)
        tm = tm[0]; //필터링된 데이터 중 첫 번째 요소를 선택. 여기서 가정은 선택된 대분류와 중분류에 해당하는 데이터가 유일하게 존재한다는 것입니다.
        console.log('상세', tm)
        setInfo(tm['사고건수'])//선택된 대분류와 중분류에 해당하는 상세 정보에서 '사고건수' 속성 값을 추출하여 Info 상태 변수에 설정합니다. 이렇게 하면 화면에서 해당 정보를 표시할 수 있습니다.

    }, [c2Sel]);

    return (
        <div className="w-10/12 h-full flex flex-col justify-start items-start">
            <div className="w-full flex justify-between items-center my-10">
                <div className="w-1/4 justify-start items-center">교통사고 대분류</div>
                <div className="w-3/4 flex justify-between">
                    {/* 대분류 */}
                    {c1Tag}
                </div>
            </div>
            <div className="w-full flex justify-between items-center my-10 ">
                <div className="w-1/4 justify-start items-center">교통사고 중분류</div>
                <div className="w-3/4 flex">
                    {c2Tag}
                </div>
            </div>
            <div className="w-full flex justify-between items-center my-10 ">
                {/* parseInt(info)를 사용하여 사고건수를 정수로 변환하고 toLocaleString()을 사용하여 천 단위 구분 기호를 추가하는데, Info가 초기값이 undefined이므로 parseInt(undefined)가 되어 NaN이 될 수 있습니다. 이를 방지하기 위해 초기값을 0으로 설정하거나, 조건부 렌더링을 사용하여 Info가 유효한 경우에만 표시하도록 수정해야 합니다. */}
                사고건수 : {Info ? parseInt(Info).toLocaleString() : 0}
                {/* Info ?는 조건 연산자입니다. 이 연산자는 조건을 평가하여 참(true) 또는 거짓(false)을 반환합니다. 여기서 Info는 상태 변수이므로 값이 존재하면(유효하면) 참으로 간주됩니다. 따라서 Info가 유효한 경우에는 조건이 참이 되어 parseInt(Info).toLocaleString()를 실행하게 됩니다. 그렇지 않은 경우에는 조건이 거짓이 되어 0을 반환 */}
            </div>
        </div>
    )
}
