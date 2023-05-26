

const CreatePosts = () => {
  return (
    <div className="p-4 bg-white rounded">
        <textarea rows="3" className="bg-gray-300 w-full rounded p-2" placeholder="what is on your mind?"/>
        <div className="flex items-center justify-between mt-2">
            <p>300</p>
            <button className="bg-blue-500 text-white text-sm rounded py-1 px-6 font-semibold">create post</button>
        </div>
    </div>
  )
}

export default CreatePosts