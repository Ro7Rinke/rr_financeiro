import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
// import { AnimatedCircularProgress } from 'react-native-circular-progress' //"react-native-circular-progress": "^1.3.7"
import {Circle} from 'react-native-progress'
const TotalProgressBar = () => {
    return(
        <View style={styles.container}>
            {/* <AnimatedCircularProgress
                size={200}
                width={20}
                fill={75}
                tintColor="#00e0ff"
                tintColorSecondary="#f00"
                lineCap="round"
                duration={1500}
                // onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor="#3d5875" >
                {
                    (fill) => (
                    <Text>
                        { fill }
                    </Text>
                    )
                }
            </AnimatedCircularProgress> */}

            <Circle 
                progress={0.75}
                color='#f00'
                animated={true}
                strokeCap='round'
                showsText={true}
                formatText={(text) => `R$${text}`}
                unfilledColor='#ddd'
                fill='#00e0ff'
                direction='counter-clockwise'
                thickness={10}
                size={200} />
        </View>
    ) 
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#000',
        paddingTop: 15,
        paddingBottom: 15,
        // height: 500
    },

})

export default TotalProgressBar