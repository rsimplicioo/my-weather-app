import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

import {
  Container,
  Detail,
  Description
 } from './styles';

interface Props {
  isNight: boolean;
  iconName: React.ComponentProps<typeof FontAwesome5>['name'];
  value: string;
  description: string;
}

export function WeatherDetail({
  isNight,
  iconName,
  value,
  description
}: Props){
  return(
    <Container isNight={isNight}>
      <FontAwesome5 
        name={iconName}
        size={16} 
        color={isNight ? "white" : "black"}
      />
      <Detail isNight={isNight}>
        {value}
      </Detail>
      <Description>
        {description}
      </Description>
    </Container>
  );
}