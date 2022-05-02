import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { Text, View } from 'react-native';
import { styles } from './styles';

import { IconGoogle } from "../IconGoogle";

export function ButtonRegister() {

    return (
        <RectButton
            style={styles.container}
        >
            <View style={styles.icongoogle}>
                <IconGoogle size={26} />
            </View>

            <Text style={styles.title}>
                Registrar
            </Text>
        </RectButton>
    )
}