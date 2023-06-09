// import { authOptions } from 'pages/api/auth/[...nextauth]'
// import { getServerSession } from "next-auth/next"
// const session = await getServerSession(req, res, authOptions)
import prisma from '@/lib/prisma';



export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const postId = await req.query.id
            const post = await prisma.Post.findUnique({
                where:{
                    id:postId
                },
                include:{
                    user:true,
                    comments:{
                        include:{
                            user:true
                        },
                        orderBy:{
                            createdAt:"desc"
                        }
                    }
                }
            })

            res.status(201).json({post})
        } catch (error) {
            res.status(404).json({message:error.message})
        }
    }
}