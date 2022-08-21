import {
  useState
} from "react";
import {
  useRouter
} from "next/router";
import {
  useSession
} from "next-auth/react";
import Link from "next/link";
import {
  Typography,
  Card,
  Button,
  Container
} from "@mui/material";
import {
  useAppContext
} from "../../../store/context";

import {
  useEditUserMutation
} from "../../../store/services/user";

import RelatedProd from "../../../Components/RelatedProd";
import Loader from "../../../Components/Loader";
import BuyProd from "../../../Components/Flutter";
import Head from "next/head";
const ProductPage = () => {
  const router = useRouter();
  const {
    data: session
  } = useSession();
  const [message,
    setMessage]: string = useState("");
  const [remove,
    setRemove] = useState(false)
  const [remove2,
    setRemove2] = useState(false)
  const {
    products,
    categories,
    user,
    categoriesWithProducts
  } =
  useAppContext();
  const [editUser] = useEditUserMutation();
  const addProdToCart = (product, user) => {
    //user.cart.push(product);
    const cart = user.cart;
    const present = () => {
      cart.map((prod) => {
        if (prod._id === product._id) {
          return true;
        }
      });
      return false;
    };
    const isPresent = present();
    if (!isPresent) {
      setRemove(true)
      cart.push(product);
      const body = {
        ...user,
        cart: cart,
      };
      const ddt = {
        id: user.id,
        body: body,
      };
      editUser(ddt)
      .unwrap()
      .then((fulfillled) => alert("payload"))
      .catch((reject) => alert(reject.data.message.message));
    }
  };
  const addProdToWishList = (product, user) => {
    //  user.wishlist.push(product);
    const wishlist = user.wishlist;

    const present = () => {
      wishlist.map((prod) => {
        if (prod._id === product._id) {
          return true;
        }
      });
      return false;
    };
    const isPresent = present();
    if (!isPresent) {
      setRemove2(true)
      wishlist.push(product);
      const body = {
        ...user,
        wishlist: wishlist,
      };
      const ddt = {
        id: user.id,
        body: body,
      };
      editUser(ddt)
      .unwrap()
      .then((fulfillled) => alert("payload"))
      .catch((reject) => alert(reject.data.message.message));
    }
  };
  /*
  const [deleteProduct]=useDeleteProductMutation()
  const handleDelete = async () => {
    const productID = router.query.id

    try {
    //  if(product.owner.name===session.user.name){
      deleteProduct(productID)
      router.push('/')
    //  }
      setMessage("Not authorized")
    } catch (error) {
      setMessage('Failed to delete the products.')
    }
  }
  const handleEdit = async () => {
    const productID = router.query.id

    try {
   //  if(product.owner.name===session.user.name){
      router.push('/products/[id]/edit',{the
        query:{
          product:product
        }
      })
    //  }
      setMessage("Not authorized")
    } catch (error) {
      setMessage('Failed to delete the products.')
    }
  }*/
  if (categoriesWithProducts) {
    const prod = products.filter((data) => data._id === router.query.id);
    const category = categoriesWithProducts.filter(
      (at) => at.name === prod[0].category
    );
    return (
      <div>
        <Head>
          <title>{prod[0].title}</title>
          <link rel="icon" href={prod[0].image} />
        </Head>
        <Card
        key={prod[0]._id}
        className="flex flex-col justify-center w-screen text-center m-2 p-2"
        >
          {/* <Button onlick={handleDelete}>Delete</Button>
   <Button onclick={handleEdit}>Edit</Button>*/}
          <div className="">
            <Paper raised={true} className="md:flex w-screen justify-center border-2 border-dash rounded-3xl flex-row text-center">
              <img
          src={prod[0].image}
          className="rounded-4xl shadow-xl h-[15vh] w-[15vw]"
          />
                <Typography variant="h2" className="big">{prod[0].title}</Typography>
            </Paper>
            <Typography variant="h3">Price:{prod[0].price}</Typography>
            <Typography variant="h4">Trending in {prod[0].category}</Typography>
      </div>
          <div className="p-2 m-3">
            <Typography variant="h6">{prod[0].description}</Typography>
      </div>
          {session ? (
        <Paper className="p-2 flex w-screen justify-center">
            <BuyProd amount={prod[0].price} user={session.user} />

            <Button
          className=""
          onClick={() => addProdToCart(prod[0], session.user)}
          >
              {" "}
              { remove ? "Remove": "Add" } to Cart{" "}
            </Button>

            <Button
          className=""
          onClick={() => addProdToWishList(prod[0], session.user)}
          >
              {" "}
              { remove2 ? "Remove": "Add" } to wishlist
            </Button>
          </Paper>): ""}
          <Paper className="">
            <Typography variant="h3">Related Products</Typography>
            <RelatedProd category={category[0]} />
      </Paper>
          {message}
        </Card>
  </div>
);
}
return <Loader />;
};

export default ProductPage;