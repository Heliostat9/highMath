import React, {useState} from 'react';
import {ScrollView,View, Text,ImageBackground,TouchableOpacity, Linking,TextInput,Image,Pressable, Alert} from 'react-native';




function ArticleNew({title, desc, imgSrc, category, url}) {
    const [hover, setHover] = useState(false);
    return (
        <TouchableOpacity onPress={async () => {
            await Linking.openURL('http://localhost:3000/doc/' + url);
        }}>
            <View style={{
                marginTop: 10,
                flexDirection:'row',
                borderWidth: 1,
                borderColor: hover ? '#128DFF' : '#E5E5E5', 
                borderRadius: 10,
            }} 
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            >
            <View style={{
                width: '20%',
                height: 150,
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10
            }}>
                <Image 
                    source={{uri: imgSrc}}
                    style={{
                        width: '100%',
                        height: 150
                    }}
                />
            </View>
            <View style={{
                width: '80%',
                paddingLeft: 10,
                paddingBottom: 5,
                paddingTop: 5,
                paddingRight: 20,
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10
            }}>
                <Text style={{
                    fontSize: 18,
                    fontWeight: 'bold'
                    
                }}>{title}</Text>
                <Text style={{
                    flex: 1
                }}>
                    {desc.slice(0, 350)}
                </Text>
                <Text style={{
                    color: '#128DFF',
                    fontWeight: 'bold',
                    
                }}>{category}</Text>
            </View>
        </View>  
    </TouchableOpacity>           
    )
}

export default ArticleNew;