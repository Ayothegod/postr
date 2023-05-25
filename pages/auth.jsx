import { signIn, } from "next-auth/react"
import toast from 'react-hot-toast';


const AuthPage = () => {
    const login = () => {
        signIn('google', { callbackUrl: '/' })
        toast.success("Lets goo")
    }
    return (
        <div className="flex items-center justify-center h-screen">
            <button className="bg-gray-800 text-white py-2 px-6 rounded hover:bg-gray-900" onClick={login}>sign in with google</button>
        </div>
    )
}

export default AuthPage