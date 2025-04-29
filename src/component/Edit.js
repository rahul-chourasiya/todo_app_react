import { Button } from '@mui/material'
import React from 'react'

const Edit = (props)=> {
    const Edittododata = ()=>{
        console.log(props.item)
    }
  return (
    <Button
    sx={{
        backgroundColor: "#6C63FF",
        fontSize: "13px",
        fontWeight: "600",
        width: '80px',
        height:"45px",
        color: "white",
        marginLeft: "10px",
        float:"right"
    }}
    onClick={Edittododata}
>Edit</Button>
  )
}

export default Edit