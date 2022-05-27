import React from 'react';
import { ActivityIndicator } from "react-native-paper";
import { useTheme } from 'styled-components';

import {
 Container
} from './styles';

export function Load(){
  const theme = useTheme();

  return(
    <Container>
      <ActivityIndicator animating={true} color={'#072957'} />
    </Container>
  );
}