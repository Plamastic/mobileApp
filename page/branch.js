import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

class App extends React.Component{

  render() {
    
    function Login({ navigation }) {
      
      return(
        <ScrollView>
              <Text style={styles.text}>Đăng Nhập</Text>
              
        </ScrollView>
      )
    }
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
          <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
          <Stack.Screen options={{headerShown: false}} name="forgotPassword" component={forgotPassword} />
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