import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncGetLeaderboards } from '../states/leaderboards/actions';
import LeaderboardsItems from '../components/LeaderboardsItems';

export default function LeaderboardsPage() {
  const dispatch = useDispatch();
  const leaderboards = useSelector((state) => state.leaderboards);

  useEffect(() => {
    dispatch(asyncGetLeaderboards());
  }, [dispatch]);

  if (!leaderboards) {
    return null;
  }

  return (
    <section className="leaderboards-page">
      <div className="leaderboards-page card">
        <header className="leaderboards-page__header_container">
          <h2>Active User Leaderboard</h2>
          <h2>Score</h2>
        </header>
        <div className="leaderboards-item__container">
          {leaderboards.map(({ user, score }) => (
            <LeaderboardsItems key={user.id} user={user} score={score} />
          ))}
        </div>
      </div>
    </section>
  );
}
