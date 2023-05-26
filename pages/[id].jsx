import axios from "axios"
import { useRouter } from "next/router"
import useSWR from 'swr'

const SinglePosts = () => {
  const router = useRouter()
  const id = router.query.id
  console.log(id);

  const fetcher = (at) => axios.get(at).then(res => res.data)
  const { data, error, isLoading } = useSWR(`/api/post/getPost/${id}`, fetcher)
  console.log(error);
  console.log(data);
  

  return (
    <div>SinglePosts</div>
  )
}

export default SinglePosts