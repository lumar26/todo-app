// import React, { Component } from 'react';
import React, {useState, useEffect} from 'react';

const Item = ({info, todo,  todos, setTodos}) => {

    const handleDelete = () => {
        setTodos(todos.filter((elem) => elem.id !== todo.id))
    }

    const handleToggleStatus = () => {
        // ovde treba da odradimo dodavanje i uklanjanje klase
        // ta klasa treba recimo da precrta, promeni boju, onemoguci editovanje
        setTodos(todos.map(el => {
            if(el.id === todo.id){
                return {
                    // ovo je destrukturisanje objekta prvo, i onda menjamo jedan property
                    ...el, done: !el.done
                    // trebalo bi kad se promeni ovaj atribut na osnovu toga da povlaci odgovarajucu klasu iz css
                }
            } 
            return el;
        }))
    }
    const handleEdit =() => {
        // da se omoguci promena sadrzaja teksta, tipa klikom odmah da se stavi fokus na tekst, a nakon entera da se sacuva itd...
        
    }

    return(
        <div>
            {/* <span className={`${todo.done ? "klasa_kad_je_odradjeno" : "klasa_kad_nije_odradjeno"}`}>{info}</span> */}
            {info}
            <button onClick={handleToggleStatus}>Check</button>
            <button onClick={handleDelete}>Delete</button>

        </div>
    );
}

export default Item;