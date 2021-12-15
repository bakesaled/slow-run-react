import { useEffect, useState } from 'react';

//API
import API, { Activity } from '../API';

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

      const activities = await API.fetchActivities();

      setState(() => ({
        ...activities,
        results: activities.results,
      }));
    } catch (error) {
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
