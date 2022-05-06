import React from "react";
import { Text } from 'react-native';

import { RectButton } from "react-native-gesture-handler";

import { styles } from './styles';

type Props = {
    description: string
}

export function ButtonGeneric({ description }: Props) {
    return (
        <RectButton
            style={styles.container}
        >

            <Text style={styles.title}>
                {description}
            </Text>
        </RectButton>
    )
}