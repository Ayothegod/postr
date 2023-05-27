import { authOptions } from 'pages/api/auth/[...nextauth]'
import { getServerSession } from "next-auth/next"
import prisma from '@/lib/prisma';

export default async function handler(req, res) {
    if (req.method === "POST") {

        const session = await getServerSession(req, res, authOptions)
        if (!session) return res.status(403).json("You need to login")
        const comment = req.body.comment
        const postId = req.body.postId
        if (comment.length > 30) return res.status(404).json("length is more than limit!")
        if (comment.length < 1) return res.status(401).json(`comment can't be empty!!!`)
        try {

            const user = await prisma.user.findUnique({
                where: {
                    email: session.user.email
                }
            })
            const createdComment = await prisma.Comment.create({
                data: {
                    commentData: comment,
                    userId: user.id,
                    postId: postId
                },
                include: {
                    user: true,
                    post: true
                }
            })
            res.status(201).json({createdComment})
        } catch (error) {
            res.status(404).json({message:error.message})
        }
    }
}




