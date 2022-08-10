



import { 
  createContext,
  useState,
  useContext,
  useEffect
} from "react"

import { useRouter } from "next/route"
import {
  useGetAllProductsQuery
} from "./services/products"

import { useSession } from "next-auth/react"
import Loader from "../Components/Loader"
import {
  Typography
 } from "@mui/material"
  
  const AppContext = createContext();
  
const AppWrapper = ({children})=> {
  
  const {datum}= useSession();
  const [ useR, setUseR]=useState(null)
  const [ value,setValue] = useState({
    user:{},
    products:[],
    categories:[]
  })
   
  const {
   data,
   error,
   isLoading,
   isSuccess
 } = useGetAllProductsQuery();
   useEffect(()=>{
     if(datum){
     setUseR(datum.user)
}
   },[datum])
   const filter = (prods,categories) =>{
     
   }
   useEffect(()=>{
     if(data){
    const prods = data.data
    const categories= prods.map(prod=>  prod.category)
    const categoriesWithProducts = (categories,prods) =>{
      let allCats = []
    categories.map(cat=>{
      let obj = {}
      obj.name = cat
obj.products = []
      allCats.push(obj)
    })
    prods.map((prod,i)=>{
      if(prod.category === allCats[i].name){
       allCats[i].products.push(prod)
      }
    })
      return allCats
    }
    setValue({
      user:useR,
      products:prods,
      categories:new Set(categories),
      categoriesWithProducts:categoriesWithProducts(prods, categories)
    })
    
     }
   },[data])
   if(error){
     error.data.isLoggedIn && router.push("/login")
     return (
     <Typography variant="h1">
     
     </Typography>
     )
   }
   if(isLoading){
     
   }
  if(data){f
  }
    return (
  <AppContext.Provider value={value}>
  {children}
  </AppContext.Provider>
  )
  
}

export default AppWrapper

export function useAppContext() {
  return useContext(AppContext)
}


const {
  products,
  categories,
  user,
  categoriesWithProducts
} = useAppContext();

