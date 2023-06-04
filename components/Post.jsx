import axios from "axios";
import Image from "next/image"
import Link from "next/link";


const Post = ({postData,dashboard}) => {
  // console.log(dashboard);
  // console.log(postData.id);
  const deletePost = async (id) => {
    try {
      const response = await axios.post("/api/post/deletePost",{id})
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex flex-col gap-1 bg-white p-2 my-1 rounded">
        <div className="flex items-center gap-2">
            <Image src={postData?.user?.image} alt={postData?.user.name} width={36} height={36} className="rounded-full"/>
            <p className="text-sm font-semibold">{postData?.user.name}</p>
        </div>
        <div>
            <p className=" text-gray-800 ">{postData?.post}</p>
        </div>
        <div className="flex gap-4 items-center ">
            <p className=" text-sm text-gray-600">{postData?.comments.length} comments</p>
            {
              dashboard && 
              <button className="text-red-600 font-bold text-lg" onClick={() => deletePost(postData?.id)}>delete</button>
            }
        </div>
    </div>
  )
}

export default Post