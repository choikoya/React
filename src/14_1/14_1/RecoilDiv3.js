
import ButtonC from "../UI/ButtonC"


export default function RecoilDiv3({n, setN, n2}) {
    // div2에서 보낸 이름으로 받음
    const handleUP = ()=>{
        setN(n+1);
        
    }
    const handleDOWN=()=>{
        setN(n-1);
    }

    return (
      <div className="flex flex-col justify-center items-center text-2xl font-bold">
         <div> 
          RecoilDiv3 : n={n}
        </div>
        <div>
            <ButtonC caption="증가" bcolor="blue" handleClick={handleUP}/>
            <ButtonC caption="감소" bcolor="blue" handleClick={handleDOWN}/>
        </div>
      </div>
    )
  }
  