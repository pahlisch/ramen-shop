import React from 'react';

function RestaurantListItem({ restaurant_name, restaurant_address, onClick}) {
    return (
        <div style={{cursor : 'pointer' }} onClick={onClick}>
        <strong>{restaurant_name}</strong> {restaurant_address} 
        </div>
     
    );
  }

  export default RestaurantListItem;