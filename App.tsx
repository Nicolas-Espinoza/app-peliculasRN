import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
//importamos la navegacion creada anteriormente
import { MyNavigation } from './src/navigation/Navigation';

const App = () => {
    return (
        <NavigationContainer>
            <MyNavigation />
        </NavigationContainer>
    )
}

export default App;