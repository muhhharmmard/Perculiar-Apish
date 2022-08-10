import { getProviders, signIn } from "next-auth/react"
import {
  Card,
  Paper,
  Typography,
  Button
} from "@mui/material"

export default function SignIn({ providers }) {
  return (
    <div className="text-center">
    <Typography variant="h1" className="text-black">
    Sign In to Apish
     </Typography>
    <Card className="p-2 rounded-2xl h-[75vh] w-screen flex align-center flex-col bg-blue-500 flex-wrap justify-center" raised={true}>
      {providers && Object.values(providers).map((provider) => (
        <Paper className="p-3 rounded-3xl bg-blue-300 mx-h-[20vh] m-4" key={provider.name}>
          <Button onClick={() => signIn(provider.id,{
            callbackUrl:`${window.location}/`
          })}>
          <Typography variant="h3">
            Sign in with {provider.name}
            </Typography>
          </Button>
        </Paper>
      ))}
    </Card>
    </div>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}


