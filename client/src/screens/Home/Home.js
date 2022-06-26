import React from 'react'
import { View, StyleSheet } from 'react-native'
import TotalProgressBar from '../../components/TotalProgressBar/TotalProgressBar'
import TotalCategory from '../../components/TotalCategory/TotalCategory'

const Home = () => {
    return (
        <View style={styles.container}>
            <TotalProgressBar/>
            <View style={styles.totalCategory}>
                <TotalCategory/>
                <TotalCategory/>
                <TotalCategory/>
                <TotalCategory/>
                <TotalCategory/>
                <TotalCategory/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#000'
    },
    totalCategory: {
        
    }
})

export default Home