import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"

const CreateComment = ({postId}) => {
    const [comment, setComment] = useState("")
    const [disable,setDisable] = useState(false)

    const CreateComment = async (e) => {
        e.preventDefault()
          try {
              setComment("")
              setDisable(true)
              const response = await axios.post("/api/post/createComment",{comment,postId})
              console.log(response)
            if(response.status == 201){toast.success(`comment created successfully`)}
            setDisable(false)
          } catch (error) {
            setComment("")
            setDisable(false)
            if(error.response.status == 403) return toast.error(error.response.data)
            if(error.response.status == 401) return toast.error(error.response.data)
            if(error.response.status == 404) return toast.error(error.response.data)
          }
      }
    return (
        <>
            <textarea placeholder="write comment..." className="w-full rounded p-2 outline-none" value={comment} onChange={e => setComment(e.target.value)} />
            <button className={`bg-blue-500 text-white text-sm rounded py-2 px-6 font-semibold hover:bg-blue-800 ${disable && "cursor-not-allowed bg-blue-400"}`} onClick={CreateComment}>create comment 😎</button>
        </>
    )
}

export default CreateComment