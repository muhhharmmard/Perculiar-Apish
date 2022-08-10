import React, {
   useState,
   useEffect
} from 'react';
import Loader from "./Loader"
const drawerWidth = 240;
import Link from "next/link"

 import { useSession } from "next-auth/react"
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
   Box
} from '@mui/material';
const Sidebar=()=>{
   const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

   const { data: session } = useSession();
   var side =(
  
  <Paper className="text-bold bg-green-50 z-30 absolute h-screen text-center">
  <Container className="h-32 w-full p-2 flex content-center justify-content align-center">
  <Link href="/" className="text-center text-black flex">
  <Container>
  <Typography variant="h1" className="bg-blue-900 text-blue-100 praise" display="inline-block"> A</Typography>
  <Typography variant="h1" className="bg-blue-700 text-blue-300" display="inline-block bangers">P</Typography>
  <Typography variant="h1" className="bg-blue-500 text-blue-800 big" display="inline-block">I</Typography>
  <Typography variant="h1" className="bg-blue-300 text-blue-700" display="inline-block aladin">S</Typography>
  <Typography variant="h1" className="bg-blue-100 text-blue-900" display="inline-block">H</Typography>
  </Container>
  </Link>
  <Container>
  <Toolbar />
  <Divider />
  <Toolbar />
  <Box className="text-9xl">
  <Link href="/">
  Apish
  </Link>
  </Box>
  <Divider />
  <Typography variant="h1">
  Departments
  </Typography>{/*
  <List>
  {
  data.data.map((dept,s)=>(

    <ListItemButton>
    <Link href={{
      pathname:"/departments/[id]",
      query:{
        id:dept._id
      }
    }}>
    <Typography variant="h1">
   <ListItemText primary={dept.name}/>
   </Typography>
    </Link>
   </ListItemButton>
  ))
    
  }
  </List>*/}
  </Container>
  </Container>
  </Paper>
  )
  return (
    <>
    <Button onClick={()=>handleDrawerToggle()}>
    🙃
    </Button>
     <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {side}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {side}
        </Drawer>
  </>
    )
}


export default Sidebar




