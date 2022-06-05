
import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from '../global/styles/theme';

import { SignIn } from '../screens/SignIn';

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