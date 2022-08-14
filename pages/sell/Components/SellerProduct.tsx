import {
  Paper,
  Card
} from "@mui/material"

import { 
  useState 
  
} from "react"

import {
  useDeleteProductMutation
} from "../../../store/services/products"

import {
  PRODUCT
} from "../../../store/types"

const SellerProduct = ({
  product
}: PRODUCT)=> {

  const [message, setMessage]: string = useState("");

  const [deleteProduct] = useDeleteProductMutation()
  const handleDelete = async () => {

    try {

      deleteProduct(product.id)
      router.push('/')
    } catch (error) {
      setMessage('Failed to delete the products.')
    }
  }
  const handleEdit = async () => {

    try {
      //  if(product.owner.name===session.user.name){
      router.push('/sell/edit', {
        query: {
          product: product
        }
      })
    } catch (error) {
      setMessage('Failed to delete the products.')
    }
  }
  return (
    <Card className="flex">
    <Paper>
    <img src={product.image} className="w-10 h-10" />
    </Paper>
    <Typography variant="h5">
    {product.name}
    </Typography>
    <Button onClick={handleDelete}>Delete</Button>
    <Button onClick={handleEdit}>Edit</Button>
    {message}
    </Card>

)
}


export default SellerProduct