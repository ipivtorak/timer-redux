export const initialState = {
    tasks: []
}

const ADD_TASK = 'ADD-TASK';

export default function tasksReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK: {
            const { id, name, time } = action;
            const newTask = { id, name, time };
            return {
                tasks: [...state.tasks, newTask]
            };
        }
        default :
            return state;
    }
}

export const addTaskActionCreator = (id, name, time) => ({ type: ADD_TASK, id, name, time });
