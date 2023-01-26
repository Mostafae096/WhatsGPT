import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import {
  WHITE,
  TEXT_TITLE,
  GREEN,
  LIGHT_GRAY,
  MENU_GRAY
} from './colors';
import {Input, Icon, Item, Button} from 'native-base';
import { ViewPropTypes } from 'deprecated-react-native-prop-types'

const ChatTextInput = ({onSendMessage}) => {
  const [message, setMessage] = useState('');
  const [keyboardPadding, setKeyboardPadding] = useState(5);

  useEffect(() => {
    let listener1 = Keyboard.addListener('keyboardWillShow', onShowKeyboard);
    let listener2 = Keyboard.addListener('keyboardWillHide', onHideKeyboard);

    return () => {
      listener1.remove();
      listener2.remove();
    };
  }, []);

  function onShowKeyboard(e) {
    // alert('Keyboard Shown');
    console.log(e);
    setKeyboardPadding(
      (e.endCoordinates.height - e.startCoordinates.height) / 2,
    );
  }

  function onHideKeyboard(e) {
    // alert('Keyboard Hidden');
    setKeyboardPadding(0);
  }

  const getChatRoomInput = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        <Item rounded style={{backgroundColor: WHITE, flex: 1, marginLeft: 5 }}>
          <Input
            multiline
            style={styles.userMessage}
            placeholder="Type a message ..."
            placeholderTextColor={LIGHT_GRAY}
            value={message}
            onChangeText={text => {
            setMessage(text);
            }}
          />
        </Item>
        <Button
          icon
          rounded
          large
          style={styles.sendIconView}
          onPress={() => {
            onSendMessage(message);
            setMessage('');
          }}>
          <Icon
            name={'send'}
            type="MaterialCommunityIcons"
            style={styles.sendIcon}
          />
        </Button>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView style={{paddingBottom: keyboardPadding}}>
      <View style={styles.parentView}>
        { getChatRoomInput()}
      </View>
    </KeyboardAvoidingView>
  );
};
ChatTextInput.propTypes = { ...ViewPropTypes };

export default ChatTextInput;

const styles = StyleSheet.create({
  parentView: {
    alignSelf: 'baseline',
    width: '100%',
    maxHeight: 120,
    position: 'relative',
    bottom: 0,
    elevation: 0,
    padding: 5,
    marginTop: 5,
  },
  userName: {
    fontSize: 16,
    color: WHITE,
    fontWeight: 'bold',
  },
  sendIconView: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    backgroundColor: GREEN,
  },
  userMessage: {
    fontSize: 16,
    color: TEXT_TITLE,
    backgroundColor: WHITE,
    alignSelf: 'flex-start',
    marginLeft: 6,
    marginTop: Platform.OS === 'ios' ? 8 : 8,
    marginBottom: Platform.OS === 'ios' ? 8 : 0,
    textAlignVertical: 'center',
    marginRight:5,
  },
  menuIcons: {
    fontSize: 22,
    color: MENU_GRAY,
    alignSelf: 'center',
    justifyContent:'center'
  },
  menuStatusIcons: {
    fontSize: 25,
    color: WHITE,
    alignSelf: 'center',
    justifyContent:'center',
    marginRight: 5, 
    alignItems:'center'
  },
});
