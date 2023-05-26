import axios from 'axios'
import useSWR from 'swr'

const DisplayPost = () => {

    const fetcher = (at) => axios.get(at).then(res => res.data)
    const {data, error,isLoading } = useSWR("/api/post/getAllPosts", fetcher)
    console.log(data);

  return (
    <div>DisplayPost</div>
  )
}

export default DisplayPost