import React, {useState} from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Modal } from 'react-native'
import { colors, formatMoney } from '../../common'

const Installment = (props) => {
    const day = props.entryDate.getDate()
    const month = props.entryDate.getMonth() + 1
    const dayText = day < 10 ? `0${day}` : day
    const monthText = month < 10 ? `0${month}` : month
    const year = props.entryDate.getFullYear()
    
    const renderInstallment = props.totalInstallment > 1 
        ? <Text style={styles.textSmall}>{props.currentInstallment}/{props.totalInstallment}</Text>
        : null

    const [showDeleteModal, setShowDeleteModal] = useState(false)

    return (
        <View>
            <TouchableOpacity onLongPress={() => setShowDeleteModal(true)} >
                <View style={styles.container}>
                    <View style={[styles.categoryColor, {backgroundColor: colors.categories[`${props.categoryId}`]}]} />
                    <View style={styles.containerNameInstalment}>
                        <Text style={props.name.length <= 20 ? styles.textBig : [styles.textBig, {fontSize: 15}]}>{props.name.substring(0, 25)}</Text>
                        {renderInstallment}
                    </View>
                    <View style={styles.containerValueDate}>
                        <Text style={styles.textBig}>R$ {formatMoney(props.valueInstallment, 2, ',', '.')}</Text>
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
                        <Text style={styles.modalText}>Deletar o lançamento {props.name}</Text>
                        <Text style={styles.modalText}>R$ {formatMoney(props.valueInstallment, 2, ',', '.')} - {dayText}/{monthText}/{year}</Text>
                        <View style={styles.modalButtonsContainer}>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonDelete]}
                                onPress={() => setShowDeleteModal(!showDeleteModal)}
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