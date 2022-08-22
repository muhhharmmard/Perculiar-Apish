import {
  Typography,
  Card,
  Paper,
  Box,
  Button,
  Container
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


import {
  useAppContext
} from "../store/context"

const Header = () => {
  const {
    data
  } = useSession();

  const {
    theme,
    toggleTheme
  } = useAppContext();
  return(
    <Card className=" font-2xl w-screen flex flex-col justify-center  text-center praise">
   <div className="flex">
     <Sidebar />
    <Typography variant="h1" className="flex-1 w-4/5 text-center aladin">
    Apish
    </Typography>
    <Typography variant="h4">
    {
      data ? (
      <Container className="">
        <Button onClick={(e: React.mouseEvent < HTMLElement >)=>signOut()} variant="contained" className="btn">
      <Typography variant="h5">
   signOut
      </Typography>
      </Button>
      </Container>
      ): (
        <Button variant="contained" className="btn" onClick={(e: React.mouseEvent < HTMLElement >)=>signIn()}>
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
    <Button variant="contained" className="btn" onClick={()=>toggleTheme()}>{ theme === "dark" ? <Typography variant="h5">Light mode</Typography>: <Typography variant="h5">Dark mode</Typography>}
    </Button>
    </Container>
    </Card>
  )
}
export default Header