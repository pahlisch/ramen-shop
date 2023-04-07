import React from 'react';
import { useState, useEffect } from 'react';

export function useRestaurantDetails(id) {
  const [restaurant, setRestaurant] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = import.meta.env.REACT_API_URL || 'http://localhost:8080';


  useEffect(() => {
    setIsLoading(true);

    fetch(`${apiUrl}/restaurants/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        const [restaurantData] = data;
        setRestaurant(restaurantData);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  return { restaurant, isLoading, error };
}

function useRestaurantDetails2() {
    const [restaurantDetails, setRestaurantDetails] = useState(null);
    const apiUrl = import.meta.env.REACT_API_URL || 'http://localhost:8080';
   
    const fetchDetails = async (id) => {
      const response = await fetch(`${apiUrl}/restaurants/${id}`);
      const data = await response.json();
      setRestaurantDetails(data);
    };
  
    return { fetchDetails, restaurantDetails };
  }

export default useRestaurantDetails;