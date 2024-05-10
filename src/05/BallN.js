
export default function BallN({n}) {
    const colorN = {
        'b0' : 'bg-orange-600',
        'b1' : 'bg-lime-600',
        'b2' : 'bg-sky-600',
        'b3' : 'bg-violet-600',
        'b4' : 'bg-rose-600'
    }

      
  return (
    <div className={`inline-flex w-16 h-16 
                    mx-2
                    justify-center items-center
                    rounded-full text-2xl font-bold
                    ${colorN["b"+Math.floor(n / 10)]}
                    text-white `}>
      {n}
    </div>
  )
}
