import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Header = () => {
    const session = useSession()
    return (
        <nav className="flex justify-between items-center py-4">
            <Link href="/" className="font-semibold text-gray-800 text-xl">Postr</Link>

            {session.status === "authenticated" &&
                <Link href="/dashboard">
                    {session?.data?.user?.image && <Image src={session?.data?.user?.image || <Skeleton circle={true} />} alt={session?.data?.user?.name || ""} width={36} height={36} className="rounded-full" />}
                </Link>
            }
            {session.status === "unauthenticated" &&
                <Link href='/auth'>
                    <button className="bg-gray-800 text-white py-2 px-6 rounded">sign in</button>
                </Link>}
        </nav>
    )
}

export default Header