import React from 'react';
import TodoTextInput from './todo-text-input.jsx';
import {connect} from 'react-redux';
import {completeTodo, deleteTodo, editTodo} from "../redux/action";

import './todo-item.styles.scss';


const TodoItem = ({todo, completeTodo, deleteTodo, editTodo})=> {
    const {text, completed,isEdit,id} = todo;

  return (
    <li className={completed ? "completed": "todo-item"}>
        {
          isEdit ? 
                <TodoTextInput editInput={isEdit}/>
                    :
                <div className="view">
                    <input className="toggle"
                      type="checkbox"
                      checked={completed}
                      onChange={()=> completeTodo(id)}
                    />
                    <label onDoubleClick={() => editTodo(id,text, !isEdit )}>
                      {text}
                    </label>
                    <button className="destroy" onClick={()=> deleteTodo(id)}/>
                </div>
          }
      </li>
    )
}

const mapDispatchToProps = dispatch => ({
  completeTodo: id => dispatch(completeTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id)),
  editTodo: (id,text, isEdit) => dispatch(editTodo(id, text, isEdit)),
})

export default connect(null, mapDispatchToProps)(TodoItem);