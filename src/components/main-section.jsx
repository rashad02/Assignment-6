import React from 'react';
import {connect} from 'react-redux';
import {getTodoList} from "./get-todo-list.js";
 
import TodoItem from './todo-item.jsx';
import FilterSection from './filter-section.jsx';

import "./main-section.styles.scss";



const MainSection = ({todos}) => {
 
  return (
      <section className="main">
            <ul className="todoList">
                {todos.map(todo =>
                <TodoItem key={todo.id} todo={todo}/>)}
            </ul>
            
            <FilterSection />
      </section>
        
    )

}

const mapStateToProps = state => ({
  todos: getTodoList(state.todos, state.filter)
})

export default connect(mapStateToProps, null)(MainSection);