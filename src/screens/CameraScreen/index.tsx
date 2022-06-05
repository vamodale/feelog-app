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
import * as FaceDetector from 'expo-face-detector';
import { useNavigation } from '@react-navigation/native';

export function CameraScreen() {
  const camRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [face, setFace] = useState(false);

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
      setOpen(true)
    }
  }

  const handleFacesDetected = ({ faces }) => {
    if (faces[0] != undefined){
      setFace(true)
    }
    else 
      setFace(false)
  };

  return (
    <View style={styles.container}>
      <ButtonBack />
      <Camera 
        ratio='1:1' 
        autoFocus="auto" 
        style={styles.camera} 
        type={Camera.Constants.Type.front} 
        ref={camRef} 
        onFacesDetected={handleFacesDetected}
        faceDetectorSettings={{
          mode: FaceDetector.FaceDetectorMode.fast,
          detectLandmarks: FaceDetector.FaceDetectorLandmarks.none,
          runClassifications: FaceDetector.FaceDetectorClassifications.none,
          minDetectionInterval: 100,
        }}
      />
      <TakePictureButton onPress={takePicture} disabled={face ? false : true } style={face ? {opacity: 1}: {opacity: 0.2}}/>
      <Image source={Exclude} style={{ width: '100%', height: '100%', position: 'absolute' }} />

      {capturedPhoto &&
        <Modal
          animationType="fade"
          visible={open}
        >
          <View style={styles.ModalView}>
            <Image source={Exclude} style={{ width: '100%', height: '100%', position: 'absolute' }} />
            <Image
              style={[styles.camera, {zIndex: -1, transform: [{ rotateY: '180deg' }] }]}
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

    </View>
  );
}