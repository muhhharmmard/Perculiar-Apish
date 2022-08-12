import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Typography, Card, Paper } from "@mui/material";
import Loader from "../../../Components/Loader";
import Products from "../../../Components/Products";

import { useSession } from "next-auth/react";
import { useAppContext } from "../../../store/context";
const CategoryId: NextPage = () => {
  const router = useRouter();
  const { data: session } = useSession();
  useEffect(() => {
    if (session) {
    } else {
    }
  }, [session]);

  const { products, categories, user, categoriesWithProducts } =
    useAppContext();
  const category = router.query.id;
  if (products && categoriesWithProducts) {
    const data= categoriesWithProducts.filter(da=>da.name === category)
    return (
      <div>
        <Head>
          <title>{category}</title>
          <meta name="description" content="Apish" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Paper>
        <Products products={data[0].products}/>
        </Paper>
      </div>
    );
  }
  return <Loader />;
};

export default CategoryId;
