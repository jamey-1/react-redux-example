export const CREATE_AUTHOR = 'CREATE_AUTHOR';
export const DELETE_AUTHOR = 'DELETE_AUTHOR';
export const UPDATE_AUTHOR = 'UPDATE_AUTHOR';

export const createAuthor = (id, name) => ({
    type: CREATE_AUTHOR,
    payload: {
        id,
        name,
    }
});

export const deleteAuthor = id => ({
    type: DELETE_AUTHOR,
    payload: { id }
});

export const updateAuthor = (id, name) => ({
    type: UPDATE_AUTHOR,
    payload: {
        id,
        name
    }
});