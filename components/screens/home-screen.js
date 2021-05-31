import React, {useState, useEffect} from 'react'
import {ScrollView,View, Text,ImageBackground,Linking, TextInput,Pressable,Image, TouchableHighlight, Button} from 'react-native';
import Article from '../blocks/article';
import ArticleNew from '../blocks/articleNew';
import { useIsFocused } from "@react-navigation/native";
function HomeScreen() {
    const [query, setQuery] = useState('');
    const [content, setContent] = useState([]);
    const isFocused = useIsFocused();
    useEffect(() => {
        if (content) {
            fetch('http://localhost:3000/', {
                mode: 'no-cors',
            })
            .then(res => res.json())
            .then(res => setContent(res));
        }     
    },[isFocused]);

    return (
        <View style={{
            marginTop: 50,
            flexDirection: 'row',
            flex: 1
        }}>
            
            <ScrollView style={{
                width: "75%",
                paddingRight: 5, 
                flex: 1
            }}>
                <View>
                    <ImageBackground 
                        source={require('../../images/math.jpg')}
                        style={{
                            width: '100%',
                            height: 332,
                            borderRadius: 10,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Text style={{
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: 38,
                            textAlign: 'center',
                            paddingLeft: 60,
                            paddingRight: 60
                        }}>
                            Электронная учебное пособие по элементам высшей математики
                        </Text>
                    </ImageBackground>


                </View>
                <View style={{
                    marginTop: 30
                }}>
                    <Text style={{
                        fontSize: 30,
                        fontWeight: 'bold'
                    }}>Новые лекции</Text>
                    {content.filter(item => (item.type == 'Лекция') > 0).slice(-3).map(item => {
                        const {_id, title,url, desc, imgSrc, category} = item;
                        return <ArticleNew key={_id} title={title} url={url} desc={desc} imgSrc={imgSrc} category={category}/>
                    })}
                    <Text style={{
                        marginTop: 20,
                        fontSize: 30,
                        fontWeight: 'bold'
                    }}>Новые тесты</Text>
                    {content.filter(item => (item.type == 'Тест') > 0).slice(-3).map(item => {
                        const {_id, title, desc,url, imgSrc, category} = item;
                        return <ArticleNew key={_id} title={title} url={url} desc={desc} imgSrc={imgSrc} category={category}/>
                    })}
                    <Text style={{
                        marginTop: 20,
                        fontSize: 30,
                        fontWeight: 'bold'
                    }}>Новые практические</Text>
                    {content.filter(item => (item.type == 'Практическая') > 0).slice(-3).map(item => {
                        const {_id, title, desc,url, imgSrc, category} = item;
                        return <ArticleNew key={_id} title={title} url={url} desc={desc} imgSrc={imgSrc} category={category}/>
                    })}
                    <Text style={{
                        marginTop: 20,
                        fontSize: 30,
                        fontWeight: 'bold'
                    }}>Новые контрольные</Text>
                    {content.filter(item => (item.type == 'Контрольная') > 0).slice(-3).map(item => {
                        const {_id, title,url, desc, imgSrc, category} = item;
                        return <ArticleNew key={_id} title={title} url={url} desc={desc} imgSrc={imgSrc} category={category}/>
                    })}
                </View>
            </ScrollView>
            <View style={{
                marginLeft: 20,
                paddingRight: 5,
                width: '25%',
            }}>
                <TextInput 
                    placeholder="Поиск"
                    style={{
                        borderRadius: 5,
                        paddingTop: 10,
                        paddingBottom: 10,
                        paddingLeft: 5,
                        fontWeight: 'bold',
                        fontSize: 16
                        
                    }}
                    onChangeText={query => setQuery(query)}
                />
                {query === '' ? null :
                    <>
                        <Text style={{
                            fontSize: 30,
                            fontWeight: 'bold'
                        }}>Результаты поиска</Text>
                        <View>
                            <Text style={{
                                fontSize: 16,
                                color: '#949494'
                            }}>найдено: {content.filter(item => item.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) > -1).length}</Text>
                        </View>
                        <ScrollView> 
                            <View style={{flex: 1, height: '100%'}}>
                                {content.filter(item => item.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) > -1).map(item => {
                                    const {_id,title,url, category, imgSrc} = item;
                                    return <Article key={_id} url={url} title={title} category={category} imgSrc={imgSrc} />
                                })}
                            </View>
                        </ScrollView>
                    </>
                }
                <Text></Text>
            </View>
        </View>
    )
}

export default HomeScreen;