import React from "react";
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';

import { IconGoogle } from "../IconGoogle";

export function ButtonRegister() {

    return (
        <TouchableOpacity
            style={styles.container}
        >
            <View style={styles.icongoogle}>
                <IconGoogle size={26} />
            </View>

            <Text style={styles.title}>
                Registrar
            </Text>
        </TouchableOpacity>
    )
}