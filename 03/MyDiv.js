import MyDiv2 from "./MyDiv2" ;


export default function MyDiv() {
  const dname1 = 'vdiv1'; //div이름대신 변수사용
  const dname2 = 'vdiv2'; 
  const dname3 = 'vdiv3'; 

  return (
    // <div className="bg-yellow-200"> //배경색 
    // width 풀로해서 텍스트 크게
    
   // <div className="w-1/2 h-1/2 w-full text-9xl"> 
  //    Tailwind CSS
      <div className="flex flex-col p-10 m-10 w-2/3 h-2/3 justify-center  bg-lime-900 text-white">
        
        <div className="w-full">
          {dname1}
        </div>
        {/* a href 처럼 사용 */}
        <MyDiv2 dn1={dname1} dn2={dname2} dn3={dname3} /> 
        
      </div>
    
  )
}
