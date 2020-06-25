import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Home from './Home'
import Users from './Users'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

export default function StackNav() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={Home}/>
                <Drawer.Screen name="Usuarios" component={Users}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
