import { authOptions } from 'pages/api/auth/[...nextauth]'
import { getServerSession } from "next-auth/next"
import prisma from '@/lib/prisma';



export default async function handler(req, res) {
    if (req.method === "POST") {

        const session = await getServerSession(req, res, authOptions)
        if (!session) return res.status(403).json("You need to login")
        const post = req.body.post
        if (post.length > 30) return res.status(404).json("length is more than limit!")
        if (post.length < 1) return res.status(401).json(`post can't be empty!!!`)
        try {
            const user = await prisma.user.findUnique({
                where:{
                    email:session.user.email
                }
            })
            const createdPost = await prisma.post.create({
                data: {
                    post: post,
                    userId:user.id
                },
                include:{
                    user:true
                }
            })
            res.status(201).json(createdPost)
        } catch (error) {
            res.status(404).json(error.message)
        }
    }
}




