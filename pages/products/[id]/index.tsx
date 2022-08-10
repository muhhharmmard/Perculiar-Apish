import { useState } from 'react'
import { useRouter } from 'next/router'
import {
  useSession
} from "next-auth/react"
import Link from 'next/link'
import {
  Typography,
  Card,
  Button
} from "@mui/material"
import {
  useGetAllProductsQuery,
  useDeleteProductMutation
} from "../../../store/services/products"
import RelatedProd from "../../../Components/RelatedProd"
import Loader from "../../../Components/Loader"

const ProductPage = () => {
  const router = useRouter();
  const session= useSession() 
  const [message, setMessage]:string = useState('')
  const [deleteProduct]=useDeleteProductMutation()
  const handleDelete = async () => {
    const productID = router.query.id

    try {
    //  if(product.owner.name===session.user.name){
      deleteProduct(productID)
      router.push('/')
    //  }
      setMessage("Not authorized")
    } catch (error) {
      setMessage('Failed to delete the products.')
    }
  }
  const handleEdit = async () => {
    const productID = router.query.id

    try {
   //  if(product.owner.name===session.user.name){
      router.push('/products/[id]/edit',{
        query:{
          product:product
        }
      })
    //  }
      setMessage("Not authorized")
    } catch (error) {
      setMessage('Failed to delete the products.')
    }
  }
  const {
   data:allProd,
   error,
   isLoading,
   isSuccess
 } = useGetAllProductsQuery();
  
 
  if(error){
     return (
     <Typography variant="h1">
     {Object.values(error.data)}
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
if(allProd){
  const { data } = allProd;
  const prod = data.filter((data)=>data._id === router.query.id)
  return (

    <Card key={prod[0].id} className="flex flex-col justify-center w-screen text-center bg-blue-400">
  {/* <Button onlick={handleDelete}>Delete</Button>
   <Button onclick={handleEdit}>Edit</Button>*/}
    <div className="">
   <Typography variant="h1">
   {prod[0].name}
   </Typography>
   <figure className="flex w-screen justify-center flex-row text-center">
   <img src={prod[0].image} className="rounded shadow-xl h-64 w-64"/>
   </figure>
   <Typography variant="h3">
   Price:{prod[0].price}
   </Typography>
   <Typography variant="h4">
   Trending in {prod[0].category}
   </Typography>
   </div>
   <div className="p-2 m-3">
   <Typography variant="h6">
   {prod[0].description}
   </Typography>
   </div>
   <div className="">
   <Typography variant="h3">
   People also search for
   </Typography>
   <RelatedProd products={data} product={prod[0]}/>
   </div>
   {message}
     </Card>
  )
}
}



export default ProductPage
