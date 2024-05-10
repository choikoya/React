import fooddata from './fooddata.json';
import ButtonC from '../UI/ButtonC';
import FoodCard from './FoodCard';

//버튼 클릭하면 화면 바뀌게 c1List를 state변수로 만들어야 함. 골라서 들고와야함
import { useState } from 'react';


export default function FoodMain() {
    const [c1List, setC1List] = useState([]); //어떤걸 클릭하는지골라내기 위해 usestate사용


    console.log(fooddata);
    // console.log(fooddata.map(item=>{}))
    let c1 = fooddata.map(item=> item['운영주체 분류']);
     //Set:중복제거 후 뽑아냄. set이면 반환안되므로 다시 배열형태로 바꿔야 함
     c1 = new Set(c1); 
     c1=[...c1]; //set을 풀어해쳐서 배열에 하나씩 넣어라(스프레드 연산자)
    console.log("c1", c1);
    

    const handleC1 = (c)=>{
        console.log(c) //c는 33개
        let tm = fooddata.filter(item=>item ['운영주체 분류'] === c) //버튼에 따라 골라서 나타나게 해야함. 리턴되는게 
                        .map(item=><FoodCard data={item} key={item["사업장명"]}/>) //골라서 카드씌움 버튼누를때마다 setc1list바뀜
        console.log(tm);
        setC1List(tm); //
    
    }
    // 버튼태그가 5개있는 버튼 
    const c1Bts = c1.map(item =>
        <ButtonC caption={item} 
                    key={item} 
                    bcolor={'blue'} 
                    handleClick={()=>handleC1(item)} />
    );

    //33개 만들어서 뿌리기위해서 caList 만들어 fooddata가져와서 돌림. item이 foodcard의 data로 뿌려짐 
  
    //const c1List = fooddata.map(item=><FoodCard data={item} />) //**가장 중요한 부분 props** state변수로 만들면 삭제해야 함

  return (
    <div className='flex flex-col w-full h-full justify-start items-center'>
      FoodMain
        <div className='flex w-full justify-between items-center my-5 px-2'>
            {/* button  */}
            {/* 버튼이 c1만큼 생겨야 함 5개. 버튼 5개 만들어지면 끝 새로 바뀌는거 없음 */}
            {/* <ButtonC caption={'확인'} bcolor={'blue'} handleClick={handleOK}/> */}
            {c1Bts}
        </div>
      {/* card */}
      {/* 화면 크게 할때 여러열 화면 작게 만들었을때 1열로 나오게(반응형)  */}
      {/* <div className='w-full grid grid-cols-2 gap-4 p-10'></div> */}
        <div className='w-full grid grid-cols-1 gap-4 xl:grid-cols-2 md:grid-cols-2 gap-2'>
            {/* 카드부분이 33개 되어야 함 */}
            {/* <FoodCard/> 대신에*/}

            {c1List} 
            
        </div>
      
      </div>
    
  )
}
