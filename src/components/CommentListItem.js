import React from 'react';
import './CommentListItem.scss';

const CommentListItem = ({ comment }) => {
  return (
    <div className="CommentListItem">
      <div className="comment-info">
        <div className="comment-user">{comment.user}</div>
        <div className="comment-time">{comment.time_ago}</div>
      </div>
      <div className="comment-content" dangerouslySetInnerHTML={{ __html: comment.content }}></div>
      {comment.comments && comment.comments.map(childComment => 
        <CommentListItem key={childComment.id} comment={childComment} />)}
    </div>
  );
};

export default CommentListItem;