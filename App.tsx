import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
const New = (props) => {
  return (
    <View>
      <Text style={styles.title}>{props.title}{props.text}</Text>
    </View>
  );
}
const App = () => {
  return (
    <View style={styles.container}>
      <New title="Foo" />
      <New text="Bar" />
    </View>
  );
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    color:"white",
  },
});