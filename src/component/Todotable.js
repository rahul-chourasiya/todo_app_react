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
                            <ul style={{width:"100%"}}>
                        <h2>Todo list</h2>
                         {todotext.map((item, i) => {
                        return (<li
                            key={i}
                            style={{
                              height: "55px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              maxWidth: "200px",
                              padding: "0 10px",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              border: "1px solid #ccc",
                              borderRadius: "5px",
                              marginBottom: "8px"
                            }}
                          >
                            <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                              {item}
                            </span>
                            <Deletbutton item={item} />
                          </li>)      
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