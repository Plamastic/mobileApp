import * as React from 'react';
import { SafeAreaView, StyleSheet, View, FlatList, Text, ScrollView  } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@rneui/themed';
import { LogBox } from "react-native"
import { Branch, work } from './data';
import OpenJob from './action';
import { dataStudent } from '../App';

  LogBox.ignoreAllLogs(true)
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
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
function inforworks({route, navigation}){
  return(
    <ScrollView style={{ flex: 1}}>
      <View style={{borderColor: '#C1D8FF', borderWidth: 1, borderRadius: 30, backgroundColor: '#83B1FF', marginBottom: 60, marginTop: 30}}><Text style={styles.titleWork}>{route.params.dataItem}</Text></View>
      <View style={styles.item}><Text style={styles.title}>Điểm CTXH:</Text><View style={styles.btninfor}><Text style={{fontSize: 18}}>{work[work.map(e => e.title).indexOf(route.params.dataItem,0)].point}</Text></View></View> 
      <RenderSeparator></RenderSeparator>
      <View style={styles.item}><Text style={styles.title}>Giảng viên phụ trách:</Text><View style={styles.btninfor}><Text style={{fontSize: 18}}>{work[work.map(e => e.title).indexOf(route.params.dataItem,0)].lecturer}</Text></View></View> 
      <RenderSeparator></RenderSeparator>
      <View style={styles.item}><Text style={styles.title}>Thời gian diễn ra:</Text><View style={styles.btninfor}><Text style={{fontSize: 18}}>{work[work.map(e => e.title).indexOf(route.params.dataItem,0)].date}</Text></View></View> 
      <RenderSeparator></RenderSeparator>
      <View style={styles.item}><Text style={styles.title}>Mô tả:</Text><View style={styles.btninfor}><Text style={{fontSize: 18}}>{work[work.map(e => e.title).indexOf(route.params.dataItem,0)].description}</Text></View></View> 
      <Button 
        buttonStyle={{
          backgroundColor: 'rgba(90, 154, 230, 1)',
          borderColor: 'transparent',
          borderRadius: 30,
        }}
        onPress={() => navigation.goBack()} 
        title="Quay lại" 
      />
    </ScrollView>
  )
}
function infor({navigation}) {
  return (
    <ScrollView style={{ flex: 1, margin: 10}}>
      <View style={{borderColor: '#C1D8FF', borderWidth: 1, borderRadius: 30, backgroundColor: '#83B1FF', marginBottom: 30, marginTop: 20}}><Text style={styles.titleWork}>{dataStudent[0].NameStudent}</Text></View>
      <View style={styles.item}><Text style={styles.title}>Mã số sinh viên:</Text><View style={styles.btninfor}><Text style={{fontSize: 18}}>{dataStudent[0].idStudent}</Text></View></View> 
      <RenderSeparator></RenderSeparator>
      <View style={styles.item}><Text style={styles.title}>Lớp:</Text><View style={styles.btninfor}><Text style={{fontSize: 18}}>{dataStudent[0].NameClass}</Text></View></View> 
      <RenderSeparator></RenderSeparator>
      <View style={styles.item}><Text style={styles.title}>Chuyên ngành:</Text><View style={styles.btninfor}><Text style={{fontSize: 18}}>{Branch.find(e => e.idBranch == dataStudent[0].idBranch).NameBranch}</Text></View></View> 
      <RenderSeparator></RenderSeparator>
      <View style={styles.item}><Text style={styles.title}>Điểm CTXH:</Text><View style={styles.btninfor}><Text style={{fontSize: 18}}>{dataStudent[0].point}</Text></View></View> 
      <RenderSeparator></RenderSeparator>
      <View style={styles.item}><Text style={styles.title}>Công việc:</Text>
          <FlatList
            data={dataStudent[0].Work}
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
                  onPress={() => {
                    navigation.navigate('inforworks',{dataItem: item })
                  }}
                >{item}</Button>
              </View>
            )}
            keyExtractor={item => item.id}
          />
      </View>
      <Button 
        style={{marginTop: 50}}
        onPress={() => {
          dataStudent.length = 0
          navigation.goBack()
        }} 
      >Đăng Xuất</Button>
    </ScrollView>
  );
}
function inforActive({route, navigation}){
  return(
    <ScrollView style={{ flex: 1}}>
      <View style={{borderColor: '#C1D8FF', borderWidth: 1, borderRadius: 30, backgroundColor: '#83B1FF', marginBottom: 60, marginTop: 30}}><Text style={styles.titleWork}>{route.params.dataItem}</Text></View>
      <View style={styles.item}><Text style={styles.title}>Điểm CTXH:</Text><View style={styles.btninfor}><Text style={{fontSize: 18}}>{work[work.map(e => e.title).indexOf(route.params.dataItem,0)].point}</Text></View></View> 
      <RenderSeparator></RenderSeparator>
      <View style={styles.item}><Text style={styles.title}>Giảng viên phụ trách:</Text><View style={styles.btninfor}><Text style={{fontSize: 18}}>{work[work.map(e => e.title).indexOf(route.params.dataItem,0)].lecturer}</Text></View></View> 
      <RenderSeparator></RenderSeparator>
      <View style={styles.item}><Text style={styles.title}>Thời gian diễn ra:</Text><View style={styles.btninfor}><Text style={{fontSize: 18}}>{work[work.map(e => e.title).indexOf(route.params.dataItem,0)].date}</Text></View></View> 
      <RenderSeparator></RenderSeparator>
      <View style={styles.item}><Text style={styles.title}>Mô tả:</Text><View style={styles.btninfor}><Text style={{fontSize: 18}}>{work[work.map(e => e.title).indexOf(route.params.dataItem,0)].description}</Text></View></View> 
      <Button 
        buttonStyle={{
          backgroundColor: 'rgba(90, 154, 230, 1)',
          borderColor: 'transparent',
          borderRadius: 30,
        }}
        onPress={() => navigation.goBack()} 
        title="Quay lại" 
      />
    </ScrollView>
  )
}
function IsActive({navigation}){
  
  let dataActive = []
  for( i=0; i<work.map(e => e.join).length; i++){
    if(work.map(e => e.join)[i].length > 0){
      if(work.map(e => e.join)[i].map(e => e.idStudent).includes(dataStudent[0].idStudent, 0)){
        if(work[i].status == 'uncomplete'){
          dataActive.push(work[i].title)
        }
      }
    }
  }
  return(
    <View style={{ flex: 1}}>
        <FlatList
            data={dataActive}
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
                      navigation.navigate('inforActive',{dataItem: item, })
                    }}
                >Chi tiết</Button>
                </View>
            </View>
            )}
            keyExtractor={item => item.id}
        />
    </View>
  )
}
function Active() {
  return(
    <SafeAreaView style={{ flex: 1, margin: 10}}>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="IsActive" component={IsActive} />
        <Stack.Screen options={{headerShown: false}} name="inforActive" component={inforActive} />
      </Stack.Navigator>
    </SafeAreaView>
  )
}
function navi() {
  return (
    <SafeAreaView style={{ flex: 1, margin: 10}}>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="infor" component={infor} />
        <Stack.Screen options={{headerShown: false}} name="inforworks" component={inforworks} />
      </Stack.Navigator>
    </SafeAreaView>
  )
}
export default function Student() {
    
    return (
        <Tab.Navigator initialRouteName="Cá Nhân" screenOptions={{ tabBarActiveTintColor: '#FF0000'}}>
          <Tab.Screen name="Cá Nhân" component={navi} />
          <Tab.Screen name="Đăng ký công việc" component={OpenJob} />
          <Tab.Screen name="Đang thực hiện" component={Active} />
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