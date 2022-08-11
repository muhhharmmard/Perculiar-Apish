import { useRouter } from "next/router"
import Products from "../Components/Products"
import dbConnect from "../Lib/dbconnect"
import Product from "../Models/Product"
import {
  Typography
} from "@mui/material"



const SearchResults = ({res}) =>{
  const router = useRouter()
  return (
    <>
    <div>
    <Typography variant="h1">Search Results</Typography>
    <Typography variant="h2">{router.query.search}</Typography>
    {
      res ? 
      <Products  products={res}/>:"Not Found "
    }
    </div>
    </>
    )
}
export async function getServerSideProps(context) {
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=1000000, stale-while-revalidate=100000'
  )
  const { search } = context.query;
  await dbConnect()

  /* find all the data in our database */
  const product = await Product.find({name:search}
   const res = [...product]
  const results= res.map((doc)=>{
    const re = doc.toObject();
    re._id = doc._id.toString();
    return re
  })
  console.log(results)
  return {
    props: {
      res:results
    } 
    
  }
}
export default SearchResults;

