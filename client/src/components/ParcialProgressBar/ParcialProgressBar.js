import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {Bar} from 'react-native-progress'

const ParcialProgressBar = () => {
    return(
        <View style={styles.container}>
            <Bar 
                progress={0.4}
                width={200}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ccc',
        paddingTop: 15,
        paddingBottom: 15,
        height: 200
    },

})

export default ParcialProgressBar