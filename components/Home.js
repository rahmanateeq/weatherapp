import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
  const pressHandler = () => {

    navigation.navigate('List');
  }
  const weatherHandler = () => {
    navigation.navigate('Weather');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, This is a weatherApp </Text>
      {/* <TouchableOpacity style={styles.button} onPress={pressHandler}>
        <Text style={styles.buttonText}>Press</Text>
      </TouchableOpacity> */}
      <TouchableOpacity style={styles.buttonweather} onPress={weatherHandler}>
        <Text style={{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#00796B', 
    }}>
        Goto Weather
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginVertical:"50%",

    backgroundColor: "gray",
    height: '100%',
    borderRadius: 0,
    minWidth: '80%',
    flex: 0.5,
 alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    marginVertical:4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 42,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  buttonweather: {
    marginVertical:4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 42,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#E0F7FA',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
