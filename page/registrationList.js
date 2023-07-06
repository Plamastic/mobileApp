import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, FlatList, Text, ScrollView, TextInput  } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Button, ButtonGroup } from '@rneui/themed';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dropdown } from 'react-native-element-dropdown';
import { LogBox } from "react-native"
import { student, Branch, regisList, work } from './data';

LogBox.ignoreAllLogs(true)
const RenderSeparator = () => {
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
const InforS = ({ route, navigation }) => {
  const data = regisList.filter(function(e){
    return e.workr == route.params.dataItem
  })

  return(
    <View style={{ flex: 1}}>
      <View style={{borderColor: '#C1D8FF', borderWidth: 1, borderRadius: 30, backgroundColor: '#83B1FF', marginBottom: 30, marginTop: 20}}><Text style={styles.titleWork}>{data[0].workr}</Text></View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.title}>{student[student.map(e => e.idStudent).indexOf(item.studentr, 0)].NameStudent}</Text>
            <View style={styles.btninfor}>
              <Button
                buttonStyle={{
                  backgroundColor: 'rgba(90, 154, 230, 1)',
                  borderColor: 'transparent',
                  borderRadius: 10,
                }}
                onPress={() => {
                  if(work[work.map(e => e.title).indexOf(item.workr, 0)].join.map(function(e){ return e.idStudent }).includes(item.studentr) ){
                    alert('Sinh viên đã có trong danh sách')
                  }else{
                    if(work[work.map(e => e.title).indexOf(item.workr, 0)].join.length == work[work.map(e => e.title).indexOf(item.workr, 0)].Quantity){
                      alert('Đã đủ số lượng sinh viên')
                    }else{
                      work[work.map(e => e.title).indexOf(item.workr, 0)].join.push(student[student.map(e => e.idStudent).indexOf(item.studentr, 0)])
                      regisList.splice(regisList.findIndex(function(e){
                        return e.studentr==item.studentr && e.workr==route.params.dataItem
                      }), 1)
                      navigation.navigate('ListcompleteS', {dataI: regisList})
                      alert('Đã thêm sinh viên vào danh sách công việc')
                    }
                  }
                }}
              >Phê duyệt</Button>
            </View>
            
          </View>
          
        )}
        keyExtractor={item => item.id}
      />
      <Button 
        buttonStyle={{
          backgroundColor: 'rgba(90, 154, 230, 1)',
          borderColor: 'transparent',
          borderRadius: 30,
          marginBottom: 10
        }}
        onPress={() => navigation.goBack()} 
        title="Quay lại" 
      />
    </View>
  )
}

export function ListcompleteS({ route, navigation }) {
  let workS = []
  if(regisList.length > 0){
    workS = regisList.map(e => e.workr).filter(function(e){
      return workS.includes(e) ? '' : workS.push(e)
    }) 
  }
  return(
    <View style={{ flex: 1}}>
      <FlatList
        data={workS}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
            <View style={styles.btninfor}>
              <Button
                buttonStyle={{
                  backgroundColor: 'rgba(90, 154, 230, 1)',
                  borderColor: 'transparent',
                  borderRadius: 10,
                }}
                size="sm"
                onPress={() => {
                  navigation.navigate('InforS',{dataItem: item})
                }}
              >Danh Sách</Button>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  )
}



const Stack = createNativeStackNavigator();
export default class Calender extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="ListcompleteS" component={ListcompleteS} />
        <Stack.Screen options={{headerShown: false}} name="InforS" component={InforS} />
      </Stack.Navigator>
    </SafeAreaView>
    )
  }
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