import React from 'react';
import styled from 'styled-components/native';

export default function CourseScreen() {
  return (
    <Container>
      <Text>Course screen</Text>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;
