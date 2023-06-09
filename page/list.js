import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, FlatList, Text, ScrollView, TextInput  } from 'react-native';
import { Button } from '@rneui/themed';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Listcomplete({ route, navigation }) {
    return (
    <View style={{ flex: 1}}>
      
      <FlatList
        data={List}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.btninfor}>
              <Button
                size="sm"
                onPress={() => {
                  navigation.navigate('inforWorkCom',{dataItem: item})
                }}
              >Chi Tiết</Button>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const inforWorkCom = ({route, navigation}) => {
  const data = route.params.dataItem
  return(
    <ScrollView style={{ flex: 1}}>
      <Text style={styles.titleWork}>{data.title}</Text>
      <Text style={styles.inforWork}><Text style={{color: '#013ECB'}}>Trạng thái:</Text> {data.status}</Text>
      <Text style={styles.inforWork}><Text style={{color: '#013ECB'}}>Giảng viên phụ trách:</Text> {data.lecturer}</Text>
      <Text style={styles.inforWork}><Text style={{color: '#013ECB'}}>Thời gian diễn ra:</Text> {data.date}</Text>
      <Text style={styles.inforWork}><Text style={{color: '#013ECB'}}>Mô tả: </Text >{data.description}</Text>
      <Text style={styles.inforWork}><Text style={{color: '#013ECB'}}>Danh sách sinh viên tham gia: </Text ></Text>
      <Button onPress={() => navigation.goBack()} title="Quay lại" />
    </ScrollView>
  )
}
const Stack = createNativeStackNavigator();
export default function complete() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Listcomplete" component={Listcomplete} />
        <Stack.Screen options={{headerShown: false}} name="inforWorkCom" component={inforWorkCom} />
      </Stack.Navigator>
    </SafeAreaView>
  )
}
 


const styles = StyleSheet.create({
  
});