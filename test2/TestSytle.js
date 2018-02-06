/**
 * Created by trunx on 18/2/6.
 */
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

class TestSytle extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <Text style={styles.red}>just red</Text>
                <Text style={styles.bigblue}>just bigblue</Text>
                <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
                <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>

                <View style={{flex:1, backgroundColor: 'powderblue'}} />
                <View style={{flex:2, height: 100, backgroundColor: 'skyblue'}} />
                <View style={{flex:3, height: 150, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
});

export default TestSytle