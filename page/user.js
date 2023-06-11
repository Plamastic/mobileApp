import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Point from './point';
import Calender from './calender';
import Search from './list'; 
 

  const Tab = createBottomTabNavigator();


  function User() {
    return (
      <ScrollView >
        <View style={styles.main}>
          <Image 
          style={styles.imgUser}
          source={{uri: './image/IMG_0828.JPG'}} />
          <View style={styles.inforUser}>
            <Text >
              Name
            </Text>
            <Text >
              Lớp: 17DTH3
            </Text>
            <Text>
              MSSV: 131700694
            </Text>
          </View>
          
        </View>
      </ScrollView>
    );
  }
  export default function HomeScreen() {
    return (
        <Tab.Navigator>
          <Tab.Screen name="Cá nhân" component={User} />
          <Tab.Screen name="Sinh Viên" component={Search} />
          <Tab.Screen name="Công việc" component={Point} />
          <Tab.Screen name="Lịch trình" component={Calender} />
        </Tab.Navigator>
    );
  }

  const styles = StyleSheet.create({
    main:{
      flex: 1,
      flexDirection: 'row'
    },
    imgUser: {
      width: 160,
      height: 160,
      borderRadius: 100,
      margin: 15
    },
    inforUser:{
      flex: 1,
      alignItems:'center',
      justifyContent: 'center'
    }
  });