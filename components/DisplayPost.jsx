import axios from 'axios'
import useSWR from 'swr'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const DisplayPost = () => {

    const fetcher = (at) => axios.get(at).then(res => res.data)
    const { data, error, isLoading } = useSWR("/api/post/getAllPosts", fetcher)
    console.log(data);

    return (
        <div className='mt-4'>
            {
                data.map((data) => (
                    
                ))
            }
        </div>
    )
}

export default DisplayPost