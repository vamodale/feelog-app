import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { RectButton } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';

export function ButtonBack() {
    return (
        <RectButton>
            <View style={styles.ButtonBack}>
                <MaterialIcons name="keyboard-arrow-left" size={24} color="#FFFFFF" style={styles.Icon} />
            </View>
        </RectButton>
    )
}