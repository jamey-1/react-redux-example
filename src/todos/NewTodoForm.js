import React, { useState } from "react";
import { connect } from "react-redux";

import { createTodo } from "../store/actions";
import { createAuthor } from "../store/actionsAuthor";
import "./NewTodoForm.css"

const NewTodoForm = ({ todos, authors, onCreatePressed, onCreateAuthor }) => {
    const [inputValue, setInputValue] = useState("");
    const [authorName, setAuthorName] = useState("");

    return (
        <div className="new-todo-form">
            <input 
                className="new-todo-input" 
                type="text"
                placeholder="Type your new todo here"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
            <input 
                className="new-todo-input"
                type="text"
                placeholder="Author Name"
                value={authorName}
                onChange={e => setAuthorName(e.target.value)}
            />
            <button 
                onClick={() => {
                    const isDuplicateText = 
                        todos.some(todo => todo.text === inputValue);
                    if (!isDuplicateText) {
                        onCreatePressed(inputValue);
                        setInputValue('');
                    }
                }}
                className="new-todo-button">Create Todo
            </button>
            <button onClick={() => {
                    const isDuplicateAuthor = authors.some(author => author.name === authorName);
                    if (!isDuplicateAuthor) {
                        onCreateAuthor(Date.now(),authorName);
                        setAuthorName('');
                    }
                }}
                className="new-todo-button"
            >
                Create Author
            </button>
        </div>
    );
};

const mapStateToProps = state => ({
    todos: state.todos,
    authors: state.authors,
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text)),
    onCreateAuthor: (id, name) => dispatch(createAuthor(id, name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);