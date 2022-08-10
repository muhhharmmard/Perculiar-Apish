import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter} from 'next/router'
import { useEffect,useState } from "react"
import {
  Typography,
  Card,
  Paper
} from "@mui/material"
import Loader from "../Components/Loader"

 import { useSession } from "next-auth/react"

const Home: NextPage = () => {
  const router = useRouter()
   const { data: session } = useSession();
   useEffect(()=>{
     if(session){}
     else{
       
     }
   },[session])
  return (
    <div>
      <Head>
        <title>Apish</title>
        <meta name="description" content="Apish" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
   <div className="h-[60vh] overflow-scroll">
   <Typography  variant="h1" className="aladin">
   </Typography>
   </div>
   <Paper>
   </Paper>
    </div>
  )
}

export default Home
