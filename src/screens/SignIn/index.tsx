import React from "react";
import {
    Text,
    View,
    Image,
    Pressable,
} from 'react-native';

import feelog from '../../assets/feelog.png'
import { ButtonRegister } from "../../components/ButtonRegister";
import { styles } from './styles';


export function SignIn() {
    return (
        <View style={styles.container}>
            <Image source={feelog} style={styles.feelog} />
            <ButtonRegister />
            <View style={styles.teste}>
                <Text style={styles.account}>
                    Já possui conta?
                </Text>
                <Pressable>
                    <Text style={styles.login}>
                        Realize login aqui
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}