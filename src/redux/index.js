
import { createStore } from 'redux'


const initialState = {
  tasks: [],
};

const reducer = (state = initialState, action) => {

        console.log('running reducer', state, action);


        switch (action.type) {
            case 'ADD_TODO':
                return {
                    ...state,
                    tasks: [
                        ...state.tasks,
                        {
                            text: action.payload.text,
                            id: action.payload.id,
                            completed: false
                        }
                    ]
                };

            default:
                return state
        }

};
const store = createStore( reducer )

export default store;