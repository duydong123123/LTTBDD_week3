import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.hollowCircle}></View>
      <Text style={styles.title}>GROW YOUR BUSINESS</Text>
      <Text style={styles.subtitle}>
        We will help you to grow your business using online server
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00BFFF', // Sky blue background
  },
  hollowCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 5,  // Border thickness
    borderColor: 'black', // Border color
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#FFD700', // Gold color
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
