/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import {Dimensions} from 'react-native';
import {px2dp, setSpText} from "../utils/px2dpUtils";
import {withNavigation} from "react-navigation";

let Blue = '#0bc2d4';
let {height, width} = Dimensions.get('window');

type Props = {};

export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <View style={{transform: [{rotate:'270deg'}],}}>
                    <View style={{flexDirection:'row'}}>
                        <View style={{marginTop: px2dp(5), marginLeft: px2dp(50)}}>
                            <Image
                                source={require('../img/imgMyDocuments/quotation.png')}
                                style={[styles.imgStyle = {
                                      width: height - px2dp(150),
                                    height: width - px2dp(20),
                                    resizeMode: Image.resizeMode.stretch,
                                }]}
                            />
                        </View>

                        <View style={{flexDirection: 'column', alignItems: 'flex-end', marginTop: px2dp(270),marginLeft:px2dp(20)}}>
                            <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
                                <Text style={{color: '#fff', fontSize: setSpText(10)}}>取消</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate('ChangeInformation')
                            }}>
                                <View>
                                    <Text style={{color: '#0bc2d4', fontSize: setSpText(10),marginTop:px2dp(40)}}>确定</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        flexDirection: 'row',
    },

});