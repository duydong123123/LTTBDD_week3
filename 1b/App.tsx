import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');

  const handleNextPress = () => {
    if (!email) {
      Alert.alert('Please enter an email address');
      return;
    }
    // Add logic to handle the password reset process (e.g., API call)
    Alert.alert('Password reset link sent to your email');
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="lock" size={160} color="#000" /> {/* Lock icon */}
      </View>
      <Text style={styles.title}>FORGET PASSWORD</Text>
      <Text style={styles.instructions}>
        Provide your account's email for which you want to reset your password
      </Text>
      <View style={styles.inputContainer}>
        <Icon name="envelope" size={20} color="#888" style={styles.emailIcon} /> {/* Email icon */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleNextPress}>
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7FA',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  iconContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  instructions: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
  },
  emailIcon: {
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFC107',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default ForgotPasswordScreen;
