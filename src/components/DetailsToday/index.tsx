import React from 'react';
import { SvgProps } from 'react-native-svg';

import {
  Container,
  Description,
  Value
 } from './styles';
import { WeatherIcon } from '../WeatherIcon';

interface Props {
  isNight: boolean;
  icon: React.FC<SvgProps>;
  value: string;
  description: string;
  width?: number;
  height?: number;
}

export function DetailsToday({
  isNight,
  icon,
  value,
  description,
  width,
  height
}: Props){
  return(
    <Container isNight={isNight}>
      <Description isNight={isNight}>
        {description}
      </Description>
      <WeatherIcon width={width} height={height} isNight={isNight} icon={icon} />
      <Value isNight={isNight}>
        {value}
      </Value>
    </Container>
  );
}