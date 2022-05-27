import React from 'react';
import {View, StyleSheet,Image, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-simple-modal';
import { LogBox } from 'react-native';
//조용히 하라는 뜻
LogBox.ignoreLogs([
"Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`"
]);

export default class Modall extends React.Component  {
  state ={open : false};
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.setState({open: true})}>
          <Text style={styles.buttontext}>얏호!</Text>
        </TouchableOpacity>
        <Modal
          offset={this.state.offset}
          open={this.state.open}
          modalDidOpen={() => console.log('modal did open')}
          modalDidClose={() => this.setState({open: false})}
          style={{alignItems: 'center'}}>
          <View>
          <Text style={{fontSize: 20}}>모달창이요!</Text>
          <Text style={{fontSize: 20}}>너무 어려워요!</Text>
          <TouchableOpacity
            style={{margin: 3}}
            onPress={() => this.setState({open: false})}>
            <Text style={styles.text}>닫으시요</Text>
          </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    zIndex:3,
    position:'absolute',
    height:'100%',
    width:'100%',
    justifyContent:"center",
    alignContent:"center",
    alignItems:"center",
    paddingTop: 50
  },
  buttontext:{

    position:'relative',
    left:170,
    bottom:350,
    fontSize:20,
  },
  text:{
    position:'relative',
    fontSize:15,
    fontWeight:'700',
    left:'40%',
  }



})
