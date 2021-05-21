import React, {useState} from 'react'
import {Text,View,ScrollView,TextInput,Button, Image,TouchableOpacity} from 'react-native';
import {WebViewQuillEditor, WebViewQuillViewer} from 'react-native-webview-quilljs'
function ProfileScreen() {

    
    return (
      <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 50,
      }}>
          <View style={{
              width: 250
          }}>
              <Text style={{
                  fontSize: 20,
                  fontWeight: 'bold'
              }}>Хитрин Артём Олегович</Text>
              <Text style={{
                marginTop: 5,
                fontSize: 18,
                color: '#949494'
              }}>ИС-18</Text>
              <Image 
                style={{
                    marginTop: 20,
                    width: 250,
                    height: 250,
                    borderRadius: 10,
                    borderWidth: 1,
                    
                }}
                source={require('../../images/pro.png')}
              />
                <TouchableOpacity>
                    <Text style={{
                        color: '#128DFF',
                        textAlign: 'center',
                        marginTop: 5
                    }}>
                        Установить фото профиля
                    </Text>
                </TouchableOpacity>
          </View>
          <View>
              <Text style={{
                  fontSize: 18,
                  fontWeight: 'bold'
              }}>Домашняя работа на 20.05.2021:</Text>
              <Text>Выполнить упражнение 231, 234, 237 на странице 57</Text>
              
          </View>
      </View>
    )
    
}

export default ProfileScreen;