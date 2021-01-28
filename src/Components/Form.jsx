import React, { Component } from 'react';

const Form = ({input, todos, setTodos, setInput}) => {

    const inputHandler = (e) => {
        setInput(e.target.value);
    }

    const handleNewTodo =(e) => {
        e.preventDefault();
        // setInput(input);
        // console.log(input);
        setTodos([...todos, input]);
        todos.forEach(element => {
            console.log("Element iz liste" + element)
        });
    }

    return (
        <form>
            <input onChange={inputHandler} type="text" className="todo-input" />
            <button onClick={handleNewTodo} className="todo-button" type="submit">
                {/* ovo menjamo */}
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