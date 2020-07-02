import React from 'react';
import {
  AiOutlineLink,
  AiOutlineClockCircle,
  AiOutlineComment,
} from 'react-icons/ai';
import './HackerListItem.scss';
import { Link } from 'react-router-dom';
import CommentTemplate from './CommentTemplate';

const HackerListItem = ({ news }) => {
  const { id, title, domain, time_ago, comments_count, url } = news;

  return (
    <div className="HackerListItem">
      <div className="news-title">
        <a href={url}>{title}</a>
      </div>
      <div className="news-info">
        <div className="news-url">
          <AiOutlineLink />
          <div className="url">
            {domain}
          </div>
        </div>
        <div className="news-time">
          <AiOutlineClockCircle />
          <div className="time">{time_ago}</div>
        </div>
        <div className="news-comments">
          <AiOutlineComment />
          <div className="comments">
            <Link to={`/item?id=${id}`}>
              <a>
                {comments_count} {comments_count > 1 ? `comments` : `comment`}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackerListItem;
