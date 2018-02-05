/**
 * Created by yumodev on 18/2/5.
 */
import React from 'react';
import {View, Text, Button} from 'react-native';
import {StackNavigator} from 'react-navigation';

const HomeScreen = ({navigation}) =>(
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text>Home Screen</Text>
        <Button
            onPress={()=>navigation.navigate('Details')}
            title="Go to Details"/>
    </View>
);

const DetailsScreen = ({navigation}) => (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text>Details Screen</Text>
        <Button
            onPress={()=>navigation.navigate('Home')}
            title="Go to Home"/>
    </View>
);

const TestNavigator = StackNavigator(
    {
        Home:{
            screen:HomeScreen,
            navigationOptions:{
                header:{
                    title:'Home'
                }
            }
        },
        Details:{
            screen:DetailsScreen,
            navigationOptions:{
                header:{
                    title:'Details'
                }
            }
        }
    }
);

export default TestNavigator;
