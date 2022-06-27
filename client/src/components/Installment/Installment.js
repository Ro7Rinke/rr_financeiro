import React, {useState} from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { formatMoney } from '../../common'

const Installment = (props) => {
    const day = props.entryDate.getDate()
    const month = props.entryDate.getMonth() + 1
    const renderInstallment = props.totalInstallment > 1 
        ? <Text style={styles.textSmall}>{props.currentInstallment}/{props.totalInstallment}</Text>
        : null
    return (
        <View style={styles.container}>
            <View style={styles.containerNameInstalment}>
                <Text style={styles.textBig}>{props.name.substring(0, 20)}</Text>
                {renderInstallment}
            </View>
            <View style={styles.containerValueDate}>
                <Text style={styles.textBig}>R$ {formatMoney(props.valueInstallment, 2, ',', '.')}</Text>
                <View style={styles.containerDate}>
                    <Text style={styles.textSmall}>{day}</Text>
                    <Text style={styles.textSmall}>{month < 10 ? `0${month}` : month}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 15,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#0000ff21',
        marginBottom: 7,
        // borderWidth: 1,
    },
    containerNameInstalment: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '60%',
        marginRight: 10,
    },
    containerValueDate: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    containerDate: {

    },
    textBig: {
        fontSize: 18,
    },
    textSmall: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#444444',
    },
    textInstalment: {
        color: '#444444',
    },
})

export default Installment