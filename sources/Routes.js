import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const Stack = new createStackNavigator();

//screen
import SplashScreen from './SplashScreen'
import Homes from './Homes'

function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="SplashScreen" component={SplashScreen} options={({navigation,route})=>({
                    headerShown:false
                })}/>
                <Stack.Screen name="Homes" component={Homes} options={({navigation,route})=>({
                    headerShown:false
                })}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;