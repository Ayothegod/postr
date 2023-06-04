import { authOptions } from 'pages/api/auth/[...nextauth]'
import { getServerSession } from "next-auth/next"
import prisma from '@/lib/prisma';



export default async function handler(req, res) {
    if (req.method === "POST") {

        const session = await getServerSession(req, res, authOptions)
        if (!session) return res.status(403).json("You need to login")
        try {
            const postId = req.body.id
            const post = await prisma.Post.delete({
                where:{
                    id:postId
                }
            })
        res.status(201).json("post deleted successFully")
        } catch (error) {
            res.status(404).json({message:error.message})
        }
    }
}

