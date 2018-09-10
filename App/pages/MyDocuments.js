/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 *
 * 我的报价单底部
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

import {Dimensions} from 'react-native';
import MyDocItem from "./MyDocItem";
import {px2dp} from "../utils/px2dpUtils";

let {screenHeight, screenWidth} = Dimensions.get('window');

export default class MyDocuments extends Component {

    constructor(props) {
        super(props);
        // 初始状态

    }

    SimulateNativeBack = () => {
        // this.props.navigation.navigate('MyPolicy')
        alert(" ")
    };

    render() {
        return (
            <View style={{
                backgroundColor: "#ffffff",
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                // height: Dimensions.get('window').height
            }}>
                <MyDocItem/>
                <View style={{
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-end"
                }}>

                    {/*ButtonTabBar*/}
                    <View style={{height: 70, flexDirection: 'row'}}>
                        <View style={{height: 70, flex: 1, backgroundColor: 'white'}}>
                            <View style={[{flexDirection: 'row', height: 70, alignItems: 'center',}]}>
                                <Text style={{fontSize: 13, color: 'black', marginLeft:20}}>
                                    保费合计:
                                </Text>
                                <Text style={{fontSize: 25, color: 'black'}}>
                                    ￥4940.00
                                </Text>
                            </View>
                        </View>

                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('ChangeInformation')
                        }}>
                            <View style={{
                                height: 70, width: 120, backgroundColor: '#fe2b00', alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Text style={{
                                    fontSize: px2dp(17),
                                    color: '#FFFFFF'
                                }}>
                                    立即购买
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

        )
    }
}

let styles = StyleSheet.create({
    item_layout: {
        backgroundColor: 'white',
        height: px2dp(45),
        alignItems: 'center',
        justifyContent: 'center'
    },
    item_view_icon: {
        width: px2dp(10),
        height: px2dp(15),
    },
});
