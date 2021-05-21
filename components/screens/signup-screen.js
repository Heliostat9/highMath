import React, {useState} from 'react'
import {Text,View,ScrollView,TextInput,Button,TouchableOpacity} from 'react-native';

function SignUpScreen({navigation}) {
    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [errorLogin, setErrorLogin] = useState(false);
    const [errorPass, setErrorPass] = useState(false);
    const [errorName, setErrorName] = useState(false);
    const [errorSurname, setErrorSurname] = useState(false);

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <View style={{
                width: '20%'
            }}>
                <ScrollView>
                <Text style={{
                        textAlign: 'center',
                        fontSize: 40,
                        fontWeight: 'bold'
                    }}>Регистрация</Text>
                    <TextInput 
                        style={{
                            padding: 10,
                            marginTop: 10,
                            borderRadius: 5,
                            fontWeight: 'bold',
                            fontSize: 18
                        }}
                        placeholder="Фамилия"
                        value={surname}
                        onChangeText={(text) => {
                            setSurname(text)
                        }}
                    />
                    {errorSurname ? <Text style={{
                                        color: '#FE4A4A',
                                        fontWeight: 'bold'
                                    }}>Обязательное поле</Text> : <View/>}
                    <TextInput 
                        style={{
                            padding: 10,
                            marginTop: 10,
                            borderRadius: 5,
                            fontWeight: 'bold',
                            fontSize: 18
                        }}
                        placeholder="Имя"
                        value={name}
                        onChangeText={(text) => {
                            setName(text)
                        }}
                    />
                    {errorName ? <Text style={{
                                        color: '#FE4A4A',
                                        fontWeight: 'bold'
                                    }}>Обязательное поле</Text> : <View/>}
                    <TextInput 
                        style={{
                            padding: 10,
                            marginTop: 10,
                            borderRadius: 5,
                            fontWeight: 'bold',
                            fontSize: 18
                        }}
                        placeholder="Отчество"
                    />
                    <TextInput 
                
                        style={{
                            padding: 10,
                            marginTop: 10,
                            borderRadius: 5,
                            fontWeight: 'bold',
                            fontSize: 18
                        }}
                        placeholder="Придумайте логин"
                        value={login}
                        onChangeText={(text) => {
                            setLogin(text)
                        }}
                    />
                    {errorLogin ? <Text style={{
                                        color: '#FE4A4A',
                                        fontWeight: 'bold'
                                    }}>Логин должен содержать 8 символов</Text> : <View/>}
                    <TextInput 
                        secureTextEntry
                        style={{
                            padding: 10,
                            marginTop: 10,
                            borderRadius: 5,
                            fontWeight: 'bold',
                            fontSize: 18
                        }}
                        placeholder="Придумайте пароль"
                        value={pass}
                        onChangeText={(text) => {
                            setPass(text)
                        }}
                    />
                    {errorPass ? <Text style={{
                                        color: '#FE4A4A',
                                        fontWeight: 'bold'
                                    }}>Пароль должен содержать восемь символов и 
                                    включать как минимум одну цифру и заглавную 
                                    букву  </Text> : <View/>}
                    <TouchableOpacity style={{
                        backgroundColor: '#128DFF',
                        padding: 10,
                        marginTop: 50,
                        borderRadius: 5
                    }}>
                        <Text style={{
                            color: 'white',
                            textAlign: 'center',
                            fontWeight: 'bold',
                            fontSize: 18
                        }}
                        onPress={async () => {
                            surname.length === 0 ? setErrorSurname(true) : setErrorSurname(false);
                            name.length === 0 ? setErrorName(true) : setErrorName(false);
                            
                            login.length < 8 ? setErrorLogin(true) : setErrorLogin(false);
                            pass.match(/^(?=.*\w{8})(?=.+\d+)(?=.*[A-Z])/g) ? setErrorPass(false) : setErrorPass(true);
                        
                            if (!errorLogin && !errorPass && !errorSurname && !errorName) {
                                const result = await fetch('http://localhost:3000/auth/reg', {
                                    method: 'POST',
                                    headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                        name:name,
                                        surname: surname,
                                        login: login,
                                        pass: pass
                                    })
                                }).then(res => res.json()).then(res => {
                                    if (res) {
                                        navigation.navigate('Вход');
                                    } else {
                                        
                                    }
                                    
                                })
                                
                            } 
                        }}
                        >Зарегистрироваться</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                            marginTop: 20
                        }}
                        onPress={() => {
                            navigation.navigate('Вход')
                        }}
                    >
                    <Text style={{
                        color: '#128DFF',
                        textAlign: 'center'
                    }}>У меня есть аккаунт</Text>
                </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    )
    
}

export default SignUpScreen;