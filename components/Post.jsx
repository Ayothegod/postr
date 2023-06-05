import axios from "axios";
import Image from "next/image"
import Link from "next/link";
import { useState } from "react";
import ModalOff from "./ModalOff";
import { AiFillHeart } from "react-icons/ai"
import toast from "react-hot-toast"


const Post = ({ postData, dashboard }) => {
  const [deleteModal, setDeleteModal] = useState(false)
  const [clickLike, setClickLike] = useState(false)
  const addLike = async (id) => {
    const idx = id.id
    try {
      console.log(idx);
      // const response = await axios.post("/api/post/like", { idx })
      // setClickLike(true)
    } catch (error) {
      console.log(error);
      setClickLike(false)
      if (error.response.status == 403) return toast.error(error.response.data)
      if (error.response.status == 404) return toast.error(error.response.data)
    }
  }
  const unLike = async (id) => {
    const idx = id.id
    try {
      console.log(idx);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex flex-col gap-1 bg-white px-4 py-2 my-1 rounded ">
      <Link href={`/${postData.id}`}>
        <div className="hover:bg-gray-100">
          <div className="flex items-center gap-2">
            <Image src={postData?.user?.image} alt={postData?.user.name} width={36} height={36} className="rounded-full" />
            <p className="text-sm font-semibold">{postData?.user.name}</p>
          </div>
          <div>
            <p className=" text-gray-800 ">{postData?.post}</p>
          </div>

        </div>
      </Link>

      <div className="border-t border-dotted border-gray-200 py-1">
        <div className="flex gap-12 items-center ">

          <p className=" text-sm text-gray-600 flex items-center gap-1" onClick={() => setClickLike(!clickLike)}>
            {!clickLike && <AiFillHeart className={`text-xl `} onClick={() => addLike({ id: postData.id })} />}
            {clickLike && <AiFillHeart className={`text-xl text-red-600`} onClick={() => unLike({ id: postData.id })} />}

            {postData.likes.length}
            {/* like */}
          </p>
          <p className=" text-sm text-gray-600">{postData?.comments.length} comments</p>
          {
            dashboard &&
            <button className="text-red-600 font-bold text-base" onClick={() => setDeleteModal(!deleteModal)}>delete</button>
          }
          {
            deleteModal &&
            <ModalOff setDeleteModal={setDeleteModal} id={postData.id} deleteModal={deleteModal} />
          }
        </div>
      </div>
    </div>
  )
}

export default Post