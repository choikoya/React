
export default function MyDiv3(probs) { //넘어오는걸 받기위해 probs
  return (
    <div className="flex flex-col p-10 m-10 w-3/4 h-3/4  bg-lime-500 text-white">
      {`${probs.dn1} > ${probs.dn2} > ${probs.dn3}`}
    </div>
  )
}
