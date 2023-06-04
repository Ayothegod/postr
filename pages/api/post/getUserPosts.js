import NextCors from 'nextjs-cors';
import prisma from '@/lib/prisma';
import { authOptions } from 'pages/api/auth/[...nextauth]'
import { getServerSession } from "next-auth/next"

export default async function handler(req, res) {
    await NextCors(req, res, {
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200,
     });
    if (req.method === "GET") {
        const session = await getServerSession(req, res, authOptions)
        if (!session) return res.status(403).json("You need to login")
        try {
            const user = await prisma.User.findUnique({
                where:{
                    email:session.user.email
                }
            })
            const allPosts = await prisma.Post.findMany({
                where:{
                    userId:user.id
                },
                include: {
                    user: true,
                    comments: true
                },
                orderBy: {
                    createdAt: "desc"
                }
            })
            // console.log(user);
            // console.log(allPosts);
            res.status(201).json({allPosts})
        } catch (error) {
            res.status(404).json({message:error.message})
        }
    }
}