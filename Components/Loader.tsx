import {
  FC
} from "react";
import {
  Card,
  Paper
} from "@mui/material"
const Loader = ({w}):FC<string> =>{
  return (
    <Card className={"h-[70vh] transparent flex  align-center flex-col   items-center justify-center "+(w?`w-${w}`:"w-screen")}>
    <Paper className="h-[10em]  w-[10em] border-x-8 rounded-[50%] animate-spin"> 
    </Paper>
    </Card>
    )
}


export default Loader;