import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import asyncPopulateUsersAndThreads from '../states/shared/actions';
import {
  asyncDownVoteThread,
  asyncNeutralizeVoteThread,
  asyncUpVoteThread,
} from '../states/threads/actions';
import ThreadList from '../components/Thread/ThreadList';
import Buttons from '../components/styled/Buttons';
import ButtonCategory from '../components/styled/ButtonCategory';

export default function HomePage() {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((state) => state);

  const [filter, setFilter] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const categories = new Set(threads.map((thread) => thread.category));

  const handleUpVoteThread = (threadId) => {
    dispatch(asyncUpVoteThread(threadId));
  };

  const handleDownVoteThread = (threadId) => {
    dispatch(asyncDownVoteThread(threadId));
  };

  const handleNeutralizeVoteThread = (threadId) => {
    dispatch(asyncNeutralizeVoteThread(threadId));
  };

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <div className="container">
      <div>
        <div className="homepage__action">
          <Link to="/add-thread">
            <Button
              variant="contained"
              className="action"
            >
              Add New Thread
            </Button>
          </Link>
        </div>
        <div>
          <ButtonCategory>
            <Buttons
              type="button"
              onClick={() => setFilter('')}
            >
              Show All
            </Buttons>
            {Array.from(categories).map((category) => (
              <Buttons
                type="button"
                key={category}
                onClick={() => setFilter(category)}
              >
                #
                {category}
              </Buttons>
            ))}
          </ButtonCategory>
          <ThreadList
            threads={
              filter
                ? threadList.filter((thread) => thread.category === filter)
                : threadList
            }
            upVote={handleUpVoteThread}
            downVote={handleDownVoteThread}
            neutralVote={handleNeutralizeVoteThread}
          />
        </div>
      </div>
    </div>
  );
}
