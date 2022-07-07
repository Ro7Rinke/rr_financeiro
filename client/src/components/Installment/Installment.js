import React, {useState} from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Modal } from 'react-native'
import { colors, formatMoney } from '../../common'

import store from '../../redux/store'
import * as installmentsAction from '../../redux/actions/installmentsAction' 
import moment, { isMoment } from 'moment'

const Installment = (props) => {
    const entryDate = isMoment(props.installment.entryDate) ? props.installment.entryDate : moment(props.installment.entryDate)
    const dayText = entryDate.format('DD')
    const monthText = entryDate.format('MM')
    const year = entryDate.format('YYYY')
    
    const renderInstallment = props.installment.totalInstallment > 1 
        ? <Text style={styles.textSmall}>{props.installment.currentInstallment}/{props.installment.totalInstallment}</Text>
        : null

    const [showDeleteModal, setShowDeleteModal] = useState(false)

    const deleteInstallment = () => {

        store.dispatch(installmentsAction.removeInstallment(props.installment))

        setShowDeleteModal(!showDeleteModal)
    }

    return (
        <View>
            <TouchableOpacity onLongPress={() => setShowDeleteModal(true)} >
                <View style={styles.container}>
                    <View style={[styles.categoryColor, {backgroundColor: colors.categories[`${props.installment.categoryId}`]}]} />
                    <View style={styles.containerNameInstalment}>
                        <Text style={props.installment.name.length <= 20 ? styles.textBig : [styles.textBig, {fontSize: 15}]}>{props.installment.name.substring(0, 25)}</Text>
                        {renderInstallment}
                    </View>
                    <View style={styles.containerValueDate}>
                        <Text style={styles.textBig}>R$ {formatMoney(props.installment.valueInstallment, 2, ',', '.')}</Text>
                        <View style={styles.containerDate}>
                            <Text style={styles.textSmall}>{dayText}</Text>
                            <Text style={styles.textSmall}>{monthText}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <Modal animationType="slide"
                transparent={true}
                visible={showDeleteModal}
                onRequestClose={() => {
                    setShowDeleteModal(!showDeleteModal);
                }} >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Deletar o lançamento {props.installment.name}</Text>
                        <Text style={styles.modalText}>R$ {formatMoney(props.installment.valueInstallment, 2, ',', '.')} - {dayText}/{monthText}/{year}</Text>
                        <View style={styles.modalButtonsContainer}>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonDelete]}
                                onPress={deleteInstallment}
                            >
                                <Text style={[styles.textStyle]}>Deletar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setShowDeleteModal(!showDeleteModal)}
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
        borderRadius: 5,
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 15,
        paddingRight: 10,
        // paddingVertical: 5,
        backgroundColor: '#0000ff21',
        marginBottom: 7,
        // borderWidth: 1,
        borderWidth: 1,
        borderColor: colors.borderColor,
    },
    categoryColor: {
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        width: 10,
        height: '100%',
        backgroundColor: '#000',
        marginRight: 5,
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
        marginVertical: 2,
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
    }
})

export default Installment