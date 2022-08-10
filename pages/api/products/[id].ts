import dbConnect from '../../../Lib/dbconnect'
import Product from '../../../Models/Product'
import type { NextApiRequest, NextApiResponse } from 'next'
import { unstable_getServerSession
} from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"
type Data={
  name:string
}
export default async function handler(
  req:NextApiRequest,
  res:NextApiResponse<Data>
) {
  const {
    query: { id },
    method,
  } = req
const session = await unstable_getServerSession(req, res, authOptions)
if(session){
  await dbConnect()

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const product = await Product.findById(id)
        if (!product) {
          return res.status(400).json({ success: false ,error:'Product not found'})
        }
        res.status(200).json({ success: true, data: product })
      } catch (error) {
        res.status(400).json({ success: false,error:error })
      }
      break

    case 'PATCH' /* Edit a model by its ID */:
      try {
        const product = await Product.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })
        if (!product) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: product })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'DELETE' /* Delete a model by its ID */:
      try {
        const deletedProduct = await Product.deleteOne({ _id: id })
        if (!deletedProduct) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: {} })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    default:
      res.status(400).json({ success: false })
      break
  }
}
else{
   console.log("hyt")
   res.status(400).json({
          isLoggedIn:false
        })
}
}
