import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { NotificationIcon } from './components/icon';
import Logo from './components/logo';
import Card from './components/card';
import Course from './components/course';

const logos = [
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

const cards = [
  {
    title: 'React Native for Designers',
    image: require('./assets/background11.jpg'),
    subTitle: 'React Native',
    caption: '1 of 12 sections',
    logo: require('./assets/logo-react.png')
  },
  {
    title: 'Styled Components',
    image: require('./assets/background12.jpg'),
    subTitle: 'React Native',
    caption: '2 of 12 sections',
    logo: require('./assets/logo-react.png')
  },
  {
    title: 'Props and Icons',
    image: require('./assets/background13.jpg'),
    subTitle: 'React Native',
    caption: '3 of 12 sections',
    logo: require('./assets/logo-react.png')
  },
  {
    title: 'Static Data and Loop',
    image: require('./assets/background14.jpg'),
    subTitle: 'React Native',
    caption: '4 of 12 sections',
    logo: require('./assets/logo-react.png')
  }
];

const courses = [
  {
    title: 'Prototype in InVision Studio',
    subtitle: '10 sections',
    image: require('./assets/background13.jpg'),
    logo: require('./assets/logo-studio.png'),
    author: 'Meng To',
    avatar: require('./assets/avatar.jpg'),
    caption: 'Design and interactive prototype'
  },
  {
    title: 'React for Designers',
    subtitle: '12 sections',
    image: require('./assets/background11.jpg'),
    logo: require('./assets/logo-react.png'),
    author: 'Meng To',
    avatar: require('./assets/avatar.jpg'),
    caption: 'Learn to design and code a React site'
  },
  {
    title: 'Design and Code with Framer X',
    subtitle: '10 sections',
    image: require('./assets/background14.jpg'),
    logo: require('./assets/logo-framerx.png'),
    author: 'Meng To',
    avatar: require('./assets/avatar.jpg'),
    caption: 'Create powerful design and code components for your app'
  },
  {
    title: 'Design System in Figma',
    subtitle: '10 sections',
    image: require('./assets/background6.jpg'),
    logo: require('./assets/logo-figma.png'),
    author: 'Meng To',
    avatar: require('./assets/avatar.jpg'),
    caption: 'Complete guide to designing a site using a collaborative design tool'
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
            {logos.map((logo, index) => (
              <Logo key={index} {...logo} />
            ))}
          </ScrollView>

          <Subtitle>Continue Learning</Subtitle>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {cards.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </ScrollView>

          <Subtitle>Popular Courses</Subtitle>
          {courses.map((course, index) => (
            <Course key={index} {...course} />
          ))}
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
