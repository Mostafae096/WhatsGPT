import React, { useRef, useState} from 'react';
import {View, FlatList, SafeAreaView} from 'react-native';
//import _Divider from './_Divider';
import ChatRoomLeftItem from './ChatRoomLeftItem';
import ChatRoomRightItem from './ChatRoomRightItem';
import ChatTextInput from './ChatTextInput';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import OpenAIAPI from './OpenAIAPI';
import getTimeInFormat from './time'


const ChatRoomView = () => {
  const flatList = useRef();
  const [refresh, setRefresh] = useState(false);
  const [message, setMessage] = useState('');
  function onSendMessage(text, sender) {
    if (text != '' && sender === 'owner') {
      setMessage(prevMessage => ([...prevMessage,{id: sender, text: text}]))
      gptResponse = OpenAIAPI().then(response => console.log(response))
      setMessage(prevMessage => ([...prevMessage,{id: 'gpt', text: gptResponse.text, time: getTimeInFormat(gptResponse.time)}]))
      console.log(message)
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, paddingTop: 4}}>
        <FlatList
          ref={flatList}
          extraData={refresh}
          inverted={true}
          style={{paddingTop: 0, paddingBottom: 0}}
          renderItem={() => {
          message.map((message) => { 
            if(message.id === 'owner') {
              return <ChatRoomRightItem 
              message= {message.text}
              time = {message.time}
              />
            } else {
              <ChatRoomLeftItem  
              message= {message.text}
              time = {message.time}
              />
            }
            }
          )
          }} 
          />
        <ChatTextInput onSendMessage={text => onSendMessage(text, sender = 'owner' ) } />
      </View>
    </SafeAreaView>
  );
};
ChatRoomView.propTypes = { ...ViewPropTypes };
export default ChatRoomView;
