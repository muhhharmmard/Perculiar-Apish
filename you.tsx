import {
  Container,
  Paper,
  Card,
  Typography
} from "@mui/material"
import {
  useAppContext
} from "../../store/context"

import {
  useRouter
} from "next/router"


import React, {
  useState,
  useEffect,
  useLayoutEffect
} from "react"

import {
  signOut
} from "next-auth/react"

import Link from "next/link"


const You = (): JSX.Element => {
  const router = useRouter();
  const {
    user
  } = useAppContext();
  useEffect(()=> {
    if (!user) {
      router.push("/auth/signin")
    }
  },
    [user])
  return (
    <Container>
    </Container>
  )
}


export default You