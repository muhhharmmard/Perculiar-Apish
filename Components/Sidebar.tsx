import React, { useState, useEffect } from "react";
import Loader from "./Loader";
const drawerWidth = 240;
import Link from "next/link";

import { useSession } from "next-auth/react";

import { useAppContext } from "../store/context"
import {
  Paper,
  AppBar,
  Divider,
  IconButton,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Toolbar,
  Typography,
  SwipeableDrawer,
  Drawer,
  Container,
  Box,
} from "@mui/material";
const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const { data: session } = useSession();
  
const {
  products,
  categories,
  user,
  categoriesWithProducts
} = useAppContext();
if(products && categoriesWithProducts){
  const data= categoriesWithProducts
  var side = (
    <Paper className="text-bold bg-green-50 z-30 absolute h-screen text-center">
      <Container className="h-32 w-full p-2 flex content-center justify-content align-center">
        <Link href="/" className="text-center text-black flex">
          <Container>
            <Typography
              variant="h1"
              className="bg-blue-900 text-blue-100 praise"
              display="inline-block"
            >
              {" "}
              APISH
            </Typography>
          </Container>
        </Link>
        <Container>
          <Toolbar />
          <Divider />
          <Toolbar />
          <Box className="text-9xl">
            <Link href="/">
            <Typography variant="h4">
            Apish
</Typography>
</Link>
          </Box>
          <Divider />
          <Typography variant="h1">Departments</Typography>
          <List>
            {data.map((dept, s) => (
              <ListItemButton>
                <Link
                  href={{
                    pathname: "/categories/[id]",
                    query: {
                      id: dept.name,
                    },
                  }}
                >
                  <Typography variant="h1">
                    <ListItemText primary={dept.name} />
                  </Typography>
                </Link>
              </ListItemButton>
            ))}
          </List>
        </Container>
      </Container>
    </Paper>
  );
}
  return (
    <>
      <Button variant="contained" className="btn" onClick={() => handleDrawerToggle()}>🙃</Button>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {side}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        {side}
      </Drawer>
    </>
  );
};

export default Sidebar;
