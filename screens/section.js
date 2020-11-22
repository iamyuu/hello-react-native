import React from 'react';
import styled from 'styled-components/native';
import Icon from '@expo/vector-icons/Ionicons';
import { ScrollView, StatusBar, TouchableOpacity, Linking } from 'react-native';
import Markdown from 'react-native-showdown';
// import { WebView } from 'react-native-webview';

export default function SectionScreen({ navigation, route }) {
  // const webviewRef = React.useRef();
  const { item } = route.params;

  // const handleOpenUrl = e => {
  //   if (e.url !== 'about:blank') {
  //     webviewRef.current.stopLoading();

  //     Linking.openURL(e.url);
  //   }
  // };

  return (
    <ScrollView>
      <Container>
        <StatusBar hidden />

        <Cover>
          <Image source={item.image} />

          <Wrapper>
            <Logo source={item.logo} />
            <Subtitle>{item.subtitle}</Subtitle>
          </Wrapper>

          <Title>{item.title}</Title>
          <Caption>{item.caption}</Caption>
        </Cover>

        <CloseIconTouchable onPress={() => navigation.goBack()}>
          <CloseIcon>
            <Icon name='ios-close' size={36} color='#4775f2' />
          </CloseIcon>
        </CloseIconTouchable>

        <Content>
          <Markdown markdown={item.content} pureCSS={htmlStyles} scrollEnabled={false} scalesPageToFit={false} />
          {/* if you want render HTML use WebView */}
          {/* <WebView
          ref={webviewRef}
          source={{ html: htmlStyles + item.content }}
          scalesPageToFit={false}
          scrollEnabled={false}
          onNavigationStateChange={handleOpenUrl}
        /> */}
        </Content>
      </Container>
    </ScrollView>
  );
}

const htmlStyles = `
<style>
  * {
    font-family: -apple-system;
    margin: 0;
    padding: 0;
    font-size: 17px;
    font-weight: normal;
    color: #3c4560;
    line-height: 24px;
  }

  h2 {
    font-size: 20px;
    text-transform: uppercase;
    color: #b8bece;
    font-weight: 600;
    margin-top: 50px;
  }

  p {
    margin-top: 20px;
  }

  a {
    color: #4775f2;
    font-weight: 600;
    text-decoration: none;
  }

  strong {
    font-weight: 700;
  }

  img {
    width: 100%;
    margin-top: 20px;
    border-radius: 10px;
  }

  pre {
    padding: 20px;
    background: #212C4F;
    overflow: hidden;
    word-wrap: break-word;
    border-radius: 10px;
    margin-top: 20px;
  }

  code {
    color: white;
  }
</style>
`;

const Container = styled.View`
  height: 10000px;
  flex: 1;
`;

const CloseIconTouchable = styled(TouchableOpacity)`
  position: absolute;
  top: 20px;
  right: 20px;
`;

const CloseIcon = styled.View`
  width: 32px;
  height: 32px;
  background: white;
  border-radius: 22px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  justify-content: center;
  align-items: center;
`;

const Content = styled.View`
  height: 100%;
`;

const Cover = styled.View`
  height: 375px;
`;

const Wrapper = styled.View`
  flex-direction: row;
  position: absolute;
  top: 40px;
  left: 20px;
  align-items: center;
`;

const Logo = styled.Image`
  width: 24px;
  height: 24px;
`;

const Subtitle = styled.Text`
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.8);
  margin-left: 5px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: white;
  width: 170px;
  position: absolute;
  top: 78px;
  left: 20px;
`;

const Caption = styled.Text`
  font-size: 17px;
  color: white;
  width: 300px;
  position: absolute;
  bottom: 20px;
  left: 20px;
`;
