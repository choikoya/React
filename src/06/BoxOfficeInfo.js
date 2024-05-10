
//boxoffice 테이블 밑에 div박스를 만들어서 영화명 클릭했을때 정보나오게


export default function BoxOfficeInfo({selMv}) {
    console.log(selMv)
    
  return (
    <div className="w-11/12 h-10 flex justify-center items-center bg-slate-600 text-white font-bold">
        {/* 영화정보 */}
        [{selMv.movieCd}-{selMv.movieNm}] 
        개봉일 : {selMv.openDt} 
        (
            <span className={selMv.rankOldAndNew === 'OLD' ? "text-yellow-200"
                                                          : "bg-orange-500"}>
         {selMv.rankOldAndNew}
          </span>
        )
    </div>
  )
}
