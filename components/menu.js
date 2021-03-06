import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { Animated, Dimensions, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import MenuItem from './menu-item';

function mapStateToProps(state) {
  return { action: state.action };
}

function mapDispatchToProps(dispatch) {
  return {
    closeMenu: () => dispatch({ type: 'CLOSE_MENU' })
  };
}

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
const cardWidth = screenWidth > 500 ? 500 : screenWidth;
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

function Menu(props) {
  const toggleMenu = React.useCallback(() => {
    if (props.action === 'openMenu') {
      Animated.spring(top, {
        toValue: 54,
        useNativeDriver: false
      }).start();
    }

    if (props.action === 'closeMenu') {
      Animated.spring(top, {
        toValue: screenHeight,
        useNativeDriver: false
      }).start();
    }
  }, [props.action]);

  React.useEffect(() => {
    toggleMenu();
  }, [toggleMenu]);

  return (
    <AnimatedContainer style={{ top }}>
      <Cover>
        <Image source={require('../assets/background2.jpg')} />
        <Title>iamyuu</Title>
        <Subtitle>Software Engineer</Subtitle>
      </Cover>

      <CloseViewTouchable onPress={props.closeMenu}>
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
  width: ${cardWidth}px;
  height: 100%;
  align-self: center;
  z-index: 100;
  border-radius: 10px;
  overflow: hidden;
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
  padding: 50px;
`;

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
