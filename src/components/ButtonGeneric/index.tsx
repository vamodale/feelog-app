import React from "react";
import { Text } from 'react-native';

import { RectButton } from "react-native-gesture-handler";
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
        <RectButton
            style={styles.container}
            onPress={HandleProfile}
        >

            <Text style={styles.title}>
                {description}
            </Text>
        </RectButton>
    )
}