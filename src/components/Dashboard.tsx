import React from 'react';
import { useHomeFetch } from '../hooks/useHomeFetch';
import Spinner from './Spinner';

const Dashboard: React.FC = () => {
  const { state, loading, error } = useHomeFetch();
  console.log(state);

  if (error) return <div>Something went wrong...</div>;

  let totalMilesRun = 0;
  state.results.forEach((activity) => {
    if (activity.type.toLowerCase() === 'run') {
      totalMilesRun += activity.distance;
    }
  });

  return (
    <>
      <h2>Total Distance Run</h2>
      <p>{`${(totalMilesRun / 1000).toFixed(0)} km`}</p>
      {loading && <Spinner />}
    </>
  );
};

export default Dashboard;
