import React from "react";
import { View, Text, StyleSheet, Image,ImageBackground } from "react-native";
import * as Font from 'expo-font';
import { LogBox } from 'react-native';

import Modall from "./Modall";

//조용히 하라는 뜻
LogBox.ignoreLogs([
  "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
  "Warning: componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.",
  "Warning: componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.",
]);

//이번주 목표:  스타트화면->메인화면의 전환 만들기, 화면 좀 더 예쁘게 수정하기
export default class Main extends React.Component {
  constructor(props){
    super(props);
    this.state={isReady: false};
  }
  async componentDidMount() {
    await Font.loadAsync({'anton': require('../assets/fonts/NanumPenScript-Regular.ttf'),});
    this.setState({isReady: true});
  }
  render(){
    if(this.state.isReady){ //로딩되어야 작동
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
        <Modall/>
      </View>
      );
    }
    else{
      return (
      <View>
        <Text>로딩중..</Text>
      </View>
      );
    }
  }
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
    lineHeight: 50,
    zIndex:2,
    fontWeight:'800',
    fontSize:30,
    color:'#353535',

  },

});
