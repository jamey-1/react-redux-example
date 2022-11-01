import { CREATE_AUTHOR, DELETE_AUTHOR, UPDATE_AUTHOR } from "./actionsAuthor";

export const authors = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case CREATE_AUTHOR: {
            const { id, name } = payload;
            const newAuthor = {
                id,
                name,
            };
            return [...state, newAuthor];
        }
        case DELETE_AUTHOR: {
            const { id } = payload;
            return state.filter(author => id !== author.id);
        }
        case UPDATE_AUTHOR: {
            const { id, name } = payload;
            return state.map(author => {
                if (id === author.id) {
                    return {...author, name}
                }
                return author;
            });
        }
    
        default:
            return state;
    }
};