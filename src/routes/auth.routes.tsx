import React from "react";
import { createStackNavigator } from '@react-navigation/stack'

import { theme } from '../global/styles/theme';
import { Loading } from '../screens/Loading';

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
                name="Home"
                component={Loading}
            />
        </Navigator>
    )
}