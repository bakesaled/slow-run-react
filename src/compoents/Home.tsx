import React from 'react';
import {
  calculatePaceString,
  convertSecondsToString,
  formatAMPM,
} from '../helpers';
import { useHomeFetch } from '../hooks/useHomeFetch';

//Components
import Grid from './Grid';
import Spinner from './Spinner';
import Table, { TableColumn } from './Table';

//Types
type DisplayActivity = {
  date: string;
  time: string;
  name: string;
  type: string;
  distance: string;
  movingTime: string;
  averageSpeed: string;
  maxSpeed: string;
  pace: string;
  elevationGain: string;
  lowElevation: string;
  averageHeartrate: string;
  averageWatts: string;
  kilojoules: string;
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
    name: 'pace',
    text: 'pace',
  },
  {
    name: 'total_elevation_gain',
    text: 'elev gain',
  },
  {
    name: 'elev_low',
    text: 'low elev',
  },
  {
    name: 'average_heartrate',
    text: 'hr',
  },
  {
    name: 'average_watts',
    text: 'watts',
  },
  {
    name: 'kilojoules',
    text: 'calories',
  },
];

const Home: React.FC = () => {
  const { state, loading, error } = useHomeFetch();
  console.log(state);

  if (error) return <div>Something went wrong...</div>;

  // const displayActivities: any[] = [];
  const displayActivities: DisplayActivity[] = state.results.map(
    (activity): DisplayActivity => {
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
        distance: `${(activity.distance / 1000).toFixed(1)} km`,
        movingTime: movTimeString,
        averageSpeed: `${(activity.average_speed * 3.6).toFixed(2)} kmph`,
        maxSpeed: `${(activity.max_speed * 3.6).toFixed(2)} kmph`,
        pace: `${calculatePaceString(
          activity.distance / 1000,
          activity.moving_time
        )} min/km`,
        elevationGain: `${activity.total_elevation_gain} m`,
        lowElevation: `${activity.elev_low} m`,
        averageHeartrate: activity.average_heartrate.toFixed(0),
        averageWatts: activity.average_watts.toFixed(0),
        kilojoules: activity.kilojoules.toFixed(0),
      };
    }
  );

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
