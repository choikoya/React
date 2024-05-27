import RecoilDiv3 from "./RecoilDiv3"

export default function RecoilDiv2({num, n2, setN}) {
    //div1에서 받아오려면 num, n2, setN이름으로 받아와야함  

  return (
    <div className="flex flex-col justify-center items-center text-2xl font-bold">
       <div> 
        RecoilDiv2 : n2={n2}
      </div>
      <RecoilDiv3 n={num} setN={setN} n2={n2}/>
      {/* num을 n이름으로/ setN을 setN이름으로 n2를 n2이름으로 div3에 보냄 */}
    </div>
  )
}
