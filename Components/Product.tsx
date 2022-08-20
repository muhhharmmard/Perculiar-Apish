import {
  Typography,
  Card,
  Paper,
  Box,
  Container,
  Badge
} from "@mui/material"
import {
  useRouter
} from "next/router"
import {
  PRODUCT
} from "../store/types"

const Product = ({
  product
}: PRODUCT): JSX.Element=> {
  const router = useRouter();
  const navToProduct = () => {
    router.push({
      pathname: "/products/[id]",
      query: {
        id: product._id,
        product: product
      }
    })
  }
  return(
    <Card className="h-[30vh] w-full p-8 flex my-8 leading-8  align-center big justify-center rounded-3xl" raised={true} onClick={navToProduct}>
    <figure className="">
    <img src={product.image} className="rounded-lg shadow-lg h-full w-[35vw]" />
    </figure>
    <div className="container m-2 leading-8">
    <Typography variant="h3">
    {product.title}
    </Typography>
    <br />

    <Typography variant="h5">
   Price: ${product.price}
    </Typography>
    <Typography variant="h5">
    Category:{product.category}
    </Typography>
  </div>
    </Card>
)
}
export default Product