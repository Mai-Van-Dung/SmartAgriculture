import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState(''); // Thêm trạng thái cho username
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState(''); // Thêm trạng thái cho thông báo lỗi email
  const [passwordError, setPasswordError] = useState(''); // Thêm trạng thái cho thông báo lỗi mật khẩu

  const auth = getAuth();
  
  const handleSignUp = async () => {
    // Kiểm tra email và mật khẩu trước khi đăng ký
    if (email === '') {
      setEmailError('Email không được để trống');
    } else if (!email.includes('@') || !email.includes('.')) {
      setEmailError('Email không hợp lệ. Vui lòng nhập lại email.');
    } else {
      setEmailError('');
    }

    if (password === '') {
      setPasswordError('Mật khẩu không được để trống');
    } else if (password !== confirmPassword) {
      setPasswordError('Mật khẩu xác nhận không khớp với mật khẩu');
    } else {
      setPasswordError('');
    }

    if (emailError || passwordError) {
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigation.navigate('Success');
    } catch (error) {
      // Xử lý lỗi đăng ký ở đây
      if (error.code === 'auth/email-already-in-use') {
        setEmailError('Email đã được sử dụng');
      } else if (error.code === 'auth/invalid-email') {
        setEmailError('Email không hợp lệ');
      } else {
        Alert.alert('Lỗi', error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>{"<"}</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput 
        style={[styles.input, { marginVertical: 10 }]} 
        placeholder="Username" 
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput 
        style={[styles.input, { marginVertical: 10 }]} 
        placeholder="Email" 
        onChangeText={text => {
          setEmail(text);
          setEmailError(''); // Đặt lại thông báo lỗi khi người dùng thay đổi email
        }}
        value={email}
      />
      {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
      <TextInput 
        style={[styles.input, { marginVertical: 10 }]} 
        placeholder="Password" 
        secureTextEntry 
        onChangeText={text => {
          setPassword(text);
          setPasswordError(''); // Đặt lại thông báo lỗi khi người dùng thay đổi mật khẩu
        }}
        value={password}
      />
      <TextInput
        style={[styles.input, { marginVertical: 10 }]} 
        placeholder="Confirm Password" 
        secureTextEntry 
        onChangeText={text => setConfirmPassword(text)}
        value={confirmPassword}
      />
      {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={[styles.forgotPassword, { marginVertical: 10 }]}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { marginVertical: 10 }]} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
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
    borderRadius :30
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
  error: {
    color: 'red',
    marginBottom: 10,
  }
});

export default SignUpScreen;
