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
import {px2dp, setSpText} from "../utils/px2dpUtils";

let {screenHeight, screenWidth} = Dimensions.get('window');

let AllFontSize = setSpText(9);
let WholeHeight = px2dp(63);
let Orange =   '#fe2b00';

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
                    <View style={{height: WholeHeight, flexDirection: 'row'}}>
                        <View style={{height:WholeHeight, flex: 1, backgroundColor: 'white'}}>
                            <View style={[{flexDirection: 'row', height: WholeHeight, alignItems: 'center',}]}>
                                <Text style={{fontSize:AllFontSize, color: 'black', marginLeft:px2dp(20)}}>
                                    保费合计:
                                </Text>
                                <Text style={{fontSize: setSpText(15), color: 'black',marginLeft:px2dp(7)}}>
                                    ￥4940.00
                                </Text>
                            </View>
                        </View>

                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('ChangeInformation')
                        }}>
                            <View style={{
                                height: WholeHeight, width: px2dp(120), backgroundColor:Orange, alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Text style={{
                                    fontSize: setSpText(11),
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
