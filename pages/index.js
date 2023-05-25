// import { Inter } from 'next/font/google'
import {useSession} from "next-auth/react"
import Link from "next/link";

// const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  const session = useSession()
  console.log(session);
  return (
    <>
      <main className="max-w-[40rem] mx-auto">
        <div className="mx-4">
          <nav className="flex justify-between">
            <Link href="/">Postr</Link>
            <Link href="/">Postr</Link>
          </nav>
        </div>
      </main>
    </>
  )
}
