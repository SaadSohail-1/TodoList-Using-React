import { createContext } from "react";
import { useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id : 1,
            todo: "Todo msg",
            completed: false,
            
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})


//To use this context in other files this is a custom hook
// isko call kr k hum global context k variables or methods bula sakte hain
export const useTodo = () => {
    return useContext(TodoContext);
}

// variable export kiya taakay ye poori right wali cheez na likhni pare app.jsx me
export const TodoProvider = TodoContext.Provider