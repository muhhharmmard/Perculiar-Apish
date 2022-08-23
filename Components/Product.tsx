import {
  Typography,
  Card,
  Paper,
  Box,
  Container
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
    <Card className="h-[37vh] w-[35vw] p-8 flex flex-col align-center glass my-8 mx-8 leading-8 dark:bg-blue-900 align-center big justify-center rounded-3xl praise border-2 border-solid bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60" raised={true} onClick={navToProduct}>
    <Paper raised={true} className="h-1/2 border-4 border-dotted">
    <img src={product.image} className="rounded-lg shadow-lg h-full w-[35vw]" />
    </Paper>
    <Paper className="container m-2 leading-8 p-4 m-2 border-2  big praise">
    <Typography variant="h4">
    {product.title}
    </Typography>
    <br />

    <Typography variant="h5">
   Price: ${product.price}
    </Typography>
    <Typography variant="h5">
    Category:{product.category}
    </Typography>
  </Paper>
    </Card>
)
}
export default Product