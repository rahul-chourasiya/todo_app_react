import { Button } from '@mui/material'
import React, { useContext } from 'react'
import { Context } from '../Context'

const Deletbutton = (props) => {
    const {todotext,setTodotext} = useContext(Context)
    console.log(props.item)
    const Delettodoitem =()=>{
       let data = todotext.filter( item=> item !==props.item) 
       setTodotext(data)
    console.log(data)
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
                // marginLeft: "100px",
                float:"right"
            }}
            onClick={Delettodoitem}
        >Delet</Button>
    )
}

export default Deletbutton