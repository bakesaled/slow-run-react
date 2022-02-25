import axiosInstance from '../API';
import { API_PATH } from '../config';

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

const activitiesService = {
  fetchActivities: async (): Promise<Activities> => {
    return await axiosInstance.get(`${API_PATH}activities`).then((res) => {
      return res.data;
    });
  },
};

export default activitiesService;
