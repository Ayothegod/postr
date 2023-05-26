import Image from "next/image"


const Post = ({postData}) => {
    // console.log(postData)
  return (
    <div className="flex flex-col gap-2 bg-white p-2 my-1 rounded">
        <div>
            <Image src={postData.user.image} alt={postData.user.name} width={36} height={36} className="rounded-full"/>
            <p className="">{postData.user.name}</p>
        </div>
    </div>
  )
}

export default Post