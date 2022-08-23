import React,{
  createContext,
  useState,
  useContext,
  useEffect,
  useRef,
  useLayoutEffect
} from "react";

import {
  useRouter
} from "next/route";
import {
  useGetAllProductsQuery
} from "./services/products"; /*
import {
  useGetAllUsersQuery,
} from "./services/users";*/

import {
  useSession
} from "next-auth/react";
import Loader from "../Components/Loader";
import {
  Typography
} from "@mui/material";

const AppContext = createContext();

function usePrevious(theme) {
  const ref = useRef()
  useEffect(() => {
    ref.current = theme
  })
  return ref.current
}


const AppWrapper = ({
  children
}) => {
  
  const [theme, setTheme] = useState('light')

 function toggleThemeF() {
        if (theme === 'light') {
          setTheme('dark')
        } else{
          setTheme('light')
          
        }
        if(window !== undefined){
        localStorage.setItem("theme",theme)
        }
      }

  const {
    datum
  } = useSession();
  const [useR,
    setUseR] = useState(null);
  const [value,
    setValue] = useState({
      user: null,
      products: null,
      categories: null,
      categoriesWithProducts: null,
      theme: "light",
      toggleTheme:toggleThemeF,
    });

  const {
    data,
    error,
    isLoading,
    isSuccess
  } = useGetAllProductsQuery();
  useEffect(() => {
    if (datum) {
      setUseR(datum.user);
    }
  },
    [datum]);
  const filter = (prods,
    categories) => {};

  // defaults to light theme
  // set user's preferred color scheme on first load
  useLayoutEffect(() => {
    const themeFromLs:string = localStorage.getItem("theme")
    if((themeFromLs === "dark") || (themeFromLs === "light")){
      setTheme(themeFromLs)
    }
    else{
    setTheme(
      !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark': 'light'
    )
    }
  },[])

  // change theme
  const oldTheme = usePrevious(theme)
  useLayoutEffect(() => {
    document.documentElement.classList.remove(oldTheme)
    document.documentElement.classList.add(theme)
  },
    [theme,
      oldTheme])

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
        theme: theme,
        toggleTheme: toggleThemeF
      });
    }
  },
    [data,theme]);
  if (error) {
    error.data.isLoggedIn && router.push("/login");
    return <Typography variant="h1"></Typography>;
  }
  if (isLoading || !datum) {
    return <Loader/>
  }
  if (data) {}
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppWrapper;

  export function useAppContext() {
    return useContext(AppContext);
  }