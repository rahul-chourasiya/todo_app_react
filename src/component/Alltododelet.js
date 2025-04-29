import { Button } from '@mui/material';
import React, { useContext } from 'react'
import { Context } from '../Context';

const Alltododelet = () => {
    const { todotext,setTodotext } = useContext(Context)
    const DeletAlltodoitem = () => {
        let data = todotext.filter( item=> item !==item) 
        setTodotext(data)
        
    }
    return (
        <Button
            sx={{
                backgroundColor: "#6C63FF",
                fontSize: "13px",
                fontWeight: "600",
                width: '150px',
                height: "50px",
                color: "white",
                marginLeft: "60%",
            }}
            onClick={DeletAlltodoitem}
        > All Clear</Button>
    )
}

export default Alltododelet;