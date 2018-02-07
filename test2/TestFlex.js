/**
 * Created by trunx on 18/2/7.
 */
import React, { Component } from 'react';
import { StyleSheet, Button,Text, View } from 'react-native';

class TestFlex extends Component {
    render() {
        return (
            <View style={styles.homeContainer}>
                <Text
                    style={styles.navBtn}
                    title="Go to Details"/>

                <Text
                    style={styles.navBtn}
                    title="Go to Register"/>

                <Text
                    style={styles.navBtn}
                    title="Go to TestStyle"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    homeContainer:{
        flexDirection:'column',
        alignItems:'center',
        backgroundColor:'red',

    },
    navBtn:{
        marginTop:20,
        borderWidth:2,
        borderColor:'yellow',
        backgroundColor:'red'
    }
});

export default TestFlex
