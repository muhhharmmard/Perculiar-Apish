



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
   useEffect(()=>{
     if(data){
    const prods = data.data
    const categories= prods.map(prod=>  prod.category)
    setValue({
      user:useR,
      products:prods,
      categories:new Set(categories)
    })
     }
   },[data])
   if(error){
     error.data.isLoggedIn && router.push("/login")
     return (
     <Typography variant="h1">
     Error
     </Typography>
     )
   }
   if(isLoading){
     
     return(
       <div>
       <Loader/>
       </div>
       )
   }
  if(data){
    
    return (
  <AppContext.Provider value={value}>
  {children}
  </AppContext.Provider>
  )
  }
}

export default AppWrapper

export function useAppContext() {
  return useContext(AppContext)
}

