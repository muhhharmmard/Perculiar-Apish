import dbConnect from "../../../Lib/dbconnect";
import User from "../../../Models/User";
import type { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
type Data = {
  name: string;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {
    query: { id },
    method,
  } = req;
  const session = await unstable_getServerSession(req, res, authOptions);
  if (session) {
    await dbConnect();

    switch (method) {
      case "GET" /* Get a model by its ID */:
        try {
          const user = await User.findById(id);
          if (!user) {
            return res
              .status(400)
              .json({ success: false, error: "User not found" });
          }
          res.status(200).json({ success: true, data: user });
        } catch (error) {
          res.status(400).json({ success: false, error: error });
        }
        break;

      case "PUT" /* Edit a model by its ID */:
        try {
          const user = await User.findByIdAndUpdate(id, req.body.body);
          if (!user) {
            return res
              .status(400)
              .json({ success: false, message: "Not found" });
          }

          console.log(user);
          console.log(Object.keys(req.body.body));
          res.status(200).json({ success: true, data: user });
        } catch (error) {
          res.status(400).json({ success: false, message: error });
        }
        break;

      case "DELETE" /* Delete a model by its ID */:
        try {
          const deletedUser = await User.deleteOne({ _id: id });
          if (!deletedUser) {
            return res.status(400).json({ success: false });
          }
          res.status(200).json({ success: true, data: {} });
        } catch (error) {
          res.status(400).json({ success: false });
        }
        break;

      default:
        res.status(400).json({ success: false });
        break;
    }
  } else {
    console.log("hyt");
    res.status(400).json({
      isLoggedIn: false,
    });
  }
}
