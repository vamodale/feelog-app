import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { RectButton } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function ButtonBack() {
    const Navigation = useNavigation();

    return (
        <RectButton style={styles.ButtonBack} onPress={Navigation.goBack}>
            <View >
                <MaterialIcons name="keyboard-arrow-left" size={24} color="#FFFFFF" style={styles.Icon} />
            </View>
        </RectButton>
    )
}