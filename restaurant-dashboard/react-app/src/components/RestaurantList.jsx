import RestaurantListItem from "./RestaurantListItem";
import { Link } from "wouter";
import React from 'react';


function RestaurantList(restaurants, handleSearch, handleRestaurantClick) {

    return (

      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <Link href={`/restaurant/${restaurant.id}`} className="active">
              <RestaurantListItem
                {...restaurant}
              />
            </Link>
          </li>
        ))}
        {searched && restaurants.length === 0 && (
          <li>No restaurant found</li>
        )}
      </ul>
    )
}

export default RestaurantList;