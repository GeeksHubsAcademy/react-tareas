import { createStore , compose} from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const initialState = {
  tasks: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        tasks: [action.newTaskToAdd,  ...state.tasks],
      };
    case 'TOGGLE_COMPLETED_TASK':
      return {
        ...state,
        tasks: state.tasks.map( task =>  task.id === action.id ? { ...task, completed: !task.completed   } : task     )
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.id),
      };
    default:
      return state;
  }
};
const store = createStore(reducer, composeEnhancers() );

export default store;
