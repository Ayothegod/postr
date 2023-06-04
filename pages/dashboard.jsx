import DisplayPost from "@/components/DisplayPost"
import DisplayUserPosts from "@/components/DisplayUserPosts"
import Header from "@/components/Header"


const Dashboard = () => {
  return (
    <div className='bg-gray-300 min-h-screen'>
        <main className="mx-4 sm:mx-auto max-w-[40rem]">
          <Header/>
          <p className="text-lg font-medium">My Posts</p>
          <DisplayUserPosts/>
        </main>
      </div>
  )
}

export default Dashboard