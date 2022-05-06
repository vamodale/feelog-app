import React from "react";
import { View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';

type Props = {
    urlImage: string;
}

export function Avatar({ urlImage }: Props) {
    return (
        <LinearGradient
            style={styles.container}
            colors={['orange', '#FFFFFF']}
        >
            <Image
                source={{ uri: urlImage }}
                style={styles.avatar}
            />
        </LinearGradient>
    );
}