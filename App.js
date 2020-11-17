import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { NotificationIcon } from './components/icon';
import Logo from './components/logo';
import Card from './components/card';

const logoItems = [
  {
    image: require('./assets/logo-framerx.png'),
    text: 'Framer X'
  },
  {
    image: require('./assets/logo-figma.png'),
    text: 'Figma'
  },
  {
    image: require('./assets/logo-studio.png'),
    text: 'Studio'
  },
  {
    image: require('./assets/logo-react.png'),
    text: 'React'
  },
  {
    image: require('./assets/logo-swift.png'),
    text: 'Swift'
  },
  {
    image: require('./assets/logo-sketch.png'),
    text: 'Sketch'
  }
];

const cardItems = [
  {
    title: 'React Native for Designers',
    image: require('./assets/background11.jpg'),
    subtitle: 'React Native',
    caption: '1 of 12 sections',
    logo: require('./assets/logo-react.png')
  },
  {
    title: 'Styled Components',
    image: require('./assets/background12.jpg'),
    subtitle: 'React Native',
    caption: '2 of 12 sections',
    logo: require('./assets/logo-react.png')
  },
  {
    title: 'Props and Icons',
    image: require('./assets/background13.jpg'),
    subtitle: 'React Native',
    caption: '3 of 12 sections',
    logo: require('./assets/logo-react.png')
  },
  {
    title: 'Static Data and Loop',
    image: require('./assets/background14.jpg'),
    subtitle: 'React Native',
    caption: '4 of 12 sections',
    logo: require('./assets/logo-react.png')
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

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ flexDirection: 'row', padding: 20, paddingLeft: 12, paddingTop: 30 }}
          >
            {logoItems.map((logoItem, index) => (
              <Logo key={index} {...logoItem} />
            ))}
          </ScrollView>

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
  margin-top: 25px;
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
  margin-top: 20px;
  text-transform: uppercase;
`;
