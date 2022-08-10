import {
  Paper,
  TextField,
  InputAdornment,
  Button
} from "@mui/material"
import {
  useState
} from "react"

import {useRouter} from "next/router"


const Search = () =>{
  const [searchVal,setSearchVal]= useState("");
  const router = useRouter() 
  const searchApish = (e) =>{
    router.push({
      pathname:"/searchResults",
    query:{
      search:searchVal
    }
    })
    setSearchVal("");
  }
  return(
    <Paper className="w-5/6 rounded-3xl relative">
    <TextField
    id="search"
    label="Search Apish"
    placeholder="Search Apish"
    className="w-full roundedprops" 
     InputProps={{
     value:searchVal,
     onChange:(e)=>{
       setSearchVal(e.target.value)
     },
     endAdornment:(
     
     <Button className="h-full rounded-3xl absolute right-0 bottom-0" onClick={searchApish}>
     <InputAdornment position="end" className="">
     🙃
     </InputAdornment>
     </Button>
     ),
       variant:"standard"
     }}
     />
    
    </Paper>
    )
}

export default Search;