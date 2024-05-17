
export default function GalleryCard({imgUrl, title, content, spTag}) {
    // const imgUrl ='http://tong.visitkorea.or.kr/cms2/website/21/2988721.jpg';
    // const title = "태종대유원지";
    // const content ='부산광역시 영도구 동삼동';
    // const spTag = '태종대유원지, 부산광역시 영도구, 명승 제17호, 태종사, 절, 사찰, 종교, 불교';
    // gallery.js에서 probs시킴

    const sptags = (spTag.includes(',') ? spTag.split(',') : [spTag])
                    .map(item =>
                        <span className="inline-block bg-yellow-100 
                        rounded-full px-3 py-1 text-sm font-semibold
                         text-green-700 mr-2 mb-2"
                         key={item}>
                        {item}
                    </span>

                    );
                    
    console.log(sptags)



  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full" 
    // src={imgUrl.replace('http://','https://')} 
    src={imgUrl.includes('http:')? 
                        imgUrl.replace('http:', 'https:')
                        :imgUrl} 
    alt={title}/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{title}</div>
    <p className="text-gray-700 text-base">
      {content}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{spTag}</span>
     */}
     {sptags}
  </div>
</div>
  )
}
