import { api } from '../api';
import { API_KEY, UNITS, LANG } from '@env';

//Recebe a previsão de tempo da hora exata por meio das coordenadas 
export const getWeatherByLatLon = (lat: number, lon: number) => {
  return api.get(`/weather?lat=${lat}&lon=${lon}&units=${UNITS}&lang=pt_br&appid=${API_KEY}`);
}

//Recebe a previsão de tempo do dia e dos próximos sete dias de acordo com as coordenadas
export const getWeatherDetailsTodayAndWeek = (lat: number, lon: number) => {
  return api.get(`/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=${UNITS}&lang=pt_br&appid=${API_KEY}`);
}

export { api };