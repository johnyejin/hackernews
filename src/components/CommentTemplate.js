import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import {
  AiOutlineLink,
  AiOutlineClockCircle,
  AiOutlineComment,
  AiOutlineRollback,
} from 'react-icons/ai';
import './CommentTemplate.scss';
import CommentListItem from './CommentListItem';

const CommentTemplate = ({ location, history }) => {
  console.log('location', location)
  console.log('history', history)
  const queryId = location.search.split('=')[1];
  const [comments, setComments] = useState(null);
  const [loading, setLoading] = useState(false);
  const [commentList, setCommentList] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://node-hnapi.herokuapp.com/item/${queryId}`
        );
        setComments(response.data);
        setCommentList(response.data.comments);
      } catch (e) {
        console.log('e', e);
      }
      setLoading(false);
    };
    fetchNews();
  }, [queryId]);

  const onBackClick = useCallback(
    () => {
      history.goBack();
    },
    []
  );

  if(loading) {
    return <div>loading...</div>;
  }

  if(!comments) {
    return null;
  }

  return (
    <div className="CommentTemplate">
      <div className="comment-header">
        <div className="app-title">Hacker News</div>
        <AiOutlineRollback onClick={onBackClick}/>
      </div>
      <div className="comment-container">
        <div className="news-title">
          <a href={comments.url}>{comments.title}</a>
        </div>
        <div className="news-info">
          <div className="news-url">
            <AiOutlineLink />
            <div className="url">
              {comments.domain}
            </div>
          </div>
          <div className="news-time">
            <AiOutlineClockCircle />
            <div className="time">{comments.time_ago}</div>
          </div>
          <div className="news-comments">
            <AiOutlineComment />
            <div className="comments">
              {comments.comments_count} {comments.comments_count > 1 ? `comments` : `comment`}
            </div>
          </div>
        </div>
        {commentList.map(comment => (
          <CommentListItem key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentTemplate;