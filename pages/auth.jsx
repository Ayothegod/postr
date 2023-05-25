import {signIn, useSession} from "next-auth/react"
const AuthPage = () => {
  const session = useSession()
  console.log(session);
  return (
    <div className="flex items-center justify-center h-screen">
        <button className="bg-gray-800 text-white py-2 px-6 rounded hover:bg-gray-900" onClick={() => signIn("google")}>sign in with google</button>
        <button className="bgwhite text-black py-2 px-6 rounded" onClick={() => signIn("google")}>sign in with google</button>
    </div>
  )
}

export default AuthPage