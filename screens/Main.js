import React from "react";
import { View, Text, StyleSheet, Image,ImageBackground } from "react-native";
import * as Font from 'expo-font';

Font.loadAsync({
  anton: require('../assets/fonts/NanumPenScript-Regular.ttf'),
});

function Main() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../image/back.png")} style={styles.backpicture} >
        <Image source={require("../image/me.jpeg")} style={styles.picture} />
      </ImageBackground>
      <View style={styles.information}> 
        <Text style={styles.textshape}> 
        {"\n"}{"\n"}
          이름: 김수인{"\n"}
          생년월일: 2002년 4월 3일{"\n"}
          학교: 명지대학교{"\n"}
          학과: 정보통신공학과 21학번{"\n"}
          거주 지역: 경기도 파주시{"\n"}
          하고싶은 말: 메롱
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    backgroundColor:'white',
  },
  backpicture:{
    flex:1,
    backgroundColor:'#B7F0B1',
    alignItems: 'center',
    paddingHorizontal:195,
    zIndex:2,//누가 앞이게~
  },
  picture:{
    position:'relative',
    backgroundColor:'black',
    alignItems:'center',
    borderRadius:100,
    top:120,
    width:150,
    height:150,
  },
  information:{
    flex: 2,
    backgroundColor:'#B2CCFF',
    alignItems: 'center',
    borderRadius:25,
    marginTop:5,
    width:375,
    zIndex:1,
  },
  textshape:{
    fontFamily: 'anton',
    lineHeight: 45,
    zIndex:2,
    fontWeight:'700',
    fontSize:30,
    color:'#353535',

  },
});

export default Main;