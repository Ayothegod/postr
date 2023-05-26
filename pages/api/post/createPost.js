import { authOptions } from 'pages/api/auth/[...nextauth]'
import { getServerSession } from "next-auth/next"
import prisma from '@/lib/prisma';



export default async function handler(req, res) {
    if(req.method === "POST"){
        try {
            const session = await getServerSession(req, res, authOptions)
            console.log(req.body.post);
            // const user = await prisma.Post.create({})
            console.log(session);
            res.status(201).json(req.body)
        } catch (error) {
            res.status(404).json(error)
        }
    }
    // res.status(200).json({ name: 'John Doe' })
  }
  



