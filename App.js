/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useContext} from 'react';

import {
  Alert,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';

import {LecturesScreen, TestsScreen, HomeScreen, LogoutScreen, SignInScreen, SignUpScreen, ControlScreen, PracticeScreen, ProfileScreen} from './components/screens/';
import Header from './components/header';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {LoginContext} from './login-context';
const Drawer = createDrawerNavigator();


const App = () => {
  const [log, setLog] = useState(null);
  return (
      <NavigationContainer>
        <LoginContext.Provider value={[log, setLog]}>
                
                <Drawer.Navigator 
                    sceneContainerStyle={{
                      backgroundColor: 'white',
                      padding: 20
                    }}
                    drawerStyle={{
                      width: 350
                    }}
                    initialRouteName="Lectures" 
                    drawerPosition="right"
                    drawerContentOptions={{
                      activeBackgroundColor: 'transparent',
                      activeTintColor: '#128DFF',
                      inactiveTintColor: 'black',
                      labelStyle: {
                        fontSize: 40,
                        fontWeight: 'bold'
                      }
                    }}
                    screenOptions={{
                      headerShown: true,
                      header: ({scene}) => {
                        const {descriptor} = scene;
                        const {navigation} = descriptor;
                        return (<Header navigation={navigation}/>)
                      }
                    }}
                    
                  
                  >
                  <Drawer.Screen name="Главная" component={HomeScreen} />
                  <Drawer.Screen name="Лекции" component={LecturesScreen} />
                  {
                  log ? <>
                  <Drawer.Screen name="Тесты" component={TestsScreen} />
                  <Drawer.Screen name="Практические" component={PracticeScreen} />
                  <Drawer.Screen name="Контрольные" component={ControlScreen} />
                  <Drawer.Screen name="Профиль" component={ProfileScreen} />
                  <Drawer.Screen name="Выйти" component={LogoutScreen} />
                  
                </> : <>
                  <Drawer.Screen name="Вход" component={SignInScreen} />
                  <Drawer.Screen name="Регистрация" component={SignUpScreen} />
                </>}
                </Drawer.Navigator>
              </LoginContext.Provider>
      </NavigationContainer>
  );
};

export default App;
