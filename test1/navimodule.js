/**
 * Created by yumodev on 18/2/4.
 */
'use strict';
import React, {Component} from 'react';
import {
    BackAndroid, Text, View
} from 'react-native';

import {
    Navigator
} from 'react-native-deprecated-custom-components';

import Register from './register';
import Waiting from './waiting'
let Navimodule = React.createClass({
    configureScene:function (route) {
        return Navigator.SceneConfigs.FadeAndroid;
    },

    renderScene:function (router, navigator) {
        this._navigator = navigator;
        console.log(router.name)
        switch (router.name){
            case "Register":
                console.log('Register')
                return <Register navigator={navigator} />;
            case "waiting":
                console.log('waiting');
                return <Waiting phoneNumber={router.phoneNumber} userPw={router.userPw} navigator={navigator} />;
        }
    },

    componentWillUnmount:function () {
        BackAndroid.removeEventListener('NaviModuleListener');
    },

    componentDidMount:function () {
        var navigator = this._navigator;
        BackAndroid.addEventListener('NaviModuleListener', () => {
            if (navigator && navigator.getCurrentRoutes().length > 1){
                navigator.pop();
                return true;
            }
            return false;
        })
    },

    render:function () {
        return (

           <Navigator initialRoute = {{name:'Register'}}
            configureScene={this.configureScene}
            renderScene = {this.renderScene} />
        )

    }

});

export default Navimodule

