import React, { useState } from 'react';
import { Text, View, FlatList, StyleSheet,  } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Button } from '@rneui/themed';

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
];

const student = [
  {
    idStudent: '131728193',
    NameClass: '17DTH1',
    NameStudent: 'Nguyen Van a'
  },
  {
    idStudent: '13162817',
    NameClass: '17DTH1',
    NameStudent: 'nguyen van b'
  },
  {
    idStudent: '13148198',
    NameClass: '17NNA1',
    NameStudent: 'vu thi a'
  },
  {
    idStudent: '131728145',
    NameClass: '17DTH2',
    NameStudent: 'Nguyen Van a1'
  },
  {
    idStudent: '13162823',
    NameClass: '17DTH2',
    NameStudent: 'nguyen van b3'
  },
  {
    idStudent: '13148128',
    NameClass: '17NNA1',
    NameStudent: 'vu thi as'
  },
  {
    idStudent: '131728195',
    NameClass: '17DTH3',
    NameStudent: 'Nguyen Van af'
  },
  {
    idStudent: '13162823',
    NameClass: '17DTH2',
    NameStudent: 'nguyen van b1'
  },
  {
    idStudent: '13148132',
    NameClass: '17DTH3',
    NameStudent: 'vu thi a6'
  },
]

function List() {
  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [item, setItem] = useState([]);
  const [forcus, setForcus] = useState(false);
  function listSV() {
    studentN = student.filter((dataitem) => dataitem.NameClass == item.NameClass).map(({idStudent, NameStudent, NameClass}) => ({idStudent, NameStudent, NameClass}));
    return(
      <View style={{ flex: 1, marginTop: 50}}>
        <FlatList
          data={studentN}
          renderItem={({item}) => (
            <View style={styles.item}>
              <Text style={styles.title}>{item.NameStudent}</Text>
              <View style={styles.btninfor}>
                <Button
                  size="sm"
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
      console.log('if')
    }else{
      value.Class.forEach(function(data) {
        dataI.push(data)
      })
    }
    
    return(
        <View style={{ flex: 1, marginTop: 20}}>
          <Dropdown
            style={[styles.dropdown, forcus && { borderColor: 'blue' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
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
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
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
  )
};

export default List

const styles = StyleSheet.create({
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