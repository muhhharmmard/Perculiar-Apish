import Link from 'next/link'
import Head from "next/head"
import { useRouter } from "next/route"
import {
  useGetAllProductsQuery
} from "../../store/services/products"
import Products from "../../Components/Products"
import {
  Typography
} from "@mui/material"
import Loader from "../../Components/Loader"



const ProductsI = () => {
  const router = useRouter()
  const {
   data,
   error,
   isLoading,
   isSuccess
 } = useGetAllProductsQuery();
   if(error){
     error.data.isLoggedIn && router.push("/login")
     return (
     <Typography variant="h1">
     Error
     </Typography>
     )
   }
   if(isLoading){
     return(
       <div>
       <Loader/>
       </div>
       )
   }
   return (
 <>
  <Head>
  <title>Products</title>
  <link rel="icon" href="/cat.jpeg"/>
  </Head>
  <Typography variant="h1" className="align-center">
All products
  </Typography>
    {data && <Products products={data} />}
  </>
)


}

export default ProductsI
