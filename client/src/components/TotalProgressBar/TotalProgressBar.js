import React, {useState} from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress' //"react-native-circular-progress": "^1.3.7"
// import {Circle} from 'react-native-progress' //"react-native-progress": "^5.0.0",
import { formatMoney } from '../../common'

const TotalProgressBar = (props) => {
    // const [totalValue, setTotalValue] = useState(7500)
    // const [targetValue, setTargetValue] = useState(10000)

    const calculateFillPercentage = () => {
        return (props.totalValue * 100 / (props.targetValue > 0 ? props.targetValue : 1))
    }

    const fillPercentage = calculateFillPercentage()

    // const [fillPercentage, setFillPercentage] = useState(calculateFillPercentage())

    

    return(
        <View style={styles.container}>
            <AnimatedCircularProgress
                size={200}
                width={20}
                fill={fillPercentage}
                tintColor={
                    fillPercentage < 25
                        ? '#00aa0055'
                        : fillPercentage < 50
                            ? '#0000aa33'
                            : fillPercentage < 75 
                                ? '#aaaa0033' 
                                : '#aa000033'
                }//'#aaaa0033'//'#0000aa33'//'#00aa0055'//'#aa000033'
                tintColorSecondary={
                    fillPercentage < 25
                        ? '#00ff00'
                        : fillPercentage < 50 
                            ? '#0000aa'
                            : fillPercentage < 75
                                ? '#ffff00'
                                : '#ff0000'
                }//'#ffff00'//'#0000aa'//'#00ff00'//'#ff0000'
                lineCap="round"
                duration={1500}
                // onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor="#3d587544" >
                {
                    (fill) => (
                        <View style={styles.innerCircle}>
                            <Text style={styles.textTotalValue}>
                                R$ {formatMoney((fill * props.totalValue / fillPercentage), 2, ',', '.')}
                            </Text>
                            <View style={styles.slash}/>
                            <Text style={styles.textTargetValue}>
                                R$ {formatMoney(props.targetValue, 2, ',', '.')}
                            </Text>
                        </View>
                    )
                }
            </AnimatedCircularProgress>

            {/* <Circle 
                progress={0.75}
                color='#f00'
                animated={true}
                strokeCap='round'
                showsText={true}
                formatText={(text) => `R$${text},00`}
                unfilledColor='#ddd'
                fill='#00e0ff'
                direction='counter-clockwise'
                thickness={10}
                size={200} /> */}
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
    innerCircle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        // backgroundColor: '#ccc',
    },
    textTotalValue: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#ff0000ff'
    },
    textTargetValue: {
        fontSize: 20,
        // fontWeight: 'bold',
        color: '#00000074'
    },
    slash: {
        height: 2,
        width: '75%',
        backgroundColor: '#00000074',
    },
})

export default TotalProgressBar