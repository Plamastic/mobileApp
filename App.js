import { StyleSheet, Text, View, ScrollView, TextInput, Image } from 'react-native';
import { Button } from '@rneui/themed';
import React, { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './page/user';
import { LogBox } from "react-native"
import Student from './page/student';
import { student, User } from './page/data';
import AsyncStorage from '@react-native-async-storage/async-storage';



LogBox.ignoreAllLogs(true)
const Stack = createNativeStackNavigator();
export const dataStudent = []
class App extends React.Component{

  render() {
    
    AsyncStorage.getItem('User', (err, e) => {
      console.log(JSON.parse(e)) 
    })
    function ForgotPassword({navigation}) {
      const [userName, setUserName]=useState('')
      const [email, setEmail]=useState('')
      const forgot = () => {
        if(userName == '' || email == ''){
          alert('Bạn chưa nhập tài khoản hoặc email')
        }else{
            navigation.navigate('Login')
            setUserName('')
            setEmail('')
        }
      }
        return(
          <ScrollView >
            <View style={styles.img}><Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://cdn.haitrieu.com/wp-content/uploads/2021/11/Logo-Doan-Thanh-NIen-Cong-San-Ho-Chi-Minh-1.png'
                }}
              /></View>
            <Text style={styles.text}>Quên mật khẩu</Text>
              <View style={styles.In}>
                <TextInput
                    style={styles.input}
                    placeholder="Tài khoản"
                    onChangeText={username => setUserName(username)}
                    value={userName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    secureTextEntry={true}
                    onChangeText={email => setEmail(email)}
                    value={email}
                />
              </View>
              <Button 
                  buttonStyle={{
                    backgroundColor: 'rgba(90, 154, 230, 1)',
                    borderColor: 'transparent',
                    borderRadius: 30,
                    marginBottom: 5,
                    marginHorizontal: '30%',
                  }}
                  size="md"
                  title="Quên mật khẩu"
                  color="#FFFFFF"
                  onPress={() => forgot()}
                />
              <Button buttonStyle={{
                  backgroundColor: 'rgba(90, 154, 230, 1)',
                  borderColor: 'transparent',
                  borderRadius: 30,
                  marginBottom: 5,
                  marginHorizontal: '30%',
                }}
                onPress={() => navigation.goBack()} title="Quay lại" />
          </ScrollView>
        )
    }
    function Login({ navigation }) {
      const [userName, setUserName]=useState('')
      const [passWord, setPassWord]=useState('')
      const check = () => {
        if(userName == '' || passWord == ''){
          alert('Vui lòng nhập tài khoản và mật khẩu')
        }else{
          if(User.map(e => e.userName).includes(userName) && User.map(e => e.passWord).includes(passWord) || student.map(e => e.idStudent).includes(userName) && student.map(e => e.Pass).includes(passWord)){
            if(User.map(e => e.userName).includes(userName)){
              navigation.navigate('Home', {item: User.find(e => e.userName == userName)})
              setUserName('')
              setPassWord('')
            }else{
              dataStudent.push(student.find(e => e.idStudent == userName))
              navigation.navigate('Student')
              setUserName('')
              setPassWord('')
            }
          }else{
            alert('Tài khoản hoặc mật khẩu không chính xác, vui lòng nhập lại')
          }
        }
      }
      return(
        <View style={{flex: 1,}}>
              <View style={styles.img}><Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://cdn.haitrieu.com/wp-content/uploads/2021/11/Logo-Doan-Thanh-NIen-Cong-San-Ho-Chi-Minh-1.png'
                }}
              /></View>
              <Text style={styles.text}>CỔNG ĐĂNG NHẬP DNTU</Text>
              <View style={styles.In}>
                <TextInput
                    style={styles.input}
                    placeholder="Tài khoản"
                    onChangeText={username => setUserName(username)}
                    value={userName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Mật khẩu"
                    secureTextEntry={true}
                    onChangeText={password => setPassWord(password)}
                    value={passWord}
                />
              </View>
              <View style={{flex: 1,  }}>
                <Button 
                    buttonStyle={{
                      backgroundColor: 'rgba(90, 154, 230, 1)',
                      borderColor: 'transparent',
                      borderRadius: 30,
                      marginBottom: 5,
                      marginHorizontal: '20%',
                    }}
                    size="md"
                    title="Đăng nhập"
                    onPress={() => check()}
                  />
                  <Button
                      buttonStyle={{
                        backgroundColor: 'rgba(90, 154, 230, 1)',
                        borderColor: 'transparent',
                        borderRadius: 30,
                        marginBottom: 5,
                        marginHorizontal: '20%',
                      }}
                      size="md"
                      title="Quên mật khẩu"
                      onPress={() => { 
                        navigation.navigate('ForgotPassword')
                      }}
                  />
              </View>
        </View>
      )
    }
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
          <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
          <Stack.Screen options={{headerShown: false}} name="Student" component={Student} />
          <Stack.Screen options={{headerShown: false}} name="ForgotPassword" component={ForgotPassword} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  In: {
    justifyContent: "center",
    margin: 30
  },
  text: {
    justifyContent:'center',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: "#007AFF",
    marginTop: 30
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    textAlign: 'center',
    marginTop: 5,
    secureTextEntry: true,
    color: '#044C8B',
    backgroundColor: "#ECECEC"
  },
    button: {
    marginLeft: 110,
    width: 200,
    padding: 16,
    elevation: 5,
    backgroundColor: "#156DD1",
    borderRadius: 30,
    paddingVertical: 5,
    paddingHorizontal:20
  },
  tinyLogo: {
    width: 90,
    height: 90,
  },
  img:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '35%',
    marginBottom: 50
  }

})
export default App;

