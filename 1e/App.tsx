import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState(null); // To hold the selected gender

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = () => {
    // Handle registration logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>REGISTER</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Icon
            name={showPassword ? 'eye-off' : 'eye'}
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Birthday"
        value={birthday}
        onChangeText={setBirthday}
      />

      <View style={styles.genderContainer}>
        <TouchableOpacity
          style={styles.radioButton}
          onPress={() => setGender('Male')}
        >
          <View style={styles.circle}>
            {gender === 'Male' && <View style={styles.checkedCircle} />}
          </View>
          <Text style={styles.radioText}>Male</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.radioButton}
          onPress={() => setGender('Female')}
        >
          <View style={styles.circle}>
            {gender === 'Female' && <View style={styles.checkedCircle} />}
          </View>
          <Text style={styles.radioText}>Female</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>REGISTER</Text>
      </TouchableOpacity>

      <Text style={styles.termsText}>
        When you agree to terms and conditions
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#e6f2e6', // Light green background
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#004d00', // Dark green title
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#d9e6d9', // Light green input background
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#d9e6d9',
  },
  genderText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#004d00',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  checkedCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#004d00', // Filled circle when selected
  },
  radioText: {
    fontSize: 16,
    color: '#004d00',
  },
  registerButton: {
    backgroundColor: '#cc5233', // Red button
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  termsText: {
    textAlign: 'center',
    marginTop: 10,
    color: '#666',
    fontSize: 12,
  },
});
