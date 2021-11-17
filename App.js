import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,Image, Button } from 'react-native';
import DiaLock from './components/DiaLock';

export default function App() {
  const [visibleshow,setVisibleshow] = useState(false)
  const handleOpen = ()=>{
    setVisibleshow(true)
  }
  return (
    <View style={styles.container}>
      <DiaLock 
      visibleshow={visibleshow}
      setVisibleshow={setVisibleshow}
      />
      <Image 
      style={{width:360,height:250,marginBottom:18}}
      source={{uri:'https://th.bing.com/th/id/R.e5cff7ce303a0907feb8755b421f832e?rik=IugD3OJXd8I1KQ&pid=ImgRaw&r=0'}}/>
      <Button 
      title="Show Dialog"
      onPress={()=>handleOpen()}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});