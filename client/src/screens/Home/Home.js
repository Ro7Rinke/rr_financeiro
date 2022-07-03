import React, {useRef, useState} from 'react'
import { Dimensions, View, StyleSheet, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import TotalProgressBar from '../../components/TotalProgressBar/TotalProgressBar'
import TotalCategory from '../../components/TotalCategory/TotalCategory'
import Installment from '../../components/Installment/Installment'
// import Icon from 'react-native-vector-icons/FontAwesome'
import { colors } from '../../common'
import { useNavigation } from '@react-navigation/native'
import MonthHeader from '../../components/MonthHeader/MonthHeader'
import moment from 'moment'
import 'moment/locale/pt'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const Home = () => {
    const navigation = useNavigation()

    const [referenceDate, setReferenceDate] = useState(new Date())

    const [totalCategories, setTotalCategories] = useState([
        {id:1, categoryName: 'Mercado', value: 1327.12},
        {id:2, categoryName: 'Alimentação', value: 2171.02},
        {id:3, categoryName: 'Farmácia', value: 45.00},
        {id:4, categoryName: 'Combustível', value: 546.34},
        {id:5, categoryName: 'Outros', value: 54.12},
    ])

    const [installments, setInstallments] = useState([
        {categoryId: 1,id: 1, name: 'Supermercado Big Bom', entryDate: new Date(), valueInstallment: 3894.26, currentInstallment: 1, totalInstallment: 2},
        {categoryId: 4,id: 2, name: 'Fernando Auto Center', entryDate: new Date(), valueInstallment: 3894.26, currentInstallment: 1, totalInstallment: 2},
        {categoryId: 4,id: 3, name: 'Conserto Toyota Suspensão', entryDate: new Date(), valueInstallment: 3894.26, currentInstallment: 1, totalInstallment: 2},
        {categoryId: 2,id: 4, name: 'Farmácia', entryDate: new Date(), valueInstallment: 3894.26, currentInstallment: 1, totalInstallment: 2},
        {categoryId: 3,id: 5, name: 'Mercado', entryDate: new Date(), valueInstallment: 3894.26, currentInstallment: 1, totalInstallment: 2},
        {categoryId: 5,id: 6, name: 'Troca correia dentada civic', entryDate: new Date(), valueInstallment: 3894.26, currentInstallment: 1, totalInstallment: 2},
        {categoryId: 1,id: 7, name: 'Farmácia', entryDate: new Date(), valueInstallment: 3894.26, currentInstallment: 1, totalInstallment: 2},
        {categoryId: 2,id: 8, name: 'Farmácia', entryDate: new Date(), valueInstallment: 3894.26, currentInstallment: 1, totalInstallment: 2},
        {categoryId: 5,id: 9, name: 'Farmácia', entryDate: new Date(), valueInstallment: 3894.26, currentInstallment: 1, totalInstallment: 2},
        {categoryId: 5,id: 10, name: 'Farmácia', entryDate: new Date(), valueInstallment: 3894.26, currentInstallment: 1, totalInstallment: 2},
        {categoryId: 3,id: 11, name: 'Mercado', entryDate: new Date(), valueInstallment: 53.12, currentInstallment: 1, totalInstallment: 1},
        {categoryId: 1,id: 12, name: 'Mercado', entryDate: new Date(), valueInstallment: 53.12, currentInstallment: 1, totalInstallment: 1},
        {categoryId: 1,id: 13, name: 'Mercado', entryDate: new Date(), valueInstallment: 53.12, currentInstallment: 1, totalInstallment: 1},
        {categoryId: 1,id: 14, name: 'Mercado', entryDate: new Date(), valueInstallment: 53.12, currentInstallment: 1, totalInstallment: 1},
        {categoryId: 1,id: 15, name: 'Mercado', entryDate: new Date(), valueInstallment: 53.12, currentInstallment: 1, totalInstallment: 1},
        {categoryId: 1,id: 16, name: 'Mercado', entryDate: new Date(), valueInstallment: 53.12, currentInstallment: 1, totalInstallment: 1},
        {categoryId: 1,id: 17, name: 'Mercado', entryDate: new Date(), valueInstallment: 53.12, currentInstallment: 1, totalInstallment: 1},
        {categoryId: 1,id: 18, name: 'Mercado', entryDate: new Date(), valueInstallment: 53.12, currentInstallment: 1, totalInstallment: 1},
        {categoryId: 1,id: 19, name: 'Mercado', entryDate: new Date(), valueInstallment: 53.12, currentInstallment: 1, totalInstallment: 1},
        {categoryId: 1,id: 20, name: 'Mercado', entryDate: new Date(), valueInstallment: 53.12, currentInstallment: 1, totalInstallment: 1},
    ])

    const [monthList, setMonthList] = useState([
        {id: 1, date: moment('01/01/2021', 'DD/MM/YYYY', true), selected: false},
        {id: 2, date: moment('01/02/2021', 'DD/MM/YYYY', true), selected: false},
        {id: 3, date: moment('01/03/2021', 'DD/MM/YYYY', true), selected: false},
        {id: 4, date: moment('01/04/2021', 'DD/MM/YYYY', true), selected: false},
        {id: 5, date: moment('01/05/2021', 'DD/MM/YYYY', true), selected: false},
        {id: 6, date: moment('01/06/2021', 'DD/MM/YYYY', true), selected: false},
        {id: 7, date: moment('01/07/2021', 'DD/MM/YYYY', true), selected: false},
        {id: 8, date: moment('01/08/2021', 'DD/MM/YYYY', true), selected: false},
        {id: 9, date: moment('01/09/2021', 'DD/MM/YYYY', true), selected: false},
        {id: 10, date: moment('01/10/2021', 'DD/MM/YYYY', true), selected: false},
        {id: 11, date: moment('01/11/2021', 'DD/MM/YYYY', true), selected: false},
        {id: 12, date: moment('01/12/2021', 'DD/MM/YYYY', true), selected: false},
        {id: 21, date: moment('01/01/2022', 'DD/MM/YYYY', true), selected: false},
        {id: 22, date: moment('01/02/2022', 'DD/MM/YYYY', true), selected: false},
        {id: 23, date: moment('01/03/2022', 'DD/MM/YYYY', true), selected: false},
        {id: 24, date: moment('01/04/2022', 'DD/MM/YYYY', true), selected: true},
        {id: 25, date: moment('01/05/2022', 'DD/MM/YYYY', true), selected: false},
        {id: 26, date: moment('01/06/2022', 'DD/MM/YYYY', true), selected: false},
        {id: 27, date: moment('01/07/2022', 'DD/MM/YYYY', true), selected: false},
        {id: 28, date: moment('01/08/2022', 'DD/MM/YYYY', true), selected: false},
        {id: 29, date: moment('01/09/2022', 'DD/MM/YYYY', true), selected: false},
        {id: 210, date: moment('01/10/2022', 'DD/MM/YYYY', true), selected: false},
        {id: 211, date: moment('01/11/2022', 'DD/MM/YYYY', true), selected: false},
        {id: 212, date: moment('01/12/2022', 'DD/MM/YYYY', true), selected: false},
    ])

    const [totalValue, setTotalValue] = useState(2000)
    const [targetValue, setTargetValue] = useState(10000)

    const ref = useRef(null)

    const selectMonth = (id) => {
        ref.current?.scrollToIndex({
            index: monthList.findIndex(element => element.id == id),
            animemated: true,
            viewPosition: 0.5,
            viewOffset: id == 1 ? windowWidth/3 : -windowWidth/3
        })

        let newMonthList = []
        monthList.map(element => {
            newMonthList.push({...element, selected: element.id == id})
        })

        setMonthList(newMonthList)

        setTotalValue(totalValue + 100)
    }

    return (
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
                                initialScrollIndex={monthList.findIndex( element => element.selected)}
                                scrollEnabled={false}
                                getItemLayout={(data, index) => ({length: windowWidth/3, offset: (windowWidth/3) * index, index})}
                                data={monthList}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={item => item.id} />
                            <TotalProgressBar
                                totalValue={totalValue}
                                targetValue={targetValue}/>
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
                    data={installments}
                    renderItem={({item}) => (
                        <Installment 
                            entryDate={item.entryDate}
                            valueInstallment={item.valueInstallment}
                            currentInstallment={item.currentInstallment}
                            totalInstallment={item.totalInstallment} 
                            name={item.name}
                            categoryId={item.categoryId}
                            key={item.id}/> )} />

            <TouchableOpacity
                onPress={() => navigation.navigate('AddInstallment')}
                style={styles.addButtom}>
                <Text style={styles.addButtomText}>➕</Text>
                {/* <Icon name='plus' size={30} color='#01a699' /> */}
            </TouchableOpacity>
        </View>
    )
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

export default Home