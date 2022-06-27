import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {formatMoney} from '../../common'

const TotalCategory = (props) => {

    return(
        <View style={styles.container}>
            <Text style={styles.categoryName}>{props.categoryName}: </Text>
            <Text style={styles.value}>R$ {formatMoney(props.value, 2, ',', '.')}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#9999fc22',
        marginLeft: 35,
        marginRight: 35,
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#acacac77'
        // height: 200
    },
    categoryName: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
    },
    value: {
        color: '#4444ff',//'#cb3333',
        fontSize: 18,
    }
})

export default TotalCategory