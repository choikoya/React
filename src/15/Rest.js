import { useEffect, useState } from "react"

export default function Rest() {
    const [tdata, setTdata] = useState();
    // const [tdata, setTdata] = useState([]); 해서 초기화해도 됨

    const [tags, setTags] = useState();

    const getFetch = async (url)=>{
        const resp = await fetch(url);
        const data = await resp.json();
        setTdata(data)

    }

    useEffect(()=>{
        if(!tdata) return; //초기화

        console.log(tdata)
        
        let tm = tdata.map(item => <li>{item.title}</li>); //tdata에서 가져와서 li를 만듦. 키값넣어야 함
        setTags(tm) //tm을 setTags에 넣으면 tags바뀜
    
    },[tdata]);

    useEffect(()=>{
        let url='http://localhost:3005/posts';
        getFetch(url);

    },[]);
  return (
    <div>
      {/* Rest */}
        <ul>
            {/* 바뀌는 tags 넣음 */}
           {tags} 
        </ul>

        {/* {tdata.map(item => item.title)} */}
    </div>
  )
}
