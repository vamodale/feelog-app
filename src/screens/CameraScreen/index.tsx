import React, { useState, useEffect, useRef } from 'react';
import { Text, Image, View, Modal } from 'react-native';
import { styles } from './styles';
import { ButtonBack } from '../../components/ButtonBack';
import { MaterialIcons } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import { TakePictureButton } from '../../components/TakePictureButton';
import Mask from '../../assets/Mask.png'
import Exclude from '../../assets/exclude.png'
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';


export function CameraScreen() {
    const camRef = useRef(null);
    const [hasPermission, setHasPermission] = useState(null);
    const [capturedPhoto, setCapturedPhoto] = useState(null);
    const [open, setOpen] = useState(null);

    const options = { 
      quality: 0.5, 
   };

    
    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
  
    if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }

    async function takePicture(){
      if(camRef){
        const data = await camRef.current.takePictureAsync(options);
        setCapturedPhoto(data.uri);
        setOpen(true)
        console.log(data)
      }
    }

    return (
      <>
      <ButtonBack/>
      <Camera autoFocus="auto"  style={styles.camera} type={Camera.Constants.Type.front} ref={camRef}/>
      <TakePictureButton onPress={takePicture}/>
      <Image source={Mask} style={{ width: '100%', height: '100%', position: 'absolute' }} />

      { capturedPhoto &&
        <Modal
          animationType="fade"
          visible={open}
        >
          <View style={styles.ModalView}>
          <Image source={Exclude} style={{ width: '100%', height: '100%', position: 'absolute' }} />
          <Image
            style={{width: '100%', height: '100%', zIndex: -1, transform: [{rotateY: '180deg'}]}}
            source={{uri: capturedPhoto}}
          />

          <RectButton style={styles.ButtonBack} onPress={() =>setOpen(false)}>
            <View >
                <MaterialIcons name="keyboard-arrow-left" size={24} color="#FFFFFF" style={styles.Icon} />
            </View>
          </RectButton>

          </View>
        </Modal>

      }

      </>
  );
}