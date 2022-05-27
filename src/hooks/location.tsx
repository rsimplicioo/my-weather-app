import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import * as Location from 'expo-location';
import { Alert } from "react-native";

interface Location {
  address: Location.LocationGeocodedAddress;
  latitude: number;
  longitude: number;
}

interface LocationContextData {
  location: Location;
  loading: boolean;
}

interface LocationProviderProps {
  children: ReactNode;
}

const LocationContext = createContext<LocationContextData>({} as LocationContextData);

function LocationProvider({ children } : LocationProviderProps) {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState<Location>({} as Location);

  useEffect(() => {
    async function getLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(
          'Permissão não concedida',
          'Permita que o aplicativo use o serviço de localização.',
          [{ text: 'OK' }],
          { cancelable: false }
        );
        return;
      }
  
      let location = await Location.getCurrentPositionAsync();
        const { latitude, longitude } = location.coords;
        let response = await Location.reverseGeocodeAsync({
          latitude,
          longitude
        });
  
        let locationData = {
          address: response[0],
          latitude: latitude,
          longitude: longitude
        }
  
        setLocation(locationData);
        setLoading(false);
    }

    getLocation();
  }, []);

  return(
    <LocationContext.Provider
      value={{
        location: location,
        loading
      }}
    >
      { children }
    </LocationContext.Provider>
  );
}

function useLocation(): LocationContextData{
  const context = useContext(LocationContext);

  return context;
}

export { LocationProvider, useLocation };