import Link from "next/link"
import Head from "next/head"
import React,{
  useEffect,
  useReducer,
  useState,
  
} from "react"
import type {NextPage} from "next"
import  {useRouter} from "next/router"
import {
  Typography,
  Card,
  Select,
  TextField,
  MenuItem,
  Box,
  Button
  
} from "@mui/material"

import { useGetAllDeptsQuery} from "../../store/services/departments"
import {
  useSession
} from "next-auth/react"
import { useGetAllTagsQuery} from "../../store/services/tags"
import { useCreateProductMutation} from "../../store/services/products"
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "@firebase/storage";
import { storage } from "../../store/firebase";

import Loader from "../../Components/Loader"
const CreateProd:NextPage =({})=>{
  const router = useRouter();
  const [createProd] = useCreateProductMutation()
    const { data: session } = useSession();
     const [imageUpload, setImageUpload] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [msg, setmsg] = useState("");
const [submittable,setSubmittable] = useState(false)

  const imagesListRef = ref(storage, "products/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    setmsg("Reading file...")
    const imageRef = ref(storage, `products/${imageUpload.name + crypto.randomUUID()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrl(url);
        setmsg("File read")
        setSubmittable(true)
      });
    });
  };

  
  const initialState={
    name:"",
    price:"",
    image_url:"",
    tags:[],
    department:"",
    owner: session ? session.user.name : "Adetonwa Richard"
  }
  const create = (e:React.MouseEvent<HTMLInputElement>)=>{

    e.preventDefault();
    createProd({...state,image_url:imageUrl})
      .unwrap()
  .then((payload) =>{
  alert('fulfilled', payload)
  router.push("/products")
  })
  .catch((error) => alert("error"))
  }
  const reducer = (state,action) =>{
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
          department:action.payload,
            owner: session.user
       
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

  const {
   data,
   error,
   isLoading,
   isSuccess
 } = useGetAllDeptsQuery();
  const {
   data:tags,
   error:err,
   isLoading:loading,
   isSuccess:s
 } = useGetAllTagsQuery();
 
 const departments=[]
 const tagS = []
const [DeptTags,setDeptTags] = useState([])
 useEffect(()=>{
   data && data.data.map(dept=>{
      departments.push({
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
   if(data && tags){
     tags && tags.data.map(dept=>{
      tagS.push({
        value:dept,
        label:dept.name
      })
   })
    data && data.data.map(dept=>{
      departments.push({
        value:dept,
        label:dept.name
      })
   })
   
   const updateTags = ({name}) =>{
   tagS.map(({value})=>{
     if(value.department.name === name){
       setDeptTags([value])
     }
   })
    
   
   }
   
  return(
    <div>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '80vw' },
      }}
      className="flex w-screen flex-col justify-center w-scree"
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
     type:"file",
     value:state.image_url,
     onChange:(e:React.ChangeEvent<HTMLInputElement>)=>{
    setImageUpload(e.target.files[0])
     },
    
       variant:"standard"
     }}
     />
     {msg}
     <Button onClick={e=>uploadFile()}>
     <Typography variant="h5">
     Read Image
     </Typography>
     </Button>
       <TextField
    id="product-price"
    label="Product Price"
    placeholder="Product Price"
    className="w-full roundedprops" 
     InputProps={{
     type:"number",
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
          InputProps={{
     value:state.tags,
     onChange:(e:React.ChangeEvent<HTMLInputElement>)=>{
       setState({
       type:"setTag",
       payload:e.target.value
       })
     },
    
       variant:"standard"
     }}
          helperText="Please select a tag"
        >
          {DeptTags.map((option) => (
            <MenuItem key={option._id} value={option}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id=""
          select
          label="Department"
        InputProps={{
     value:state.department,
     onChange:(e:React.ChangeEvent<HTMLInputElement>)=>{
       setState({
       type:"setDept",
       payload:e.target.value
       })
       updateTags(e.target.value)
     },
    
       variant:"standard"
     }}
          helperText="Please select a department"
        >
          {departments.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
     <Button type='submit' onClick={create} disabled={submittable&&false}>
     <Typography variant="h3">
     Create
     </Typography>
     </Button>
    </Box>
    <Box>
    <Typography variant="h1">Hints </Typography>
    <Typography variant="h4">Hints </Typography>
    <Typography variant="h4">Hints </Typography>
    </Box>
    </div>
    )
   }
     return(
       <>
       <Loader />
       </>
       )
       
   
}


export default CreateProd;







