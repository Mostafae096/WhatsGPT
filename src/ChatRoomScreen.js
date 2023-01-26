import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import ChatRoomHeaderView from './ChatRoomHeaderView';
import ChatRoomView from './ChatRoomView';
import WALLPAPER1 from '../assets/images/wallpaper7.jpg';


const ChatRoomScreen = () => {
 
  return (
    // <SafeAreaView style={DEFAULT_STYLES.container}>
    <View>
      {Platform.OS === 'ios' && (
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          enabled>
          <ImageBackground
            source={WALLPAPER1}
            resizeMode="stretch"
            style={{width: '100%', height: '100%'}}>
            <ChatRoomHeaderView/>
            <ChatRoomView/>
          </ImageBackground>
        </KeyboardAvoidingView>
      )}
      {Platform.OS === 'android' && (
        <ImageBackground
          source={WALLPAPER1}
          resizeMode="stretch"
          style={{width: '100%', height: '100%'}}>
          <ChatRoomHeaderView/>
          <ChatRoomView/>
        </ImageBackground>
      )}
    </View>
    // </SafeAreaView>
  );
};

export default ChatRoomScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0ef',
    // backgroundColor:"#efefef"
  }
});
