import dbConnect from '../../../Lib/dbconnect'
import User from '../../../Models/User'
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
        const dd = await User.find({}) /* find all the data in our database */
        res.status(200).json({ success: true, data: dd })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      if(session){
      try {
        const user = await User.create(
          req.body
        ) /* create a new model in the database */
        console.log(user)
        res.status(201).json({ success: true, data: user })
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
