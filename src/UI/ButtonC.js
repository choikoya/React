
export default function ButtonC({caption, bcolor, handleClick}) {
    const colorB = {
        'blue' : 'bg-blue-600' ,
        'orange' : 'bg-orange-600',
        'green' : 'bg-green-400'
        
    }

    const colorBHover = {
        'blue' : 'hover:bg-blue-900' ,
        'orange' : 'hover:bg-orange-900',
        'green' : 'hover:bg-green-900'
    }

  return (
    <button className={`inline-flex px-10 py-3
                        rounded-md justify-center items-center
                        text-white font-bold
                        ${colorB[bcolor]}
                        ${colorBHover[bcolor]} //hover:를 삭제 위에 써줬으니
                        `}
           onClick={handleClick}
           >
      {caption}
    </button>
  )
}
