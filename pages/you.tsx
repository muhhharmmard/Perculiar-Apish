import {
  Container,
  Paper,
  Card,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Divider
} from "@mui/material"
import {
  useAppContext
} from "../store/context"

import Loader from "../Components/Loader"
import {
  useRouter
} from "next/router"


import React, {
  useState,
  useEffect,
  useLayoutEffect
} from "react"

import {
  signOut
} from "next-auth/react"

import Link from "next/link"


const You = (): JSX.Element => {
  const router = useRouter();
  const {
    user
  } = useAppContext();
  useEffect(()=> {
    if (!user) {
      router.push("/auth/signin")
    }
  },[user])
    if(user){
  const {
    name,
    image,
    cart,
    wishlist,
    products
  } = user
  return (
    <Card>
    <Paper className="flex flex-col p-4 m-2 text-center align-center justify-center">
    <img src={image} className="rounded-3xl" />
    <Typography variant="h4">{name} </Typography>
    </Paper>
    <Paper className="p-2">
    <Typography variant="h5">
    Your Wishlist
    </Typography>
   <List>
  {wishlist.map((dept, s) => (
      <ListItemButton>
 <Link href={ {
        pathname: "/products/[id]",
        query: {
          id: dept.name,
        },
      }}
        >
    <Typography variant="h6">
    <ListItemText primary={dept.name} />
  </Typography>
    </Link>
    <Divider />
   </ListItemButton>
    ))}
          </List>
    </Paper>
    </Card>
)}
return <Loader/>
}


export default You