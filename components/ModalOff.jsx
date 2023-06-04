import axios from 'axios'
import React from 'react'
import toast from "react-hot-toast"


const ModalOff = ({ deleteModal, setDeleteModal,id }) => {
    const deletePost = async (id) => {
        try {
          const response = await axios.post("/api/post/deletePost",{id})
          if(response.status == 201){toast.success(`post deleted`)}
        } catch (error) {
          console.log(error);
          toast.error("error dseleting post!")
        }
      }
    return (
        <div className='fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center h-screen'>
            <div className='p-4 bg-white text-center'>

                <p>you are about to delete this post</p>
                <p className='text-[11px] text-red-600'>once deleted, it cannot be recovered.</p>
                <div className='flex justify-between mt-2'>
                    <button onClick={() => setDeleteModal(!deleteModal)} className='bg-black text-white py-1 px-4 rounded hover:bg-gray-700' >cancel</button>
                    <button onClick={() => deletePost(id)} className='bg-red-600 text-white py-1 px-4 rounded hover:bg-red-900'>delete</button>
                </div>
            </div>
        </div>
    )
}

export default ModalOff