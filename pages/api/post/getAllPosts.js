// import { authOptions } from 'pages/api/auth/[...nextauth]'
// import { getServerSession } from "next-auth/next"
// const session = await getServerSession(req, res, authOptions)
import prisma from '@/lib/prisma';



export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const allPosts = await prisma.Post.findMany({
                include:{
                    user:true,
                    comments:true
                },
                orderBy:{
                    createdAt:"desc"
                }
            })
            // console.log(allPosts);
            res.status(201).json(allPosts)
        } catch (error) {
            res.status(404).json(error.message)
        }
    }
}