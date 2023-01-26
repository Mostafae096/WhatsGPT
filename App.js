import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChatRoomScreen from './src/ChatRoomScreen';

export default function App() {
  return (
    // style={styles.container} <StatusBar style="auto" />
    <View>
      <ChatRoomScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
