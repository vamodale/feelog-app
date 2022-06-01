import React, { useEffect, useState } from 'react';
import { View, TextInput, SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Lottie from 'lottie-react-native'
import loadinggif from '../../assets/loading.json'
import { styles } from './styles';
import { Avatar } from '../../components/Avatar';
import { ButtonBack } from '../../components/ButtonBack';
import SelectDropdown from 'react-native-select-dropdown'
import { ButtonGeneric } from '../../components/ButtonGeneric';
import { theme } from '../../global/styles/theme';
import getEmotion from '../../connectors/aws/rekognition';
import { MaterialIcons } from '@expo/vector-icons';

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)

export function FeelingRecord({route}) {
    const feelings = ["Feliz", "Surpreso", "Medo", "Triste", "Calmo", "Nojo", "Confuso", "Raiva"]
    const [isLoading, setIsLoading] = useState(false)
    const [emotion, setEmotion] = useState(null)
    const [icon, setIcon] = useState(false)

    const { uri, base64 } = route.params.capturedPhoto;

    useEffect(() => {
        loadData();
    }, [])

    const loadData = async () => {
        try {
        setEmotion(await getEmotion(base64))
        setIsLoading(true);
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <DismissKeyboard>
        <View style={styles.container}>
            <ButtonBack />
            {isLoading ? 
            <>
            <Avatar urlImage={uri} colorEnum={emotion} />

            <SelectDropdown
                defaultValue={feelings[emotion-1]}
                data={feelings}
                renderDropdownIcon={(icon) => (
                    icon ?
                    <MaterialIcons name="keyboard-arrow-up" size={24} color="#FFFFFF" style={styles.icon} /> :
                    <MaterialIcons name="keyboard-arrow-down" size={24} color="#FFFFFF" style={styles.icon} />
                )}
                buttonStyle={{...styles.selectButton, ...{borderColor: theme.colors[emotion],}}}
                buttonTextStyle={styles.selectTextButton}
                onFocus={() => setIcon(true)}
                onBlur={() => setIcon(false)}
                rowTextStyle={styles.selectTextRow}
                rowStyle={{borderBottomWidth: 0}}
                dropdownStyle={styles.selectDropDown}
                onSelect={(selectedItem, index) => {
                    setEmotion(index+1)
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
                    style={[{ color: '#FFFFFF', fontFamily: theme.fonts.title300, height: 200, fontSize: 16, }]}
                />
            </View>

            <ButtonGeneric description="Salvar" />
            </>
            : 
            <SafeAreaView style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Lottie resizeMode='contain' source={loadinggif} autoPlay loop />
            </SafeAreaView>
            }
        </View>
        </DismissKeyboard>
    );
}