import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, FlatList, Text, ScrollView, TextInput  } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Button, ButtonGroup } from '@rneui/themed';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dropdown } from 'react-native-element-dropdown';
import { LogBox } from "react-native"
import { student, work, Branch } from './data';
import DateTimePicker from '@react-native-community/datetimepicker';


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
function Listcomplete({ route, navigation }) {
  const data = route.params
  if(data == undefined){
  }else{
    
    work.splice(work.map(function(e){
      return e.title;
    }).indexOf(data.dataNew.title),1,data.dataNew)
  }
  const List = work.filter((dataitem) => dataitem.status == 'complete').map(({title, point, status, lecturer, date, description, join}) => ({title, point, status, lecturer, date, description, join}));
  return (
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
                  navigation.navigate('InforWorkCom',{dataItem: item, index: work.map(function(e){ return e.title}).indexOf(item.title)})
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

const InforWorkCom = ({route, navigation}) => {
  const data = route.params.dataItem
  const index = route.params.index
  
  return(
    <ScrollView style={{ flex: 1}}>
      <View style={{borderColor: '#C1D8FF', borderWidth: 1, borderRadius: 30, backgroundColor: '#83B1FF', marginBottom: 60, marginTop: 30}}><Text style={styles.titleWork}>{data.title}</Text></View>
      <View style={styles.item}><Text style={styles.title}>Điểm CTXH:</Text><View style={styles.btninfor}><Text style={{fontSize: 18}}>{data.point}</Text></View></View> 
      <RenderSeparator></RenderSeparator>
      <View style={styles.item}><Text style={styles.title}>Trạng thái:</Text><View style={styles.btninfor}><Text style={{fontSize: 18}}>{data.status}</Text></View></View> 
      <RenderSeparator></RenderSeparator>
      <View style={styles.item}><Text style={styles.title}>Giảng viên phụ trách:</Text><View style={styles.btninfor}><Text style={{fontSize: 18}}>{data.lecturer}</Text></View></View> 
      <RenderSeparator></RenderSeparator>
      <View style={styles.item}><Text style={styles.title}>Thời gian diễn ra:</Text><View style={styles.btninfor}><Text style={{fontSize: 18}}>{data.date}</Text></View></View> 
      <RenderSeparator></RenderSeparator>
      <View style={styles.item}><Text style={styles.title}>Mô tả:</Text><View style={styles.btninfor}><Text style={{fontSize: 18}}>{data.description}</Text></View></View> 
      <RenderSeparator></RenderSeparator>
      <View style={styles.item}>
        <Text style={styles.title}>Sinh viên tham gia:</Text>
        <FlatList
          data={work[index].join}
          renderItem={({item}) => (
            <View style={styles.btninfor}>
              <Text style={{fontSize: 18}}>{item.NameStudent}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        /> 
      </View>
        <Button 
          buttonStyle={{
            backgroundColor: 'rgba(90, 154, 230, 1)',
            borderColor: 'transparent',
            borderRadius: 30,
            marginTop: 30
          }}
          onPress={() => navigation.goBack()} 
          title="Quay lại" 
        />
    </ScrollView>
  )
}

function AddWork({navigation}) {
  const [title, setTitle] = useState('')
  const [lecturer, setLecturer] = useState('')
  const [description, setDescription] = useState('')
  const [point, setPoint] = useState(null)
  const curDate = new Date();
  const curDay = curDate.getDate();
  const curMonth = curDate.getMonth() + 1;
  const curYear = curDate.getFullYear();
  const dateWork = curDay + '/' + curMonth + '/' + curYear
  

  const data = {
    title: title,
    status: 'uncomplete',
    lecturer: lecturer,
    description: description,
    point: Number.parseInt(point,10),
    join: [],
    date: dateWork
  }
  return(
    <ScrollView>
      <View style={styles.In}>
        <TextInput
          style={styles.input}
          placeholder="Tiêu đề"
          onChangeText={title => setTitle(title)}
          value={title}
        />
        <TextInput
          style={styles.input}
          keyboardType = 'numeric'
          placeholder="Điểm CTXH"
          onChangeText={(pointsv) => {
            setPoint(pointsv)
          }}
          value={point}
        />
        <TextInput
          style={styles.input}
          placeholder="Giảng viên phụ trách"
          onChangeText={lecturer => setLecturer(lecturer)}
          value={lecturer}
        />
        <TextInput
          style={styles.input}
          placeholder="Mô tả"
          onChangeText={description => setDescription(description)}
          value={description}
        />
        <Button
            buttonStyle={{
              backgroundColor: 'rgba(90, 154, 230, 1)',
              borderColor: 'transparent',
              borderRadius: 30,
            }}
            size="md"
            onPress={() => {
              if(title==''||lecturer==''){
                alert('Bạn nhập thiếu dữ liệu')
              }else{
                navigation.navigate('Listincomplete', {dataAdd: data})
              }
            }}
          >Thêm công việc</Button>
      </View>
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
function Listincomplete({ route, navigation }) {
  const data = route.params
  if(data == undefined){
  }else if(data.dataItem != undefined ){
    if(data.dataItem.status=='uncomplete'){
      work.splice(data.index,1,data.dataItem)
    }else{
      work.splice(work.map(function(e){ return e.title}).indexOf(data.dataItem.title),1,data.dataItem)
      navigation.navigate('Listcomplete',{dataNew: data.dataItem})
      
      if(data.dataItem.join.map(function(e){ return e.idStudent }).length > 0){
        for( i = 0; i < data.dataItem.join.map(function(e){ return e.idStudent }).length; i++ ){
          data.dataItem.join[i].Work.push(data.dataItem.title)
          
          student.splice( student.map(e => e.idStudent).indexOf(data.dataItem.join[i].idStudent), 1, data.dataItem.join[i] )
        }
      }
    }
  }else if(data.dataAdd != undefined){
    work.push(data.dataAdd)
  }else if(data.ListStudentWork != undefined){
    work[data.indexSV].join.push(...data.ListStudentWork)
    studentWork.splice(0,studentWork.length)
  }else{
    work.splice(data.index,1)
  }
  const List = work.filter((dataitem) => dataitem.status == 'uncomplete').map(({title, point, status, lecturer, date, description, join}) => ({title, point, status, lecturer, date, description, join}));
  
  return (
    <View style={{ flex: 1}}>
      <Button 
        buttonStyle={{
          backgroundColor: 'rgba(90, 154, 230, 1)',
          borderColor: 'transparent',
          borderRadius: 30,
        }}
        size="md"
        onPress={() => {
          navigation.navigate('AddWork')
        }}
      >Thêm công việc</Button>
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
                  navigation.navigate('InforWork',{dataItem: item, index: work.map(function(e){ return e.title}).indexOf(item.title)})
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
function UpdateIndex({ route, navigation }){
  const value = route.params.value
  const item = route.params.item
  const index = route.params.index
  const pointSV = item.point
  const [title, setTitle] = useState('')
  const [lecturer, setLecturer] = useState('')
  const [description, setDescription] = useState('')
  if(value==0){
    const [selectedIndex, setSelectedIndex] = useState(0);
    const statusC = ['uncomplete', 'complete']
    return(
      <ScrollView style={{flex:1}}>
        <Text style={{padding: 10, fontWeight: 600}}>Tiêu Đề:</Text>
          <View style={styles.titleWork} >
            <TextInput 
              placeholder={item.title} 
              onChangeText={(title) => {
                setTitle(title)
                item.title=title
              }}
              value={title}
            />
          </View>  
        <Text style={{padding: 10, fontWeight: 600}}>Trạng thái:</Text>
        <View style={styles.titleWork}>
          <ButtonGroup
            selectedIndex={selectedIndex}
            buttons={statusC}
            onPress={(value) => {
              setSelectedIndex(value)
              item.status=statusC[value]
            }}
            containerStyle={{ marginBottom: 20 }}
          />
        </View>
        <Text style={{padding: 10, fontWeight: 600}}>Giảng viên phụ trách:</Text>
        <View style={styles.titleWork} >
            <TextInput 
              placeholder={item.lecturer} 
              onChangeText={(lecturer) => {
                setLecturer(lecturer)
                item.lecturer=lecturer
              }}
              value={lecturer}
            />
        </View>
        <Text style={{padding: 10, fontWeight: 600}}>Mô tả: </Text>
        <View style={styles.titleWork} >
            <TextInput 
              placeholder={item.description} 
              onChangeText={(description) => {
                setDescription(description)
                item.description=description
              }}
              value={description}
            />
        </View>
        <Button
          buttonStyle={{
            backgroundColor: 'rgba(90, 154, 230, 1)',
            borderColor: 'transparent',
            borderRadius: 30,
          }}
          size="md"
          onPress={() => {
            if(item.status=='uncomplete'){
              navigation.navigate('Listincomplete',{dataItem: item, index: index})
            }else{
              navigation.navigate('Listincomplete',{dataItem: item})
              
            }
          }}
        >Cập nhật</Button>
      </ScrollView>
    )
  }
  else if(value==1){
    const [value, setValue] = useState('');
    const [isFocus, setIsFocus] = useState(false);
    const [item, setItem] = useState([]);
    const [forcus, setForcus] = useState(false);
    
    function listSV() {
      const studentN = student.filter((dataitem) => dataitem.NameClass == item.NameClass).map(({idStudent, NameStudent, NameClass, point, Work, idBranch}) => ({idStudent, NameStudent, NameClass, point, Work, idBranch}))
      return(
        <View style={{ flex: 1, marginTop: 50}}>
          <FlatList
            data={studentN}
            renderItem={({item}) => (
              <View style={styles.itemsv}>
                <Text style={styles.titlesv}>{item.NameStudent}</Text>
                <View style={styles.btninforsv}>
                  <Button
                    buttonStyle={{
                      backgroundColor: 'rgba(90, 154, 230, 1)',
                      borderColor: 'transparent',
                      borderRadius: 10,
                    }}
                    size="sm"
                    onPress={()=>{
                      if(work[index].join.map(function(e){ return e.idStudent }).includes(item.idStudent) || studentWork.map(function(e){ return e.idStudent }).includes(item.idStudent)){
                        alert('Sinh viên đã được giao việc')
                      }else{
                        student[student.map(function(e){ return e.idStudent }).indexOf(item.idStudent)].point = item.point + pointSV
                        studentWork.push(student[student.map(function(e){ return e.idStudent }).indexOf(item.idStudent)])
                      }
                    }}
                  >Giao việc</Button>
                </View>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      )
    }
    function renderLabel() {
      const dataI = []
      if(value==''){
      }else{
        value.Class.forEach(function(data) {
          dataI.push(data)
        })
      }
      return(
          <View style={{ flex: 1, marginTop: 20}}>
            <Dropdown
              style={[styles.dropdownsv, forcus && { borderColor: 'blue' }]}
              placeholderStyle={styles.placeholderStylesv}
              selectedTextStyle={styles.selectedTextStylesv}
              inputSearchStyle={styles.inputSearchStylesv}
              iconStyle={styles.iconStylesv}
              data={dataI}
              search
              maxHeight={300}
              labelField="NameClass"
              valueField="value"
              placeholder={!forcus ? 'Chọn Lớp' : ''}
              searchPlaceholder="Nhập tên Lớp"
              value={item}
              onFocus={() => setForcus(true)}
              onBlur={() => setForcus(true)}
              onChange={item => {
                setItem(item);
                setForcus(true);
              }}  
            />
            {listSV()}
          </View>
      )
    };
    return(
      <ScrollView style={{flex: 1, flexDirection: 'column'}}>
        <View style={styles.containersv}>
          <Dropdown
            style={[styles.dropdownsv, isFocus && { borderColor: 'blue' }]}
            placeholderStyle={styles.placeholderStylesv}
            selectedTextStyle={styles.selectedTextStylesv}
            inputSearchStyle={styles.inputSearchStylesv}
            iconStyle={styles.iconStylesv}
            data={Branch}
            search
            maxHeight={300}
            labelField="NameBranch"
            valueField="value"
            placeholder={!isFocus ? 'Chọn khoa' : ''}
            searchPlacvalueeholder="Nhập tên khoa"
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(true)}
            onChange={item => {
              setValue(item);
              setIsFocus(true);
            }}
          />
          {renderLabel()}
        </View>
        <Button
          buttonStyle={{
            backgroundColor: 'rgba(90, 154, 230, 1)',
            borderColor: 'transparent',
            borderRadius: 30,
          }}
          size="md"
          onPress={() => {
            navigation.navigate('Listincomplete', {ListStudentWork: studentWork, indexSV: index})
          }}
        >Cập nhật</Button>
      </ScrollView>
    )
  }
}

const InforWork = ({ route,navigation }) => {
  const data = route.params.dataItem
  const index = route.params.index
  return(
    <ScrollView style={{ flex: 1}}>
      <View style={{borderColor: '#C1D8FF', borderWidth: 1, borderRadius: 30, backgroundColor: '#83B1FF', marginBottom: 60, marginTop: 30}}><Text style={styles.titleWork}>{data.title}</Text></View>
      <View style={styles.item}><Text style={styles.title}>Điểm CTXH:</Text><View style={styles.btninfor}><Text style={{fontSize: 18}}>{data.point}</Text></View></View> 
      <RenderSeparator></RenderSeparator>
      <View style={styles.item}><Text style={styles.title}>Trạng thái:</Text><View style={styles.btninfor}><Text style={{fontSize: 18}}>{data.status}</Text></View></View> 
      <RenderSeparator></RenderSeparator>
      <View style={styles.item}><Text style={styles.title}>Giảng viên phụ trách:</Text><View style={styles.btninfor}><Text style={{fontSize: 18}}>{data.lecturer}</Text></View></View> 
      <RenderSeparator></RenderSeparator>
      <View style={styles.item}><Text style={styles.title}>Thời gian diễn ra:</Text><View style={styles.btninfor}><Text style={{fontSize: 18}}>{data.date}</Text></View></View> 
      <RenderSeparator></RenderSeparator>
      <View style={styles.item}><Text style={styles.title}>Mô tả:</Text><View style={styles.btninfor}><Text style={{fontSize: 18}}>{data.description}</Text></View></View> 
      <RenderSeparator></RenderSeparator>
      <View style={styles.item}>
        <Text style={styles.title}>Sinh viên tham gia:</Text>
        <FlatList
          data={work[index].join}
          renderItem={({item}) => (
            <View style={styles.btninfor}>
              <Text style={{fontSize: 18}}>{item.NameStudent}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        /> 
      </View>
      <View style={{marginTop: 50}}>
        <ButtonGroup
          selectedIndex={''}
          buttons={['Cập nhật', 'Giao việc', 'Xóa']}
          onPress={(value) => {
            if(value==2){
              navigation.navigate('Listincomplete', {index: route.params.index})
            }else{
              navigation.navigate('UpdateIndex',{value: value, item: data, index: route.params.index})
            }
          }}
          containerStyle={{ marginBottom: 20 }}
        />
      </View>
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
function Incomplete() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Listincomplete" component={Listincomplete} />
        <Stack.Screen options={{headerShown: false}} name="InforWork" component={InforWork} />
        <Stack.Screen options={{headerShown: false}} name="UpdateIndex" component={UpdateIndex} />
        <Stack.Screen options={{headerShown: false}} name="AddWork" component={AddWork} />
      </Stack.Navigator>
    </SafeAreaView>
  )
}

function Complete() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Listcomplete" component={Listcomplete} />
        <Stack.Screen options={{headerShown: false}} name="InforWorkCom" component={InforWorkCom} />
        <Stack.Screen options={{headerShown: false}} name="UpdateIndex" component={UpdateIndex} />
      </Stack.Navigator>
    </SafeAreaView>
  )
}

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();
const studentWork = []
export default class Point extends React.Component {
  render() {
    return (
      <Tab.Navigator >
          <Tab.Screen name="Chưa hoàn thành" component={Incomplete} />
          <Tab.Screen name="Đã hoàn thành" component={Complete} />
      </Tab.Navigator>
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