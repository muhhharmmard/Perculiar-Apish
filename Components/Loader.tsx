import {
  Card,
  Paper
} from "@mui/material"
const Loader = ({
  w
}: {
  w: number
}): JSX.Element => {
  return (
    <Card className={"h-[70vh] transparent flex  align-center flex-col   items-center justify-center "+(w ? `w-[${w}]`: "w-screen")}>
    <Paper className="h-[10em]  w-[10em] border-x-8 rounded-[50%] animate-spin">
    </Paper>
    <Paper>
    <Typography>
    </Typography>
    </Paper>
    </Card>
  )
}


export default Loader;