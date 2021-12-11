import React from 'react';
import {Text} from 'react-native';

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name= 'some restaurant', 
    icon, 
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ], 
    address = '1 some random street', 
    isOpenNow = true, 
    rating = 4, 
    isClosedTemporarily 
  } = restaurant;
  return <Text>{name}</Text>
}


