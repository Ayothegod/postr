import Image from "next/image"

const SingleComment = () => {
  return (
    <div className="flex flex-col gap-1 bg-white p-2 my-1 rounded">
    <div className="flex items-center gap-2">
        {/* <Image src={commentData?.user?.image} alt={commentData?.user.name} width={36} height={36} className="rounded-full"/> */}
        {/* <p className="text-sm font-semibold">{commentData?.user.name}</p> */}
    </div>
    <div>
        {/* <p className=" text-gray-800 ">{commentData?.post}</p> */}
    </div>
    <div>
        {/* <p className=" text-sm text-gray-600">{commentData?.comments.length} comments</p> */}
    </div>
</div>
  )
}

export default SingleComment