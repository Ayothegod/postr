import Image from "next/image"

const Comment = ({ commentData }) => {
    console.log(commentData);
    return (
        <div className="flex flex-col gap-1 bg-gray-300 p-2 my-1 rounded">
            <div className="flex items-center gap-2">
                <Image src={commentData?.user?.image} alt={commentData?.user.name} width={24} height={24} className="rounded-full" />
                <p className="text-sm font-semibold">{commentData?.user.name}</p>
            </div>
            <div>
                <p className=" text-gray-800 ">{commentData?.commentData}</p>
            </div>
        </div>
    )
}

export default Comment