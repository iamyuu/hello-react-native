import React from 'react';
import { Animated, PanResponder } from 'react-native';
import styled from 'styled-components/native';
import ProjectItem from '../components/project';

const springAnimated = (val, toVal, cb) =>
  Animated.spring(val, {
    toValue: toVal,
    useNativeDriver: false
  }).start(cb);

const timingAnimated = (val, toVal, cb) =>
  Animated.timing(val, {
    toValue: toVal,
    useNativeDriver: false
  }).start(cb);

function getNextIndex(currentIndex) {
  let nextIndex = currentIndex + 1;

  if (nextIndex > projects.length - 1) {
    nextIndex = 0;
  }

  return nextIndex;
}

export default function ProjectScreen() {
  const [index, setIndex] = React.useState(0);

  const pan = React.useRef(new Animated.ValueXY()).current;
  const scale = React.useRef(new Animated.Value(0.9)).current;
  const translateY = React.useRef(new Animated.Value(44)).current;
  const thirdScale = React.useRef(new Animated.Value(0.8)).current;
  const thirdTranslateY = React.useRef(new Animated.Value(-50)).current;

  const panResponder = React.useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        springAnimated(scale, 1);
        springAnimated(translateY, 0);
        springAnimated(thirdScale, 0.9);
        springAnimated(thirdTranslateY, 44);
      },
      onPanResponderRelease: () => {
        // FIXME: not working maybe `__getValue` deprecated
        // no idea to solve it, just leave it for now
        if (pan.y.__getValue() > 200) {
          timingAnimated(pan, { x: 0, y: 1000 }, () => {
            pan.setValue({ x: 0, y: 0 });
            scale.setValue(0.9);
            translateY.setValue(44);
            thirdScale.setValue(0.8);
            thirdTranslateY.setValue(-50);

            setIndex(getNextIndex);
          });
        } else {
          springAnimated(pan, { x: 0, y: 0 });
          springAnimated(scale, 0.9);
          springAnimated(translateY, 44);

          springAnimated(thirdScale, 0.8);
          springAnimated(thirdTranslateY, -50);
        }
      }
      // onPanResponderMove: Animated.event(
      //   [
      //     null,
      //     {
      //       dx: pan.x,
      //       dy: pan.y
      //     }
      //   ],
      //   {
      //     useNativeDriver: false
      //   }
      // )
    })
  ).current;

  return (
    <Container>
      <Animated.View
        style={{ transform: [{ translateX: pan.x }, { translateY: pan.y }] }}
        {...panResponder.panHandlers}
      >
        <ProjectItem
          title={projects[index].title}
          author={projects[index].author}
          image={projects[index].image}
          text={projects[index].text}
        />
      </Animated.View>
      <AnimatedView
        style={{
          transform: [{ scale }, { translateY }]
        }}
      >
        <ProjectItem
          title={projects[getNextIndex(index)].title}
          author={projects[getNextIndex(index)].author}
          image={projects[getNextIndex(index)].image}
          text={projects[getNextIndex(index)].text}
        />
      </AnimatedView>
      <AnimatedView
        style={{
          transform: [{ scale: thirdScale }, { translateY: thirdTranslateY }]
        }}
      >
        <ProjectItem
          title={projects[getNextIndex(index)].title}
          author={projects[getNextIndex(index)].author}
          image={projects[getNextIndex(index)].image}
          text={projects[getNextIndex(index)].text}
        />
      </AnimatedView>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #f0f3f5;
`;

const AnimatedView = styled(Animated.View)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const projects = [
  {
    title: 'Price Tag',
    image: require('../assets/background5.jpg'),
    author: 'Liu Yi',
    text:
      'Thanks to Design+Code, I improved my design skill and learned to do animations for my app Price Tag, a top news app in China.'
  },
  {
    title: 'The DM App - Ananoumous Chat',
    image: require('../assets/background6.jpg'),
    author: 'Chad Goodman',
    text:
      'Design+Code was the first resource I used when breaking into software. I went from knowing nothing about design or code to building a production ready app from scratch. '
  },
  {
    title: 'Nikhiljay',
    image: require('../assets/background7.jpg'),
    author: "Nikhil D'Souza",
    text:
      "Recently finished the React course by @Mengto, and I 10/10 would recommend. I already rewrote my personal website in @reactjs and I'm very excited with it."
  }
];
