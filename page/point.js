import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, FlatList, Text, ScrollView, TextInput  } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Button, ButtonGroup, CheckBox } from '@rneui/themed';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dropdown } from 'react-native-element-dropdown';

function Listcomplete({ route, navigation }) {
  const data = route.params
  if(data == undefined){
    console.log('undefined')
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
                size="sm"
                onPress={() => {
                  navigation.navigate('inforWorkCom',{dataItem: item, index: work.map(function(e){ return e.title}).indexOf(item.title)})
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
  const index = route.params.index
  return(
    <ScrollView style={{ flex: 1}}>
      <Text style={styles.titleWork}>{data.title}</Text>
      <Text style={styles.inforWork}><Text style={{color: '#013ECB'}}>Điểm CTXH:</Text>{data.point}</Text>
      <Text style={styles.inforWork}><Text style={{color: '#013ECB'}}>Trạng thái:</Text> {data.status}</Text>
      <Text style={styles.inforWork}><Text style={{color: '#013ECB'}}>Giảng viên phụ trách:</Text> {data.lecturer}</Text>
      <Text style={styles.inforWork}><Text style={{color: '#013ECB'}}>Thời gian diễn ra:</Text> {data.date}</Text>
      <Text style={styles.inforWork}><Text style={{color: '#013ECB'}}>Mô tả: </Text >{data.description}</Text>
        <Text style={{color: '#013ECB', fontSize: 20, margin: 10}}>Danh sách sinh viên tham gia: </Text >
        <View style={{margin: 10, fontSize:20}}>
          <FlatList
            data={work[index].join}
            renderItem={({item}) => (
              <View >
                <Text style={styles.title}>{item.NameStudent}</Text>
              </View>
            )}
            keyExtractor={item => item.id}
          /> 
        </View>
      <Button onPress={() => navigation.goBack()} title="Quay lại" />
    </ScrollView>
  )
}

function AddWord({navigation}) {
  const [title, setTitle] = useState('')
  const [lecturer, setLecturer] = useState('')
  const [description, setDescription] = useState('')
  const [point, setPoint] = useState(null)
  const data = {
    title: title,
    status: 'uncomplete',
    lecturer: lecturer,
    description: description,
    point: Number.parseInt(point,10),
    join: []
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
    </ScrollView>
  )
}

function Listincomplete({ route, navigation }) {
  const data = route.params
  console.log(data)
  if(data == undefined){
    console.log('undefindd')
  }else if(data.dataItem != undefined ){
    if(data.dataItem.status=='uncomplete'){
      work.splice(data.index,1,data.dataItem)
    }else{
      work.splice(work.map(function(e){ return e.title}).indexOf(data.dataItem.title),1,data.dataItem)
      navigation.navigate('Listcomplete',{dataNew: data.dataItem})
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
        size="md"
        onPress={() => {
          navigation.navigate('AddWord')
        }}
      >Thêm công việc</Button>
      <FlatList
        data={List}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.btninfor}>
              <Button
                size="sm"
                onPress={() => {
                  navigation.navigate('inforWork',{dataItem: item, index: work.map(function(e){ return e.title}).indexOf(item.title)})

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
function updateIndex({ route, navigation }){
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
      studentN = student.filter((dataitem) => dataitem.NameClass == item.NameClass).map(({idStudent, NameStudent, NameClass, point}) => ({idStudent, NameStudent, NameClass, point}))
      return(
        <View style={{ flex: 1, marginTop: 50}}>
          <FlatList
            data={studentN}
            renderItem={({item}) => (
              <View style={styles.itemsv}>
                <Text style={styles.titlesv}>{item.NameStudent}</Text>
                <View style={styles.btninforsv}>
                  <Button
                    size="sm"
                    onPress={()=>{
                      
                      if(work[index].join.map(function(e){ return e.idStudent }).includes(item.idStudent)){
                        alert('Sinh viên đã được giao việc')
                      }else{
                        student[student.map(function(e){ return e.idStudent }).indexOf(item.idStudent)].point = item.point + pointSV
                        studentWork.push(student[student.map(function(e){ return e.idStudent }).indexOf(item.idStudent)])
                        console.log(work[index].join.map(function(e){ return e.idStudent }))
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
        console.log('')
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
          size="md"
          onPress={() => {
            navigation.navigate('Listincomplete', {ListStudentWork: studentWork, indexSV: index})
          }}
        >Cập nhật</Button>
      </ScrollView>
    )
  }
}


const inforWork = ({ route,navigation }) => {
  const data = route.params.dataItem
  const index = route.params.index
  return(
    <ScrollView style={{ flex: 1}}>
      <Text style={styles.titleWork}>{data.title}</Text>
      <Text style={styles.inforWork}><Text style={{color: '#013ECB'}}>Điểm CTXH:</Text>{data.point}</Text>
      <Text style={styles.inforWork}><Text style={{color: '#013ECB'}}>Trạng thái:</Text> {data.status}</Text>
      <Text style={styles.inforWork}><Text style={{color: '#013ECB'}}>Giảng viên phụ trách:</Text> {data.lecturer}</Text>
      <Text style={styles.inforWork}><Text style={{color: '#013ECB'}}>Thời gian diễn ra:</Text> {data.date}</Text>
      <Text style={styles.inforWork}><Text style={{color: '#013ECB'}}>Mô tả: </Text >{data.description}</Text>
        <Text style={{color: '#013ECB', fontSize: 20, margin: 10}}>Danh sách sinh viên tham gia: </Text > 
        <View style={{margin: 10, fontSize:20}}>
          <FlatList
            data={work[index].join}
            renderItem={({item}) => (
              <View >
                <Text style={styles.title}>{item.NameStudent}</Text>
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
              navigation.navigate('updateIndex',{value: value, item: data, index: route.params.index})
            }
          }}
          containerStyle={{ marginBottom: 20 }}
        />
      </View>
      <Button onPress={() => navigation.goBack()} title="Quay lại" />
    </ScrollView>
  )
}
function incomplete() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Listincomplete" component={Listincomplete} />
        <Stack.Screen options={{headerShown: false}} name="inforWork" component={inforWork} />
        <Stack.Screen options={{headerShown: false}} name="updateIndex" component={updateIndex} />
        <Stack.Screen options={{headerShown: false}} name="AddWord" component={AddWord} />
      </Stack.Navigator>
    </SafeAreaView>
  )
}

function complete() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Listcomplete" component={Listcomplete} />
        <Stack.Screen options={{headerShown: false}} name="inforWorkCom" component={inforWorkCom} />
        <Stack.Screen options={{headerShown: false}} name="updateIndex" component={updateIndex} />
      </Stack.Navigator>
    </SafeAreaView>
  )
}
 
const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

const work = [
  {
    title: 'Mùa hè xanh',
    point: 4,
    status: 'complete',
    lecturer: 'Trương Đông Nam',
    date: '14/6/2321',
    description: 'sử dụng hàm navigate như trên, gửi kém biến bình thường.',
    join: []
  },
  {
    title: 'Tình nguyện viên hè 2023 ',
    point: 2,
    status: 'complete',
    lecturer: 'Nguyễn Thị Liệu',
    date: '14/6/2321',
    description: 'fdsakhfd',
    join: []
  },
  {
    title: 'Cộng tác viên bơi lội',
    point: 1,
    status: 'uncomplete',
    lecturer: 'Duy Nam',
    date: '14/6/2321',
    description: 'fdsakhfd',
    join: []
  },
  {
    title: 'Cộng tác viên bơi lội2',
    point: 3,
    status: 'complete',
    lecturer: 'Nhật Minh',
    date: '14/6/2321',
    description: 'fdsakhfd',
    join: []
  },
]
const Branch = [
  {
    idBranch: 'CNTT',
    NameBranch: 'Công nghệ thông tin',
    value: '1',
    Class: [
      {
        NameClass: '17DTH1',
        value: '1'
      },
      {
        NameClass: '17DTH2',
        value: '2'
      },
      {
        NameClass: '17DTH3',
        value: '3'
      }
    ]
  },
  {
    idBranch: 'NNA',
    NameBranch: 'Ngôn ngữ anh',
    value: '2',
    Class: [
      {
        NameClass: '17NNA1',
        value: '1'
        
      },
      {
        NameClass: '17NNA2',
        value: '2'
      },
      {
        NameClass: '17NNA3',
        value: '3'
      }
    ]
  },
  {
    idBranch: 'QTKD',
    NameBranch: 'Quản trị kinh doanh',
    value: '3',
    Class: [
      {
        NameClass: '17QTKD1',
        value: '1'
      },
      {
        NameClass: '17QTKD2',
        value: '2'
      },
      {
        NameClass: '17QTKD3',
        value: '3'
      }
    ]
  },
  {
    idBranch: 'DD',
    NameBranch: 'Điều dưỡng',
    value: '4',
    Class: [
      {
        NameClass: '17DD1',
        value: '1'
      },
      {
        NameClass: '17DD2',
        value: '2'
      },
      {
        NameClass: '17DD3',
        value: '3'
      }
    ]
  },
  {
    idBranch: 'KT',
    NameBranch: 'Kinh tế',
    value: '5',
    Class: [
      {
        NameClass: '17KT1',
        value: '1'
      },
      {
        NameClass: '17KT2',
        value: '2'
      },
      {
        NameClass: '17KT3',
        value: '3'
      }
    ]
  },
]

const student = [
  {
    idStudent: '131728193',
    NameClass: '17DTH1',
    NameStudent: 'Nguyen Van a',
    point: 0
  },
  {
    idStudent: '13162817',
    NameClass: '17DTH1',
    NameStudent: 'nguyen van b',
    point: 0
  },
  {
    idStudent: '13148198',
    NameClass: '17NNA1',
    NameStudent: 'vu thi a',
    point: 0
  },
  {
    idStudent: '131728145',
    NameClass: '17DTH2',
    NameStudent: 'Nguyen Van a1',
    point: 0
  },
  {
    idStudent: '13162823',
    NameClass: '17DTH2',
    NameStudent: 'nguyen van b3',
    point: 0
  },
  {
    idStudent: '13148128',
    NameClass: '17NNA1',
    NameStudent: 'vu thi as',
    point: 0
  },
  {
    idStudent: '131728195',
    NameClass: '17DTH3',
    NameStudent: 'Nguyen Van af',
    point: 0
  },
  {
    idStudent: '13162873',
    NameClass: '17DTH2',
    NameStudent: 'nguyen van b1',
    point: 0
  },
  {
    idStudent: '13148132',
    NameClass: '17DTH3',
    NameStudent: 'vu thi a6',
    point: 0
  },
]
const studentWork = []
export default class Point extends React.Component {
  render() {
    return (
      <Tab.Navigator>
          <Tab.Screen name="Chưa hoàn thành" component={incomplete} />
          <Tab.Screen name="Đã hoàn thành" component={complete} />
      </Tab.Navigator>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 8,
    marginHorizontal: 16,
    marginTop: 20
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  btninfor: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'flex-end'
  },
  titleWork:{
    fontSize: 28,
    fontWeight: '600',
    color: '#014EFF',
    padding: 10,
  },
  inforWork: {
    fontSize: 20,
    padding: 10,
    marginRight: 10
  },
  In: {
    flex: 1,
    justifyContent: "center",
    marginTop: 30
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