import React from 'react';
import { View, SafeAreaView, Pressable } from 'react-native';
import Lottie from 'lottie-react-native';
import loading from '../../assets/loading.json'
import { ButtonBack } from '../../components/ButtonBack';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../../global/styles/theme';

export function Loading() {

    return (
        <View style={{backgroundColor: theme.colors.primary}}>
            <ButtonBack />
            <SafeAreaView style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Lottie resizeMode='contain' source={loading} autoPlay loop />
            </SafeAreaView>
        </View>
    )
}