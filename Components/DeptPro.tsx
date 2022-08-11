import {
  Typography,
  Card,
  Paper,
  Box,
  Container,
  Badge
} from "@mui/material"
import {useRouter} from "next/router"


const DeptPro= ({product})=>{
  
  const router = useRouter();
  const navToProduct = () =>{
    router.push({
     pathname:"/products/[id]",
      query:{
        id:product._id
      }
    })
  }
 
  return(
    <Card className="h-[20vh] w-1/3 p-8 m-3 leading-3 min-w-[30vw] rounded-3xl overflow-scroll" raised={true} onClick={navToProduct}>
    <figure className="">
    <img src={product.image} className="rounded-lg shadow-lg h-2/3 w-full"/>
    </figure>
    <div className="container m-2 leading-3 h-1/3">
    <Typography variant="h3">
    {product.name} 
    </Typography>
    <br/>

    <Typography variant="h5">
   Price: ${product.price}
    </Typography>
    </div>
    </Card>
    )
}
export default DeptPro


