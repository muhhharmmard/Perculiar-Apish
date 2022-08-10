import {
  Typography,
  Card,
  Paper,
  Box,
  Container
} from "@mui/material"

const Footer= ({})=>{
  return(
    <Card className=" h-32 absolute bottom-0">
    <div className="flex justify-evenly">
    <Typography variant="h4">English</Typography>
    <Typography variant="h4">$  USD -U.S. Dollar</Typography>
    </div>
    <div>
   <Typography variant="h3">Apish Nation</Typography>
    </div>
    <div>
  <Typography variant="h6">
  ©2022,Peculiar_Apish
  </Typography>
    </div>
    </Card>
    )
}
export default Footer


