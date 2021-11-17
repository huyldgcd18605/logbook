import React from 'react'
import { Button, Modal, StyleSheet, View, Text, Vibration } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Audio } from 'expo-av';

const DiaLock = ({visibleshow,setVisibleshow}) => {
    const [sound, setSound] = React.useState();
    const Ring = async()=>{
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(
           require('../assets/mixkit-fairy-message-notification-861.wav')
        );
        setSound(sound);
    
        console.log('Playing Sound');
        await sound.playAsync(); 
    }
    React.useEffect(() => {
        return sound
          ? () => {
              console.log('Unloading Sound');
              sound.unloadAsync(); }
          : undefined;
      }, [sound]);
    return (
        <Modal
        transparent
        visible={visibleshow}
        >
        <View style={styles.wrap}>
           <View style={styles.box}>
               <View style={styles.iconClose}>
                  <Ionicons 
                  name="close" 
                  color="#000" 
                  size={32}
                  onPress={()=>setVisibleshow(false)}
                  />
               </View>
               <Text style={{marginTop:10,marginBottom:10,fontSize:22,fontWeight:'bold'}}>
                   Notification API
               </Text>
               <View style={styles.btn}>
                   <Button 
                   onPress={Ring}
                   title="Ring a bell"/>
                   <View style={{marginLeft:30,marginRight:20}}></View>
                   <Button 
                   onPress={()=>Vibration.vibrate()}
                   title="Vibrate"/>
               </View>
           </View>
        </View>

        </Modal>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    wrap:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(0,0,0,0.2)'
    },
    box:{
        width:'80%',
        backgroundColor:'#fff',
        alignItems:'center',
        borderRadius:12
    },
    iconClose:{
        width:'100%',
        justifyContent:'flex-end',
        flexDirection:'row',
        padding:20
    },
    btn:{display:'flex',
    
    flexDirection:'row',
    padding:20,
    margin:30

}
  });
export default DiaLock