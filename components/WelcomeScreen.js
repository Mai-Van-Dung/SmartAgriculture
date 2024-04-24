import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { getAuth } from "firebase/auth";

const WelcomeScreen  = ({ navigation }) => {
  const auth = getAuth();
  // Sử dụng `auth` để tương tác với Firebase Authentication ở đây

  return (
    <ImageBackground source={require('./image/z5340772533959_08a6cb8c6ef858312af2179178f76c16.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.subtitle}>It's easier to login now</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Login with account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonOutline]} onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.buttonOutlineText}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    header: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginBottom: 5,
      paddingTop: 500,
    },  
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 18,
      color: '#000000',
      marginBottom: 50,

    },
    buttonsContainer: {
      height: 180,
      width: '100%',
      paddingBottom: 20,
      justifyContent: 'center',
      
    },
    button: {  
      backgroundColor: '#87ceeb',
      padding: 20,
      borderRadius: 30,
      marginTop: 20,
      alignItems: 'center',
    },
    buttonText: {
      color: '#f5fffa',    
      fontSize: 18,
    },
    buttonOutline: {
      backgroundColor: '#FFF',
      borderColor: '#000000',
      borderWidth: 1.5,
    },
    buttonOutlineText: {
      color: '#000000',
    },
  });

export default WelcomeScreen;
