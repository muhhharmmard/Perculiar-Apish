import dbConnect from '../../../Lib/dbconnect'
import Product from '../../../Models/Product'
import type { NextApiRequest, NextApiResponse } from 'next'
import {unstable_getServerSession} from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"
export default async function handler(
  req:NextApiRequest
, res:NextApiResponse
) {
  const { method } = req
const session = await unstable_getServerSession(req, res, authOptions)
  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const pets = await Product.find({}) /* find all the data in our database */
        res.status(200).json({ success: true, data: pets })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      if(session){
      try {
        const product = await Product.create(
          req.body
        ) /* create a new model in the database */
        console.log(product)
        res.status(201).json({ success: true, data: product })
      } catch (error) {
        console.log("ERROR")
        res.status(400).json({ success: false })
      }
      }
      else{
        console.log("loggin werey")
        res.status(400).json({
          isLoggedIn:false
        })
      } 
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
