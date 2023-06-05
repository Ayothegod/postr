import { authOptions } from 'pages/api/auth/[...nextauth]'
import { getServerSession } from "next-auth/next"
import prisma from '@/lib/prisma';

export default async function handler(req, res) {
    if (req.method === "POST") {
        const session = await getServerSession(req, res, authOptions)
        if (!session) return res.status(403).json("You need to login")
        const postId = req.body.idx
        try {
            const user = await prisma.user.findUnique({
                where:{
                    email:session.user.email
                }
            })
            const post = await prisma.Post.findUnique({
                where:{
                    id:postId
                }
            })
            const likedPost = await prisma.Like.create({
                data: {
                    userId:user.id,
                    postId: post.id,
                },
                include:{
                    user:true,
                    post:true
                }
            })
            // console.log(user.id);
            // console.log(post.id);
            console.log(likedPost);
            // console.log({createdPost});
        // res.status(201).json({createdPost})
        } catch (error) {
            res.status(404).json({message:error.message})
        }
    }
}
