import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import {
 Container
} from './styles';

interface Props extends RectButtonProps {
  color?: string;
}

export function UpdateInfosButton({color, onPress} : Props){
  const theme = useTheme();

  return(
    <Container onPress={onPress}>
      <Feather name="rotate-cw" size={25} color={color ? color : theme.colors.text} />
    </Container>
  );
}