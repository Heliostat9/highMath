import React, {useState,useContext} from 'react'
import {Text,View,ScrollView,TextInput,TouchableOpacity, TouchableOpacityBase} from 'react-native';
import {LoginContext} from '../../login-context';
function SignInScreen({navigation}) {
    const [log, setLog] = useContext(LoginContext);
    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState(false);
    const [errorLogin, setErrorLogin] = useState(false);
    const [errorPass, setErrorPass] = useState(false);

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <View style={{
                width: '20%'
            }}>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 40,
                    fontWeight: 'bold'
                }}>Вход</Text>
                <TextInput 
                    style={{
                        padding: 10,
                        marginTop: 10,
                        borderRadius: 5,
                        fontWeight: 'bold',
                        fontSize: 18
                    }}
                    value={login}
                    onChangeText={(text) => {
                        setLogin(text)
                    }}
                    placeholder="Логин"
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
                    placeholder="Пароль"
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
                    marginTop: 20,
                    borderRadius: 5
                }}
                    onPress={async () => {
                        login.length < 8 ? setErrorLogin(true) : setErrorLogin(false);
                        pass.match(/^(?=.*\w{8})(?=.+\d+)(?=.*[A-Z])/g) ? setErrorPass(false) : setErrorPass(true);
                        
                        if (!errorLogin && !errorPass) {
                            const result = await fetch('http://localhost:3000/auth/login', {
                                method: 'POST',
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    login: login,
                                    pass: pass
                                })
                            }).then(res => res.json()).then(res => {
                                if (res) {
                                    setError(false);
                                    setLog(res);
                                    navigation.navigate('Главная');
                                } else {
                                    setError(true);
                                }
                                
                            })
                            
                        } 
                    }}
                >
                    <Text style={{
                        color: 'white',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 18
                    }}>Войти</Text>
                </TouchableOpacity>
                {error ? <Text>Неверные данные</Text>: <View />}
                <TouchableOpacity style={{
                    marginTop: 20
                }}
                    onPress={() => {
                        navigation.navigate('Регистрация')
                    }}
                >
                    <Text style={{
                        color: '#128DFF',
                        textAlign: 'center'
                    }}>У меня нет аккаунта</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
    
}

export default SignInScreen;