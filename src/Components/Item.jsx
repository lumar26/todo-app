// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react';

const Item = ({ info, todo, todos, setTodos }) => {

    const handleDelete = () => {
        setTodos(todos.filter((elem) => elem.id !== todo.id))
    }

    const handleToggleStatus = () => {
        // ovde treba da odradimo dodavanje i uklanjanje klase
        // ta klasa treba recimo da precrta, promeni boju, onemoguci editovanje
        setTodos(todos.map(el => {
            if (el.id === todo.id) {
                return {
                    // ovo je destrukturisanje objekta prvo, i onda menjamo jedan property
                    ...el, done: !el.done
                    // trebalo bi kad se promeni ovaj atribut na osnovu toga da povlaci odgovarajucu klasu iz css
                }
            }
            return el;
        }))
    }

    return (
        <div className="item">
            
            <div>
                <button onClick={handleToggleStatus} className="btn-check"><i className="fas fa-check"></i></button>
                <button onClick={handleDelete} className="btn-delete"><i className="fas fa-trash-alt"></i></button>
            </div>

            <span className={`${todo.done ? "done" : ""}`}>{info}</span>
        </div>
    );
}

export default Item;