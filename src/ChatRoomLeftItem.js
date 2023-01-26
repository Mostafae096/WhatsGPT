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
  TEXT_TITLE,
} from './colors';
import { ViewPropTypes } from 'deprecated-react-native-prop-types'
/*
import moment from 'moment';

const getTimeInFormat = time => {
  if (time === '') {
    return '';
  }
  const newTime = moment(time).format('hh:mm A');
  return newTime;
};*/

const ChatRoomLeftItem = ({message, time}) => {
  return (
    <View style={styles.parentView}>
      {/* <Thumbnail style={styles.profileImage} source={PROFILE} /> */}
      <Card transparent style={styles.cardView}>
        <Text style={[styles.poppinsMedium, styles.userMessage]}>
        {message}
        </Text> 
        <Text style={styles.userTime}>{/*getTimeInFormat(item.chatTime)*/}02:25:20</Text>
      </Card>
    </View>
  );
};
ChatRoomLeftItem.propTypes = { ...ViewPropTypes };
export default ChatRoomLeftItem;

const styles = StyleSheet.create({
  parentView: {
    marginLeft: '2%',
    maxWidth: '70%',
    alignSelf: 'flex-start',
    flexDirection: 'row',
  },
  profileImage: {
    width: 40,
    height: 40,
    marginTop: '2%',
    marginRight: '2%',
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
  cardView: {
    backgroundColor: WHITE,
    borderRadius: 10,
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
