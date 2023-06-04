import { authOptions } from 'pages/api/auth/[...nextauth]'
import { getServerSession } from "next-auth/next"
import prisma from '@/lib/prisma';



export default async function handler(req, res) {
    if (req.method === "DELETE") {

        const session = await getServerSession(req, res, authOptions)
        if (!session) return res.status(403).json("You need to login")
        const postId = await req.query.id
        try {
            // const post = await prisma.Post.delete({
            //     where:{
            //         id:postId
            //     }
            // })
            console.log(postId);
        res.status(201).json("post deleted successfully")
        } catch (error) {
            res.status(404).json({message:error.message})
        }
    }
}



