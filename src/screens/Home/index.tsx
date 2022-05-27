import React, { useEffect, useState } from "react";
import { StatusBar, RefreshControl } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { format } from 'date-fns';

import { useTheme } from "styled-components";
import { useLocation } from "../../hooks/location";

import { WeatherDTO } from '../../dtos/WeatherDTO';
import { WeatherDetailsDTO } from "../../dtos/WeatherDetailsDTO";
import { Load } from "../../components/Load";
import { WeatherDetail } from "../../components/WeatherDetail";
import { DetailsToday } from "../../components/DetailsToday";
import { UpdateInfosButton } from "../../components/UpdateWeatherButton";
import { WeatherIcon } from "../../components/WeatherIcon";
import { getWeatherDetailsTodayAndWeek } from "../../services/Weather/weather";
import { getNameStateByAcronym } from '../../utils/getNameStateByAcronym';
import { getWeatherIcon } from '../../utils/getWeatherIcon';
import { getPlatformDate } from '../../utils/getPlatformDate';

import {
  Container,
  Header,
  HeaderContent,
  HeaderIcon,
  HeaderText,
  Content,
  Address,
  WeatherDescription,
  WeatherContent,
  WeatherText,
  DateDescription,
  WeatherFooter,
  Line,
  Footer,
  TodayText,
  DetailsWeek,
  MoreDetailsToday
 } from './styles';

const brazilLocale = require('date-fns/locale/pt-BR');

export function Home(){

  const { location } = useLocation();
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState<WeatherDTO>({} as WeatherDTO);
  const [weatherDetails, setWeatherDetails] = useState<WeatherDetailsDTO>({} as WeatherDetailsDTO);

  const date = format(getPlatformDate(new Date()), `EEEE, dd MMMM`, { locale: brazilLocale });
  
  const [hour, setHour] = useState('');
  const [isNight, setIsNight] = useState(false);

  const [refreshing, setRefreshing] = React.useState(false);

  const theme = useTheme();

  useEffect(() => {
    getHour();
    getWeather();
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getWeather();
  }, []);

  function getHour() {
    const hour = format(getPlatformDate(new Date()), `HH`, { locale: brazilLocale });
    setHour(hour);
    setIsNight((Number(hour) <= 6) || (Number(hour) >= 18));
  }

  async function getWeather() {
    if(location) {
      try{
        const response = await getWeatherDetailsTodayAndWeek(location.latitude, location.longitude);
        if(response.data){
          setWeather(response.data.current);
          setWeatherDetails(response.data.daily[0]);
        }
      }catch(error) {
        console.log(error);
      }finally{
        setLoading(false);
        setRefreshing(false);
      }
    }else{
      setLoading(false);
      setRefreshing(false);
    }
  }

  function handleUpdate() {
    setLoading(true);
    getHour();
    getWeather();
  }

  if (loading) {
    return (
      <Load />
    );
  }

  return(
    <Container 
      isNight={isNight}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    >
      

      <Header isNight={isNight}>
        <HeaderContent>
          <Entypo 
            size={24}
            color={isNight ? theme.colors.icon_nigth : theme.colors.icon}
            name={'location'}
          />
          {location && 
            <HeaderText isNight={isNight}>
              {location.address.isoCountryCode === 'BR' ? getNameStateByAcronym(location.address.region) : location.address.region}
            </HeaderText>
          }
        </HeaderContent>
        <HeaderIcon>
          <UpdateInfosButton color={isNight ? theme.colors.icon_nigth : theme.colors.icon} onPress={() => handleUpdate()}/>
        </HeaderIcon>
      </Header>

      { weather.dt ? 
          <Content>
            <Address isNight={isNight}>{location ? location.address.district : ''}</Address>
            <WeatherDescription isNight={isNight}>
              {weather ? weather?.weather.description : '-'}
            </WeatherDescription>
            
            <WeatherContent>
              <WeatherIcon isNight={isNight} icon={getWeatherIcon(weather?.weather[0].icon)} />
              <WeatherText isNight={isNight}>
                {(weather?.temp)?.toFixed(0)}°
              </WeatherText>
            </WeatherContent>

            <DateDescription isNight={isNight}>
              {date}
            </DateDescription>

            <WeatherFooter>
              <WeatherDetail isNight={isNight} iconName="thermometer-quarter" value={`${(weatherDetails?.temp.min)?.toFixed()?.toString()}°/${(weatherDetails?.temp.max)?.toFixed().toString()}°`} description="Max. / Min." />
              <WeatherDetail isNight={isNight} iconName="wind" value={`${(weather?.wind_speed * 3.6).toFixed()} km/h`} description="Vento" />
              <WeatherDetail isNight={isNight} iconName="tint" value={`${(weather?.humidity)}%`} description="Umidade" />
            </WeatherFooter>
          </Content>
      : 
        <Content>
          <WeatherContent>
            <WeatherIcon isNight={isNight} icon={getWeatherIcon('')} />
            <WeatherDescription isNight={isNight}>
              Desculpe, não conseguimos verificar as informaçoes de tempo para o momento atual.
            </WeatherDescription>
          </WeatherContent>
        </Content>
    }

    <Line />

    { weather.dt && 
      <Footer>
        <DetailsWeek>
          <TodayText isNight={isNight}>Hoje</TodayText>
        </DetailsWeek>

        <MoreDetailsToday>
          <DetailsToday isNight={isNight} width={30} height={30} description="Manhã" icon={getWeatherIcon('02d')} value={`${(weatherDetails?.feels_like.morn).toFixed()}°`} /> 
          <DetailsToday isNight={isNight} width={30} height={30} description="Tarde" icon={getWeatherIcon('01d')} value={`${(weatherDetails?.feels_like.eve).toFixed()}°`} />
          <DetailsToday isNight={isNight} width={30} height={30} description="Noite" icon={getWeatherIcon('01n')} value={`${(weatherDetails?.feels_like.night).toFixed()}°`} /> 
        </MoreDetailsToday>
        
      </Footer>
    }
    </Container>
  );
}