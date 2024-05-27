import { useEffect, useState } from "react"

export default function Rest() {
    const [tdata, setTdata] = useState();
    const [tags, setTags] = useState();

    const getFetch = (url)=>{
        fetch(url)
        .then(resp=>resp.json())
        .then(data=>setTdata(data))

    }

    useEffect(()=>{
        console.log(tdata)
    },[tdata]);

    useEffect(()=>{
        let url='http://localhost:3005/posts';
        getFetch(url);

    },[]);
  return (
    <div>
      Rest
    </div>
  )
}
