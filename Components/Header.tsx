import {
  Typography,
  Card,
  Paper,
  Box,
  Button
} from "@mui/material"
import Search from "./Search"
import React,{
  useState,
  useRef
} from "react"
import Sidebar from "./Sidebar"
import { useSession, signIn, signOut } from "next-auth/react"

const Header = () =>{
  const {data}= useSession();
   return(
   <Card className=" font-2xl w-screen flex flex-col justify-center  text-center">
   <div className="flex">
     <Sidebar/>
    <Typography variant="h1" className="flex-1 w-4/5 text-center aladin">
    Apish
    </Typography>
    <Typography variant="h4">
    {
      data ? (
      <Button onClick={(e:React.mouseEvent<HTMLElement>)=>signOut()}>
      <Typography variant="h5">
   signOut
      </Typography>
      </Button>
      ) : (
       <Button onClick={(e:React.mouseEvent<HTMLElement>)=>signIn()}>
      <Typography variant="h5">
      Sign In 
      </Typography>
      </Button>
      )
    }
    </Typography>
    </div>
  
    <Search />
    </Card>
    )
}
export default Header


