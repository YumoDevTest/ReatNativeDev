/**
 * Created by yumodev on 18/2/5.
 */
'use strict';
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

let Waiting = React.createClass({
    goback:function () {
        this.props.navigator.push({
            name:'Register'
        })
    },
    render:function() {
        console.log('waiting:render')
        console.log('返回');

        return (
            <View style={styles.container}>
                <Text style={styles.textPromptStyle}> 注册使用手机号：{this.props.phoneNumber}</Text>
                <Text style={styles.textPromptStyle}> 注册使用密码：{this.props.userPw}</Text>
                <Text style={styles.bigTextPrompt} onPress={this.goback}> 返回 </Text>
            </View>
        );
    },


});


let styles = StyleSheet.create({
    container:{
        flex : 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red'
    },
    textPromptStyle:{
        fontSize:20
    },
    bigTextPrompt:{
        fontSize:30,
        width:300,
        backgroundColor:'gray',
        color:'white',
        textAlign:'center',

    }
});

export default Waiting;
