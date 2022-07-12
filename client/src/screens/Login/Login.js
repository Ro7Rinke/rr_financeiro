import { useNavigation, StackActions } from '@react-navigation/native'
import React, {useEffect, useRef, useState} from 'react'
import { Dimensions, View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { colors } from '../../common'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const Login = (props) => {

    const navigation = useNavigation()

    const [emailText, setEmailText] = useState('')
    const [passwordText, setPasswordText] = useState('')
    
    const onLogin = async () => {
        navigation.dispatch(StackActions.replace('Home'))
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerInput}>
                <Text style={styles.text}>Email:</Text>
                <TextInput style={styles.input} 
                    value={emailText}
                    onChangeText={(text) => setEmailText(text)}
                    keyboardType="email-address"/>
            </View>
            <View style={styles.containerInput}>
                <Text style={styles.text}>Senha:</Text>
                <TextInput style={styles.input} 
                    value={passwordText}
                    onChangeText={(text) => setPasswordText(text)}
                    secureTextEntry={true}
                    selectTextOnFocus={true}/>
            </View>
            <TouchableOpacity onPress={onLogin} >
                <Text style={styles.button}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.appBackground,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerInput: {
        margin: 15,
    },
    text: {
        fontSize: 20,
        fontWeight: '400',
        marginLeft: 2,
        marginRight: 5,
        width: 115,
    },
    input: {
        borderRadius: 5,
        width: 250,
        height: 40,
        borderWidth: 2,
        borderColor: colors.borderColor,
        paddingBottom: 5,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10, 
        backgroundColor: '#fff',
        fontSize: 22,
    },
    button: {
        margin: 25,
        borderRadius: 5,
        color: '#fff',
        width: 250,
        height: 50,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: colors.primaryColor,
        fontSize: 22,
        fontWeight: '500',
    },
})

const mapStateToProps = (state) => {
    return {
        
    }
}

export default connect(mapStateToProps)(Login)