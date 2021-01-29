import React, { Component } from 'react';
// instaliran dodatan paket za generisanje id-jeva, i preko f-je nextId() generisemo novi id
import nextId  from "react-id-generator";

const Form = ({input, todos, setTodos, setInput}) => {

    // const [todoId] = useId();

    const inputHandler = (e) => {
        setInput(e.target.value);
    }

    const handleNewTodo =(e) => {
        e.preventDefault();
        setInput(input);
        setTodos([...todos, {todoInfo:input, done:false, id: nextId() + 1, importance:"standard"}]);
        // sad praznimo polje za unos
        setInput("");
    }

    return (
        <form>
            {/* dodavanjem value={input} mi obezbedjujemo da kad god se stanje inputa promeni
            nakon ponovnog renderovanja value bude jednako inputu koji smo setovali na "" */}
            <input value={input} onChange={inputHandler} type="text" className="todo-input" />
            <button onClick={handleNewTodo} className="todo-button" type="submit">
                {/* ovo menjamo kasnije */}
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">Svi</option>
                    <option value="completed">Završeni</option>
                    <option value="uncompleted">Nezavršeni</option>
                </select>
            </div>
        </form>
    );
}

export default Form;