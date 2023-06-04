// import { Inter } from 'next/font/google'
import CreatePosts from "@/components/CreatePosts";
import DisplayPost from "@/components/DisplayPost";
import Header from "@/components/Header";
import { useSession,signOut } from "next-auth/react"
import Image from "next/image";
import Link from "next/link";

// const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  const session = useSession()
  console.log(session)
  return (
    <>
      <div className='bg-gray-300 min-h-screen'>
        <main className="mx-4 sm:mx-auto max-w-[40rem]">
          <Header/>
          <button onClick={() => signOut()}>Sign out</button>
          <section>
            Hello postrsrtwert
            <CreatePosts/>
            <DisplayPost/>
          </section>
        </main>
      </div>
    </>
  )
}
