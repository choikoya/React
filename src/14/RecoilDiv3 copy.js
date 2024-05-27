
import ButtonC from "../UI/ButtonC"
import { AtomN } from "./AtomN";
import { useRecoilValue } from "recoil";


export default function RecoilDiv3() {
    const n = useRecoilValue(AtomN)

    const handleUP = ()=>{
        
        
    }
    const handleDOWN=()=>{
        
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
  