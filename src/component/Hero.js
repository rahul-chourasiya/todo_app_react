import { Box, Button, Stack, TextField } from '@mui/material';
import React, { useContext, useState } from 'react'
import { Context } from '../Context';

const Hero = () => {

    const {
        handlesubmit,
        inputtodo,
        Addtodo
    } = useContext(Context)

    return (
        <Box
            component={"div"}
            sx={{
                height: "200px",
                width: "100%"
            }}>
            <Stack
                direction={"column"}
                sx={{

                }}>
                <Stack
                    direction={"row"}
                    mt={10}
                >
                    <TextField
                        id="outlined-basic"
                        label="Add Todo"
                        variant="outlined"
                        onChange={handlesubmit}
                        value={inputtodo}
                        sx={{
                            width: 500,
                            maxWidth: '100%'
                        }} />
                    <Button
                        sx={{
                            backgroundColor: "#6C63FF",
                            fontSize: "13px",
                            fontWeight: "600",
                            width: '21%',
                            color: "white",
                            marginLeft: "10px",
                            width: window.innerWidth < 750 ? "200px" :""
                        }}
                        onClick={()=>Addtodo()}>click me </Button>
                </Stack>
            </Stack>
        </Box>
    )
}

export default Hero;