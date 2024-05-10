import React from 'react'
import MyListData from "./MyListData.json"; //data 땡김
import MyListItem from './MyListItem';

export default function MyList() {
    console.log(MyListData)

    
    // const tags = MyListData.map(item => 
    //     <img src={item.imgUrl}/>) //배열안에 들어있는 항목이 object map의 결과는 array 필터의 결과는 array

    // const tags = MyListData.map(item =><MyListItem title ={item.title} 
    //                                                 imgUrl={item.imgUrl} 
    //                                                 content={item.content}/>)

    
   const tags = MyListData.map(item =>
                                <MyListItem key = {item.title} //동적으로 만들때 키값 줘야함?? 리액트가 동적으로 움직일때 구분하기 위해서
                                                    title ={item.title} 
                                                    imgUrl={item.imgUrl} 
                                                    content={item.content}/>)
  return (
    <div className="w-full grid grid-cols-2 gap-4 p-10">
     {tags}
     
     
    </div>
    
  )
}