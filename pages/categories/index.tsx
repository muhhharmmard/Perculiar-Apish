import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Typography, Card, Paper } from "@mui/material";
import Loader from "../../Components/Loader";
import Categories from "../../Components/Categories";

import { useSession } from "next-auth/react";
import { useAppContext } from "../../store/context";
const CategoriesI: NextPage = () => {
  const router = useRouter();
  const { data: session } = useSession();
  useEffect(() => {
    if (session) {
    } else {
    }
  }, [session]);

  const { products, categories, user, categoriesWithProducts } =
    useAppContext();
  if (products && categoriesWithProducts) {
    return (
      <div>
        <Head>
          <title>Categories</title>
          <meta name="description" content="Apish" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Paper>
          <Categories categories={categoriesWithProducts} />
        </Paper>
      </div>
    );
  }
  return <Loader />;
};

export default CategoriesI;
