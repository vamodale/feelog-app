import React from "react";
import {
    Text,
    View,
    Pressable,
} from 'react-native';

import FeelogLogoSmall from '../../images/feelogLogoSmall';

import { ButtonRegister } from "../../components/ButtonRegister";
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export function SignIn() {
    const Navigation = useNavigation();

    function HandleHome() {
        //@ts-ignore
        Navigation.navigate('Home')
    }

    return (
        <View style={styles.container}>
            <FeelogLogoSmall style={styles.feelog} />
            <ButtonRegister />
            <View style={styles.teste}>
                <Text style={styles.account}>
                    Já possui conta?
                </Text>
                <Pressable onPress={HandleHome}>
                    <Text style={styles.login}>
                        Realize login aqui
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}