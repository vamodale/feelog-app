import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { Text, View } from 'react-native';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export function FooterMenu() {
    const Navigation = useNavigation();

    function HandleLoading() {
        //@ts-ignore
        Navigation.navigate('Loading')
    }

    return (
        <>

            <View style={styles.container}>
                <RectButton>
                    <MaterialIcons name="person-outline" size={24} color="white" />
                </RectButton>
                <RectButton>
                    <MaterialIcons name="calendar-today" size={24} color="white" />
                </RectButton>
            </View>
            <View style={styles.addWrapper}>
                <LinearGradient
                    start={[0.2, 0.2]}
                    end={[0.8, 0.8]}
                    colors={['#00888D', '#8F009A', '#00C463', '#4DA6FF', '#FFFFEB', '#FFE478', '#FFA34C', '#FF4E41', '#FF4E41',]}
                    style={{ width: '100%', height: '100%', borderRadius: 34 }}

                >
                    <RectButton style={styles.addButton} onPress={HandleLoading}>
                        <MaterialIcons name="add" size={24} color="white" />
                    </RectButton>
                </LinearGradient>
            </View>
        </>
    )
}