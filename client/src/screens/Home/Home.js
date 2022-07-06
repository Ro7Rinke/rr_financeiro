import React, {useEffect, useRef, useState} from 'react'
import { Dimensions, View, StyleSheet, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native'

import TotalProgressBar from '../../components/TotalProgressBar/TotalProgressBar'
import TotalCategory from '../../components/TotalCategory/TotalCategory'
import Installment from '../../components/Installment/Installment'
import MonthHeader from '../../components/MonthHeader/MonthHeader'

// import Icon from 'react-native-vector-icons/FontAwesome'

import { colors } from '../../common'

import { useNavigation } from '@react-navigation/native'

import {connect} from 'react-redux'
import store from '../../redux/store'
import * as targetValueAction from '../../redux/actions/targetValueAction' 

import moment from 'moment'
import 'moment/locale/pt'
import { setMonthList } from '../../redux/actions/monthListAction'
import { reloadMonthList } from '../../controller/HomeController'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const Home = (props) => {
    const navigation = useNavigation()

    const [referenceDate, setReferenceDate] = useState(new Date())

    const [totalCategories, setTotalCategories] = useState([
        {id:1, categoryName: 'Mercado', value: 1327.12},
        {id:2, categoryName: 'Alimentação', value: 2171.02},
        {id:3, categoryName: 'Farmácia', value: 45.00},
        {id:4, categoryName: 'Combustível', value: 546.34},
        {id:5, categoryName: 'Outros', value: 54.12},
    ])

    const [totalValue, setTotalValue] = useState(2000)

    const ref = useRef(null)

    const selectMonth = (id) => {
        let newMonthList = []
        props.monthList.map(element => {
            newMonthList.push({...element, selected: element.id == id})
        })

        store.dispatch(setMonthList(newMonthList))
    }

    useEffect(() => {
        reloadMonthList()
    }, [])

    useEffect(() => {
        const index = props.monthList.findIndex(element => element.selected)

        ref.current?.scrollToIndex({
            index,
            animemated: true,
            viewPosition: 0.5,
            viewOffset: index == 0 ? windowWidth/3 : -windowWidth/3
        })
    }, [props.monthList])

    return props.monthList.length > 0 ? (
        <View  style={styles.container}>
            
            <FlatList keyExtractor={item => item.id}
                    ListHeaderComponent={(
                        <View >
                            <FlatList style={{paddingTop: 5}}
                                ref={ref}
                                ListHeaderComponent={(
                                    <View style={{width: windowWidth/3}}></View>
                                )}
                                ListFooterComponent={(
                                    <View style={{width: windowWidth/3}}></View>
                                )}
                                renderItem={({item}) => (
                                    <TouchableOpacity onPress={() => {
                                        selectMonth(item.id)
                                    }} >
                                        <MonthHeader date={item.date} selected={item.selected}/>
                                    </TouchableOpacity>
                                )}
                                //initialScrollIndex={props.monthList.findIndex( element => element.selected)}
                                scrollEnabled={false}
                                getItemLayout={(data, index) => ({length: windowWidth/3, offset: (windowWidth/3) * index, index})}
                                data={props.monthList}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={item => item.id} />
                            <TotalProgressBar
                                totalValue={totalValue}
                                targetValue={props.targetValue}/>
                            <View style={styles.totalCategory} >
                                {
                                    totalCategories.map(totalCategory => 
                                        (<TotalCategory key={totalCategory.id}
                                            categoryId={totalCategory.id}
                                            categoryName={totalCategory.categoryName} 
                                            value={totalCategory.value} />))
                                }
                            </View>
                        </View>
                    )}
                    data={props.installments}
                    renderItem={({item}) => (
                        <Installment
                            installment={item} 
                            // entryDate={item.entryDate}
                            // valueInstallment={item.valueInstallment}
                            // currentInstallment={item.currentInstallment}
                            // totalInstallment={item.totalInstallment} 
                            // name={item.name}
                            // categoryId={item.categoryId}
                            key={item.id}/> )} />

            <TouchableOpacity
                onPress={() => navigation.navigate('AddInstallment')}
                style={styles.addButtom}>
                <Text style={styles.addButtomText}>➕</Text>
                {/* <Icon name='plus' size={30} color='#01a699' /> */}
            </TouchableOpacity>
        </View>
    ) : (<View></View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.appBackground,
    },
    addButtom: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        position: 'absolute',
        bottom: 10,
        right: 10,
        height: 70,
        backgroundColor: colors.secondaryColor,//'#29002944',//'#01a69944',
        borderRadius: 100,
    },
    addButtomText: {
        color: '#01a699',
        fontWeight: 'bold',
        fontSize: 30,
    },
    totalCategory: {
        
    },
})

const mapStateToProps = (state) => {
    return {
        targetValue: state.targetValue,
        installments: state.installments,
        monthList: state.monthList,
    }
}

export default connect(mapStateToProps)(Home)