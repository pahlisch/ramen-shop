import { useState, useEffect } from 'react';
import React from 'react';

function useRestaurantSearch() {
    const [restaurants, setRestaurant] = useState([]);
    const apiUrl = import.meta.env.REACT_API_URL || 'http://localhost:8080';

    useEffect(() => {
      const lastQuery = localStorage.getItem('lastQuery');
      search(lastQuery);
    }, []);

    const search = async (q) => {
      const response = await fetch(`${apiUrl}/restaurants?${new URLSearchParams({ q })}`);
      const data = await response.json();
      setRestaurant(data);
      localStorage.setItem('lastQuery', q);
    };
  
    return { search, restaurants };
  }

export default useRestaurantSearch;