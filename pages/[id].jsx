import Comment from "@/components/Comment"
import CreateComment from "@/components/CreateComment"
import Header from "@/components/Header"
import Post from "@/components/Post"
import axios from "axios"
import { useRouter } from "next/router"
import useSWR from 'swr'

const SinglePosts = () => {
  const router = useRouter()
  const id = router.query.id
  const fetcher = (at) => axios.get(at).then(res => res.data)
  const { data, error, isLoading } = useSWR(`/api/post/getPost/${id}`, fetcher,{ refreshInterval: 1000 })
  if(error) return <p>Error while fetching post</p>
  if(isLoading) return <p>Post Loading</p>

  return (
    <div className='bg-gray-300 min-h-screen'>
      <div className="mx-4 sm:mx-auto max-w-[40rem]">
        <Header />
        <section>
          <Post postData={data.post}/>
        </section>
        <section className="my-4">
          <CreateComment postId={id}/>
        </section>
        <section className="bg-white rounded p-4 flex flex-col gap-2">
          {
            data && data?.post?.comments.map((comment) => (
              <Comment key={comment.id} commentData={comment}/>
            ))
          }
        </section>
      </div>
    </div>
  )
}

export default SinglePosts