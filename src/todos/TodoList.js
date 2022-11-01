import React from "react";
import { connect } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from './TodoListItem';
import AuthorListItem from "./AuthorListItem";
import { removeTodo, setComplete } from "../store/actions";
import "./TodoList.css"

const TodoList = ({ todos = [], authors = [], onRemovePressed, onSetIsComplete }) => (
    <div className="list-wrapper">
        <NewTodoForm />

        {
            todos.map(todo => 
            <TodoListItem 
                key={todo.text}
                todo={todo} 
                onRemovePressed={onRemovePressed}
                onSetIsComplete={onSetIsComplete}
            />)
        }

        {
            authors.map(author => <AuthorListItem key={author.id} authorID={author.id}/>)    
        }
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos,
    authors: state.authors,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onSetIsComplete: text => dispatch(setComplete(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);