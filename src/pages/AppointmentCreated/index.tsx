import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Title,
  Description,
  OKButton,
  OKButtonText,
} from './styles';

const AppointmentCreated: React.FC = () => {
  const { reset } = useNavigation();

  const handleOkPressed = useCallback(() => {
    reset({
      routes: [{ name: 'Dashboard' }],
      index: 0,
    });
  }, [reset]);

  return (
    <Container>
      <Icon name="check" size={80} color="#04d361" />

      <Title>Agendamento Concluído</Title>
      <Description>Terça, dia 15 de setembro de 2020 às 16:00h</Description>

      <OKButton onPress={handleOkPressed}>
        <OKButtonText>Ok</OKButtonText>
      </OKButton>
    </Container>
  );
};

export default AppointmentCreated;
