import { useEffect, useState } from 'react';

//API
import activitiesService, { Activity } from '../services/activities.service';

const initialState = {
  results: [] as Activity[],
};

export const useHomeFetch = () => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchActivities = async () => {
    try {
      setError(false);
      setLoading(true);

      const activities = await activitiesService.fetchActivities();

      setState(() => ({
        ...activities,
        results: activities.results,
      }));
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  };

  //Initial render
  useEffect(() => {
    setState(initialState);
    fetchActivities();
  }, []);

  return { state, loading, error };
};
