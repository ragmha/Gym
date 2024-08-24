import { StyleSheet, View } from 'react-native'

import Header from '@/components/Header'
import { StatusBar } from 'expo-status-bar'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Header>Home</Header>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
})
