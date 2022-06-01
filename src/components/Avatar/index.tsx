import React from "react";
import { Image, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';

type Props = {
    urlImage: string;
}

export function Avatar({ urlImage }: Props) {
    return (
        <LinearGradient
            style={styles.container}
            colors={
                Platform.OS === 'ios' ?
                    ['#00888D', '#8F009A', '#00C463', '#4DA6FF', '#FFFFEB', '#FFE478', '#FFA34C', '#FF4E41', '#FF4E41',] :
                    ['#00888D', '#00C463', '#4DA6FF', '#FFFFEB', '#FFE478', '#FFA34C', '#FF4E41', '#FF4E41', '#8F009A',]}
        >
            <Image
                source={{ uri: urlImage }}
                style={styles.avatar}
            />
        </LinearGradient>
    );
}