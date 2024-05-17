import GalleryCard from "./GalleryCard";
import { useState, useEffect } from "react";

export default function Gallery() {
    const [gdata, setGdata] = useState();
    const [cards, setCards] = useState();
    
    // const imgUrl ='http://tong.visitkorea.or.kr/cms2/website/21/2988721.jpg';
    // const title = "태종대유원지";
    // const content ='부산광역시 영도구 동삼동';
    // const spTag = '태종대유원지, 부산광역시 영도구, 명승 제17호, 태종사, 절, 사찰, 종교, 불교';
    //>>패치해서 가져올거임



    const getFetchData = (url) => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                console.log("fetch", data)
                setGdata(data.response.body.items.item)
    })
        
      ; console.log("getFetchData", url) 
    }
    
//컴포넌트 생성시
useEffect(()=>{
    let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=rMb4GWtBQBlF%2B7t1T7boyzpS4dJxKuKe9mbYcrHINEzHGRLWGFa7wavQiaIcztXT0LMfF5vTfYl0YscLA%2FGZFA%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%ED%83%9C%EC%A2%85%EB%8C%80&_type=json`
    console.log(url); //url줌
getFetchData(url);
    
},[]);

//gdata 만들어질때
useEffect(()=>{
    if(!gdata) return;
    console.log(gdata);
let tm = gdata.map(item=>
                    <GalleryCard 
                    key = {item.galCaontentId}
                    imgUrl = {item.galWebImageUrl} 
                    title = {item.galTitle}
                    content = {item.galPhotographyLocation}
                    spTag = {item.galSearchKeyword}
                    />


);
setCards(tm)
},[gdata]);

    //   useEffect(()=>{
    //     setSelMv(dailyList[0]); //최초선택에 초기값(초기 선택된 영화 설정)
    //    }, [dailyList]); //dailyList가 바뀔 때마다 실행
    
    //    let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=rMb4GWtBQBlF%2B7t1T7boyzpS4dJxKuKe9mbYcrHINEzHGRLWGFa7wavQiaIcztXT0LMfF5vTfYl0YscLA%2FGZFA%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%ED%83%9C%EC%A2%85%EB%8C%80&_type=json`      
    //     getFetchData(url)
    //   }

  return (
    <div className="w-full h-full flex flex-col justify-start items-start"> 
      {/* <GalleryCard imgUrl = {imgUrl} //getfetch로 여러개 가져오기
                    title = {title}
                    content = {content}
                    spTag = {spTag}
       /> */}
        <div className="w-full flex justify-center items-center my-5 h-40">
        입력
      </div>
       <div className="w-full grid grid-cols-1 
                    md:grid-cols-2 lg:grid-cols-3 
                    gap-2">

     
        
        {cards}

        </div>

    </div>
  )
}
