import React, { Component } from 'react';
import TodoItem from './todoItem';

class List extends Component {
    render() { 
        return ( <div>
            {this.props.value.map(todo => <div key={this.props.value.indexOf(todo)}>{todo}</div>)}
            {/* ovde bukvalno postoji sad : <TodoItem />, ali ja treba da mu dodam nekako atribute
            jer kad mapiramo ove vrednosti dobijamo niz todo-ova */}
        </div> );
    }
}
 
export default List;