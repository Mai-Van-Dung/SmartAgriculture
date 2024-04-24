import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const auth = getAuth();


  const validateInput = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = true;
  
    if (!emailRegex.test(email)) {
      setEmailError('Vui lòng nhập địa chỉ email hợp lệ.');
      isValid = false;
    }
  
    if (password.length < 6) {
      setPasswordError('Mật khẩu phải có ít nhất 6 ký tự.');
      isValid = false;
    }
  
    return isValid;
  };
  

  const handleLogin = async () => {
    setEmailError('');
    setPasswordError('');
    if (!validateInput()) {
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Đăng nhập thành công, chuyển hướng người dùng
      navigation.navigate('Home');
    } catch (error) {
      console.log(error.code);
      let message = "asdasd"
      // Xử lý lỗi đăng nhập ở đây
      if (error.code === 'auth/invalid-credential'|| error.code === 'auth/wrong-password') {
        Alert.alert('Lỗi', 'Tài khoản không tồn tại.');
      }
      else {
        // Xử lý tất cả các lỗi khác
        Alert.alert('Lỗi', 'Đã xảy ra lỗi khi đăng nhập.');
      }
    }
  };
  



    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Welcome back! Glad to see you, Again!</Text>
        <TextInput 
        style={[styles.input, { marginVertical: 10 }]} 
        placeholder="TomHiddleston@gmail.com" 
        onChangeText={text => setEmail(text)}
        value={email}
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
      <TextInput 
        style={[styles.input, { marginVertical: 10 }]} 
        placeholder="********" 
        secureTextEntry 
        onChangeText={text => setPassword(text)}
        value={password}
      />
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={[styles.forgotPassword, { marginVertical: 10 }]}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { marginVertical: 10 }]} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  };


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
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
    title: {
      fontSize: 24,
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
      textAlign :'right' ,
      color :'#00ced1'
    },
    errorText: {
      color: 'red',
      marginBottom: 10,
    },
  });

  export default LoginScreen;
