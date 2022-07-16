import React, {useEffect, useRef, useState} from 'react'
import { Dimensions, View, StyleSheet, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native'

import TotalProgressBar from '../../components/TotalProgressBar/TotalProgressBar'
import TotalCategory from '../../components/TotalCategory/TotalCategory'
import Installment from '../../components/Installment/Installment'
import MonthHeader from '../../components/MonthHeader/MonthHeader'

// import Icon from 'react-native-vector-icons/FontAwesome'

import { colors, getReferenceDate, toArray } from '../../common'

import { useNavigation } from '@react-navigation/native'

import {connect} from 'react-redux'
import store from '../../redux/store'

import moment from 'moment'
import 'moment/locale/pt'

import { setMonthList } from '../../redux/actions/monthListAction'
import { reloadMonthList } from '../../controller/HomeController'
import { reloadInstallments } from '../../controller/InstallmentController.js'
import { reloadCategories } from '../../controller/CategoryController'
import { removeInstallmentsById } from '../../redux/actions/installmentsAction'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const Home = (props) => {
    const navigation = useNavigation()

    const [refreshing, setRefreshing] = useState(false)

    const [totalCategories, setTotalCategories] = useState([
        // {id:1, categoryName: 'Mercado', value: 1327.12},
        // {id:2, categoryName: 'Alimentação', value: 2171.02},
        // {id:3, categoryName: 'Farmácia', value: 45.00},
        // {id:4, categoryName: 'Combustível', value: 546.34},
        // {id:5, categoryName: 'Outros', value: 54.12},
    ])

    const [totalValue, setTotalValue] = useState(0)

    const ref = useRef(null)

    const calculateTotal = () => {
        let newTotalCategoriesObject = {}
        let newTotalValue = 0

        for(const category of props.categories){
            let newTotalCategory = {
                id: category.id,
                categoryName: category.name,
                value: 0
            }
            newTotalCategoriesObject[`${newTotalCategory.id}`] = newTotalCategory
        }

        const referenceDate = getReferenceDate(props.monthList[props.monthList.findIndex(element => element.selected)].date)
        if(props.installments[referenceDate]){
            for(const installment of props.installments[referenceDate]){
                if(newTotalCategoriesObject[`${installment.categoryId}`])
                    newTotalCategoriesObject[`${installment.categoryId}`].value += installment.valueInstallment

                newTotalValue += installment.valueInstallment
            }
        }

        setTotalValue(newTotalValue)
        setTotalCategories(toArray(newTotalCategoriesObject))
    }

    useEffect(() => {
        calculateTotal()
    }, [props.categories, props.installments, props.monthList])

    const selectMonth = (id) => {
        let newMonthList = []
        props.monthList.map(element => {
            newMonthList.push({...element, selected: element.id == id})
        })

        store.dispatch(setMonthList(newMonthList))
    }

    useEffect(() => {
        reloadMonthList()
        reloadCategories()
    }, [])

    const refreshInstallmentsByMonth = async () => {
        setRefreshing(true)
        const index = props.monthList.findIndex(element => element.selected)

        let date = moment(props.monthList[index].date)

        await reloadInstallments(props.idAccount, date.month()+1, date.year())

        setRefreshing(false)
    }

    useEffect(() => {
        const index = props.monthList.findIndex(element => element.selected)

        if(index >= 0){
            let date = moment(props.monthList[index].date)
            const referenceDate = getReferenceDate(date)
            if(!Array.isArray(props.installments[referenceDate]) || props.installments[referenceDate].length == 0)
                refreshInstallmentsByMonth()

            ref.current?.scrollToIndex({
                index,
                animemated: true,
                viewPosition: 0.5,
                viewOffset: index == 0 ? windowWidth/3 : -windowWidth/3
            })
        }
    }, [props.monthList])

    return props.monthList.length > 0 ? (
        <View  style={styles.container}>
            
            <FlatList keyExtractor={item => item.id}
                    onRefresh={refreshInstallmentsByMonth}
                    refreshing={refreshing}
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
                    ListFooterComponent={(<View style={{height: 70}} />)}
                    data={props.installments[getReferenceDate(props.monthList[props.monthList.findIndex(element => element.selected)].date)]}
                    renderItem={({item}) => (
                        <Installment
                            installment={item} 
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
        categories: state.categories,
        idAccount: state.idAccount,
    }
}

export default connect(mapStateToProps)(Home)