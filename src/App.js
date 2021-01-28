import React, { Component, useState } from 'react';
// obrati paznju da mozda treba ekstenzija!
import Form from "./Components/Form.jsx";
import Item from "./Components/Item.jsx";
import List from "./Components/List.jsx";





const App =() => {


    // Stanja sa useState
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);
    const [filters, setFilters] = useState([]);

    return(
        <div>
            <h4>Todo Aplikacija</h4>
            <Form input={input} setTodos={setTodos} todos={todos} setInput={setInput} />
            <List />
        </div>
    );
}

export default App;