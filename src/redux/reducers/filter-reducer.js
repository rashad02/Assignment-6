import * as ActionTypes from '../actionTypes.js';


const filter = (state = "SHOW_ALL", action) => {
    switch (action.type) {
      case "SET_FILTER":
        return ActionTypes[action.filter]
        default:
        return state
    }
  }
  
  export default filter;
