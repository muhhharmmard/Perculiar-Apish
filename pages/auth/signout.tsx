import { signOut } from "next-auth/react"
import {
  Card,
  Paper,
  Typography,
  Button
} from "@mui/material"

export default function SignOut(){
  return (
    <Card className="p-2 rounded-2xl h-screen w-screen flex align-center content-center" raised={true}>
    <Paper className="p-3 rounded-2xl shadow-2xl">
    <Typography variant="h1">
    APISH
    </Typography>
    <Typography variant="h6">
    Are you sure you want to sign out?
    </Typography>
    <Button onClick={()=>signOut({
      callbackUrl:`${window.location}`
    })}>
    <Typography variant="h3">
    Sign Out
   </Typography>
    </Button>
    </Paper>
    </Card>
  )
}

