import moment from 'moment'
import 'moment/locale/pt'

import React, {useState} from 'react'
import { Dimensions, View, StyleSheet, Text } from 'react-native'

import { colors } from '../../common'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const MonthHeader = (props) => {
    const date = moment(props.date)
    const monthName = date.format('MMMM')
    const yearText = date.format('YY')
    return (
        <View style={[styles.container]}>
            <Text style={[styles.text, props.selected ? styles.selected : {}]}>
                {monthName} /{yearText}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: windowWidth / 3,
        // backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 15,
        borderColor: colors.primaryColorSolid,
    },
    selected: {
        color: colors.primaryColorSolid,
        borderBottomWidth: 2,
    }
})

export default MonthHeader