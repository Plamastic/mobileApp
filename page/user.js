import * as React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
          <ImageBackground resizeMode="cover" style={{flex: 1 }} source={{uri: 'https://i.pinimg.com/564x/87/7e/53/877e538625fcc12c0def1c0b0ed725ae.jpg'}}>
            <View style={{flex: 1, alignItems: 'center', marginTop: 100}}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://www.psdgraphics.com/file/user-icon.jpg'
                }}
              />
              <View style={styles.item}><Text style={styles.title}>Mã số sinh viên:   </Text><Text style={{fontSize: 18, color: 'white'}}>{data.nameLecturer}</Text></View>
              <View style={styles.item}><Text style={styles.title}>Email:   </Text><Text style={{fontSize: 18, color: 'white' }}>{data.email}</Text></View>
              <View style={styles.item}><Text style={styles.title}>Địa Chỉ:   </Text><Text style={{fontSize: 18, color: 'white' }}>{data.location}</Text></View>
              <View style={styles.item}><Text style={styles.title}>SDT:   </Text><Text style={{fontSize: 18, color: 'white' }}>{data.sdt}</Text></View>
              <View style={styles.btninfor}>
                <Button 
                  titleStyle={{ fontWeight: '600' }}
                  buttonStyle={{
                    backgroundColor: 'rgba(90, 154, 230, 1)',
                    borderColor: 'transparent',
                    borderRadius: 30,
                    marginBottom: 10
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
            </View>
          </ImageBackground>
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
            options={{headerShown: false}}
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
    imgUser: {
      width: 200,
      height: 200,
      borderRadius: 100,
      margin: 15
    },
    title: {
      fontSize: 20,
      color: 'white',
      fontWeight: '700',
    },
    tinyLogo: {
      width: 180,
      height: 180,
      borderRadius: 100,
      margin: 20
    },
    item: {
      flexDirection: 'row',
      marginVertical: 8,
      marginHorizontal: 16,
    },
    btninfor: {
      flex: 1,
      justifyContent: 'flex-end',
    },
  });