import {
  useState
} from 'react'
import {
  useRouter
} from 'next/router'
import Link from 'next/link'
import {
  Typography,
  Card,
  Paper
} from "@mui/material"
import Products from "./Products"
import {
  CATEGORY
} from "../store/types"
const RelatedProd = ({
  category
}: CATEGORY): JSX.Element => {
  const router = useRouter()
  const [message,
    setMessage]: string = useState('')

  return (
    <Card>
        <Paper className="w-full overflow-scroll m-2 flex overflow-scroll p-4">
 <Products products={category.products} />
    </Paper>
     </Card>
  )

}



export default RelatedProd