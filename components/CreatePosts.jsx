import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"

const CreatePosts = () => {
    const [post,setPost] = useState("")
    const [disable,setDisable] = useState(false)

    const createPost = async (e) => {
      e.preventDefault()
        try {
          setPost("")
          setDisable(true)
          const response = await axios.post("/api/post/createPost",{post})
          if(response.status == 201){toast.success(`post created successfully`)}
          setDisable(false)
        } catch (error) {
          setPost("")
          setDisable(false)
          if(error.response.status == 403) return toast.error(error.response.data)
          if(error.response.status == 401) return toast.error(error.response.data)
          if(error.response.status == 404) return toast.error(error.response.data)
        }
    }

  return (
    <div className="p-4 bg-white rounded">
        <textarea rows="3" className="bg-gray-300 w-full rounded p-2 outline-none" placeholder="what is on your mind?" value={post} onChange={e => setPost(e.target.value)}/>
        <div className="flex items-center justify-between mt-2">
            <p className={`text-gray-400 text-xs ${post.length > 150 && "text-red-400"}`}>{post.length}/150</p>
            <button className={`bg-blue-500 text-white text-sm rounded py-1 px-6 font-semibold ${disable && "bg-blue-300 cursor-not-allowed"}`} onClick={createPost}>create post 😎</button>
        </div>
    </div>
  )
}

export default CreatePosts