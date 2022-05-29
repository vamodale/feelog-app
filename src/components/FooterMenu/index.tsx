import React from "react";
import { View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export function FooterMenu() {
    const Navigation = useNavigation();

    function HandleLoading() {
        //@ts-ignore
        Navigation.navigate('Loading')
    }

    function HandleProfile() {
        //@ts-ignore
        Navigation.navigate('Profile')
    }


    return (
        <>

            <View style={styles.container}>
                <TouchableOpacity onPress={HandleProfile}>
                    {Navigation.getId() == "Profile" ?
                        <MaterialIcons name="person" size={24} color="white" /> :
                        <MaterialIcons name="person-outline" size={24} color="white" />
                    }
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="calendar-blank-outline" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.addWrapper}>
                <LinearGradient
                    start={[0.2, 0.2]}
                    end={[0.8, 0.8]}
                    colors={['#00888D', '#8F009A', '#00C463', '#4DA6FF', '#FFFFEB', '#FFE478', '#FFA34C', '#FF4E41', '#FF4E41',]}
                    style={{ width: '100%', height: '100%', borderRadius: 34 }}

                >
                    <TouchableOpacity style={styles.addButton} onPress={HandleLoading}>
                        <MaterialIcons name="add" size={24} color="white" />
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        </>
    )
}