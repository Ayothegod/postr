import axios from 'axios'
import useSWR from 'swr'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Post from './Post'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const DisplayPost = () => {
    const fetcher = (at) => axios.get(at).then(res => res.data)
    const { data, error, isLoading } = useSWR("/api/post/getAllPosts", fetcher, { refreshInterval: 1000 })
    // console.log(data);
    if (isLoading) return <p>Loading data...</p>
    if (error) return <p>cant fetch data... </p>

    return (
        <div className='mt-4 py-4'>
            {
                data.allPosts.length < 1 && "no post yet"
            }
            {data &&
                data?.allPosts.map((post) => (
                    <Post key={post.id} postData={post} />
                ))
            }
        </div>
    )
}

export default DisplayPost