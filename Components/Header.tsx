import {
  Typography,
  Card,
  Paper,
  Box,
  Button
} from "@mui/material"
import Search from "./Search"
import React, {
  useState,
  useRef
} from "react"
import Sidebar from "./Sidebar"
import {
  useSession,
  signIn,
  signOut
} from "next-auth/react"


import { useAppContext } from "../store/context"

const Header = () => {
  const {
    data
  } = useSession();
  
const {
 theme,
 toggleTheme
} = useAppContext();
  return(
    <Card className=" font-2xl w-screen flex flex-col justify-center  text-center">
   <div className="flex">
     <Sidebar />
    <Typography variant="h1" className="flex-1 w-4/5 text-center aladin">
    Apish
    </Typography>
    <Typography variant="h4">
    {
      data ? (
        <Button onClick={(e: React.mouseEvent < HTMLElement >)=>signOut()}>
      <Typography variant="h5">
   signOut
      </Typography>
      </Button>
      ): (
        <Button onClick={(e: React.mouseEvent < HTMLElement >)=>signIn()}>
      <Typography variant="h5">
      Sign In
      </Typography>
      </Button>
      )
      }
    </Typography>
    </div>
  <Container className="flex ">
    <Search />
    <Button onClick={toggleTheme}>{ theme === dark ? <Typography variant="h5">Light mode</Typography>: <Typography variant="h5">Dark mode</Typography>}
    </Button>
    </Container>
    </Card>
  )
}
export default Header