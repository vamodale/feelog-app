import React from "react";
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

type Props = {
    description: string,
    onPress: any
}

export function ButtonGeneric({ description, onPress }: Props) {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
        >

            <Text style={styles.title}>
                {description}
            </Text>
        </TouchableOpacity>
    )
}