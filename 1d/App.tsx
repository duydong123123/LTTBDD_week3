import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // For eye and social media icons

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLoginPress = () => {
    if (!email || !password) {
      Alert.alert('Please enter both email and password');
      return;
    }
    // Add login logic here (e.g., API call)
    Alert.alert('Login successful!');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputPassword}
          placeholder="Password"
          placeholderTextColor="#888"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={!showPassword}
          autoCapitalize="none"
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Icon name={showPassword ? 'eye-slash' : 'eye'} size={20} color="#888" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>

      <Text style={styles.termsText}>When you agree to terms and conditions</Text>

      <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>For got your password?</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or login with</Text>

      {/* Updated Social Media Container */}
      <View style={styles.socialContainer}>
        <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
          <Icon name="facebook" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, styles.customButton]}>
          <Text style={styles.customButtonText}>Z</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
          <Icon name="google" size={20} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7E9',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#f0f4f7',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  passwordContainer: {
    width: '100%',
    height: 50,
    backgroundColor: '#f0f4f7',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputPassword: {
    flex: 1,
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#D9534F',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  loginButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  termsText: {
    fontSize: 12,
    color: '#555',
    marginBottom: 10,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#007BFF',
    marginBottom: 20,
  },
  orText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
  },
  // Updated Style for Social Media Buttons Container
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
  },
  socialButton: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  facebookButton: {
    backgroundColor: '#3b5998',
  },
  customButton: {
    backgroundColor: '#FFC107',
    marginHorizontal: 5,
  },
  customButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  googleButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default LoginScreen;
