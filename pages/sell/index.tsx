import type {
  NextPage
} from 'next'
import Head from 'next/head'
import {
  useRouter
} from 'next/router'
import {
  useEffect,
  useState
} from "react"
import {
  Typography,
  Card,
  Paper,
 Container
} from "@mui/material"
import Loader from "../../Components/Loader"

import {
  useSession
} from "next-auth/react"

const Home: NextPage = () => {
  const router = useRouter()
  const {
    data: session
  } = useSession();
  const getStarted = () =>{
    router.push("/sell/dashboard")
  }
  return (
    <div>
      <Head>
        <title>Sell at Apish</title>
        <meta name="description" content="Sell at Apish" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
      <Typography variant="h2">
      Sell at Apish 
      </Typography>
      <Typography variant="body1" className="bangers">
     Sell at Apish. Sell at Apish. Sell at Apish. Sell at Apish. Sell at Apish. Sell at Apish. Sell at Apish. Sell at Apish. Sell at Apish. Sell at Apish. Sell at Apish. Sell at Apish. Sell at Apish. Sell at Apish. Sell at Apish. Sell at Apish. Sell at Apish. Sell at Apish. Sell at Apish. Sell at Apish. Sell at Apish. Sell at Apish. Sell at Apish. Sell at Apish. Sell at Apish. Sell at Apish. Sell at Apish. Sell at Apish. Sell at Apish. Sell at Apish. Sell at Apish. Sell at Apish. Sell at Apish. Sell at Apish. Sell at Apish. Sell at Apish. Sell at Apish. Sell at Apish. Sell at Apish. Sell at Apish. Sell at Apish. Sell at Apish. Sell at Apish. Sell at Apish. Sell at Apish. Sell at Apish. Sell at Apish. Sell at Apish. Sell at Apish. Sell at Apish. Sell at Apish. Sell at Apish. Sell at Apish. Sell at Apish. 
      </Typography>
      <Paper>
      <Button onClick={getStarted}>Get Started</Button>
      </Paper>
      </Container>
</div>
)

}

export default Home