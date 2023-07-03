import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Point from './work';
import Calender from './registrationList';
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
            <View style={styles.img}><Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://qldt.dntu.edu.vn/images/dntu-logo.png'
                }}
            /></View>
            <View style={styles.item}><Text style={styles.title}>Họ Và Tên:</Text><View style={styles.btninfor}><Text style={{fontSize: 18}}>{data.nameLecturer}</Text></View></View> 
            <View style={styles.item}><Text style={styles.title}>Email:</Text><View style={styles.btninfor}><Text style={{fontSize: 18}}>{data.email}</Text></View></View> 
            <View style={styles.item}><Text style={styles.title}>Địa Chỉ:</Text><View style={styles.btninfor}><Text style={{fontSize: 18}}>{data.location}</Text></View></View>
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
            name="Danh Sách ĐK" 
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
    title: {
      flex: 1,
      fontSize: 20,
      color: 'blue'
    },
    tinyLogo: {
      width: 100,
      height: 100,
    },btninfor: {
      flex: 1,
      flexDirection:'row',
      justifyContent: 'flex-end'
    },
    img:{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 30
    },
    item: {
      flex: 1,
      flexDirection: 'row',
      marginVertical: 8,
      marginHorizontal: 16,
    },
  });