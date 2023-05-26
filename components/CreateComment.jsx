import { useState } from "react"


const CreateComment = () => {
    const [comment,setComment] = useState("")
  return (
    <>
    <textarea placeholder="write comment..." className="w-full rounded p-2 outline-none" value={comment} onChange={e => setComment(e.target.value)}/>
    </>
  )
}

export default CreateComment