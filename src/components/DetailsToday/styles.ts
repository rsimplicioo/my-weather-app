import styled, { css } from 'styled-components/native';
import { Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface OptionProps {
  isNight: boolean;
}

export const Container = styled.View<OptionProps>`
  background-color: ${({ theme }) => theme.colors.background_primary};
  ${({ isNight }) => isNight && css`
    background-color: ${({ theme }) => theme.colors.background_secondary};
  `}

  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  margin-top: 16px;
  padding: 0 20px;
`;

export const Description = styled.Text<OptionProps>`
  font-family: ${({ theme }) => theme.fonts.primary_200};
  color: ${({ theme }) => theme.colors.text_detail};
  ${({ isNight }) => isNight && css`
    color: ${({ theme }) => theme.colors.text_nigth};
  `}
  font-size: ${RFValue(14)}px;
`;

export const WeatherImage = styled(Image)`
  width: 44px;
  height: 28px;
`;

export const Value = styled.Text<OptionProps>`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
  ${({ isNight }) => isNight && css`
    color: ${({ theme }) => theme.colors.text_nigth};
  `}
  font-size: ${RFValue(14)}px;
`;