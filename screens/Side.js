import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Side() {
  return (
    <View style={styles.container} >
      <View flexDirection='row'>
        <View style={styles.picture}></View>
        <View style={styles.picture}></View>
      </View>
      <View flexDirection='row'>
        <View style={styles.picture}></View>
        <View style={styles.picture}></View>
      </View>
      <View flexDirection='row'>
        <View style={styles.picture}></View>
        <View style={styles.picture}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    backgroundColor:'white',
  },
  picture:{
    backgroundColor:'black',
    flexDirection: 'row',
    alignItessms:'flex-start',
    borderRadius:20,
    margin:3,
    top:120,
    width:185,
    height:150,
  },
  textbox:{
    flex: 2,
    backgroundColor:'#B2CCFF',
    alignItems: 'center',
    borderRadius:25,
    marginTop:5,
  },
  appTitle:{ //앱 타이틀(제목)에 대한 스타일
    color:'#fff', //내용물색
    fontSize:30, //글자사이즈
    marginTop:50, //위치
    marginBottom:30, //위치2
    fontWeight:'500', //글씨 두께
    textAlign:'center',//뭐여
    backgroundColor:'#6EE3F7', //배경색
  },
});

export default Side;
