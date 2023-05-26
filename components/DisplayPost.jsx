import axios from 'axios'
import useSWR from 'swr'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Post from './Post'
import Link from 'next/link'

const DisplayPost = () => {

    const fetcher = (at) => axios.get(at).then(res => res.data)
    const { data, error, isLoading } = useSWR("/api/post/getAllPosts", fetcher, { refreshInterval: 1000 })

    if (isLoading) return <p>Loading...</p>

    return (
        <div className='mt-4'>
            {data &&
                data.map((post) => (
                    <Link key={post.id} href={`/${post.id}`}>
                        <Post postData={post} />
                    </Link>
                ))
            }
        </div>
    )
}

export default DisplayPost