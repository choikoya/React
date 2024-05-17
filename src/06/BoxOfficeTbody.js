

import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";
export default function BoxOfficeTbody({dailyList, setSelMv}) { //dailList로 받아온 10개 항목을 body에 뿌림
    // console.log(dailyList);
    const handleMvSelect = (mv)=>{
        // console.log("hanleMvSelect", mv)
        setSelMv(mv); //하면 박스오피스의 selMv가 바뀜>인포가 다시 그려짐
    }
    const tags = dailyList.map(item =>  //map을 돌면서 아이템을 만들어서 tr에 넣음


            <tr key={item.movieCd}
                onClick={()=>{handleMvSelect(item)}} //뭐가 선택된지 알아야함 10개에 대해 클릭이벤트가 다 생김. 내가 선택한 itetm이 전달됨
              className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100">
              <td className="whitespace-nowrap px-6 py-2 font-medium">{item.rank}</td>
              <td className="whitespace-nowrap px-6 py-2">{item.movieNm}</td>
              <td className="whitespace-nowrap px-6 py-2 text-right">{parseInt(item.salesAmt).toLocaleString()}</td>
              <td className="whitespace-nowrap px-6 py-2">{parseInt(item.salesAcc).toLocaleString()}</td>
              <td className="px-2 py-2 flex justify-center items-center font-bold ">
                <span>{item.rankInten > 0 ? <TiArrowSortedUp className="text-red-600 "/> :
                      item.rankInten < 0 ? <TiArrowSortedDown className="text-blue-600"/> : '-'}
                </span>
                <span>
                    {/* 둘다 참일때 보이게 */}
                      {parseInt(item.rankInten)!=0 && Math.abs(item.rankInten)} 
                </span>
            </td>
              
            </tr>

    );

    return (
    
        <tbody>
            {/* tr10개 = dailylist에서 받은 10개그림 */}
            {tags} 
            
          </tbody>
    
  )
}
