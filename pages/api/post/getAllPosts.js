// import NextCors from 'nextjs-cors';
import prisma from '@/lib/prisma';

export default async function handler(req, res) {
    // await NextCors(req, res, {
    //     methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    //     origin: '*',
    //     optionsSuccessStatus: 200,
    //  });
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

            res.status(201).json({allPosts})
        } catch (error) {
            res.status(404).json({message:error.message})
        }
    }
}