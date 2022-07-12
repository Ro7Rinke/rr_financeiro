import React from "react"

import { Provider } from "react-redux"
import store from "../../redux/store"

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from "../../screens/Home/Home"
import AddInstallment from "../../screens/AddInstallment/AddInstallment"
import Login from "../../screens/Login/Login"

const Stack = createNativeStackNavigator()

const Router = () => {
    return (
        <Provider store={store} >
            <NavigationContainer>
                <Stack.Navigator>
                <Stack.Screen name='Login' 
                        component={Login}
                        options={{
                            headerShown: false
                        }} />

                    <Stack.Screen name='Home' 
                        component={Home}
                        options={{
                            headerShown: false
                        }} />

                    <Stack.Screen name='AddInstallment'
                        component={AddInstallment}
                        options={{
                            title: 'Novo Lançamento',
                            headerStyle: {
                                backgroundColor: '#ccbbcc'
                            }
                        }}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default Router