<View style={{ flex: 1 }} >
  <ImageBackground resizeMode="cover" style={{ flex: 1 }} source={{ uri: 'https://i.pinimg.com/564x/87/7e/53/877e538625fcc12c0def1c0b0ed725ae.jpg' }}>
    <View style={{ flex: 1, alignItems: 'center', marginTop: 30 }}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://www.psdgraphics.com/file/user-icon.jpg'
        }}
      />
      <View style={styles.item}><Text style={{ fontSize: 18, color: 'white' }}>{data.nameLecturer}</Text></View>
      <View style={styles.item}><Text style={{ fontSize: 18, color: 'white' }}>{data.email}</Text></View>
      <View style={styles.item}><Text style={{ fontSize: 18, color: 'white' }}>{data.location}</Text></View>
      <View style={styles.item}><Text style={{ fontSize: 18, color: 'white' }}>{data.sdt}</Text></View>
      <View style={styles.btninfor}>
        <Button
          titleStyle={{ fontWeight: '600' }}
          buttonStyle={{
            backgroundColor: 'rgba(90, 154, 230, 1)',
            borderColor: 'transparent',
            borderRadius: 30,
            marginBottom: 30
          }}
          containerStyle={{
            marginHorizontal: 90,
            marginVertical: 10,
          }}
          onPress={() => {
            navigation.goBack()
          }}
        >Đăng Xuất</Button>
      </View>
    </View>
  </ImageBackground>
</View>