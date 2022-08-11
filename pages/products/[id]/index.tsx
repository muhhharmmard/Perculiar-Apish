import { useState } from 'react'
import { useRouter } from 'next/router'
import {
  useSession
} from "next-auth/react"
import Link from 'next/link'
import {
  Typography,
  Card,
  Button,
  Container
} from "@mui/material"
import { useAppContext } from "../../../store/context"
import RelatedProd from "../../../Components/RelatedProd"
import Loader from "../../../Components/Loader"
import BuyProd from "../../../Components/Flutter"
const ProductPage = () => {
  const router = useRouter();
  const { data:session }= useSession() 
  const [message, setMessage]:string = useState('')
  
const {
  products,
  categories,
  user,
  categoriesWithProducts
} = useAppContext();
const addProdToCart = () =>{
  
}
const buyProd = () =>{
  
}
  /*
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
      router.push('/products/[id]/edit',{the
        query:{
          product:product
        }
      })
    //  }
      setMessage("Not authorized")
    } catch (error) {
      setMessage('Failed to delete the products.')
    }
  }*/
if(categoriesWithProducts){
  const prod = products.filter((data)=>data._id === router.query.id)
  const category = categoriesWithProducts.filter((at)=> at.name === prod[0].category)
  return (

    <Card key={prod[0]._id} className="flex flex-col justify-center w-screen text-center">
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
   <Container className="p-2 flex w-screen justify-center">
   <BuyProd 
   amount={prod[0].price}
   user={session.user}
   />
   <Button className="w-5/6" onClick={addProdToCart}> Add to Cart </Button>
   </Container>
   <div className="">
   <Typography variant="h3">
   People also search for
   </Typography>
   <RelatedProd category={category[0]}/>
   </div>
   {message}
     </Card>
  )
}
return <Loader />
}



export default ProductPage