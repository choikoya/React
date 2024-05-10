
export default function MyDiv3({dn1, dn2, dn3}) { //probs.속성 > 간단히 속성값만 쓰려면 {}사용
  return (
    <div className="flex flex-col p-10 m-10 w-3/4 h-3/4  bg-lime-500 text-white">
      {`${dn1} > ${dn2} > ${dn3}`}
    </div>
  )
}
