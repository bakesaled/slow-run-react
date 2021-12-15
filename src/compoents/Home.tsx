import React from 'react';
import { act } from 'react-dom/test-utils';
import { convertSecondsToString, formatAMPM } from '../helpers';
import { useHomeFetch } from '../hooks/useHomeFetch';

//Components
import Grid from './Grid';
import Spinner from './Spinner';
import Table, { TableColumn } from './Table';

//Types
type displayActivity = {
  date: string;
  time: string;
  name: string;
  type: string;
  distance: string;
  movingTime: string;
  averageSpeed: string;
  maxSpeed: string;
  elevationGain: string;
};

const columns: TableColumn[] = [
  {
    name: 'start_date_local',
    text: 'date',
  },
  {
    name: 'start_time_local',
    text: 'time',
  },
  {
    name: 'name',
    text: 'name',
  },
  {
    name: 'type',
    text: 'type',
  },
  {
    name: 'distance',
    text: 'distance',
  },
  {
    name: 'moving_time',
    text: 'moving time',
  },
  {
    name: 'average_speed',
    text: 'average speed',
  },
  {
    name: 'max_speed',
    text: 'max speed',
  },
  {
    name: 'total_elevation_gain',
    text: 'elev',
  },
];

const Home: React.FC = () => {
  const { state, loading, error } = useHomeFetch();
  console.log(state);

  if (error) return <div>Something went wrong...</div>;

  // const displayActivities: any[] = [];
  const displayActivities: displayActivity[] = state.results.map((activity) => {
    const movTimeString = convertSecondsToString(activity.moving_time);
    const startTime = new Date(activity.start_time_local);
    return {
      date: new Date(activity.start_date_local).toLocaleDateString('en-US', {
        weekday: 'short',
        month: '2-digit',
        day: '2-digit',
      }),
      time: formatAMPM(startTime),
      name: activity.name,
      type: activity.type,
      distance: `${activity.distance / 1000} km`,
      movingTime: movTimeString,
      averageSpeed: `${(activity.average_speed * 3.6).toFixed(2)} kmph`,
      maxSpeed: `${(activity.max_speed * 3.6).toFixed(2)} kmph`,
      elevationGain: `${activity.total_elevation_gain} m`,
    };
  });

  return (
    <>
      <Table
        header="Activities"
        data={displayActivities}
        columns={columns}
      ></Table>
      {loading && <Spinner />}
    </>
  );
};

export default Home;
