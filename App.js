import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Boilerplate App</Text>
      <Text style={styles.title}>Hello Arshad</Text>
      <Text style={styles.text}>
        This app components is design to be reused as snippets
      </Text>
      <Text>hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'sens-serif',
    marginBottom: 10,
  },
  text: {
    color: '#ffffff',
    fontSize: 15,
    marginTop: 50,
    marginLeft: 50,
    marginRight: 50,
  },
});
export default App;
