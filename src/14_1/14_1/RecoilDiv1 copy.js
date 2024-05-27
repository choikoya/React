import { useState } from "react"

export default function RecoilDiv1() {
    const[n, setN] = useState(0);
  return (
    <div className="flex flex-col justify-center items-center text-2xl font-bold">
       <div> 
        RecoilDiv1 : n={n}
      </div>
    </div>
  )
}
