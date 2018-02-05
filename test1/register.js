/**
 * Created by yumodev on 18/2/4.
 * React Native跨平台移动应用开发 第二章，一个简单的注册页面。
 */
'use strict';
import React, {Component} from 'react';
import {
    StyleSheet, Text, View, TextInput
} from 'react-native';

import ConfirmDialog from './ConfirmDialog'
let Dimensions = require('Dimensions');
let totalWidth = Dimensions.get('window').width;
let leftStartPoint = totalWidth * 0.1;
let componentWidth = totalWidth * 0.8;

let Register = React.createClass({
    getInitialState:function(){
        return {
            inputNum: '',
            inputPW: '',
            needToConfirm:false
        }
    },

    userPressConfirme:function () {
      this.setState((state) => {
          return {
              needToConfirm:true
          }
      })
    },

    userCanceled:function () {
      this.setState((state) => {
          return {
              needToConfirm:false
          }
      })
    },

    userConfirmed:function () {
        this.setState((state) => {
            return {
                needToConfirm:false
            }
        });

        this.props.navigator.push({
            phoneNumber:this.state.inputNum,
            userPw:this.state.inputPW,
            name:'waiting'
        })


    },

    updateNum:function(newText){
        this.setState((oldState) => {
                for (var aName in oldState){
                    console.log(aName)
                    console.log(oldState[aName])
                }
                return{
                    inputNum:newText,
                }
            }, this.changeNumDone
        )
    },

    changeNumDone: function () {
        console.log('React Native has changed input Num')
    },

    updatePw:function(newText){
        this.setState(() => {
                return{
                    inputPW:newText,
                }
            }
        )
    },

    shouldComponentUpdate:function () {
        if (this.state.inputNum.length < 3) return false;
        return true;
    },

    userPressConfirm:function () {
        console.log('userPressConfirm')
        this.props.navigator.push({
            phoneNumber:this.state.inputNum,
            userPw:this.state.inputPW,
            name:'waiting'
        })
    },

    renderDialog:function () {
        console.log('render dialog')
        return(
        <View >
            <ConfirmDialog userConfirmed={this.userConfirmed}
                           userCanceled={this.userCanceled}
                           promptToUser={'使用'+this.state.inputNum+'号码登录?'}/>
        </View>
        )
    },
    render:function () {
        return (
        <View style={styles.container}>
            <TextInput style={styles.numberInputStyle}
                       placeholder={'请输入手机号'}
                       onChangeText={(newText) => this.updateNum(newText)}/>
            <Text syle={styles.textPromptStyle}> 您输入手机号：{this.state.inputNum}</Text>
            <TextInput style={styles.passwordInputStyle}
                       placeholder={'请输入密码'}
                       password={true}
                       onChangeText={(newText) => this.updatePw(newText)}/>
            <Text style={styles.bigTextPrompt} onPress={this.renderDialog}>确定</Text>


        </View>
        )
    },
});

let styles = StyleSheet.create({
    container:{
        flex : 1,
        backgroundColor:'white'
    },
    numberInputStyle:{
        top:10,
        left: leftStartPoint,
        width: componentWidth,
        backgroundColor:'gray',
        fontSize:20
    },
    textPromptStyle:{
        top:30,
        left:leftStartPoint,
        width:componentWidth,
        fontSize:20
    },
    passwordInputStyle:{
        top:50,
        left:leftStartPoint,
        width:componentWidth,
        fontSize:20
    },
    bigTextPrompt:{
        top:70,
        left:leftStartPoint,
        width:componentWidth,
        backgroundColor:'gray',
        color:'white',
        textAlign:'center',
        fontSize:60
    }
})

export default Register