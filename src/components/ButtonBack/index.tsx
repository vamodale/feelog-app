import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { RectButton } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function ButtonBack() {
    const Navigation = useNavigation();

    return (
        <RectButton onPress={Navigation.goBack}>
            <View style={styles.ButtonBack}>
                <MaterialIcons name="keyboard-arrow-left" size={24} color="#FFFFFF" style={styles.Icon} />
            </View>
        </RectButton>
    )
}