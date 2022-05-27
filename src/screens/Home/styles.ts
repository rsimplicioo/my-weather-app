import styled, { css } from 'styled-components/native';
import { Image } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

interface OptionProps {
  isNight: boolean;
}

export const Container = styled.ScrollView<OptionProps>`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background_primary};
  ${({ isNight }) => isNight && css`
    background-color: ${({ theme }) => theme.colors.background_secondary};
  `}
`;

export const Header = styled.View<OptionProps>`
  width: 100%;
  height: 100px;

  background-color: ${({ theme }) => theme.colors.background_primary};
  ${({ isNight }) => isNight && css`
    background-color: ${({ theme }) => theme.colors.background_secondary};
  `}

  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderIcon = styled.View`
  justify-content: flex-start;
  align-items: center;

  margin-top: ${getStatusBarHeight() + 25}px;
  margin-right: 24px;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  margin-top: ${getStatusBarHeight() + 5}px;
  margin-left: 24px;
`;

export const HeaderText = styled.Text<OptionProps>`
  font-family: ${({ theme }) => theme.fonts.primary_200};
  color: ${({ theme }) => theme.colors.text};
  ${({ isNight }) => isNight && css`
    color: ${({ theme }) => theme.colors.text_nigth};
  `}
  font-size: ${RFValue(20)}px;

  margin-left: 15px;
`;

export const Content = styled.View`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 10px;
`;

export const Address = styled.Text<OptionProps>`
  font-family: ${({ theme }) => theme.fonts.primary_700};
  color: ${({ theme }) => theme.colors.text};
  ${({ isNight }) => isNight && css`
    color: ${({ theme }) => theme.colors.text_nigth};
  `}
  font-size: ${RFValue(23)}px;
  text-align: center;
`;

export const WeatherDescription = styled.Text<OptionProps>`
  font-family: ${({ theme }) => theme.fonts.primary_200};
  color: ${({ theme }) => theme.colors.text};
  ${({ isNight }) => isNight && css`
    color: ${({ theme }) => theme.colors.text_nigth};
  `}
  font-size: ${RFValue(16)}px;
  text-transform: capitalize;
  text-align: center;
`;

export const WeatherContent = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WeatherImage = styled(Image)`

`;

export const WeatherText = styled.Text<OptionProps>`
  font-family: ${({ theme }) => theme.fonts.primary_300};
  color: ${({ theme }) => theme.colors.text};
  ${({ isNight }) => isNight && css`
    color: ${({ theme }) => theme.colors.text_nigth};
  `}
  font-size: ${RFValue(60)}px;

  margin-top: -30px;
`;

export const DateDescription = styled.Text<OptionProps>`
  font-family: ${({ theme }) => theme.fonts.primary_200};
  color: ${({ theme }) => theme.colors.text};
  ${({ isNight }) => isNight && css`
    color: ${({ theme }) => theme.colors.text_nigth};
  `}
  font-size: ${RFValue(16)}px;

  text-transform: capitalize;
`;

export const WeatherFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 30px;
`;

export const Line = styled.View`
  align-self: center;
  width: 200px;

  border-bottom-width: .5px;
  border-bottom-color: ${({ theme }) => theme.colors.line};

  margin-bottom: 10px;
`;

export const Footer = styled.View`
  padding: 0 20px;

  margin-bottom: 50px;
`;

export const DetailsWeek = styled.View`
  justify-content: center;
  align-items: center; 
`;

export const MoreDetailsWeek = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TodayText = styled.Text<OptionProps>`
  font-family: ${({ theme }) => theme.fonts.primary_700};
  color: ${({ theme }) => theme.colors.text};
  ${({ isNight }) => isNight && css`
    color: ${({ theme }) => theme.colors.text_nigth};
  `}
  font-size: ${RFValue(20)}px;
`;

export const DetailsWeekText = styled.Text<OptionProps>`
  font-family: ${({ theme }) => theme.fonts.primary_200};
  color: ${({ theme }) => theme.colors.text};
  ${({ isNight }) => isNight && css`
    color: ${({ theme }) => theme.colors.text_nigth};
  `}
  font-size: ${RFValue(20)}px;
`;

export const MoreDetailsToday = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
