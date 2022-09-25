import React from "react";
import { connect } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from './TodoListItem';
import { removeTodo, setComplete } from "./actions";
import "./TodoList.css"

const TodoList = ({ todos = [], onRemovePressed, onSetIsComplete }) => (
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map(todo => <TodoListItem 
            todo={todo} 
            onRemovePressed={onRemovePressed}
            onSetIsComplete={onSetIsComplete}
        />)}
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onSetIsComplete: text => dispatch(setComplete(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);