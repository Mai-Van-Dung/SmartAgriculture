import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const auth = getAuth();
  
  const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      // Gửi email đặt lại mật khẩu thành công, chuyển hướng người dùng
      navigation.navigate('Login');
    } catch (error) {
      // Xử lý lỗi đặt lại mật khẩu ở đây
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>{"<"}</Text>
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.title}>Forgot Password?</Text>
        <Text style={styles.subtitle}>Don't worry! It occurs. Please enter the email address linked with your account.</Text>
        <TextInput 
          style={[styles.input, { marginVertical: 10 }]} 
          placeholder="TomHiddleston@gmail.com" 
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <TouchableOpacity style={[styles.button, { marginVertical: 10 }]} onPress={handleResetPassword}>
          <Text style={styles.buttonText}>Send Code</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={[styles.forgotPassword, { marginVertical: 10 }]}>Remember Password? Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
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
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    textAlign:'center'
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 30,
    textAlign:'center'
  },
  input:{
    height :40 ,
    borderColor:'gray',
    borderWidth :1 ,
    paddingLeft :10 ,
    marginBottom :20
  },
  button:{
    backgroundColor:'#87ceeb',
    padding :10 ,
    alignItems :'center' ,
    borderRadius :5
  },
  buttonText:{
    color :'#fff' ,
    fontSize :18
  },
  forgotPassword:{
    marginTop :15 ,
    marginVertical: 20,
    textAlign :'center' ,
    color :'#00ced1'
  },
  footer: {
    marginBottom: 50,
  }
});

export default ForgotPasswordScreen;
