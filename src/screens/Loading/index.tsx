import React from 'react';
import { View, SafeAreaView, Pressable } from 'react-native';
import Lottie from 'lottie-react-native';
import loading from '../../assets/loading.json'
import { ButtonBack } from '../../components/ButtonBack';
import { useNavigation } from '@react-navigation/native';

export function Loading() {
    const Navigation = useNavigation();

    function HandleFeeling() {
        //@ts-ignore
        Navigation.navigate('FeelingRecord')
    }

    return (
        <View>
            <ButtonBack />
            <Pressable onPress={HandleFeeling}>
                <SafeAreaView style={{ width: '100%', height: '80%', justifyContent: 'center', alignItems: 'center' }}>
                    <Lottie resizeMode='contain' source={loading} autoPlay loop />
                </SafeAreaView>
            </Pressable>
        </View>
    )
}