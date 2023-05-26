import { useRouter } from "next/router"
import useSWR from 'swr'


const SinglePosts = () => {
  const router = useRouter()
  // console.log(router.query.id);

  const fetcher = (at) => axios.get(at).then(res => res.data)
  const { data, error, isLoading } = useSWR("/api/post/getAllPosts", fetcher, { refreshInterval: 1000 })
  // console.log(data);
  

  return (
    <div>SinglePosts</div>
  )
}

export default SinglePosts