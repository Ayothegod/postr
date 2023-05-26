import Image from "next/image"
import Link from "next/link";


const Post = ({postData}) => {
  // console.log(postData);
  return (
    <div className="flex flex-col gap-1 bg-white p-2 my-1 rounded">
        <div className="flex items-center gap-2">
            <Image src={postData.user.image} alt={postData.user.name} width={36} height={36} className="rounded-full"/>
            <p className="text-sm font-semibold">{postData.user.name}</p>
        </div>
        <div>
            <p className=" text-gray-800 ">{postData.post}</p>
        </div>
        <div>
            <p className=" text-sm text-gray-600">{postData.comments.length} comments</p>
        </div>
    </div>
  )
}

export default Post