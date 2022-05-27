import React from 'react';
import { SvgProps } from 'react-native-svg';
import { useTheme } from 'styled-components';

import {
 Container
} from './styles';

interface Props {
  icon: React.FC<SvgProps>;
  isNight: boolean;
  width?: number;
  height?: number;
}

export function WeatherIcon({
  icon: Icon,
  isNight,
  width,
  height
}: Props){
  const theme = useTheme();

  return(
    <Container isNight={isNight}>
      <Icon 
        width={width ? width : 250} 
        height={height ? height : 150} 
        fill={isNight ? theme.colors.icon_nigth : theme.colors.icon}
      />
    </Container>
  );
}