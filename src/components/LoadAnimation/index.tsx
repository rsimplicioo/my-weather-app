import React from 'react';
import LottieView from 'lottie-react-native';

// import loading from '../../assets/loadingWeather.json';

import {
 Container
} from './styles';

export function LoadAnimation(){

  return(
    <Container>
      <LottieView 
        // source={loading}
        source={require('../../assets/loadingWeather.json')}
        style={{ height: 100 }}
        resizeMode='contain'
        autoPlay
        loop
      />
    </Container>
  );
}