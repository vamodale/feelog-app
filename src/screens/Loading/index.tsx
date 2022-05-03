import React from 'react';
import { View, Text, SafeAreaView, Button } from 'react-native';
import { styles } from './styles';
import Lottie from 'lottie-react-native';
import loading from '../../assets/loading.json'
import { ButtonBack } from '../../compontents/ButtonBack';

export function Loading() {
    return (
        <View>
            <ButtonBack />
            <SafeAreaView style={{ width: '100%', height: '80%', justifyContent: 'center', alignItems: 'center' }}>
                <Lottie resizeMode='contain' source={loading} autoPlay loop />
            </SafeAreaView>
        </View>
    )
}