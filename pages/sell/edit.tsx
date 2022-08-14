import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Loader from "../../../Components/Loader"
import {
  Typography,
  Card,
  Button
} from "@mui/material"
import {
  useEditProductMutation,
  useGetProductByIdQuery
} from "../../../store/services/products"

const EdProductPage = () => {
  const router = useRouter();
  const [message, setMessage]: string = useState('')
  
  const {
   data:product,
   error:proErr,
   isLoading:proLoad,
   isSuccess:proScc
 } = useGetProductByIdQuery(router.query.id)
 product && {
   const {data:pro} = product;
 const {
   name,
   price,
   image_url,
   tags,
   department
 }= pro
  const initialState={
    name,
    price,
    image_url,
    tags,
    department,
    owner:session.user.name
  }
  const edit = (e:React.MouseEvent<HTMLInputElement>)=>{
    e.preventDefault();
   useEditProductMutation(router.query.id,state);
    router.push("/products")
  }
  const reducer = (state.action) =>{
    switch (action.type) {
      case 'setName':
        return {
          ...state,
          name:action.payload
        }
        break;
      case 'setPrice':
        return {
          ...state,
          price:action.payload
        }
        break;
      case 'setImage':
       return {
          ...state,
          image_url:action.payload
        }
      case 'setTag':
        return {
          ...state,
          tags:action.payload
        }
        break;
      case 'setDept':
        return {
          ...state,
          department:action.payload
        }
        break;
      case 'reset':
        return {
         state:initialState
        }
        break;
      
      default:
        return state
    }
  }
  const [state,setState] = useReducer(reducer,initialState)
  const { data: session } = useSession()
  const {
   data,
   error,
   isLoading,
   isSuccess
 } = useGetDeptsQuery();
  const {
   data:tags,
   error:err,
   isLoading:loading,
   isSuccess:s
 } = useGetTagsQuery();
 
 const departments=[]
 const tagS = []
 useEffect(()=>{
   data && data.data.map(dept=>{
      department.push({
        value:dept,
        label:dept.name
      })
   })
   },[data])
   
 useEffect(()=>{
   tags && tags.data.map(dept=>{
      tagS.push({
        value:dept,
        label:dept.name
      })
   })
   },[tags])
   
  return(
    <div>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <TextField
    id="product-name"
    label="Product Name"
    placeholder="Product Name"
    className="w-full roundedprops" 
     InputProps={{
     value:state.name,
     onChange:(e:React.ChangeEvent<HTMLInputElement>)=>{
       setState({
       type:"setName",
       payload:e.target.value
       })
     },
    
       variant:"standard"
     }}
     />
       <TextField
    id="image_url"
    label="image_url"
    placeholder="Product Image"
    className="w-full roundedprops" 
     InputProps={{
     value:state.image_url,
     onChange:(e:React.ChangeEvent<HTMLInputElement>)=>{
       setState({
       type:"setImage",
       payload:e.target.value
       })
     },
    
       variant:"standard"
     }}
     />
            <TextField
    id="image_url"
    label="image_url"
    placeholder="Product Image"
    className="w-full roundedprops" 
     InputProps={{
     type:file,
     value:state.image_url,
     onChange:(e:React.ChangeEvent<HTMLInputElement>)=>{
       setState({
       type:"setImage",
       payload:e.target.value
       })
     },
    
       variant:"standard"
     }}
     />
     
       <TextField
    id="product-price"
    label="Product Price"
    placeholder="Product Price"
    className="w-full roundedprops" 
     InputProps={{
     type:number,
     value:state.price,
     onChange:(e:React.ChangeEvent<HTMLInputElement>)=>{
       setState({
       type:"setPrice",
       payload:e.target.value
       })
     },
    
       variant:"standard"
     }}
     />
    
     <TextField
          id=""
          select
          label="Tag"
          value={state.tags}
           InputProps={{
             multiple:true
           }}
          onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
            setState({
              type:"setTag",
              payload:e.target.value
            })
          }}
          helperText="Please select a tag"
        >
          {tagS.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id=""
          select
          label="Department"
          value={state.department}
           onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
            setState({
              type:"setDept",
              payload:e.target.value
            })
          }}
     
          helperText="Please select a department"
        >
          {departments.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
     <Button type='submit' onClick="edit">
     <Typography variant="h3">
     Done
     </Typography>
     </Button>
    </Box>
    </div>
    )
  
 }
 return (
   <>
   <Loader/>
   </>
   )

}



export default EdProductPage
