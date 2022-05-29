import React from "react";
import { RectButton, TouchableOpacity } from "react-native-gesture-handler";
import { View } from 'react-native';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export function TakePictureButton(props) {


    return (
        <RectButton style={styles.buttonWrapper} onPress={props.onPress}>
            <LinearGradient
                start={[0.2, 0.2]}
                end={[0.8, 0.8]}
                colors={['#00888D', '#8F009A', '#00C463', '#4DA6FF', '#FFFFEB', '#FFE478', '#FFA34C', '#FF4E41', '#FF4E41',]}
                style={{ width: '100%', height: '100%', borderRadius: 34 }}

            >
                <View style={styles.pictureButton}>
                    <MaterialIcons name="camera-enhance" size={24} color="white" />
                </View>
            </LinearGradient>
        </RectButton>
    )
}