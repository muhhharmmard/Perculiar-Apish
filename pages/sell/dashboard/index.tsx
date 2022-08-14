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


import SellerProducts from "../Components/SellerProducts"
import {
  useSession
} from "next-auth/react"

const Home: NextPage = () => {
  const router = useRouter()
  const {
    data: session
  } = useSession();
  const {
    user
  } = data;
  const getStarted = () => {
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
      <header>
      <Typography variant="h2">Welcome,{user.name}</Typography>
    </header>
    <main>
    <Container>
    <Typography variant="h3">Your Products</Typography>
    {
        user.products.length > 0 ?
        <SellerProducts seller={user} />: "No products "}
    </Container>
    </main>
      </Container>
</div>
)

}

export default Home