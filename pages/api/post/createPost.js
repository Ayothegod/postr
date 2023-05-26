import { authOptions } from 'pages/api/auth/[...nextauth]'
import { getServerSession } from "next-auth/next"
import prisma from '@/lib/prisma';



export default async function handler(req, res) {
    if(req.method === "POST"){
        try {
            const session = await getServerSession(req, res, authOptions)
            if(!session) return res.status(403).json("You need to login")
            const post = req.body.post
            if(post.length > 50) return res.status(404).json({message:"length more than recommended"})
            res.status(201).json(post)
        } catch (error) {
            res.status(404).json(error.message)
        }
    }
    // res.status(200).json({ name: 'John Doe' })
  }
  



