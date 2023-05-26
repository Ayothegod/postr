import { authOptions } from 'pages/api/auth/[...nextauth]'
import { getServerSession } from "next-auth/next"
import prisma from '@/lib/prisma';



export default async function handler(req, res) {
    if (req.method === "POST") {

        const session = await getServerSession(req, res, authOptions)
        if (!session) return res.status(403).json("You need to login")
        const post = req.body.post
        if (post.length > 150) return res.status(404).json({ message: "length more than recommended" })
        try {
            const user = await prisma.user.findUnique({
                where:{
                    email:session.user.email
                }
            })
            const createdPost = await prisma.post.create({
                data: {
                    post: post,
                    id:user.id
                }
            })
            console.log(createdPost);
            // res.status(201).json(post)
        } catch (error) {
            res.status(404).json(error.message)
        }
    }
    // res.status(200).json({ name: 'John Doe' })
}




