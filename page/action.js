import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, FlatList, Text, ScrollView, TextInput  } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Button } from '@rneui/themed';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox } from "react-native"
import { student, work, Branch, regisList } from './data';
import { dataStudent } from '../App';

LogBox.ignoreAllLogs(true)



function Job({route, navigation}){

  if(route.params == undefined){}
  const List = work.filter((dataitem) => dataitem.status == 'uncomplete').map(({title, point, status, lecturer, date, description, join, Quantity,}) => ({title, point, status, lecturer, date, description, join, Quantity}));
  if(regisList.length == 0){
  }else{
    for(i=0; i< regisList.filter((e) => e.studentr == dataStudent[0].idStudent).length; i++){
      List.splice(List.map(e => e.title).indexOf(regisList.filter((e) => e.studentr == dataStudent[0].idStudent)[i].workr), 1)
    }
  }

  return(
      <View style={{ flex: 1}}>
        <FlatList
            data={List}
            renderItem={({item}) => (
            <View style={styles.item}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.btninfor}>
                <Button
                    buttonStyle={{
                      backgroundColor: 'rgba(90, 154, 230, 1)',
                      borderColor: 'transparent',
                      borderRadius: 10,
                    }}
                    size="sm"
                    onPress={() => {
                      console.log(item)
                      console.log(regisList)
                        if(regisList.filter((e) => e.studentr == dataStudent[0].idStudent).map(e => e.workr).includes(item.title)){
                            alert('Đã Đăng Ký')
                        }else{
                          if(work[work.map(e => e.title).indexOf(item.title,0)].join.map(function(e){ return e.idStudent }).includes(dataStudent[0].idStudent)){
                            alert('Bạn đã có trong danh sách')
                          }else{
                            if(work[work.map(e => e.title).indexOf(item.title,0)].join.length == work[work.map(e => e.title).indexOf(item.title,0)].Quantity){
                              alert('Đã đủ số lượng sinh viên')
                            }else{
                              alert('Đăng ký thành công')
                              navigation.navigate('subJob', { data: item })
                              regisList.push({workr: item.title, studentr: dataStudent[0].idStudent })
                              List.splice(List.map(function(e){ return e.title; }).indexOf(item.title, 0),1)
                              navigation.navigate('Job', { data: item })
                            }
                          } 
                        }  
                    }}
                >Đăng Ký</Button>
                </View>
            </View>
            )}
            keyExtractor={item => item.id}
        />
      </View>
  )
}  
function subJob({ route, navigation }){

  const data = route.params
  if(data == undefined){}
  const List = regisList.map(({workr, studentr}) => ({workr, studentr})).filter(e => e.studentr == dataStudent[0].idStudent);
  return(
      <View style={{ flex: 1}}>
        <FlatList
            data={List}
            renderItem={({item}) => (
            <View style={styles.item}>
                <Text style={styles.title}>{item.workr}</Text>
                <View style={styles.btninfor}>
                <Button
                    buttonStyle={{
                    backgroundColor: 'rgba(90, 154, 230, 1)',
                    borderColor: 'transparent',
                    borderRadius: 10,
                    }}
                    size="sm"
                    onPress={() => {
                      alert('Hủy Đăng ký thành công')
                      navigation.navigate('Job',{data: item})
                      regisList.splice(regisList.map(e => e.workr).indexOf(item.workr, 0), 1)
                      navigation.navigate('subJob',{data: item})
                    }}
                >Hủy Đăng Ký</Button>
                </View>
            </View>
            )}
            keyExtractor={item => item.id}
        />
      </View>
  )
}
const New = ({navigation}) => {
  return (
    <View
      style={{
        height: 1,
        width: '100%',
        backgroundColor: 'black',
      }}
    />
  );
};

function Incomplete() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Job" component={Job} />
      </Stack.Navigator>
    </SafeAreaView>
  )
}

function Complete() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="subJob" component={subJob} />
      </Stack.Navigator>
    </SafeAreaView>
  )
}

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();
export default function OpenJob() {
    return (
      <Tab.Navigator >
          <Tab.Screen name="Công Việc Mở" component={Incomplete} />
          <Tab.Screen name="Đã Đăng Ký" component={Complete} />
      </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginRight: 10
  },
  btninfor: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'flex-end',
    borderRadius: 10
  },
  titleWork:{
    fontSize: 28,
    fontWeight: '600',
    color: '#F7FBFF',
    padding: 10,
    textAlign: 'center',
  },
  inforWork: {
    fontSize: 20,
    padding: 10,
    marginRight: 10
  },
  In: {
    flex: 1,
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 5
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    textAlign: 'center',
    marginTop: 5,
    marginBottom:10,
    secureTextEntry: true
  },
  containersv: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdownsv: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  iconsv: {
    marginRight: 5,
  },
  labelsv: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStylesv: {
    fontSize: 16,
  },
  selectedTextStylesv: {
    fontSize: 16,
  },
  iconStylesv: {
    width: 20,
    height: 20,
  },
  inputSearchStylesv: {
    height: 40,
    fontSize: 16,
  },
  btninforsv: {
    flex: 1,
    padding: 5,
  },
  btninforsv: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'flex-end'
  },
  titlesv: {
    fontSize: 16,
    fontWeight: '600',
  },
  itemsv: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 8,
    marginHorizontal: 16,
  }
});