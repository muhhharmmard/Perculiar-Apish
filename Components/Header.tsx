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
        <Button onClick={(e: React.mouseEvent < HTMLElement >)=>signOut()} className="btn">
      <Typography variant="h5">
   signOut
      </Typography>
      </Button>
      </Container>
      ): (
        <Button className="btn" onClick={(e: React.mouseEvent < HTMLElement >)=>signIn()}>
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
    { theme === "dark" ? (
        <Typography variant="h5">
    <Button className="btn" onClick={()=> toggleTheme() }>Light mode
      </Button>
      </Typography>):(

      <Typography variant="h5">

    <Button className="btn" onClick={()=> toggleTheme()
        }>
Dark mode</Button></Typography>)
      }
    </Container>
  </Card>
)
}
export default Header