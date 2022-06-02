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
import { useNavigation } from '@react-navigation/native';
import createEmotion from '../../connectors/aws/createEmotion'

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)

export function FeelingRecord({route}) {
    const feelings = ["Feliz", "Surpreso", "Medo", "Triste", "Calmo", "Nojo", "Confuso", "Raiva"]
    const [isLoading, setIsLoading] = useState(true)
    const [emotion, setEmotion] = useState(null)
    const [icon, setIcon] = useState(false)
    const [message, setMessage] = useState('')
    const Navigation = useNavigation();
    
    const { uri, base64 } = route.params.capturedPhoto;


    useEffect(() => {
        loadData();
    }, [])

    const loadData = async () => {
        try {
        setEmotion(await getEmotion(base64))
        setIsLoading(false);
        }
        catch (e) {
            console.log(e);
        }
    }

    const submitEmotion = async () => {
        const emotionObject = await createEmotion({ authToken: ''}, 
        {message, emotion, picture: base64} )
        //@ts-ignore
        Navigation.navigate('FeelingHistory', emotionObject)
    }

    return (
        <DismissKeyboard>
        <View style={styles.container}>
            <ButtonBack />
            {isLoading ? 
            <SafeAreaView style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Lottie resizeMode='contain' source={loadinggif} autoPlay loop />
            </SafeAreaView>
            :
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
                    onChangeText={newText => setMessage(newText)}
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

            <ButtonGeneric description="Salvar" onPress={submitEmotion}/>
            </>

            }
        </View>
        </DismissKeyboard>
    );
}