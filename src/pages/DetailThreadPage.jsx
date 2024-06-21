import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  asyncCreateComment,
  asyncDownVoteComment,
  asyncDownVoteThreadDetail,
  asyncNeutralizeVoteComment,
  asyncNeutralizeVoteThreadDetail,
  asyncReceiveThreadDetail,
  asyncUpVoteComment,
  asyncUpVoteThreadDetail,
} from '../states/threadDetail/actions';
import ThreadDetail from '../components/Thread/ThreadDetail';
import CommentInput from '../components/Comment/ChatInput';
import CommentList from '../components/Comment/ChatList';

export default function DetailThreadPage() {
  const { id } = useParams();
  const { threadDetail = null, authUser } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [dispatch, id]);

  const handleUpVoteThread = () => {
    dispatch(asyncUpVoteThreadDetail(id));
  };

  const handleDownVoteThread = () => {
    dispatch(asyncDownVoteThreadDetail(id));
  };

  const handleNeutralizeVoteThread = () => {
    dispatch(asyncNeutralizeVoteThreadDetail(id));
  };

  const handleCommentSubmit = (content) => {
    dispatch(asyncCreateComment({ threadId: id, content }));
  };

  const handleUpVoteComment = (commentId) => {
    dispatch(asyncUpVoteComment({ threadId: id, commentId }));
  };

  const handleDownVoteComment = (commentId) => {
    dispatch(asyncDownVoteComment({ threadId: id, commentId }));
  };

  const handleNeutralizeVoteComment = (commentId) => {
    dispatch(asyncNeutralizeVoteComment({ threadId: id, commentId }));
  };

  if (!threadDetail) {
    return null;
  }

  return (
    <div>
      <div className="thread-detail card">
        <ThreadDetail
          {...threadDetail}
          authUser={authUser.id}
          upVoteThreadDetail={handleUpVoteThread}
          downVoteThreadDetail={handleDownVoteThread}
          neutralizeVoteThreadDetail={handleNeutralizeVoteThread}
        />
        <CommentInput addComment={handleCommentSubmit} />
      </div>

      <CommentList
        comments={threadDetail.comments}
        authUser={authUser.id}
        upVoteComment={handleUpVoteComment}
        downVoteComment={handleDownVoteComment}
        neutralizeVoteComment={handleNeutralizeVoteComment}
      />
    </div>
  );
}
