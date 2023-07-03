import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, FlatList, Text, ScrollView, TextInput  } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Button, ButtonGroup } from '@rneui/themed';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dropdown } from 'react-native-element-dropdown';
import { LogBox } from "react-native"
import {  work, regisList } from './data';

LogBox.ignoreAllLogs(true)
function openJob(){
    const List = work.filter((dataitem) => dataitem.status == 'uncomplete').map(({title, point, status, lecturer, date, description, join, Quantity}) => ({title, point, status, lecturer, date, description, join, Quantity}));
  return(
    <View style={{ flex: 1}}>
        <View style={{borderColor: '#C1D8FF', borderWidth: 1, borderRadius: 30, backgroundColor: '#83B1FF', marginBottom: 30, marginTop: 20}}><Text style={styles.titleWork}>Danh Sách Công Việc Mở</Text></View>
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
                  regisList.push(item)
                  console.log(regisList)
                }}
              >Đăng ký</Button>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
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
        borderRadius: 10,
      },
      titleWork:{
        fontSize: 28,
        fontWeight: '600',
        color: '#F7FBFF',
        padding: 5,
        textAlign: 'center',
      },
  });

export default openJob;