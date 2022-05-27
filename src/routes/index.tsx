import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppStackRoutes } from './app.stack.routes';
import { useLocation } from '../hooks/location';
import { Load } from '../components/Load';

export function Routes(){
  const { loading } = useLocation();
  
  return(
    loading ? <Load /> :
    <NavigationContainer>
      <AppStackRoutes />
    </NavigationContainer>
  );
}