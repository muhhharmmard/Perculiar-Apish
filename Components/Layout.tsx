import {
  Typography,
  Card,
  Paper,
  Box,
  Container,
  Button
} from "@mui/material"
import Head from "next/head"
import Script from "next/script"


const Layout= ({children})=>{
  return(
    <>
    <Head>
 
    <style jsx>{`

    
    `}
    </style>
    </Head>
    <Card className="italic text-[3px] w-screen md:w-[75vw] Layout [box-sizing:border-box] border-box p-2">
    {children}
    </Card>
    </>
    )
}
export default Layout


