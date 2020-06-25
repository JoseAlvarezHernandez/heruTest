import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Users from './Users'
import Details from './Details'

const Stack = createStackNavigator()

function UsersNesting(){
    return (
    <Stack.Navigator>
        <Stack.Screen name="usuarios" component={Users} />
        <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>)
}

export default UsersNesting