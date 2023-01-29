
import './App.css';
 import Header from "./MyComponents/Header";
 import Todos from './MyComponents/Todos';
 import Footer from "./MyComponents/Footer";
 import AddTodo from "./MyComponents/AddTodo";
import { useEffect, useState } from 'react';
 
function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];

  }else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  
  const onDelete=(todo)=> {
console.log("I an ondelete of todo", todo);
// let index = todos.Indexof(todo);
// todos.splice(index, 1);
setTodos(todos.filter((e)=>{
  return e!==todo;
}));
localStorage.setItem("todos", JSON.stringify(todos));
  }
  const addTodo = (title,desc)=>{
    console.log("I am adding this todo", title, desc)
    let sno;
    if(todos.length==0){
      sno = 0;
    }
    else{
     
    
   let sno = todos[todos.length-1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,

    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
 

  }
const [todos, setTodos] = useState([initTodo]);
  
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
 }, [todos])

  return (
    <>
    <Header title="MyTodosList" searchBar={false}/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
