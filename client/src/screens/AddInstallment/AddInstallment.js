import React, {useState} from 'react'
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import {colors} from '../../common'
import { MaskedTextInput } from "react-native-mask-text"
import DateTimePicker from '@react-native-community/datetimepicker'
import {Picker} from '@react-native-picker/picker'
import { useNavigation, StackActions } from '@react-navigation/native'

const AddInstallment = (props) => {
    const navigation = useNavigation()

    const [nameText, setNameText] = useState('')

    const [totalValueText, setTotalValueText] = useState('')

    const [totalInstallmentsText, setTotalInstallmentsText] = useState('1')

    const [date, setDate] = useState(new Date())
    const [datePickerOpen, setDatePickerOpen] = useState(false)

    const [category, setCategory] = useState(5)
    const [categories, setCategories] = useState([
        {name: 'Mercado', id: 1},
        {name: 'Alimentação', id: 2},
        {name: 'Farmácia', id: 3},
        {name: 'Combustível', id: 4},
        {name: 'Outros', id: 5},
    ])

    const onDateChange = (event, newDate) => {
        setDate(newDate)
        setDatePickerOpen(false)
    }

    const onAddInstallment = () => {
        if(checkFields()){
            navigation.dispatch(StackActions.popToTop('Home'))
        }else{
            alert('Por favor preencha todos os campos!')
        }
    }

    const checkFields = () => {
        if(!nameText)   
            return false
            
        if(!totalInstallmentsText || parseInt(totalInstallmentsText) <= 0)
            return false

        return true
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Nome:</Text>
                <TextInput
                value={nameText}
                onChangeText={(newText) => setNameText(newText)}
                style={[styles.textInput, styles.textInputName]} 
                maxLength={25} />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Valor Total:</Text>
                <MaskedTextInput
                type="currency"
                options={{
                    prefix: 'R$',
                    decimalSeparator: ',',
                    groupSeparator: '.',
                    precision: 2
                }}
                onChangeText={(formatted, extracted) => setTotalValueText(extracted)}
                style={styles.textInput}
                keyboardType="numeric" />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Nº Parcelas:</Text>
                <TextInput
                value={totalInstallmentsText}
                selectTextOnFocus={true}
                onChangeText={(newText) => setTotalInstallmentsText(newText.replace(/\D/g, ''))}
                style={[styles.textInput, styles.textInputInstallment]} 
                maxLength={2}
                textAlign='center'
                keyboardType="numeric" />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Data:</Text>
                <TouchableOpacity onPress={() => {
                    if(!datePickerOpen)
                        setDatePickerOpen(true)
                }}>
                    <Text style={[styles.textInput, styles.textDate]}>{date.toLocaleDateString()}</Text>
                </TouchableOpacity>
            </View>
            {datePickerOpen && (<DateTimePicker
                value={date}
                mode={'date'}
                is24Hour={true}
                onChange={onDateChange} />
            )}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Categoria:</Text>
                <View style={[styles.categoryColor, {backgroundColor: colors.categories[`${category}`]}]} />
                <Picker style={[styles.textInput, styles.pickerCategory]}
                    onValueChange={(newCategory => setCategory(newCategory))}
                    selectedValue={category} >
                    {categories.map(item => 
                        (<Picker.Item style={styles.pickerItem} key={item.id} label={item.name} value={item.id}/>)
                    )}
                </Picker>
            </View>
            <View style={styles.buttonContainer} >
                <TouchableOpacity onPress={onAddInstallment} >
                    <Text style={styles.button}>Adicionar Lançamento</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.appBackground,
        paddingVertical: 60,
        // justifyContent: 'flex-end',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        fontSize: 20,
        fontWeight: '500',
        marginLeft: 12,
        marginRight: 5,
        width: 115,
        textAlign: 'right',
    },
    textInput: {
        borderRadius: 5,
        width: 150,
        height: 40,
        margin: 12,
        borderWidth: 2,
        borderColor: colors.borderColor,//'#29002944',
        paddingBottom: 5,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10, 
        backgroundColor: '#fff',
        fontSize: 22,
    },
    textInputInstallment: {
        width: 50,
    },
    textInputName: {
        flex: 1,
    },
    textDate: {
        width: '100%',
        color: '#000',
        paddingTop: 5,
        borderWidth: 2,
    },
    categoryColor: {
        width: 15,
        height: '70%',
    },
    pickerCategory: {
        width: 170,
        marginLeft: 0,
    },
    pickerItem: {
        // borderColor: '#000',
        // borderWidth: 5,
        // fontSize: 15,
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        // marginBottom: 60,
        // marginBottom: 30,
    },
    button: {
        borderRadius: 5,
        color: '#fff',
        width: 230,
        height: 50,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: colors.primaryColor,//'#8c25a1aa',
        fontSize: 18,
        fontWeight: '500',
    },
})

export default AddInstallment