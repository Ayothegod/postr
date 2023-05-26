// import { Inter } from 'next/font/google'
import CreatePosts from "@/components/CreatePosts";
import { useSession,signOut } from "next-auth/react"
import Image from "next/image";
import Link from "next/link";

// const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  const session = useSession()
  // console.log(session)
  return (
    <>
      <div className='bg-gray-300 min-h-screen'>
        <main className="mx-4 sm:mx-auto max-w-[40rem]">
          <nav className="flex justify-between items-center py-4">
            <Link href="/" className="font-semibold text-gray-800 text-xl">Postr</Link>

            {session.status === "authenticated" &&
              <Link href="/dashboard">
                {session?.data?.user?.image && <Image src={session?.data?.user?.image || ""} alt={session?.data?.user?.name || ""} width={48} height={48} className="rounded-full" />}
              </Link> 
              }
              {session.status === "unauthenticated" && 
              <Link href='/auth'>
                <button className="bg-gray-800 text-white py-2 px-6 rounded">sign in</button>
              </Link>}
          </nav>
            <button onClick={() => signOut()}>signout</button>
          <section>
            <CreatePosts/>
          </section>
        </main>
      </div>
    </>
  )
}
