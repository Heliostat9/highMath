import React, {useState, useEffect} from 'react'
import {Text,View,ScrollView,TextInput,Button} from 'react-native';
import Dates from 'react-native-dates';
import ArticleTest from '../blocks/articleTest';
import DropDownPicker from 'react-native-dropdown-picker';

import {TestScreen} from '../screens/test-screen';
import { useIsFocused } from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

function TestsScreen({navigation}) {
    const [query, setQuery] = useState('');
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('Все темы');
    const [items, setItems] = useState([
        {label: 'Все темы', value: 'Все темы'},
        {label: 'Теория множеств', value: 'Теория множеств'},
        {label: 'Линейная алгебра', value: 'Линейная алгебра'}
    ]);
    const [openr, setOpenr] = useState(false);
    const [values, setValues] = useState(null);
    const [order, setOrder] = useState([
        {label: 'По умолочанию', value: 'По умолочанию'}
    ]);

    const [content, setContent] = useState([]);
    const isFocused = useIsFocused();
    useEffect(() => {
        if (content) {
            fetch('http://localhost:3000/')
            .then(res => res.json())
            .then(res => setContent(res.filter(item => (item.type==="Тест") > 0)));
    }
        }
        ,[isFocused])
        let conter = [];
        if (value !== 'Все темы') {
            conter = content.filter(item => (item.category == value) > 0);
        } else {
            conter = content;
        }
    
        return (
            
            <View style={{
                marginTop: 50,
                flex: 1,
                flexDirection: 'row'
            }}>
                
                <ScrollView style={{
                    width: '65%',
                    paddingRight: 5,
    
                }}>
                    <View>
                        <TextInput 
                        placeholder="Поиск по тестам"
                        style={{
                            borderRadius: 5,
                            paddingTop: 10,
                            paddingBottom: 10,
                            paddingLeft: 5,
                            fontWeight: 'bold',
                            fontSize: 16,
                        }}
                        onChangeText={query => setQuery(query)}
                        />
                        <Text style={{
                                marginTop: 20,
                                fontSize: 30,
                                fontWeight: 'bold'
                            }}>Результаты поиска</Text>
                        <Text style={{
                                    fontSize: 16,
                                    color: '#949494',
                                    marginBottom: 10
                                }}>найдено: {conter.filter(item => item.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) > -1).length}</Text>
                    {
    
                    conter.filter(item => item.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) > -1).map(item => {
                    const {_id,title, category, imgSrc, desc, tests,name} = item;
                    
                    return (<><ArticleTest navigation={navigation} tests={tests} name={name} key={_id} title={title} category={category} desc={desc} imgSrc={imgSrc} />
                    </>)})}              
                    </View>
                </ScrollView>
                <View style={{
                    width: '35%',
                    paddingLeft: 30,
                    
                }}>
                    <View>
                        <Text style={{
                            fontSize: 40,
                            fontWeight: 'bold',
                            marginBottom: 20
                        }}>Фильтрация</Text>
                        <DropDownPicker
                            placeholder="Выбор темы"
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                            searchchable
                            zIndex = { 3000 }
                            zIndexInverse = { 1000 }
                            containerStyle={{
                                marginBottom: 20
                            }}
                        />
                        
    
                    </View>
                </View>
            </View>
           
        )
    
}

export default TestsScreen;