import {
  Typography,
  Card,
  Paper,
  Box,
  Button,
  Container
} from "@mui/material"
import {
  useRouter
} from "next/router"
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
  const router = useRouter()
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
        <Container className="">
      <Typography variant="h4">
        <Button onClick={(e: React.mouseEvent < HTMLElement >)=>router.push("/you")} className="btn">
      You
    </Button>
      </Typography>
    </Container>
    </div>
    <Container className="flex big">
    <Search />
    { theme === "dark" ? (
        <Typography variant="h5">
    <Button className="btn" onClick={()=> toggleTheme() }>Light mode
      </Button>
      </Typography>): (

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