import React from "react";
import { NavigationContainer } from '@react-navigation/native';

import { AuthRoutes } from './auth.routes'
import { AppRoutes } from './app.routes'

// import { useAuth } from '../hooks/auth'

export function Routes() {

    return (

        <NavigationContainer>
            
            {true ? <AppRoutes /> : <AuthRoutes/> }
        </NavigationContainer>

    )

}