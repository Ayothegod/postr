// import { authOptions } from 'pages/api/auth/[...nextauth]'
// import { getServerSession } from "next-auth/next"
// const session = await getServerSession(req, res, authOptions)
import NextCors from 'nextjs-cors';
import prisma from '@/lib/prisma';



export default async function handler(req, res) {
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
     });
    if (req.method === "GET") {
        try {
            const allPosts = await prisma.Post.findMany({

                include: {
                    user: true,
                    comments: true
                },
                orderBy: {
                    createdAt: "desc"
                }
            })

            res.status(201).json(allPosts)
        } catch (error) {
            res.status(404).json(error.message)
        }
    }
}