// import { Inter } from 'next/font/google'
import {useSession} from "next-auth/react"
import Image from "next/image";
import Link from "next/link";

// const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  const session = useSession()
  console.log(session);
  return (
    <>
        <div className='bg-gray-300 min-h-screen'>

      <main className="max-w-[40rem] mx-auto ">
        <div className="mx-4">
          <nav className="flex justify-between py-4">
            <Link href="/">Postr</Link>

            {session ? 
            <Link href="/dashboard">
              <Image src={session?.data.user.image} alt={session?.data.user.name} width={24} height={24}/>
            </Link> : 
            <button className="bg-gray-800 text-white py-2 px-6 rounded">sign in</button>
            }
          </nav>
        </div>
      </main>
    </div>
    </>
  )
}
