import React, { useEffect, useRef, useState} from 'react';
import {View, FlatList, SafeAreaView, ScrollView } from 'react-native';
//import _Divider from './_Divider';
import ChatRoomLeftItem from './ChatRoomLeftItem';
import ChatRoomRightItem from './ChatRoomRightItem';
import ChatTextInput from './ChatTextInput';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import OpenAIAPI from './OpenAIAPI';
import getTimeInFormat from './time';
import { genUniId } from './utilities/functions';


const ChatRoomView = () => {
  const flatList = useRef();
  const [refresh, setRefresh] = useState(false);
  const [message, setMessage] = useState([]);
  async function onSendMessage(text, sender) {
    if (text != '' && sender === 'owner') {
      setMessage(prevMessage => ([...prevMessage,{name: sender, text: text}]));
      const gptResponse = await OpenAIAPI(text);
      console.log("gptResponse: ", gptResponse);
      setMessage(prevMessage => ([...prevMessage,{name: 'gpt', text: gptResponse.ReturnedMessage, time: getTimeInFormat(gptResponse.time)}]))
      console.log("message: ", message)
      setRefresh(true)
    }
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, paddingTop: 4}}>
       <FlatList
          ref={flatList}
          extraData={refresh}
          inverted={false}
          style={{paddingTop: 0, paddingBottom: 0}}
          data={message}
          renderItem={({item}) => {
              if(item.name === 'owner') {
                return <ChatRoomRightItem
                key={ genUniId() }
                message= {item.text}
                time = {item.time}
                />
              } else if(item.name === 'gpt') {
                return <ChatRoomLeftItem
                key={ genUniId() }
                message= {item.text}
                time = {item.time}
                />
              }

          }}
          />
        <ChatTextInput onSendMessage={text => onSendMessage(text, sender = 'owner' ) } />
      </View>
    </SafeAreaView>
  );
};
ChatRoomView.propTypes = { ...ViewPropTypes };
export default ChatRoomView;
