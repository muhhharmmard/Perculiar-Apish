import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {
  Typography,
  Card
} from "@mui/material"
import DeptPro from "./DeptPro"
import { PRODUCTS,PRODUCT } from "../store/types"
const RelatedProd = ({products, product}:<{products:PRODUCTS, product:PRODUCT}>):JSX.Element => {
  const router = useRouter()
  const [message, setMessage]: string = useState('')
 const catProducts = products.filter((prod)=>prod._id === product._id))
 
   
  return (
    <Card>
        <div className=" w-full overflow-scroll flex overflow-scroll p-4">
 
    {
      catProducts.map(pro=>
        <DeptPro product={pro}/>
      )
    }
    </div>
     </Card>
  )
 
}



export default RelatedProd