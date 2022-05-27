import styled, { css } from 'styled-components/native';

interface OptionProps {
  isNight: boolean;
}

export const Container = styled.View<OptionProps>`
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background_primary};
  ${({ isNight }) => isNight && css`
    background-color: ${({ theme }) => theme.colors.background_secondary};
  `}

  padding: 10px 15px;
  margin-bottom: 8px;
`;