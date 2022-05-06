import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from '../global/styles/theme';
import { Loading } from '../screens/Loading';

import { SignIn } from '../screens/SignIn';
import { Home } from '../screens/Home';
import { FeelingRecord } from '../screens/FeelingRecord';

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

            <Screen
                name="Home"
                component={Home}
            />
            <Screen
                name="Loading"
                component={Loading}
            />

            <Screen
                name="FeelingRecord"
                component={FeelingRecord}
            />
        </Navigator>
    )
}