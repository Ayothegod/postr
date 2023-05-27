import axios from 'axios'
import useSWR from 'swr'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Post from './Post'
import Link from 'next/link'
import { useEffect,useState } from 'react'

const DisplayPost = () => {
    const [data,setData] = useState([])
    // const fetcher = (at) => axios.get(at).then(res => res.data)
    // const { data, error, isLoading } = useSWR("/api/post/getAllPosts", fetcher, { refreshInterval: 1000 })
    useEffect(() => {
        const data = async() => {
            const response = await axios.get("/api/post/getAllPosts")
            setData(response)
        }
        data()
    },[])
    console.log(data);
    // if (isLoading) return <p>Loading...</p>
    // if (error) return <p>error {error}</p>

    return (
        <div className='mt-4 py-4'>
            {data &&
                data?.data?.allPosts.map((post) => (
                    <Link key={post.id} href={`/${post.id}`}>
                        <Post postData={post} />
                    </Link>
                ))
            }
        </div>
    )
}

export default DisplayPost