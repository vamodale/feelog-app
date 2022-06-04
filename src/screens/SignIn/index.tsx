import React, { useState } from "react";
import {
    Text,
    View,
    Pressable,
    Alert,
    ActivityIndicator,
} from 'react-native';

import FeelogLogoSmall from '../../images/feelogLogoSmall';

import { ButtonRegister } from "../../components/ButtonRegister";
import { styles } from './styles';

import { useAuth } from "../../hooks/auth2";

export function SignIn() {
    const [isLoading, setIsLoading] = useState(false)
    const { signInWithGoogle } = useAuth()
    
    async function handleSignInWithGoogle() {
        try{    
            setIsLoading(true)
            return await signInWithGoogle();

        }catch(err) {
            Alert.alert('Nao foi possivel conectar a conta Google')
        }finally {
            setIsLoading(false)
        }
    }

    return (
        <View style={styles.container}>
            <FeelogLogoSmall style={styles.feelog} />
            <ButtonRegister onPress={handleSignInWithGoogle}/>
            <View style={styles.teste}>
                {isLoading && <ActivityIndicator color="#FFF"/>} 
            </View>
        </View>
    );
}