import {
  useState
} from 'react'
import {
  useRouter
} from 'next/router'
import Link from 'next/link'
import Loader from "../../Components/Loader"
import {
  Typography,
  Card,
  Button
} from "@mui/material"
import {
  useEditProductMutation,
  useGetProductByIdQuery
} from "../../store/services/products"

const EdProductPage = () => {
  const router = useRouter();
  const [message,
    setMessage]: string = useState('wait for file upload before submiting')

  const {
    data: product,
    error: proErr,
    isLoading: proLoad,
    isSuccess: proScc
  } = useGetProductByIdQuery(router.query.id)
  product && {
    const {
      data: pro
    } = product;
    const {
      price,
      image,
      description,
      category,
      title
    } = pro
    const initialState = {
      price,
      image,
      description,
      category,
      title
    }
    const [EditProduct] = useGetProductByIdQuery();
    const edit = (e: React.MouseEvent < HTMLInputElement >)=> {
      e.preventDefault();
      EditProduct(router.query.id, state);
      router.push("/sell/")
    }

    const [imageUpload,
      setImageUpload] = useState(null);
    const [imageUrl,
      setImageUrl] = useState("");
    const [msg,
      setmsg] = useState("");
    const [submittable,
      setSubmittable] = useState(false)
    const imagesListRef = ref(storage, "products/");
    const uploadFile = () => {
      if (imageUpload == null) return;
      setmsg("Reading file...")
      const imageRef = ref(storage, `products/${imageUpload.name + crypto.randomUUID()}`);
      uploadBytes(imageRef, imageUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
            dispatch ({
          type: "setImage",
          payload: url
        })
          setmsg("File read")
          setSubmittable(true)
        });
      });
    };


    const reducer = (state.action) => {
      switch (action.type) {
        case 'setName':
          return {
            ...state,
            title: action.payload
          }
          break;
        case 'setPrice':
          return {
            ...state,
            price: action.payload
          }
          break;
        case 'setImage':
          return {
            ...state,
            image: action.payload
          }
        case 'setCat':
          return {
            ...state,
            category: action.payload
          }
          break;
        case 'setDesc':
          return {
            ...state,
            description: action.payload
          }
          break;
        case 'reset':
          return {
            state: initialState
          }
          break;

        default:
          return state
        }
      }
      const [state,
        setState] = useReducer(reducer, initialState)
      const {
        data: session
      } = useSession()

      return(
        <div>
      <Box
          component="form"
          sx={ {
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
            InputProps={ {
              value: state.title,
              onChange: (e: React.ChangeEvent < HTMLInputElement >)=> {
                setState({
                  type: "setName",
                  payload: e.target.value
                })
              },

              variant: "standard"
            }}
            />
    <TextField
            id="product-name"
            label="Product Description"
            placeholder="Product Description"
            className="w-full roundedprops"
            InputProps={ {
              value: state.description,
              onChange: (e: React.ChangeEvent < HTMLInputElement >)=> {
                setState({
                  type: "setDesc",
                  payload: e.target.value
                })
              },

              variant: "standard"
            }}
            />
    <TextField
            id="product-category"
            label="Product Category"
            placeholder="Product Category"
            className="w-full roundedprops"
            InputProps={ {
              value: state.title,
              onChange: (e: React.ChangeEvent < HTMLInputElement >)=> {
                setState({
                  type: "setCat",
                  payload: e.target.value
                })
              },

              variant: "standard"
            }}
            />
            <TextField
            id="image_url"
            label="image_url"
            placeholder="Product Image"
            className="w-full roundedprops"
            InputProps={ {
              type: file,
              value: state.image,

              onChange: (e: React.ChangeEvent < HTMLInputElement >)=> {
                setImageUpload(e.target.files[0])
              },

              variant: "standard"
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
            InputProps={ {
              type: number,
              value: state.price,
              onChange: (e: React.ChangeEvent < HTMLInputElement >)=> {
                setState({
                  type: "setPrice",
                  payload: e.target.value
                })
              },

              variant: "standard"
            }}
            />
     <Button type='submit' onClick="edit" disabled={submitable ? false: true}>
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
      <Loader /> < />
    )

  }



  export default EdProductPage