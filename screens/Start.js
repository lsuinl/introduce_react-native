import React from "react";
import { View, Text, Button } from "react-native";

function start({navigation}) {
  return (
    <View>
      <Text>안녕하세유!</Text>
      <Button 
        title="go to main" 
        onPress={() => navigation.navigate('Main')}
      />
    </View>
  );
}

export default start;
