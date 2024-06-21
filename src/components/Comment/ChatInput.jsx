import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';

export default function CommentInput({ addComment }) {
  const [comment, onCommentChange, setComment] = useInput('');

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    addComment(comment);
    setComment('');
  };

  return (
    <div className="comment_input">
      <span className="comment_give-comment">Beri Komentar</span>
      <form className="comment_form" onSubmit={handleCommentSubmit}>
        <textarea
          className="comment_form-text-area"
          value={comment}
          onChange={onCommentChange}
          rows="5"
        />
        <button type="submit" className="comment_form-submit">
          Kirim
        </button>
      </form>
    </div>
  );
}

CommentInput.propTypes = {
  addComment: PropTypes.func.isRequired,
};
