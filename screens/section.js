import React from 'react';
import styled from 'styled-components/native';

export default function SectionScreen({ navigation }) {
  return (
    <Container>
      <Text>Section screen</Text>
      <Button title='Close' onPress={() => navigation.goBack()} />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;

const Button = styled.Button``;
