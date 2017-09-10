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
    Text,
} from 'react-native';

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
/**
 * ES6
 */
// export default class HelloComponent extends Component {
//     render() {
//         return (
//             <Text style={{fontSize:20, backgroundColor:'red'}}>Hello</Text>
//         );
//     }
// }


/**
 * ES5
  */
var HelloComponent = React.createClass({
        render() {
            return (
                <Text style={{fontSize:20, backgroundColor:'red'}}>Hello.{this.props.name}</Text>
            );
        }
    }
)
module.exports = HelloComponent;


/**
 * 函数式
 */
// function HelloComponent(props) {
//     return <Text style={{fontSize:20, backgroundColor:'red'}}>Hello.{props.name}</Text>
// }
// module.exports = HelloComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
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

