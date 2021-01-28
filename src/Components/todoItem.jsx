import React, { Component } from 'react';

class TodoItem extends Component {

    // constructor (props) {
    //     super(props);
    //     console.log(props);
    //     this.state = {
    //         onDelete: () => this.props.onDelete(1), 
    //     }
    // }
    
    render() { 
        return ( <div>
            <p>Tekst koji sadrzi todo 
                <button>Izmeni sadrzaj</button>
                <button onClick ={() => this.props.onDelete(this.props.id)} >Izbrisi</button>
            </p>
        </div> );
    }
}
 
export default TodoItem;