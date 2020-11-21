import React from 'react';
import styled from 'styled-components/native';

export default function ProjectScreen() {
  return (
    <Container>
      <Text>Project screen</Text>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;
