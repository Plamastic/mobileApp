import React, { useState, Component } from 'react';
import { StyleSheet, View, SafeAreaView, FlatList, Text, ScrollView, TextInput  } from 'react-native';
import { Button } from '@rneui/themed';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dropdown } from 'react-native-element-dropdown';
import { LogBox } from "react-native"
import { student, Branch } from './data';


LogBox.ignoreAllLogs(true)
const Stack = createNativeStackNavigator();
class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      value: '',
    }
    this.inputSearch = {}
  }  
  
  render() {
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
    const searchItems = (text) => {
      let newData = student.filter(item => {
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
          <View style={{borderColor: '#C1D8FF', borderWidth: 1, borderRadius: 30, backgroundColor: '#83B1FF', marginBottom: 60, marginTop: 30}}><Text style={styles.titleWork}>{data.NameStudent}</Text></View>
          <View style={styles.item}><Text style={styles.title}>Mã số sinh viên:</Text><View style={styles.btninfor}><Text style={{fontSize: 18}}>{data.idStudent}</Text></View></View> 
          <RenderSeparator></RenderSeparator>
          <View style={styles.item}><Text style={styles.title}>Lớp:</Text><View style={styles.btninfor}><Text style={{fontSize: 18}}>{data.NameClass}</Text></View></View> 
          <RenderSeparator></RenderSeparator>
          <View style={styles.item}><Text style={styles.title}>Chuyên ngành:</Text><View style={styles.btninfor}><Text style={{fontSize: 18}}>{Branch.find(e => e.idBranch == data.idBranch).NameBranch}</Text></View></View> 
          <RenderSeparator></RenderSeparator>
          <View style={styles.item}><Text style={styles.title}>Điểm CTXH:</Text><View style={styles.btninfor}><Text style={{fontSize: 18}}>{data.point}</Text></View></View> 
          <RenderSeparator></RenderSeparator>
          <View style={styles.item}><Text style={styles.title}>Công việc:</Text>
            
              <FlatList
                data={data.Work}
                renderItem={({item}) => (
                  <View style={styles.btninfor}>
                    <Text style={{fontSize: 18}}>{item}</Text>
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
    const List = ({ navigation }) => {
      const renderHeader = () => {
        return (
          <View>
            <TextInput
              style={{ height: 50, borderColor: 'rgba(90, 154, 230, 1)', borderWidth: 1, borderRadius: 30, textAlign: 'center' }}
              keyboardType = 'numeric'
              placeholder="Tìm kiếm"
              onChangeText={text => {
                searchItems(text)
              }}
              value={this.state.value}
            />
            <Button
                  titleStyle={{ fontWeight: '600' }}
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
                    this.setState({
                      data: [],
                      value: '',
                    });
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
                      navigation.navigate('InforStudent', {item: item})
                      this.setState({
                        data: [],
                        value: '',
                      });
                    }}
                  >Chi Tiết</Button>
                </View>
              </View>
            )}
            keyExtractor={item => item.idStudent}
            ItemSeparatorComponent={RenderSeparator}
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
        idBranch: '',
        NameStudent: nameStudent,
        point: Number.parseInt(point,10), 
        Work: []
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
            <View style={{flex: 1, alignItems: 'center', marginBottom: 30}}>
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
                      if(student.map(function(e){ return e.idStudent }).includes(data.idStudent)){
                        alert('Sinh viên đã có trong danh sách')
                        setIdStudent('')
                        setItem('')
                        setPoint(null)
                        setValue('')
                      }else{
                        data.NameClass = item.NameClass
                        data.idBranch = value.idBranch
                        student.push(data)
                        alert('Thêm sinh viên thành công')
                        navigation.navigate('List')
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
    fontSize: 20,
    fontWeight: '600'
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