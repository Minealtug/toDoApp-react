import { useState } from "react";
function App() {
const[todotext,setTodoText]=useState("");
const handleSubmit= (event)=>{
  event.preventDefault();
  if (todotext===""){
    alert("Todo text can't be empty");
    return;
  }


}
  return (
    <div className="container">
      <h1 className="text-center my-5">Todo App</h1>
      <form >
        <div className="input-group mb-3">
          <input type="text" value={todotext}
           className="form-control" 
           placeholder="Type your todo"
           onChange={(event)=>setTodoText(event.target.value)}
            />
          <button type="submit" className="btn btn-primary ">ADD</button>

        </div>
      </form>

    </div>
  );
}

export default App;
