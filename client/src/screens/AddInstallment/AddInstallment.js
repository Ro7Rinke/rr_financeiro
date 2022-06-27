import React, {useState} from 'react'
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import {colors} from '../../common'

const AddInstallment = (props) => {
    return (
        <ScrollView style={styles.container}>
            <TextInput 
                placeholder="Valor Total"
                keyboardType="numeric"
                style={styles.textInput}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.appBackground,
    },
    textInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor: '#29002944',
        padding: 10,
        backgroundColor: '#fff',
    }
})

export default AddInstallment