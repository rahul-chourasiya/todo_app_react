import {Box, Grid2} from '@mui/material'
import Hero from './Hero';
import Todotable from './Todotable';

const Todo = () => {

  return (
    <Box
    component={"div"}
    sx={{
        height:"100%",
        // width:"80%",
        backgroundColor:"white",
        display:'flex',
        justifyContent:"center",
        alignItems:"center",
        padding:"5%"
    }}>
        <Grid2 container>
            <Grid2 size={{xs:12 , md:12, sm:12,}}>
                <Hero/>
            </Grid2>
            <Grid2 size={{xs:12 , md:12, sm:12,}}>
                <Todotable/>
            </Grid2>
        </Grid2>
    </Box>
  )
}

export default Todo;