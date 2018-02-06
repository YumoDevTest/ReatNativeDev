/**
 * Created by yumodev on 18/2/5.
 */
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Register from '../test1/register'
import TestStyle from './TestSytle'

const HomeScreen = ({navigation}) =>(
    <View >
        <Button
            style={styles.navBtn}
            onPress={()=>navigation.navigate('Details')}
            title="Go to Details"/>

        <Button
            style={styles.navBtn}
            onPress={()=>navigation.navigate('Register')}
            title="Go to Register"/>

        <Button
            style={styles.navBtn}
            onPress={()=>navigation.navigate('TestStyle')}
            title="Go to TestStyle"/>
    </View>
);

const DetailsScreen = ({navigation}) => (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text>Details Screen</Text>
        <Button
            style={styles.navBtn}
            onPress={()=>navigation.navigate('Home')}
            title="Go to Home"/>
    </View>
);

const TestNavigator = StackNavigator({
        Home:{
            screen:HomeScreen,
            navigationOptions:{
               headerTitle:'home'
            }
        },
        Details:{
            screen:DetailsScreen,
            navigationOptions:{
                headerTitle:'details'
            }
        },
        Register:{
            screen:Register,
            navigationOptions:{
                headerTitle:'Register'
            }
        },
        TestStyle:{
            screen:TestStyle,
            navigationOptions:{
                headerTitle:'TestStyle'
            }
        }
    }
);

let styles = StyleSheet.create({
    homeContainer:{
        flex:1,
        flexDirection:'column',
        alignItems:'stretch',
        justifyContent:'flex-start',
        backgroundColor:'red'
    },
    navBtn:{
        marginTop:20,
        backgroundColor:'red'
    }
});



export default TestNavigator;
