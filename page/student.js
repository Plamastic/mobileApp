import * as React from 'react';
import { StyleSheet, View, FlatList, Text, ScrollView  } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from '@rneui/themed';
import { LogBox } from "react-native"
import { Branch, work, regisList } from './data';
import { useState } from 'react';

LogBox.ignoreAllLogs(true)


  const Tab = createBottomTabNavigator();
  export default function Student({route}) {
    datasv = route.params.item
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
    function openJob(){
        const List = work.filter((dataitem) => dataitem.status == 'uncomplete').map(({title, point, status, lecturer, date, description, join, Quantity}) => ({title, point, status, lecturer, date, description, join, Quantity}));
        const [btn, setBtn] = useState('Đăng Ký')
        // const studentN = [
        //     {
        //         title: '',
        //         btn: btn
        //     }
        // ]
        const status = (dataWork) => {
            console.log(dataWork)
            
            if(dataWork == undefined) {
                return btn
            }else{
                setBtn('Đã Đăng Ký')
                return btn
            }
        }
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
                            if(regisList.map(e => e.workr).includes(item.title) && regisList.map(e => e.studentr).includes(datasv.idStudent)){
                                alert('Đã Đăng Ký')
                            }else{
                                regisList.push({workr: item.title, studentr: datasv.idStudent })
                                status(item.title)
                                alert('Đăng ký thành công')

                            }
                            
                        }}
                    >{status()}</Button>
                    </View>
                </View>
                )}
                keyExtractor={item => item.id}
            />
            </View>
        )
    }  
    function infor() {
      return (
        <ScrollView style={{ flex: 1, margin: 10}}>
          <View style={{borderColor: '#C1D8FF', borderWidth: 1, borderRadius: 30, backgroundColor: '#83B1FF', marginBottom: 30, marginTop: 20}}><Text style={styles.titleWork}>{datasv.NameStudent}</Text></View>
          <View style={styles.item}><Text style={styles.title}>Mã số sinh viên:</Text><View style={styles.btninfor}><Text style={{fontSize: 18}}>{datasv.idStudent}</Text></View></View> 
          <RenderSeparator></RenderSeparator>
          <View style={styles.item}><Text style={styles.title}>Lớp:</Text><View style={styles.btninfor}><Text style={{fontSize: 18}}>{datasv.NameClass}</Text></View></View> 
          <RenderSeparator></RenderSeparator>
          <View style={styles.item}><Text style={styles.title}>Chuyên ngành:</Text><View style={styles.btninfor}><Text style={{fontSize: 18}}>{Branch.find(e => e.idBranch == datasv.idBranch).NameBranch}</Text></View></View> 
          <RenderSeparator></RenderSeparator>
          <View style={styles.item}><Text style={styles.title}>Điểm CTXH:</Text><View style={styles.btninfor}><Text style={{fontSize: 18}}>{datasv.point}</Text></View></View> 
          <RenderSeparator></RenderSeparator>
          <View style={styles.item}><Text style={styles.title}>Công việc:</Text>
              <FlatList
                data={datasv.Work}
                renderItem={({item}) => (
                  <View style={styles.btninfor}>
                    <Button
                      buttonStyle={{
                        backgroundColor: '#128E23',
                        borderColor: 'transparent',
                        borderRadius: 10,
                        margin: 2
                      }}
                      size="sm"
                    >{item}</Button>
                  </View>
                )}
                keyExtractor={item => item.id}
              />
            
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
            name="Đăng ký công việc" 
            component={openJob} 
          />
        </Tab.Navigator>
    );
  }

  const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 8,
        marginHorizontal: 16,
        marginTop: 20
      },
    title: {
        fontSize: 20,
        fontWeight: '600'
      },
    btninfor: {
        flex: 1,
        flexDirection:'row',
        justifyContent: 'flex-end'
      },
    titleWork:{
        fontSize: 28,
        fontWeight: '600',
        color: '#F7FBFF',
        padding: 10,
        textAlign: 'center',
      },
  });