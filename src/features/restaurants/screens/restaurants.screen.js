import React from 'react';
import styled from 'styled-components/native';
import { Searchbar } from 'react-native-paper'; 
import { SafeAreaView, StatusBar, } from 'react-native';
import { RestaurantInfoCard } from '../components/restaurants-info-card.components';

//SafeAreaView
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
  `;

  //View Searchbar
const SearchContainer = styled.View`
  padding: 16px;
  background-color: yellow;
`;

//View RestaurantInfoCard
const RestaurantListContainer =styled.View`
  flex: 1;
  padding: 16px;
  background-color: black;
`;
export const RestaurantsScreen = () => (

  <SafeArea>
  <SearchContainer>
    <Searchbar />
  </SearchContainer>

  <RestaurantListContainer>
    <RestaurantInfoCard />
  </RestaurantListContainer>

</SafeArea>
);
