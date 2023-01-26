import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Card, CardItem, Icon, Thumbnail, Body, Right} from 'native-base';
//import PROFILE from '../../../assets/images/profile2.jpg';
import USER from '../assets/images/user.png';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';

const GREEN = '#065F55'
const WHITE = '#FFFFFF'

const ChatRoomHeaderView = () => {
  return (
    <View style={{elevation: 0}}>
      <CardItem style={styles.parentView}>
        <View style={{flexDirection: 'row'}}>
          <Icon
            name="arrow-left"
            type="MaterialCommunityIcons"
            style={styles.backIcon}
          />
          <Thumbnail
            source={USER}
            style={styles.profileIcon}
          />
          <Body
            style={{
              flexDirection: 'column',
              marginLeft: 10,
            }}>
            <Text
              numberOfLines={1}
              style={styles.userName}>
              ChatGPT
            </Text>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={[styles.poppinsLight, styles.userMessage]}>
              Online
            </Text>
          </Body>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Icon
              name="video"
              type="MaterialCommunityIcons"
              style={styles.menuIcons}
            />
            <Icon
              name="phone"
              type="MaterialCommunityIcons"
              style={styles.menuIcons}
            />
            <Icon
              name="dots-vertical"
              type="MaterialCommunityIcons"
              style={styles.menuIcons}
            />
          </View>
        </View>
      </CardItem>
    </View>
  );
};

ChatRoomHeaderView.propTypes = { ...ViewPropTypes };

export default ChatRoomHeaderView;

const styles = StyleSheet.create({ 
  parentView: {
    backgroundColor: GREEN,
    elevation: 0,
    padding: -500,
    paddingLeft: 5,
    paddingRight: 0,
  },
  poppinsLight: {
    fontFamily: 'Roboto',
    color: '#222222',
  },
  backIcon: {
    justifyContent: 'center',
    height: '100%',
    alignSelf: 'center',
    color: WHITE,
  },
  profileIcon: {
    marginLeft: 0,
    width: 45,
    height: 45,
    alignSelf: 'center',
  },
  userName: {
    fontSize: 18,
    color: WHITE,
    fontWeight: 'bold',
    paddingTop: 2,
    justifyContent: 'center',
  },
  centerUserName: {
    fontSize: 18,
    color: WHITE,
    fontWeight: 'bold',
    paddingTop: 12,
    justifyContent: 'center',
  },
  userMessage: {
    fontSize: 14,
    color: WHITE,
    marginTop: 3,
    alignSelf: 'flex-start',
  },
  menuIcons: {
    fontSize: 24,
    color: WHITE,
    marginLeft: 8,
    alignSelf: 'center',
  },
});
