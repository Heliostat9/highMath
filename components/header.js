import React from 'react'

import {Text, View, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/drawer';

function Header(props) {
    
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            }}>
          <Text
            selectable={true} 
            style={{
                fontSize: 32,
                fontWeight: 'bold'
            }}>
            Элементы высшей математики
          </Text>
          <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => props.navigation.toggleDrawer()}>
            <Image
                source={require('../images/burger.png')}
                style={{ width: 40, height: 40 }}
          />
          </TouchableOpacity>
        </View>
    )
}

export default Header;