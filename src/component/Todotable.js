import { Box, Stack, } from '@mui/material';
import React, { useContext } from 'react'
import Deletbutton from './Deletbutton';
import { Context } from '../Context';
import Alltododelet from './Alltododelet';
import Edit from './Edit';

const Todotable = () => {
    const { todotext, toggal } = useContext(Context)
    return (
        <Box
            component={"div"}
        >
            {
                toggal === true ?
                        <Stack direction={"column"}>
                            <ul style={{width:"50%"}}>
                        <h2>Todo list</h2>
                         {todotext.map((item, i) => {
                        return (<li style={{height:"55px"}} key={i} >{item}<Edit item={item}/><Deletbutton item={item} /></li>)      
                    })}</ul> 
                    <Alltododelet/>
                    </Stack>:
                    <span
                        style={{
                            fontSize: "20px",
                            fontWeight: "500",
                            marginBottom:"40px"
                        }}
                    >plz... enter your todo</span>
            }
        </Box>
    )
}

export default Todotable;