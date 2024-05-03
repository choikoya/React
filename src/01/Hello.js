function Hello(){
    return( 
        // 한묶음으로 나가야함 div로 묶지않으면 p따로 ul따로 두묶음이라 에러남 그래서 div로 감싸서 한묶음으로 만듦
        // <div>
        //     <p>
        //      K-digital 7기 최고야
        //      </p>
        //      <ul>
        //  <li>리액트 컴포넌트</li>
        //  </ul>
            // </div>
        // div없이 한묶음으로 만들고싶으면 <div>에서 div삭제- 프레그먼트 태그 (묶어주는 태그)
        <>
            <p>
             K-digital 7기 최고야
            </p>
            <ul>
            <li>리액트 컴포넌트</li>
            </ul>
        </>
    );
}

export default Hello; //자기이름