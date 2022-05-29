import React from "react";
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

type Props = {
    description: string
}

export function ButtonGeneric({ description }: Props) {
    const Navigation = useNavigation();

    function HandleProfile() {
        //@ts-ignore
        Navigation.navigate('Profile')
    }

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={HandleProfile}
        >

            <Text style={styles.title}>
                {description}
            </Text>
        </TouchableOpacity>
    )
}