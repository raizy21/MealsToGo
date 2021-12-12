import React from 'react';
import styled from 'styled-components/native';
import { Searchbar } from 'react-native-paper'; 
import { SafeAreaView, StatusBar, } from 'react-native';
import { RestaurantInfoCard } from '../components/restaurants-info-card.components';

//SafeAreaView
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  `;

  //View Searchbar
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

//View RestaurantInfoCard
const RestaurantListContainer =styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
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
