import React, {useState} from 'react'
import { View, StyleSheet, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import TotalProgressBar from '../../components/TotalProgressBar/TotalProgressBar'
import TotalCategory from '../../components/TotalCategory/TotalCategory'
import Installment from '../../components/Installment/Installment'
// import Icon from 'react-native-vector-icons/FontAwesome'
import { colors } from '../../common'

const Home = () => {
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

    const [totalValue, setTotalValue] = useState(2000)
    const [targetValue, setTargetValue] = useState(10000)

    return (
        <View style={styles.container}>
            <FlatList keyExtractor={item => item.id}
                    ListHeaderComponent={(
                        <View >
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
                onPress={() => setTotalValue(totalValue + 100)}
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
        backgroundColor: '#29002944',//'#01a69944',
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