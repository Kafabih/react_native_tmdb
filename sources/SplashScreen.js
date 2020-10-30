import React,{useEffect} from 'react'
import {SafeAreaView,View,Text,StatusBar} from 'react-native'
import {StackActions} from '@react-navigation/native'

function SplashScreen({navigation,route}){
    useEffect(()=>{
        setTimeout(() => {
            navigation.dispatch(
                StackActions.replace('Homes')
            )
        }, 3000); //3detik
    })
    return(
        <SafeAreaView style={{backgroundColor:'#0F102B',flex:1,alignItems:'center',justifyContent:'center'}}>
            <StatusBar hidden/>
            <Text style={{color:'white', fontSize:40}}>MOVIE DATABASE</Text>
        </SafeAreaView>
    )
}

export default SplashScreen;