import { API_URL } from './config';

export type Activity = {
  id: string;
  name: string;
  type: string;
  distance: number;
  moving_time: number;
  average_speed: number;
  max_speed: number;
  total_elevation_gain: number;
  elev_low: number;
  start_date: string;
  utc_offset: number;
  timezone: string;
  average_heartrate: number;
  average_watts: number;
  kilojoules: number;
};

export type Activities = {
  results: Activity[];
};

const api = {
  fetchActivities: async (): Promise<Activities> => {
    const endpoint: string = `${API_URL}activities`;
    return await (await fetch(endpoint)).json();
  },
};

export default api;
