/**
 * Created by yumodev on 17/9/10.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
//
// export default class setup extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text style={styles.welcome}>
//                     Welcome to React Native!
//                 </Text>
//                 <Text style={styles.instructions}>
//                     To get started, edit index.ios.js
//                 </Text>
//                 <Text style={styles.instructions}>
//                     Press Cmd+R to reload,{'\n'}
//                     Cmd+D or shake for dev menu
//                 </Text>
//             </View>
//         );
//     }
// }

import HelloComponent from './HelloComponent';
export default class setup extends Component {
    render() {
        console.log('HelloComponent render')
        return (
            <View style={styles.container}>
                <HelloComponent
                    name="wks hhl"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginTop:100
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

