import React, { useState } from 'react';
import { View, ScrollView, SafeAreaView, TextInput } from 'react-native';
import { styles } from './styles';
import { Avatar } from '../../components/Avatar';
import { ButtonBack } from '../../components/ButtonBack';
import { Picker } from "@react-native-picker/picker";
import { ButtonGeneric } from '../../components/ButtonGeneric';
import { theme } from '../../global/styles/theme';

export function FeelingRecord() {
    const [selectedValue, setSelectedValue] = useState("");
    return (
        <View style={styles.container}>
            <View style={styles.Heading}>
                <ButtonBack />
                <Avatar urlImage="https://github.com/ZoTTiz.png" />
            </View>

            <SafeAreaView style={styles.box}>
                <ScrollView>
                    <Picker
                        style={styles.pickerbox}
                        selectedValue={selectedValue}
                        onValueChange={(itemValue) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Selecione seu Sentimento" value="" />
                        <Picker.Item label="Felicidade" value="Felicidade" />
                        <Picker.Item label="Calmo" value="Calmo" />
                        <Picker.Item label="Confuso" value="Confuso" />
                        <Picker.Item label="Feliz" value="Feliz" />
                        <Picker.Item label="Medo" value="Medo" />
                        <Picker.Item label="Nojo" value="Nojo" />
                        <Picker.Item label="Raiva" value="Raiva" />
                        <Picker.Item label="Surpreso" value="Surpreso" />
                        <Picker.Item label="Triste" value="Triste" />
                    </Picker>
                </ScrollView>
            </SafeAreaView>

            <View style={styles.input}>
                <View style={styles.labels}>
                    <TextInput
                        multiline
                        textAlignVertical="top"
                        numberOfLines={10}
                        placeholder='Descrição...'
                        keyboardType='default'
                        placeholderTextColor="#FFFFFF"
                        maxLength={300}
                        style={[{ color: '#FFFFFF', fontFamily: theme.fonts.title300, maxHeight: 229, height: 229 }]}
                    />
                </View>
            </View>

            <ButtonGeneric description="Salvar" />
        </View>
    );
}