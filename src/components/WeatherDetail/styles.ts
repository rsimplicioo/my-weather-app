import styled, { css } from 'styled-components/native';
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

  padding: 24px;
  margin-bottom: 16px;
`;

export const Detail = styled.Text<OptionProps>`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
  ${({ isNight }) => isNight && css`
    color: ${({ theme }) => theme.colors.text_nigth};
  `}
  font-size: ${RFValue(14)}px;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_200};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(14)}px;
`;
