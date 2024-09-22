import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Screen01 from './screen/Screen01';
import Screen03 from './screen/Screen03';
import Screen04 from './screen/Screen04';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Screen03 />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
