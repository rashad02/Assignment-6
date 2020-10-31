import React from 'react';
import {connect} from 'react-redux';
import {addTodo,editTodo} from "../redux/action";

import {getTodoList} from "./get-todo-list.js"

import "./todo-text-input.styles.scss";


const TodoTextInput = ({text,addTodo, todos, editTodo,editInput}) => {
    let todo = {};

    if(todos.length) {
        todo = todos.find(todo => todo.isEdit);
        if(todo && todo.text) text = todo.text;
    }

    return (
        <input
        id={editInput && todo && todo.id ? todo.id : null}
        className="new"
        type="text"
        placeholder="What to do next!"
        /* Key press value update handler */
        ref ={node => {
            if(editInput && node && node.id) node.value = todo.text;
            else text =  node && node.vaue ? node.value : '';
            
            editInput = false;
            return text;
        }}
        onChange={event=> text= event.target.value}
        /* Blur event handler */
        onBlur={(event) => { if(todo && todo.isEdit) {
            editTodo(todo.id, todo.text,!todo.isEdit)
        }
            editInput = false;
            return text 
        }
        }
        /* Enter/Submit event handler */
        onKeyDown={(event)  =>{
            if (event.which === 13) {
                if(todo && todo.isEdit)editTodo(todo.id, text,!todo.isEdit)
                else addTodo(text);
                event.target.value = "";
                editInput = false;
            }
              }}
      />
    )
}

const mapStateToProps = state => ({
    todos : getTodoList(state.todos, "SHOW_ALL") || []
})

const mapDispatchToProps = dispatch => ({
    addTodo: text => dispatch(addTodo(text)),
    editTodo: (id,text,isEdit) => dispatch(editTodo(id,text,isEdit))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoTextInput);