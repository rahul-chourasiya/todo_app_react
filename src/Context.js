import { createContext, useState } from "react";

export  const Context = createContext(null)

const FunctionStore = ({ children }) => {
    const [inputtodo, setinputTodo] = useState("")
    const [todotext, setTodotext] = useState([])
    const [toggal, setToggal] = useState(false)



    const handlesubmit = (e) =>{
        setinputTodo(e.target.value)
        console.log("hello")
    }

    const Addtodo = ()=>{
        setTodotext([...todotext, inputtodo])
        setToggal(true)   
        setinputTodo("")
        console.log(true)

    } 
    // console.log(todotext)
    const AllFunction = {
       inputtodo,
       todotext,
       toggal,
       Addtodo,
       setTodotext,
       handlesubmit,
       Addtodo,
    }
    return (
        <Context.Provider value={AllFunction}>
            {children}
        </Context.Provider>
    )

}
export default FunctionStore;