import AsyncStorage from '@react-native-async-storage/async-storage'
import React, {useState} from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Modal, TextInput } from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress' 
import { MaskedTextInput } from 'react-native-mask-text'
import { colors, formatMoney } from '../../common'
import { setTargetValue } from '../../redux/actions/targetValueAction'
import store from '../../redux/store'

const TotalProgressBar = (props) => {

    const [showModal, setShowModal] = useState(false)
    const [newTargetValue, setNewTargetValue] = useState(0)

    const calculateFillPercentage = () => {
        return (props.totalValue * 100 / (props.targetValue > 0 ? props.targetValue : 1))
    }

    const fillPercentage = calculateFillPercentage()

    const onUpdateTargetValue = () => {
        store.dispatch(setTargetValue(newTargetValue))
        AsyncStorage.setItem('targetValue', newTargetValue.toString())
        setShowModal(!showModal)
    }
  
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
                backgroundColor="#3d587544" >
                {
                    (fill) => (
                        <TouchableOpacity style={styles.innerCircle}
                            onPress={() => setShowModal(!showModal)} >
                            <Text style={styles.textTotalValue}>
                                R$ {formatMoney((fill * props.totalValue / fillPercentage), 2, ',', '.')}
                            </Text>
                                <View style={styles.slash}/>
                                {props.targetValue > 0 ? <Text style={styles.textTargetValue}>
                                    R$ {formatMoney(props.targetValue, 2, ',', '.')}
                                </Text> : null}
                        </TouchableOpacity>
                    )
                }
            </AnimatedCircularProgress>
            <Modal animationType='fade'
            transparent={true}
            visible={showModal}
            onRequestClose={() => {
                setShowModal(!showModal);
            }} >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Valor da meta.</Text>
                        {/* <TextInput style={styles.textInput}
                            defaultValue={formatMoney(props.targetValue, 2, ',', '.')}/> */}
                        <MaskedTextInput
                            defaultValue={`${props.targetValue*100}`}
                            onSubmitEditing={onUpdateTargetValue}
                            type="currency"
                            options={{
                                prefix: 'R$',
                                decimalSeparator: ',',
                                groupSeparator: '.',
                                precision: 2
                            }}
                            onChangeText={(formatted, extracted) => setNewTargetValue(extracted/100)}
                            style={styles.textInput}
                            keyboardType="numeric" />
                        <View style={styles.modalButtonsContainer}>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonDelete]}
                                onPress={onUpdateTargetValue}
                            >
                                <Text style={[styles.textStyle]}>Atualizar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setShowModal(!showModal)}
                            >
                                <Text style={styles.textStyle}>Cancelar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalButtonsContainer: {
        flexDirection: 'row',
    },
    button: {
        borderRadius: 30,
        padding: 15,
        elevation: 2,
        marginTop: 10,
        marginHorizontal: 15,
        width: 120,
    },
    buttonDelete: {
        backgroundColor: "#ff0000",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 15,
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 18,
        color: colors.label,
    },
    textInput: {
        borderRadius: 5,
        width: 150,
        height: 40,
        margin: 12,
        borderWidth: 2,
        borderColor: colors.borderColor,
        paddingBottom: 5,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10, 
        backgroundColor: colors.appBackground,
        color: '#000',
        fontSize: 22,
    },
})

export default TotalProgressBar