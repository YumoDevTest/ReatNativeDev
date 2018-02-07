/**
 * Created by yumodev on 18/2/7.
 * FlatList组件用于显示一个处置的滚动列表
 *
 */
import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

export default class TestFlatList extends Component{
    render(){
        return(
            <View style={styles.container}>
                <FlatList
                datea={[
                    {key: 'Devin'},
                {key: 'Jackson'},
                {key: 'James'},
                {key: 'Joel'},
                {key: 'John'},
                {key: 'Jillian'},
                {key: 'Jimmy'},
                {key: 'Julie'}]
                }

                renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
            </View>
        )

}};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});
