/**
 *那当自己都萎靡到
 *无法被依靠的时候该如何振作？
 *Creat by Aran  at  2018/7/17
 *除过自己心中笃信的那一点不灭的光亮
 *我觉得这世间再没有别的东西比它值得被如此依靠。
 */

import React, {Component} from 'react';
import {NativeModules,Platform, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import AransModules from "./utils/RouterInsuranceModules";
import {px2dp} from "./utils/px2dpUtils";

export default class Test extends Component{

    componentWillMount() {

    }

    aaa(){
    }

    render(){
        return(
            <View>
                <TouchableHighlight onPress={()=>{AransModules.TakeToast();
                }}>
                    <Text style={{fontSize:px2dp(20)}}>aaa</Text>
                    <Text style={{fontSize:px2dp(20)}}>aaa</Text>
                    <Text style={{fontSize:px2dp(20)}}>aaa</Text>
                </TouchableHighlight>

            </View>
        )
    }

}