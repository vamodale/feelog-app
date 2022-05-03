import React from "react";

import iconGoogle from '../../assets/google.png'
import { Image } from "react-native";

type Props = {
    size: number
}

export function IconGoogle({ size }: Props) {
    return (
        <Image source={iconGoogle} style={{ width: size, height: size }} />
    )
}