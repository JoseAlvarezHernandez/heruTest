import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Home from './Home'
import UsersNesting from './UsersNesting'

const Drawer = createDrawerNavigator()

export default function StackNav() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={Home}/>
                <Drawer.Screen name="Usuarios" component={UsersNesting}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
