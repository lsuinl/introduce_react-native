import React from "react";
import { View, Text, StyleSheet,Image, ImageBackground } from "react-native";
import * as Font from 'expo-font';

export default class Side extends React.Component {

  constructor(props){
    super(props);
    this.state={isReady: false};
  }
  async componentDidMount() {
    await Font.loadAsync({'antn': require('../assets/fonts/BMJUA_ttf.ttf'),});
    this.setState({isReady: true});
  }
  render(){
    if(this.state.isReady){ 
    return (
      <View style={styles.container} >
        <View flexDirection='row'>
          <ImageBackground source={require("../image/game.jpeg")} style={styles.picture}>
            <Text style={styles.textbox}>{"\n"}취미</Text>
          </ImageBackground>
          <ImageBackground source={require("../image/movie.jpeg")} style={styles.picture}>
            <Text style={styles.textbox}>{"\n"}영화</Text>
          </ImageBackground>
        </View>
        <View flexDirection='row'>
          <ImageBackground source={require("../image/food.jpeg")} style={styles.picture}>
          <Text style={styles.textbox}>{"\n"}음식</Text>
          </ImageBackground>
          <ImageBackground source={require("../image/pet.png")} style={styles.picture}>
            <Text style={styles.textbox}>{"\n"}동물</Text>
          </ImageBackground>
        </View>
          <Image source={require("../image/talk.png")}style={styles.picture2}></Image>
          <Text style={styles.textbox}>{"\n"}{"\n"}{"\n"}하고싶은 말</Text>
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
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    backgroundColor:'white',
  },
  picture:{
    flexDirection: 'row',
    borderRadius:50,
    margin:3,
    top:120,
    width:185,
    height:150,
  },
  picture2:{
    flexDirection: 'row',
    borderRadius:50,
    margin:3,
    top:120,
    width:240,
    height:150,
  },
  textbox:{
    fontFamily: 'antn',
    flex: 2,
    fontSize:50,
    lineHeight: 45,
    fontWeight: '800',
    textAlign:'center',
  },
});

