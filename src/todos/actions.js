export const CREATE_TODO = 'CREATE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const SET_COMPLETE = 'SET_COMPLETE';

export const createTodo = text => ({
    type: CREATE_TODO,
    payload: { text }
});

export const removeTodo = text => ({
    type: REMOVE_TODO,
    payload: { text },
});

export const setComplete = text => ({
    type: SET_COMPLETE,
    payload: { text },
});
