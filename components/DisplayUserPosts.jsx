import axios from 'axios'
import useSWR from 'swr'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Post from './Post'
import Link from 'next/link'

const DisplayUserPosts = () => {
    const fetcher = (at) => axios.get(at).then(res => res.data)
    const { data, error, isLoading } = useSWR("/api/post/getUserPosts", fetcher, { refreshInterval: 1000 })

    if (isLoading) return <p>Loading...</p>
    if (error) return <p>cant fetch data... </p>

    return (
        <div className='mt-0 pb-4'>
            {
                data.allPosts.length < 1 && "no post yet"
            }
            {data &&
                data?.allPosts.map((post) => (
                    <Post key={post.id} postData={post} dashboard={true}/>
                    // <Link key={post.id} href={`/${post.id}`}>
                    // </Link>
                ))
            }
        </div>
    )
}

export default DisplayUserPosts