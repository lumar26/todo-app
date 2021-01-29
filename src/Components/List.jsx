import React, { Component } from 'react';
import Item from './Item.jsx'

const List = ({todos, setTodos}) => {
    return (
        <div class="todo-container">
            <ul class="todo-list">
                {todos.map((todo) => <Item 
                todo={todo} 
                key={todo.id} 
                info={todo.todoInfo} 
                todos={todos} 
                setTodos={setTodos}/>)}
            </ul>
        </div>
    );
}

export default List;