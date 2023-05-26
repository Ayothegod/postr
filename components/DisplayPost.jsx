import axios from 'axios'
import useSWR from 'swr'

const DisplayPost = () => {
    const fetcher = async() => {
        const response = axios.get("/api/post/getAllPosts").then(res => res.data)
        // console.log(response);
    }
    // fetcher()
    // console.log(fetcher);
    const {data, error } = useSWR("/api/post/getAllPosts", fetcher)
    console.log(data);

  return (
    <div>DisplayPost</div>
  )
}

export default DisplayPost
// await fetch("/api/post/getAllPosts")
//         .then(res => res.json())
//         .then(res => console.log(res))