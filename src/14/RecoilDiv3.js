
import ButtonC from "../UI/ButtonC"
import { AtomN } from "./AtomN";
import { useRecoilState } from "recoil";


export default function RecoilDiv3() {
    const [n, setN] = useRecoilState(AtomN);

    const handleUP = ()=>{
        setN(n+1);
        
    }
    const handleDOWN=()=>{
        setN(n-1);
        
    }

    const handleSave=()=>{
        // 개발자도구에서 id값 저장가능
            localStorage.setItem("n", n);
    }

    const handleDel=()=>{
        // 저장된 id값 삭제
            localStorage.removeItem("n");
            setN(0); //초기값 0으로 세팅
    }

    return (
      <div className="flex flex-col justify-center items-center text-2xl font-bold">
         <div> 
          RecoilDiv3 : n={n}
        </div>
        <div>
            <ButtonC caption="증가" bcolor="blue" handleClick={handleUP}/>
            <ButtonC caption="감소" bcolor="blue" handleClick={handleDOWN}/>
            <ButtonC caption="localstorage 저장" bcolor="blue" handleClick={handleSave}/>
            <ButtonC caption="localstorage 삭제" bcolor="blue" handleClick={handleDel}/>
        </div>
      </div>
    )
  }
  