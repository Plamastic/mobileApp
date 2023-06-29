import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './page/user';
import { LogBox } from "react-native"
import { User } from './page/data';

LogBox.ignoreAllLogs(true)
const Stack = createNativeStackNavigator();

class App extends React.Component{

  render() {
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
          <ScrollView>
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
              <View style={styles.button}>
                <Button 
                  title="Quên mật khẩu"
                  color="#FFFFFF"
                  onPress={() => forgot()}
                />
              </View>
              <Button onPress={() => navigation.goBack()} title="Quay lại" />
          </ScrollView>
        )
    }
    function Login({ navigation }) {
      const [userName, setUserName]=useState('')
      const [passWord, setPassWord]=useState('')
      const check = () => {
        if(userName == '' || passWord == ''){
          alert('Vui lòng nhập tài khoản và mật khẩu')
          console.log(User)
        }else{
          if(User.map(e => e.userName).includes(userName) && User.map(e => e.passWord).includes(passWord)){
            navigation.navigate('Home')
          }else{
            alert('Tài khoản hoặc mật khẩu không chính xác, vui lòng nhập lại')
          }
        }
      }
      return(
        <ScrollView>
              <Text style={styles.text}>Đăng Nhập</Text>
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
              <View style={styles.button}>
                <Button 
                  title="Đăng nhập"
                  color="#FFFFFF"
                  onPress={() => check()}
                />
              </View>
              <View >
                <Button
                    title="Quên mật khẩu"
                    onPress={() => { 
                      navigation.navigate('ForgotPassword')
                    }}
                />
              </View>
        </ScrollView>
      )
    }
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
          <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
          <Stack.Screen options={{headerShown: false}} name="ForgotPassword" component={ForgotPassword} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  In: {
  flex: 1,
  justifyContent: "center",
  margin: 20
  },
  text: {
  flex:1,
  justifyContent:'center',
  textAlign: 'center',
  marginTop: 200,
  fontSize: 35,
  fontWeight: 'bold',
  marginBottom:50,
  color: "#007AFF"
  },
  input: {
  height: 40,
  borderColor: 'gray',
  borderWidth: 1,
  borderRadius: 20,
  textAlign: 'center',
  marginTop: 5,
  secureTextEntry: true
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
  }
  })
export default App;