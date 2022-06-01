import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Text, Image, View, Modal, Dimensions } from 'react-native';
import { styles } from './styles';
import { ButtonBack } from '../../components/ButtonBack';
import { MaterialIcons } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import { TakePictureButton } from '../../components/TakePictureButton';
import Mask from '../../assets/Mask.png'
import Exclude from '../../assets/exclude.png'
import { TouchableOpacity } from 'react-native';
import getEmotion from '../../connectors/aws/rekognition'
import { useNavigation } from '@react-navigation/native';

export function CameraScreen() {
  const camRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [Emotion, setEmotion] = useState(null);

  const [open, setOpen] = useState(null);
  const Navigation = useNavigation();

  const options = {
    quality: 0.5,
    base64: true
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

  async function takePicture() {
    if (camRef) {
      const data = await camRef.current.takePictureAsync(options);
      setCapturedPhoto(data);
      // console.log(data.base64)
      setOpen(true)
      // console.log(data)
    }
  }

  async function processImage() {
    //@ts-ignore
    Navigation.navigate('Loading')
    setEmotion(await getEmotion(capturedPhoto.base64))

    //@ts-ignore
    navigation.navigate('FeelingRecord',
      {
        capturedPhoto: capturedPhoto,
      }
      
    )
    console.log(Emotion)
  }

  return (
    <>
      <ButtonBack />
      <Camera ratio='16:9' autoFocus="auto" style={styles.camera} type={Camera.Constants.Type.front} ref={camRef} />
      <TakePictureButton onPress={takePicture} />
      <Image source={Mask} style={{ width: '100%', height: '100%', position: 'absolute' }} />

      {capturedPhoto &&
        <Modal
          animationType="fade"
          visible={open}
        >
          <View style={styles.ModalView}>
            <Image source={Exclude} style={{ width: '100%', height: '100%', position: 'absolute' }} />
            <Image
              style={{ width: '100%', height: '100%', zIndex: -1, transform: [{ rotateY: '180deg' }] }}
              source={{ uri: capturedPhoto.uri }}
            />
            {/* @ts-ignore */}
            <TouchableOpacity style={styles.NextButton} onPress={() => Navigation.navigate('FeelingRecord', { capturedPhoto: capturedPhoto })}>
              <Text style={styles.NextButtonText}>Próximo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.ButtonBack} onPress={() => setOpen(false)}>
              <View >
                <MaterialIcons name="keyboard-arrow-left" size={24} color="#FFFFFF" style={styles.Icon} />
              </View>
            </TouchableOpacity>

          </View >
        </Modal >

      }

    </>
  );
}