import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {LoginContext} from '../../login-context';
function LogoutScreen({navigation}) {
    const [log, setLog] = useContext(LoginContext);
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <View style={{
                width: 350,
                height: 250,
                borderColor: 'black',
                borderWidth: 1
            }}> 
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold'
                    }}>Вы точно хотите выйти?</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <TouchableOpacity onPress={() => {
                        setLog(null);
                        navigation.navigate('Главная');
                    }}
                        style={{width: '50%',padding: 10, backgroundColor: 'red', alignItems: 'center'}}>
                        <Text style={{color: 'white', fontWeight: 'bold'}}>Да</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Профиль');
                    }}
                        style={{width: '50%',padding: 10, backgroundColor: 'green', alignItems: 'center'}}>
                        <Text  style={{color: 'white', fontWeight: 'bold'}}>Нет</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default LogoutScreen;