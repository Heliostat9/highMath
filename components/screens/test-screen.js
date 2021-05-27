import React, {useState} from 'react';
import {Text,View,ScrollView,TextInput,Button,TouchableOpacity, TouchableOpacityBase, Alert} from 'react-native';
import {Radio, RadioGroup,RadioButton} from "radio-react-native";
function TestScreen({route}) {
    const {tests, name} = route.params;
    const [answer, setAnswer] = useState([]);
    const [count, setCount] = useState(0);
    return (
        <View>
            <Text>Название теста:{name}</Text>
            
            {tests.map((item, index) =>{
                
                return (
                    
                    <>
                    <Text>
                        Вопрос {index + 1}: {item.title}
                    </Text>
                    <RadioGroup
                        
                        onChoose={(value) => {
                            setAnswer([...answer.slice(0, index), value, ...answer.slice(index+1)])
                        }}
                    >
                    {item.choices.map((item, index) => {

                            return (
                            
                            <RadioButton value={item} style={{flexDirection: 'row', padding: 5}}>
                                <Text style={{marginRight: 10}}>{index+1}. {item}</Text>
                                <Radio />
                            </RadioButton>
                            
                            )
                        })}
                    </RadioGroup>
                    </>
                )
            })}

            <TouchableOpacity onPress={ () => {
                fetch('http://localhost:3000/test', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                      },
                    body: JSON.stringify({
                        tests: tests,
                        answer: answer
                    })
                }).then(res => 
                    res.json()
                ).then(res => {

                    Alert.alert('Количество правильных вариантов: ' + res);
                })


            }}>
                <Text>
                    Отправить
                </Text>
            </TouchableOpacity>
            
        </View>
    )
}

export default TestScreen;