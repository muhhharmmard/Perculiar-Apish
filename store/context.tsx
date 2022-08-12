import { createContext, useState, useContext, useEffect } from "react";

import { useRouter } from "next/route";
import { useGetAllProductsQuery } from "./services/products"; /*
import { 
  useGetAllUsersQuery,
  
} from "./services/users";*/

import { useSession } from "next-auth/react";
import Loader from "../Components/Loader";
import { Typography } from "@mui/material";

const AppContext = createContext();

const AppWrapper = ({ children }) => {
  const { datum } = useSession();
  const [useR, setUseR] = useState(null);
  const [value, setValue] = useState({
    user: {},
    products: [],
    categories: [],
  });

  const { data, error, isLoading, isSuccess } = useGetAllProductsQuery();
  useEffect(() => {
    if (datum) {
      setUseR(datum.user);
    }
  }, [datum]);
  const filter = (prods, categories) => {};
  useEffect(() => {
    if (data) {
      const prods = data.data;
      const categorieS = prods.map((prod) => prod.category);
      const categories = [];
      categorieS.forEach((category) => {
        if (!categories.includes(category)) {
          categories.push(category);
        }
      });
      let allCats = [];
      categories.map((cat) => {
        let obj = {};
        obj.name = cat;
        obj.products = [];
        allCats.push(obj);
      });
      for (const prod of prods) {
        for (const cat of allCats) {
          if (prod.category === cat.name) {
            cat.products.push(prod);
          }
        }
      }
      const categoriesWithProducts = allCats;

      setValue({
        user: useR,
        products: prods,
        categories: new Set(categories),
        categoriesWithProducts: categoriesWithProducts,
      });
    }
  }, [data]);
  if (error) {
    error.data.isLoggedIn && router.push("/login");
    return <Typography variant="h1"></Typography>;
  }
  if (isLoading) {
  }
  if (data) {
  }
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppWrapper;

export function useAppContext() {
  return useContext(AppContext);
}
