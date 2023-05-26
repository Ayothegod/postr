import axios from 'axios'
import useSWR from 'swr'

const DisplayPost = () => {
    const fetcher = async(url) => {
        await axios.get(url).then(res => res.data)
    }

  return (
    <div>DisplayPost</div>
  )
}

export default DisplayPost