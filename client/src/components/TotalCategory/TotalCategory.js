import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const TotalCategory = () => {
    const categoryName = 'Mercado'
    const value = 324.23
    return(
        <View style={styles.container}>
            <Text style={styles.categoryName}>{categoryName}: </Text>
            <Text style={styles.value}>R${value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fcfc99',
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#acacac'
        // height: 200
    },
    categoryName: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
    },
    value: {
        color: '#f00',
        fontSize: 18,
    }
})

export default TotalCategory