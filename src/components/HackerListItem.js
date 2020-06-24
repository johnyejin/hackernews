import React, { useState } from 'react';
import {
  AiOutlineLink,
  AiOutlineClockCircle,
  AiOutlineComment,
} from 'react-icons/ai';
import './HackerListItem.scss';

const HackerListItem = ({ news }) => {
  const { title, domain, time_ago, comments_count, url } = news;

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
            {comments_count} {comments_count > 1 ? `comments` : `comment`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackerListItem;
