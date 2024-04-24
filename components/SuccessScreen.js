import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SuccessScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>{"<"}</Text>
      </TouchableOpacity>
      <Text style={styles.checkMark}>✓</Text>
      <Text style={styles.title}>Sign Up Success</Text>
      <Text style={styles.subtitle}>Your account has been successfully registered.</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 10,
  },
  backButtonText: {
    fontSize: 40,
    color: '#000',
  },
  checkMark: {
    fontSize: 100,
    color: 'green',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#000000',
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#87ceeb',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#f5fffa',    
    fontSize: 18,
  },
});

export default SuccessScreen;
