import AsyncStorage from "@react-native-async-storage/async-storage"



export const work = [
  {
    title: 'Mùa hè xanh',
    point: 4,
    status: 'complete',
    lecturer: 'Trương Đông Nam',
    date: '14/6/2321',
    description: 'sử dụng hàm navigate như trên, gửi kém biến bình thường.',
    join: [],
    Quantity: 20
  },
  {
    title: 'Tình nguyện viên hè 2023 ',
    point: 2,
    status: 'complete',
    lecturer: 'Nguyễn Thị Liệu',
    date: '14/6/2321',
    description: 'fdsakhfd',
    join: [],
    Quantity: 15
  },
  {
    title: 'Cộng tác viên bơi lội',
    point: 1,
    status: 'uncomplete',
    lecturer: 'Duy Nam',
    date: '14/6/2321',
    description: 'fdsakhfd',
    join: [],
    Quantity: 30
  },
  {
    title: 'Cộng tác viên bơi lội2',
    point: 3,
    status: 'complete',
    lecturer: 'Nhật Minh',
    date: '14/6/2321',
    description: 'fdsakhfd',
    join: [],
    Quantity: 25
  },
  {
    title: 'Cộng tác viên bơi',
    point: 3,
    status: 'uncomplete',
    lecturer: 'a Minh',
    date: '14/6/2321',
    description: 'fdsakhfd',
    join: [],
    Quantity: 25
  },
]
export const Branch = [
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
export const student = [
  {
    idStudent: '131728193',
    NameClass: '17DTH1',
    NameStudent: 'Nguyen Van a',
    point: 0,
    Phone: '0938773',
    Sex: 'nam',
    Address: 'adgdfbfhgf',
    Work: [],
    idBranch: 'CNTT',
    Pass: 'a'
  },
  {
    idStudent: '13162817',
    NameClass: '17DTH1',
    NameStudent: 'nguyen van b',
    point: 0,
    Phone: '34324324',
    Sex: 'nam',
    Address: 'sadfsdaf',
    Work: [],
    idBranch: 'CNTT',
    Pass: 'a'
  },
  {
    idStudent: '13148198',
    NameClass: '17NNA1',
    NameStudent: 'vu thi a',
    point: 0,
    Phone: '3123453',
    Sex: 'Nữ',
    Address: 'ádfsdfs',
    Work: [],
    idBranch: 'NNA',
    Pass: 'a'
  },
  {
    idStudent: '131728145',
    NameClass: '17DTH2',
    NameStudent: 'Nguyen Van a1',
    point: 0,
    Phone: '234454',
    Sex: 'Nam',
    Address: 'fdasfsda',
    Work: [],
    idBranch: 'CNTT',
    Pass: 'a'
  },
  {
    idStudent: '13162823',
    NameClass: '17DTH2',
    NameStudent: 'nguyen van b3',
    point: 0,
    Phone: '',
    Sex: '',
    Address: '',
    Work: [],
    idBranch: 'CNTT',
    Pass: 'a'
  },
  {
    idStudent: '13148128',
    NameClass: '17NNA1',
    NameStudent: 'vu thi as',
    point: 0,
    Phone: '',
    Sex: '',
    Address: '',
    Work: [],
    idBranch: 'NNA',
    Pass: 'a'
  },
  {
    idStudent: '131728195',
    NameClass: '17DTH3',
    NameStudent: 'Nguyen Van af',
    point: 0,
    Phone: '',
    Sex: '',
    Address: '',
    Work: [],
    idBranch: 'CNTT',
    Pass: 'a'
  },
  {
    idStudent: '13162873',
    NameClass: '17DTH2',
    NameStudent: 'nguyen van b1',
    point: 0,
    Phone: '',
    Sex: '',
    Address: '',
    Work: [],
    idBranch: 'CNTT',
    Pass: 'a'
  },
  {
    idStudent: '13148132',
    NameClass: '17DTH3',
    NameStudent: 'vu thi a6',
    point: 0,
    Phone: '',
    Sex: '',
    Address: '',
    Work: [],
    idBranch: 'CNTT',
    Pass: 'a'
  },
]
export const User = [
  {
    idUser: 1,
    userName: 'Admin',
    passWord: 'admin123',
    nameLecturer: 'Trương Đông Nam',
    email: 'Nam01@gmail.com',
    location: 'TP HCM'
  },{
    idUser: 2,
    userName: 'A',
    passWord: 'a',
    nameLecturer: 'Duy Nam',
    email: 'Nam02@gmail.com',
    location: 'Biên Hòa'
  }
]
export const regisList = [
]

// AsyncStorage.setItem('User',JSON.stringify(User))
// AsyncStorage.setItem('Student',JSON.stringify(student))
// AsyncStorage.setItem('Branch',JSON.stringify(Branch))
// AsyncStorage.setItem('work',JSON.stringify(work))
// AsyncStorage.setItem('regisList',JSON.stringify(regisList))
// AsyncStorage.clear()