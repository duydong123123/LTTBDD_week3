import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('Logging in with:', username, password);
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5sfGsgIQ0oZn9GkkN7hDb4nFXbM8GLgef_H1JZSuIdBOUWK1_' }} // replace with your logo link
        style={styles.logo}
      />

      {/* Username Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Please input user name"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Please input password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      {/* Register & Forgot Password */}
      <View style={styles.row}>
        <TouchableOpacity>
          <Text style={styles.linkText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.linkText}>Forgot Password</Text>
        </TouchableOpacity>
      </View>

      {/* Other Login Methods */}
      <Text style={styles.otherMethodsText}>Other Login Methods</Text>
      <View style={styles.socialLoginContainer}>
        <TouchableOpacity>
          <Image source={{ uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSmvqvNBT8Qh4id8gIDRsJ4odNTcXpDbat5m5ELUJNadYXCXa7P' }} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0y6iT94dYpXrItVrhbkcBfKEpMucRLc_dEA&s' }} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Facebook-icon-1.png/768px-Facebook-icon-1.png' }} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 40,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    width: '100%',
  },
  loginButton: {
    backgroundColor: '#4285F4',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  linkText: {
    color: '#000',
    fontSize: 14,
  },
  otherMethodsText: {
    fontSize: 14,
    marginBottom: 10,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  socialIcon: {
    width: 50,
    height: 50,
  },
});

export default LoginScreen;
