import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {
  Typography,
  Card
} from "@mui/material"
import DeptPro from "./DeptPro"
import { CATEGORY } from "../store/types"
const RelatedProd = ({category}: CATEGORY):JSX.Element => {
  const router = useRouter()
  const [message, setMessage]: string = useState('')
 
  return (
    <Card>
        <div className=" w-full overflow-scroll flex overflow-scroll p-4">
 
    {
      category.products.map(pro=>
        <DeptPro product={pro}/>
      )
    }
    </div>
     </Card>
  )
 
}



export default RelatedProd