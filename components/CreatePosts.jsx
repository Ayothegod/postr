import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"

const CreatePosts = () => {
    const [post,setPost] = useState("")

    const createPost = async () => {
        const response = await axios.post("/api/post/createPost",{post})
        console.log(response);
        if(response.status == 201) return toast.success("post created")
        if(response.status == 403) return toast.success("you are not authorized")
        if(response.status == 404) return toast.error("error creating post")
    }

  return (
    <div className="p-4 bg-white rounded">
        <textarea rows="3" className="bg-gray-300 w-full rounded p-2 outline-none" placeholder="what is on your mind?" value={post} onChange={e => setPost(e.target.value)}/>
        <div className="flex items-center justify-between mt-2">
            <p className="text-gray-400">{post.length}/300</p>
            <button className="bg-blue-500 text-white text-sm rounded py-1 px-6 font-semibold" onClick={createPost}>create post</button>
        </div>
    </div>
  )
}

export default CreatePosts