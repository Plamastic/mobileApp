import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Point from './work';
import Calender from './calender';
import Search from './list'; 
import { LogBox } from "react-native"
import { Ionicons } from '@expo/vector-icons';
LogBox.ignoreAllLogs(true)

  const Tab = createBottomTabNavigator();
  export default function HomeScreen({route}) {
    data = route.params.item
    function infor() {
      return (
        <ScrollView >
          <View style={styles.main}>
            <Text style={styles.inforWork}><Text style={{color: '#013ECB'}}>Họ Và Tên:</Text> {data.nameLecturer}</Text>
            <Text style={styles.inforWork}><Text style={{color: '#013ECB'}}>Email:</Text> {data.email}</Text>
            <Text style={styles.inforWork}><Text style={{color: '#013ECB'}}>Địa Chỉ:</Text> {data.location}</Text>
          </View>
        </ScrollView>
      );
    }
    
    return (
        <Tab.Navigator
          initialRouteName="Cá Nhân"
          screenOptions={{
            tabBarActiveTintColor: '#FF0000',
          }}
        >
          <Tab.Screen 
            name="Cá Nhân" 
            component={infor} 
            
          />
          <Tab.Screen 
            name="Sinh Viên" 
            component={Search} 
          />
          <Tab.Screen 
            name="Công việc" 
            component={Point} 
          />
          <Tab.Screen 
            name="Lịch trình" 
            component={Calender} 
          />
        </Tab.Navigator>
    );
  }

  const styles = StyleSheet.create({
    main:{
      flex: 1,
      marginTop: 50,
    },
    imgUser: {
      width: 200,
      height: 200,
      borderRadius: 100,
      margin: 15
    },
    inforWork: {
      flex: 1,
      fontSize: 20,
      padding: 10,
      marginRight: 10,
      
    },
  });