import { authOptions } from 'pages/api/auth/[...nextauth]'
import { getServerSession } from "next-auth/next"
import prisma from '@/lib/prisma';

export default async function handler(req, res) {
    if (req.method === "POST") {
        const session = await getServerSession(req, res, authOptions)
        if (!session) return res.status(403).json("You need to login")
        try {
            const postId = req.body.idx
            const user = await prisma.user.findUnique({
                where: {
                    email: session.user.email
                }
            })
            const post = await prisma.Post.findUnique({
                where: {
                    id: postId
                }
            })
            const findLike = await prisma.Like.findFirst({
                where: {
                    userId: user.id,
                    postId: post.id
                }
            })
            const deleteLike = await prisma.Like.delete({
                where: {
                    id:findLike.id
                }
            })
            res.status(201).json("like deleted successFully")
        } catch (error) {
            res.status(404).json({ message: error.message })
        }
    }
}
