import React from 'react';
import { View, Image, Text, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { Avatar } from '../../components/Avatar';

export function FeelingRecord() {
    return (
        <View style={styles.container}>

            <Avatar urlImage="https://github.com/ZoTTiz.png" />
        </View>
    );
}