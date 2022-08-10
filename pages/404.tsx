import {
  Typography,
  Card
} from "@mui/material"
import Head from "next/head"
import Link from "next/link"

export default function Custom404() {
  return(
    <div>
    <Head>
    <title>Page Not Found</title>
    </Head>
    <Card>
    <Typography variant="h1">
    Page Not Found 
    </Typography>
    <Typography variant="h3">
    Go back to Apish's <Link href="/">Home </Link>
    </Typography>
    </Card>
    </div>
    )
}



