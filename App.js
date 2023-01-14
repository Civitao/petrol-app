import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Table } from './src/components/Table/Table';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor='black' />
      <Table />
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
