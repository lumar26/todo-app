import React, { Component } from 'react';
import TodoItem from "./todoItem";

class Form extends Component {
    render() { 
        return ( <div>
            <input type="text" placeholder="Unesite novi todo"/>
            <button onClick={() => this.props.onNewTodo("Novi todo")}>Create new todo</button>
            
        </div> );
    }
}
 
export default Form;