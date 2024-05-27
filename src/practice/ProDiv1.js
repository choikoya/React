import { useState } from "react"
import ProDiv2 from "./ProDiv2"


export default function Pro() {
  const[n, setN] = useState

  return (
    <div>
      n1:{n}
      <ProDiv2 n={n}/>
    </div>
  )
}
