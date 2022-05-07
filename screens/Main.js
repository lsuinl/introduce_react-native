import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

function Main() {
  return (
    <View style={styles.container}>
      <View style={styles.backpicture}>
        <View style={styles.picture}></View>
      </View>
      <View style={styles.information}> 
          <Text></Text>
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
});

export default Main;