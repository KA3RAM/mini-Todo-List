import { useState } from "react";

export default function TodoPage() {
  let [todo, addTodo] = useState([]);
  let [input, setInput] = useState("");

  function ClickBtn() {
    if (input.trim() === "") return;

    addTodo(todo.concat(input));
    setInput("");
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "white",
        background: "rgba(255, 255, 255, 0.2)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        padding: "40px",        
        margin: "50px auto",    
        maxWidth: "400px",      

      }}
    >
      <h1>:لیست کارها</h1>

      <div>
        <input
          type="text"
          placeholder="کار خود را وارد کنید..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid rgba(0, 0, 0, 0.5)",
            outline: "none",
            fontSize: "16px",
            flex: 1,
            background: "rgba(76, 76, 76, 0.24)",
            color: "white",
            marginRight:"1rem"
          }}
        />
        <button onClick={ClickBtn}           
        style={{
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            background: "rgba(255, 255, 255, 0.8)",
            color: "#000",
            fontWeight: "bold",
            fontSize: "16px",
            cursor: "pointer",
            transition: "all 0.2s",
          }}>اضافه کردن</button>
      </div>

      <ul>
        {todo.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}