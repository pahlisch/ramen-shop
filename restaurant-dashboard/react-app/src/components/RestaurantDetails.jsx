import useRestaurantDetails from "../hooks/useRestaurantDetails"
import { Link } from "wouter";
import { Button } from 'react-bootstrap';
import React from 'react';

function RestaurantDetails({id, onClick}) {

  const {restaurant, isLoading, error} = useRestaurantDetails(id)


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
      <>
      <div>
          <h2>{restaurant.restaurant_name}</h2>
          
              <h4>{restaurant.restaurant_address}</h4>
              <h4><a href={restaurant.restaurant_website}>Visit their website</a></h4>
          
          <Link href="/" onClick={onClick}>
            <Button className="mt-3">Back to ramen shop list</Button>
          </Link>
      </div>
      </>
  )

}

export default RestaurantDetails