import React from 'react';
import {
  Text,
  StyleSheet,
  View,
} from 'react-native';
import {Card} from 'native-base';
import {
  GRAY,
  WHITE,
  LIGHT_GREEN,
  TEXT_TITLE,
} from './colors';
import { ViewPropTypes } from 'deprecated-react-native-prop-types'

const ChatRoomRightItem = ({message, time}) => {
  return (
    <View style={styles.parentView}>
      <Card transparent style={styles.cardView}>
        <Text style={[styles.poppinsMedium, styles.userMessage]}>
          {message}
        </Text>
        <Text style={styles.userTime}>{time}</Text>
      </Card>
    </View>
  );
};
ChatRoomRightItem.propTypes = { ...ViewPropTypes };
export default ChatRoomRightItem;

const styles = StyleSheet.create({
  parentView: {
    marginRight: '2%',
    maxWidth: '70%',
    alignSelf: 'flex-end',
    // marginBottom: -3,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
  },
  userName: {
    fontSize: 16,
    marginTop: 3,
  },
  userMessage: {
    fontSize: 18,
    color: TEXT_TITLE,
    marginTop: 3,
    alignSelf: 'flex-start',
  },
  userTime: {
    fontSize: 14,
    color: GRAY,
    alignSelf: 'flex-end',
    textAlign: 'right',
  },
  msgIcon: {
    fontSize: 26,
    color: GRAY,
    marginTop: 3,
    alignSelf: 'flex-end',
    marginRight: -10,
  },
  textMsgCountView: {
    fontSize: 12,
    color: WHITE,
    backgroundColor: LIGHT_GREEN,
    justifyContent: 'center',
    alignSelf: 'flex-end',
    width: 24,
    height: 24,
    borderRadius: 24 / 2,
    marginTop: 10,
  },
  textMsgCount: {
    fontSize: 12,
    color: WHITE,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  cardView: {
    borderRadius: 10,
    backgroundColor: '#E1FFC7',
    paddingTop: 4,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 4,
    marginTop: 2,
    marginBottom: 2,
  },
  poppinsMedium: {
    fontFamily: 'Roboto',
    color: '#222222',
  }
});
