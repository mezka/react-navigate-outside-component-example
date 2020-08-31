import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import * as RootNavigation from './RootNavigation';

export default function Home(props) {
    const navigateUsingNavigationProp = () => {
        props.navigation.navigate("About");
    }

    const navigateUsingHelper = () => {
        console.log(RootNavigation.navigate);
        RootNavigation.navigate("About", {});
    }

    return (
        <View>
            <Text>Home</Text>
            <Button onPress={navigateUsingNavigationProp}>Navegar por prop</Button>
            <Button onPress={navigateUsingHelper}>Navegar por helper</Button>
        </View>
    );
}