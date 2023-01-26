import React, { useRef}from 'react';
import {View, FlatList, SafeAreaView} from 'react-native';
//import _Divider from './_Divider';
import ChatRoomLeftItem from './ChatRoomLeftItem';
import ChatRoomRightItem from './ChatRoomRightItem';
import ChatTextInput from './ChatTextInput';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import OpenAIAPI from './OpenAIAPI';


const ChatRoomView = () => {
  const flatList = useRef();
  const [refresh, setRefresh] = useState(false);
  const onSendMessage = text => {
    if (text != '') {
      OpenAIAPI(text)
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
          data={chatRoomList}
          renderItem={() => {
            let userType = 'owner';
            if (userType === 'owner') {
              return <ChatRoomRightItem />;
            } else {
              return <ChatRoomLeftItem  />;
            }
          }} 
          />
        <ChatRoomRightItem />
        <ChatRoomLeftItem  />
        <ChatTextInput onSendMessage={text => onSendMessage(text)} />
      </View>
    </SafeAreaView>
  );
};
ChatRoomView.propTypes = { ...ViewPropTypes };
export default ChatRoomView;
