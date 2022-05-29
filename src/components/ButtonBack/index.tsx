import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function ButtonBack() {
    const Navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.ButtonBack} onPress={Navigation.goBack}>
            <View >
                <MaterialIcons name="keyboard-arrow-left" size={24} color="#FFFFFF" style={styles.Icon} />
            </View>
        </TouchableOpacity>
    )
}