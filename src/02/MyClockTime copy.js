import './MyClock.css';
import style from './My.module.css';


function MyClockTime(){

    const now = new Date();
    const nowStr = now.toLocaleTimeString(); //밑에쓴변수를 가지고 올수있음
    // const gubun = nowStr.substring(0,2); //문자열 쪼개기 오전/오후
    // const st = {color:"yellow", fontWeight:"bold"};

    // let divStyle;
    // if (gubun == '오전') divStyle = "div1";
    // else  divStyle = "div2";

    

    return( //return 안에는 jsx문법적용됨
        
        <> 
        {/* <div className="div1">{now.toLocaleTimeString()}{nowStr}</div> */}
        {/* return의 3항연산 */}
        {/* {
            gubun === '오전' ? <div className="div2"> {nowStr}</div> //오전일때 div2
                            : <div className="div1">{nowStr}</div>
        } */}

        {/* <div className={gubun === '오전' ? "div1" : "div2"}> */}
        {/* 인라인 태그 쓰려면 오브젝트로 써야함 카멜표기법 사용 */}
        {/* <div style={{color:"yellow", fontWeight:"bold"}}>  */}
        {/* <div style ={st}> */}
        <div className={style.c1}>
            {nowStr}
        </div>
        </>
    );
}

export default MyClockTime;