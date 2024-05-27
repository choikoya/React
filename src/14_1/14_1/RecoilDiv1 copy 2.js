
import RecoilDiv2 from "./RecoilDiv2";


export default function RecoilDiv1() {
    const[n, setN] = useState(1);
  return (
    <div className="flex flex-col justify-center items-center text-2xl font-bold">
       <div> 
        RecoilDiv1 : n={n}
        
      </div>
      <RecoilDiv2 num={n} setN={setN}/>
    </div>
  )
}
