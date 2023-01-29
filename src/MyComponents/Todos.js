import React from 'react'
import{Todo} from "../MyComponents/Todo";
export const Todos = (props) => 
{
  let myStyle = {
    minHeight: "70vh"
  }
  return (
    <div className="container my-3"style={myStyle}>
<h3 className=" my-3">Todos List</h3>
{props.todos.length===0? "No Todos to display":
props.todos.map((todo)=>{
return(
  <span key={todo}>

<Todo todo={todo}  onDelete={props.onDelete}/> <hr/>
</span>
)
})
}

    </div>
  )
}
 
export default Todos
