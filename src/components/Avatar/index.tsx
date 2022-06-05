import React from "react";
import { Image, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = {
    urlImage: string;
    colorEnum: number;
}

export function Avatar({ urlImage, colorEnum}: Props) {
    return (
        <LinearGradient
            style={styles.container}
            colors={[theme.colors[colorEnum], theme.colors[colorEnum]]}
        >
            <Image
                source={{ uri: urlImage }}
                style={styles.avatar}
            />
        </LinearGradient>
    );
}