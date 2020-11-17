import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import Card from './components/card';
import { NotificationIcon } from './components/icon';

const cardItems = [
  {
    title: 'Styled Components',
    caption: 'React Native',
    subTitle: '5 of 12 sections',
    logo: require('./assets/logo-react.png'),
    background: require('./assets/background2.jpg')
  },
  {
    title: 'Styled Components 2',
    caption: 'React Native',
    subTitle: '5 of 12 sections',
    logo: require('./assets/logo-react.png'),
    background: require('./assets/background1.jpg')
  }
];

export default function App() {
  return (
    <Container>
      <SafeAreaView>
        <ScrollView>
          <TitleBar>
            <Avatar source={require('./assets/avatar.jpg')} />
            <Title>Welcome back,</Title>
            <Name>iamyuu</Name>
            <NotificationIcon style={{ position: 'absolute', right: 20, top: 0 }} />
          </TitleBar>

          <Subtitle>Continue Learning</Subtitle>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {cardItems.map((cardItem, index) => (
              <Card key={index} {...cardItem} />
            ))}
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
}

const Container = styled.View`
  background: #f0f3f5;
  flex: 1;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 50px;
  text-transform: uppercase;
`;
