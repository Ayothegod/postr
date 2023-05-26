import axios from 'axios'
import useSWR from 'swr'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Post from './Post'

const DisplayPost = () => {

    const fetcher = (at) => axios.get(at).then(res => res.data)
    const { data, error, isLoading } = useSWR("/api/post/getAllPosts", fetcher, { refreshInterval: 1000 })
    console.log(data);

    return (
        <div className='mt-4'>
            { data &&
                data.map((post) => (
                    <Post key={post.id} postData={post}/>
                ))
            }
        </div>
    )
}

export default DisplayPost