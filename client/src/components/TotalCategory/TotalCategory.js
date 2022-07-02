import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {colors, formatMoney} from '../../common'

const TotalCategory = (props) => {

    return(
        <View style={[styles.container]}>
            <View style={[styles.categoryColor, {backgroundColor: colors.categories[`${props.categoryId}`]}]} />
            <View style={styles.containerText}>
                <Text style={styles.categoryName}>{props.categoryName}: </Text>
                <Text style={styles.value}>R$ {formatMoney(props.value, 2, ',', '.')}</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#9999fc22',
        marginLeft: 35,
        marginRight: 35,
        // paddingLeft: 5,
        paddingRight: 15,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: colors.borderColor,
    },
    containerText: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 5,
    },
    categoryColor: {
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        width: 10,
        height: '100%',
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