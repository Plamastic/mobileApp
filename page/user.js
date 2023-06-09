import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@rneui/themed';
import Point from './work';
import Calender from './registrationList';
import Search from './list'; 
import { LogBox } from "react-native"
LogBox.ignoreAllLogs(true)

  const Tab = createBottomTabNavigator();
  export default function HomeScreen({route}) {
    data = route.params.item
    
    function infor({navigation}) {
      return (
        <View style={{flex: 1}} >
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
          <Button 
              titleStyle={{ fontWeight: '600' }}
              buttonStyle={{
                backgroundColor: 'rgba(90, 154, 230, 1)',
                borderColor: 'transparent',
                borderRadius: 30,
              }}
              containerStyle={{
                marginHorizontal: 90,
                marginVertical: 10,
              }}
              onPress={() => {
                navigation.goBack()
              }} 
            >Đăng Xuất</Button>
        </View>
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
      fontSize: 20,
      color: 'blue'
    },
    tinyLogo: {
      width: 100,
      height: 100,
    },
    btninfor: {
      flex: 1,
      flexDirection:'row',
      justifyContent: 'flex-end'
    },
    img:{
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 30
    },
    item: {
      flexDirection: 'row',
      marginVertical: 8,
      marginHorizontal: 16,
    },
  });