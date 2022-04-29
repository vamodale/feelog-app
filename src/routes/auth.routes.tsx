import React from "react";
import { createStackNavigator } from '@react-navigation/stack'

import { SignIn } from '../screens/SignIn';

import { theme } from '../global/styles/theme';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: theme.colors.primary
                }
            }}
        >
            <Screen
                name="SignIn"
                component={SignIn}
            />
        </Navigator>

    )
}