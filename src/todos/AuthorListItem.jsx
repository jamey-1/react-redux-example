import React from 'react';
import { connect } from 'react-redux';

import { deleteAuthor, updateAuthor } from "../store/actionsAuthor";

import "./TodoListItem.css";

const AuthorListItem = ({ authorID, authors, onDeleteAuthor, onUpdateAuthor }) => {
  const selectedAuthor = authors.filter(author => (authorID === author.id))[0];
  console.log("AuthorListItem --- selectedAuthor: ", selectedAuthor);

  return (
    <div className='todo-item-container'>
      <input
        className="new-todo-input"
        type="text"
        value={selectedAuthor.name}
        onChange={e => onUpdateAuthor(authorID, e.target.value)}
      />
      <button
        className='remove-button'
        onClick={() => onDeleteAuthor(selectedAuthor.id)}
      >
        Remove
      </button>
    </div>
  )
};

const mapStateToProps = state => ({
  authors: state.authors,
});

const mapDispatchToProps = dispatch => ({
  onDeleteAuthor: id => dispatch(deleteAuthor(id)),
  onUpdateAuthor: (id, name) => dispatch(updateAuthor(id, name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorListItem);