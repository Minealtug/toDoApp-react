import { useState } from "react";
function App() {
  const [todotext, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);
  const[sEdit,setIsEdit]=useState(false)
const editTodo=(id)=>{

  setIsEdit(true);
  const searchedTodo=todos.find((item)=>item.id===id);
  setTodoText(searchedTodo.text);
}

  const changeIsDone=(id)=>{
    const searchedTodo=todos.find((item)=>item.id===id);
    const updatedTodo={
      ...searchedTodo,

      isDone: !searchedTodo.isDone,

    };
    const filteredTodos=todos.filter((item)=>item.id !==id);
    setTodos([updatedTodo,...filteredTodos])

  };



  const handleSubmit = (event) => {
    event.preventDefault();
    if (todotext === "") {
      alert("Todo text can't be empty!");
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      isDone: false,
      text: todotext,
      date: new Date()

    };
    setTodos([...todos, newTodo]);
    setTodoText("");

    const hasTodos=todos.find((item)=>item.text ===todotext);
   if(hasTodos !==undefined){
    alert("You  have the already :)")}
    return

  };
  return (
    <div className="container">
      <h1 className="text-center my-5">Todo App</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input type="text" value={todotext}
            className="form-control"
            placeholder="Type your todo"
            onChange={(event) => setTodoText(event.target.value)}
          />
          <button type="submit" className="btn btn-primary ">ADD</button>

        </div>
      </form>
      {
        todos.length <= 0 ?
          (
            <p className="text-center my-5 "> You dont have any  todos yet ...</p>
          ) :
          (
            <>
              {
                todos.map(item => (
                  <div 
                  className={`alert alert-${
                    item.İsdone===true ? "success" : "secondary"
                    }d-flex justify-content-between align-items-center` }
                    >



                      
                    <p> {item.text}</p>






                    <button onClick={()=>editTodo(item.id)}  className="btn btn-sm  btn-success mx-2">Edit</button>
                    <button onClick={()=>changeIsDone(item.id)} className="btn btn-sm btn-success">{item.isDone===false ? "Done" :"Undone"}</button>
                  </div>
                ))
              }
            </>
          )


      }





    </div>
  );
}

export default App;
