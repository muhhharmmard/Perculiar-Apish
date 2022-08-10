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
    <Card className="italic text-[3px]">
    {children}
    </Card>
    </>
    )
}
export default Layout


