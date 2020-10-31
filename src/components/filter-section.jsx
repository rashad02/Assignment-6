import React from 'react';
import {connect} from 'react-redux';
import {setFilter, countAction, clearCompleted} from "../redux/action";

import './filter-section.styles.scss';

const getCount = (todos, action) => {
  switch (action) {
    case countAction.ACTIVE_COUNT:
      return todos.filter(t => !t.completed).length
    default:
      throw new Error('Unknown filter: ' + action)
  }
}

const FILTER_TITLES = {
  SHOW_ALL: 'All',
  SHOW_ACTIVE: 'Active',
  SHOW_COMPLETED: 'Completed'
};

const FilterSection = ({ filter, setFilter, count, clearCompleted}) => {
  
  const visiibleFilter = ["SHOW_ALL", "SHOW_COMPLETED", "SHOW_ACTIVE"];
  const itemWord = count === 1 ? 'item' : 'items';
    
  return (
    <footer className="footer">
      <span className="todoCount">
        <strong>{count || 'No'}</strong> {itemWord} left
      </span>
      <ul className= 'filters'>
        {visiibleFilter.map((filterName, i) =>
          <li key={filterName}>
            <a href="/#" className={filterName === filter ? "selected" : ""}
              onClick={() => setFilter(`${filterName}`)}>
                {FILTER_TITLES[filterName]}
            </a>
          </li> 
        )}
      </ul>
      <button className="clearCompleted" onClick={()=> clearCompleted()}>
          Clear completed
      </button>
    </footer>
  )
}

const mapStateToProps = state => ({
  filter: state.filter,
  count : getCount(state.todos,"ACTIVE_COUNT")
});
  
const mapDispatchToProps = dispatch => ({
  setFilter: filter => dispatch(setFilter(filter)),
  clearCompleted: () => dispatch(clearCompleted())
})
  


export default connect(mapStateToProps, mapDispatchToProps)(FilterSection);