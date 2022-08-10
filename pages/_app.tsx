import '../styles/globals.css'
/**/
import type { AppProps } from 'next/app'
import Layout from "../Components/Layout"
import Navbar from "../Components/Navbar"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
//import eruda from "eruda"
import {Provider} from "react-redux" 
import { store } from "../store/store"; 
import { SessionProvider } from "next-auth/react"
import AppWrapper from "../store/context"
function MyApp({ Component, pageProps:{session,...pageProps} }: AppProps) {
  //eruda.init();
  return(
    <SessionProvider session={session}>
    <Provider store={store}>
    <AppWrapper>
    <Layout>
   
    <Header />
    <Navbar/>
    <Component {...pageProps} />
    
    <Footer />
    </Layout>
    </AppWrapper>
    </Provider>
    </SessionProvider>
    )
}

export default MyApp
