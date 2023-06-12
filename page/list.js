import React, { useState, Component } from 'react';
import { StyleSheet, View, SafeAreaView, FlatList, Text, ScrollView, TextInput  } from 'react-native';
import { Button } from '@rneui/themed';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dropdown } from 'react-native-element-dropdown';
import { student } from './point';
import { LogBox } from "react-native"

LogBox.ignoreAllLogs(true)

export function dataV(item){
  console.log(item,'fds')
}
const Stack = createNativeStackNavigator();
class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      value: '',
    }
    this.inputSearch = {}
    this.student = student.map(({idStudent, NameClass, NameStudent, point, Phone, Sex, Address}) => ({idStudent, NameClass, NameStudent, point, Phone, Sex, Address}))
    this.work = [
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
    this.branch = [
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
  }  
  
  render() {
    const renderSeparator = () => {
      return (
        <View
          style={{
            height: 1,
            width: '100%',
            backgroundColor: '#CED0CE',
          }}
        />
      );
    };
    const searchItems = (text) => {
      let newData = this.student.filter(item => {
        const itemData = `${item.idStudent.toUpperCase()}`;
        const textData = text.toUpperCase();
      if(text.length >0 ){
        return itemData.indexOf(textData) > -1;
      }
      });
      this.setState({
        data: newData,
        value: text,
      });
    };
    const InforStudent = ({ route, navigation }) => {
      const data = route.params.item
      return(
        <ScrollView style={{ flex: 1, margin: 10}}>
          <Text style={styles.titleWork}>{data.NameStudent}</Text>
          <Text style={styles.inforWork}><Text style={{color: '#013ECB'}}>Lớp: </Text>{data.NameClass}</Text>
          <Text style={styles.inforWork}><Text style={{color: '#013ECB'}}>Mã số sinh viên: </Text>{data.idStudent}</Text>
          <Text style={styles.inforWork}><Text style={{color: '#013ECB'}}>Điểm CTXH: </Text>{data.point}</Text>
          <Text style={styles.inforWork}><Text style={{color: '#013ECB'}}>Khoa: </Text>{data.NameBranch}</Text>
          <Button 
              buttonStyle={{
                backgroundColor: 'rgba(90, 154, 230, 1)',
                borderColor: 'transparent',
                borderRadius: 30,
              }}
              containerStyle={{
                flex: 1,
                marginHorizontal: 150,
                marginTop: 30
              }}
              onPress={() => navigation.goBack()} title="Quay lại" />
        </ScrollView>
      )
    }
    const List = ({ route, navigation }) => {
      const item = route.params
      if(item == undefined){
      }else{
        this.student.push(item.item)
      }
      const renderHeader = () => {
        return (
          <View>
            <TextInput
              style={{ height: 50, borderColor: '#00B8E6', borderWidth: 1, borderRadius: 20 }}
              keyboardType = 'numeric'
              placeholder="   Tìm kiếm"
              onChangeText={text => {
                searchItems(text)
              }}
              value={this.state.value}
            />
            <Button
                  titleStyle={{ fontWeight: '700' }}
                  buttonStyle={{
                    backgroundColor: 'rgba(90, 154, 230, 1)',
                    borderColor: 'transparent',
                    borderRadius: 30,
                  }}
                  containerStyle={{
                    flex: 1,
                    marginHorizontal: 90,
                    marginVertical: 10,
                  }}
                  onPress={()=>{
                    navigation.navigate('AddStudent')
                  }}
            >Thêm sinh viên</Button>
            
          </View>
        );
      };
      return(
        <View
          style={{
            flex: 1,
            padding: 25,
            width: '98%',
            alignSelf: 'center',
            justifyContent: 'center',
          }}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text style={styles.title}>{item.idStudent}</Text>
                <View style={styles.btninfor}>
                  <Button
                    size="sm"
                    buttonStyle={{
                      backgroundColor: 'rgba(90, 154, 230, 1)',
                      borderColor: 'transparent',
                      borderRadius: 10,
                    }}
                    onPress={() => {
                      // navigation.navigate('InforStudent', {item: item})
                      console.log(item)
                    }}
                  >Chi Tiết</Button>
                </View>
              </View>
            )}
            keyExtractor={item => item.idStudent}
            ItemSeparatorComponent={renderSeparator}
            ListHeaderComponent={renderHeader}
          />
        </View>
      )
    }
    const AddStudent = ({navigation}) => {
      const [idStudent, setIdStudent] = useState('')
      const [nameStudent, setNameStudent] = useState('')
      const [point, setPoint] = useState(null)
      const [value, setValue] = useState('');
      const [isFocus, setIsFocus] = useState(false);
      const [item, setItem] = useState('');
      const [forcus, setForcus] = useState(false);
      const data = {
        idStudent: idStudent,
        NameClass: '',
        NameBranch: '',
        NameStudent: nameStudent,
        point: Number.parseInt(point,10)
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
            <View>
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
            </View>
        )
      };
      return(
        <ScrollView>
          <View style={styles.In}>
            <View style={{flex: 1, alignItems: 'center', marginBottom: 50}}>
              <Text style={{fontSize: 26, color: '#1984FF', fontWeight: '500'}}>Thêm sinh viên</Text>
            </View>
            <TextInput
              style={styles.input}
              keyboardType = 'numeric'
              placeholder="Mã số sinh viên"
              onChangeText={idStudent => setIdStudent(idStudent)}
              value={idStudent}
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
              placeholder="Tên sinh viên"
              onChangeText={nameStudent => setNameStudent(nameStudent)}
              value={nameStudent}
            />
            <ScrollView style={{flex: 1, flexDirection: 'column'}}>
              <View >
                <Dropdown
                  style={[styles.dropdownsv, isFocus && { borderColor: 'blue' }]}
                  placeholderStyle={styles.placeholderStylesv}
                  selectedTextStyle={styles.selectedTextStylesv}
                  inputSearchStyle={styles.inputSearchStylesv}
                  iconStyle={styles.iconStylesv}
                  data={this.branch}
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
            </ScrollView>
                
            <Button
                  titleStyle={{ fontWeight: '700' }}
                  buttonStyle={{
                    backgroundColor: 'rgba(90, 154, 230, 1)',
                    borderColor: 'transparent',
                    borderRadius: 30,
                  }}
                  containerStyle={{
                    flex: 1,
                    marginHorizontal: 110,
                    marginVertical: 10,
                  }}
                  onPress={()=>{
                    if(idStudent==''||nameStudent==''||point==''){
                      alert('Bạn nhập thiếu dữ liệu')
                    }else{
                      if(this.student.map(function(e){ return e.idStudent }).includes(data.idStudent)){
                        alert('Sinh viên đã có trong danh sách')
                        setIdStudent('')
                        setItem('')
                        setPoint(null)
                        setValue('')
                      }else{
                        data.NameClass = item.NameClass
                        data.NameBranch = value.NameBranch
                        navigation.navigate('List',{item: data})
                        alert('Thêm sinh viên thành công')
                      }
                      
                    }
                  }}
            >Thêm sinh viên</Button>
            <Button 
              buttonStyle={{
                backgroundColor: 'rgba(90, 154, 230, 1)',
                borderColor: 'transparent',
                borderRadius: 30,
              }}
              containerStyle={{
                flex: 1,
                marginHorizontal: 150,
              }}
              onPress={() => navigation.goBack()} title="Quay lại" />
          </View>
        </ScrollView>
      )
      }
    
    return (
      <SafeAreaView style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen options={{headerShown: false}} name="List" component={List} />
          <Stack.Screen options={{headerShown: false}} name="InforStudent" component={InforStudent} />
          <Stack.Screen options={{headerShown: false}} name="AddStudent" component={AddStudent} />
        </Stack.Navigator>
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 8,
    marginHorizontal: 16,
    marginTop: 20
  },
  btninfor: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'flex-end'
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10
  },
  titleWork:{
    fontSize: 30,
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
    secureTextEntry: true,
    marginHorizontal: 40,
    marginVertical: 10,
  },
  dropdownsv: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 20,
    paddingHorizontal: 8,
    marginHorizontal: 40,
    marginVertical: 10,
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
    paddingHorizontal: 50,
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
  },
});

function ListSVScreen() {
  return (
    <Search />
  )
}

export default ListSVScreen