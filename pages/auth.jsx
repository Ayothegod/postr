import {signIn} from "next-auth/react"
const AuthPage = () => {

  return (
    <div className="flex items-center justify-center h-screen">
        <button className="bg-gray-800 text-white py-2 px-6 rounded hover:bg-gray-900">sign in with google</button>
    </div>
  )
}

export default AuthPage