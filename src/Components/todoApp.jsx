import React, { Component } from 'react';
import TodoForm from './todoForm';
import TodoList from './todoList';
import TodoItem from './todoItem';



class TodoApp extends Component {
    state = { 
        todoItems: []
     }
     handleDelete = (itemId) => {
         console.log("Stavka se brise --- ", itemId)
         const newTodoItems  = this.state.todoItems.filter(el => this.state.todoItems.indexOf(el) !== itemId);
         this.setState({todoItems: newTodoItems});
     }

     handleNewTodo = (value) => {
         console.log("Kreiranje novog todo-a");
        const newTodoItem = () => <TodoItem 
        // mora izgleda da radi konstruktor
        // jedini mi je problem kako da dodelim dogadjaj onClick kad pravim novi ovaj Todoitem
                // onDelete={() => this.props.onDelete(this.state.todoItems.length)} 
                // id={this.state.todoItems.length}
                
            />
        const newArray = this.state.todoItems;
        newArray.push(newTodoItem());
        this.setState({todoItems: newArray});
     }

    render() { 
        console.log(this.state.todoItems)
        return ( <div>
            <TodoForm  onNewTodo={this.handleNewTodo}/>
            {/* ovde nam iz nekog razloga ne treba lambda izraz?! */}
            <TodoList value={this.state.todoItems} onDelete={this.handleDelete} />
        </div> );
    }
}
 
export default TodoApp;