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
import Categories from "../Components/Categories"

 import { useSession } from "next-auth/react"
import { useAppContext } from "../store/context"
const Home: NextPage = () => {
  const router = useRouter()
   const { data: session } = useSession();
   useEffect(()=>{
     if(session){}
     else{
       
     }
   },[session])
   
const {
  products,
  categories,
  user,
  categoriesWithProducts
} = useAppContext();
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
     <Categories categories={categoriesWithProducts} />
   </Paper>
    </div>
  )
}

export default Home
