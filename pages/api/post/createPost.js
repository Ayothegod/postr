



export default function handler(req, res) {

    if(req.method === "POST"){
        try {
            // const post = 
            console.log(req.body.post);
        } catch (error) {
            res.status(404).json(error)
        }
    }
    // res.status(200).json({ name: 'John Doe' })
  }
  



