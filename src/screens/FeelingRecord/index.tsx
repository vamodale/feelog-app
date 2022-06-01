import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { styles } from './styles';
import { Avatar } from '../../components/Avatar';
import { ButtonBack } from '../../components/ButtonBack';
import SelectDropdown from 'react-native-select-dropdown'
import { ButtonGeneric } from '../../components/ButtonGeneric';
import { theme } from '../../global/styles/theme';

export function FeelingRecord() {
    const countries = ["Felicidade", "Calmo", "Feliz", "Medo", "Nojo", "Raiva", "Surpreso", "Triste"]

    return (
        <View style={styles.container}>
            <ButtonBack />
            <Avatar urlImage="https://github.com/ZoTTiz.png" />

            <SelectDropdown
                defaultButtonText='Selecione seu sentimento'
                data={countries}
                buttonStyle={styles.selectButton}
                buttonTextStyle={styles.selectTextButton}
                rowStyle={styles.selectRow}
                rowTextStyle={styles.selectTextRow}
                dropdownStyle={styles.selectDropDown}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    return item
                }}
            />

            <View style={styles.input}>
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

            <ButtonGeneric description="Salvar" />
        </View>
    );
}