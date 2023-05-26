import axios from "axios"
import { useState } from "react"

const CreateComment = ({postId}) => {
    const [comment, setComment] = useState("")
    const [disable,setDisable] = useState(false)

    const CreateComment = async (e) => {
        e.preventDefault()
          try {
              const response = await axios.post("/api/post/createComment",{comment,postId})
              console.log(response)
              // setComment("")
              // setDisable(true)
            // if(response.status == 201){toast.success(`post created successfully`)}
            // setDisable(false)
          } catch (error) {
            console.log(error)
            // setComment("")
            // setDisable(false)
            // if(error.response.status == 403) return toast.error(error.response.data)
            // if(error.response.status == 401) return toast.error(error.response.data)
            // if(error.response.status == 404) return toast.error(error.response.data)
          }
      }
    return (
        <>
            <textarea placeholder="write comment..." className="w-full rounded p-2 outline-none" value={comment} onChange={e => setComment(e.target.value)} />
            <button className={`bg-blue-500 text-white text-sm rounded py-1 px-6 font-semibold `} onClick={CreateComment}>create post 😁</button>
        </>
    )
}

export default CreateComment