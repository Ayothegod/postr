import React from 'react'

const DeleteModal = ({deleteModal,setDeleteModal}) => {
    console.log("hello");
  return (
    <div className='fixed inset-0'>
        
        <button onClick={() => setDeleteModal(!deleteModal)}>close</button>
        <p>Helllo</p>
    </div>
  )
}

export default DeleteModal