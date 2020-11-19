import React from 'react';
import styled from 'styled-components/native';
import { Animated, Dimensions, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import MenuItem from './menu-item';

const { height: screenHeight } = Dimensions.get('window');
const top = new Animated.Value(screenHeight);
const items = [
  {
    icon: 'ios-settings',
    title: 'Account',
    text: 'settings'
  },
  {
    icon: 'ios-card',
    title: 'Billing',
    text: 'payments'
  },
  {
    icon: 'ios-compass',
    title: 'Learn React',
    text: 'start course'
  },
  {
    icon: 'ios-exit',
    title: 'Log out',
    text: 'see you soon!'
  }
];

export default function Menu() {
  React.useEffect(() => {
    const springAnimated = Animated.spring(top, {
      toValue: 0,
      useNativeDriver: false
    });
    springAnimated.start();

    return () => {
      springAnimated.stop();
    };
  }, []);

  const toggleMenu = () => {
    Animated.spring(top, {
      toValue: screenHeight,
      useNativeDriver: false
    }).start();
  };

  return (
    <AnimatedContainer style={{ top }}>
      <Cover>
        <Image source={require('../assets/background2.jpg')} />
        <Title>iamyuu</Title>
        <Subtitle>Software Engineer</Subtitle>
      </Cover>

      <CloseViewTouchable onPress={toggleMenu}>
        <CloseView>
          <Icon name='ios-close' size={44} color='#546bfb' />
        </CloseView>
      </CloseViewTouchable>

      <Content>
        {items.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </Content>
    </AnimatedContainer>
  );
}

const Container = styled.View`
  position: absolute;
  background: white;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const CloseViewTouchable = styled(TouchableOpacity)`
  position: absolute;
  top: 120px;
  left: 50%;
  margin-left: -22px;
  z-index: 1;
`;

const CloseView = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: white;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;

const Cover = styled.View`
  height: 142px;
  background-color: black;
  justify-content: center;
  align-items: center;
`;

const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Title = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: 600;
`;

const Subtitle = styled.Text`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 8px;
`;

const Content = styled.View`
  height: ${screenHeight}px;
  background: #f0f3f5;
`;
