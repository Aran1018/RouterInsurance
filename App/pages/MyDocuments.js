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
import MyDocItem from "../modules/MyDocItem";

let {height, width} = Dimensions.get('window');

let {screenHeight, screenWidth} = Dimensions.get('window');
let chuanwidth = 325;
let chuanheight = 220;

export default class MyDocuments extends Component {

    constructor(props) {
        super(props);
        // 初始状态

    }
    SimulateNativeBack=()=>{
        // this.props.navigation.navigate('MyPolicy')
        alert(" ")
    };

    render() {
        return (
            <View style={{
                backgroundColor:"#ffffff",
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems:'flex-end',
                height: Dimensions.get('window').height-60
            }}>
                <MyDocItem/>
                    {/*ButtonTabBar*/}


                    <View style={{
                        flexDirection: 'row',
                        width: screenWidth,
                        height: 60,
                        justifyContent: 'space-between',

                    }}>


                        <View style={{
                            flexDirection: 'row',
                            height: height / 17,
                            flex: 1,
                            alignSelf: 'center',
                            marginLeft: 20
                        }}>
                            <View style={{alignSelf: 'center'}}>
                                <Text style={{alignSelf: 'flex-end', fontSize: 16, color: 'black',}}>
                                    保费合计：
                                </Text>
                            </View>
                            <View style={{marginRight: 10, alignSelf: 'center'}}>
                                <Text style={{
                                    fontSize: 21,
                                    color: 'black',
                                    alignSelf: 'flex-end',
                                }}>
                                    ￥4940.00
                                </Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={()=>{
                            this.props.navigation.navigate('ChangeInformation')
                        }}>
                            <View style={{
                                flex: 1,
                                backgroundColor: '#fe2b00',
                                width: width / 3.5,
                                alignItems:'center',
                                justifyContent: 'center',
                            }}>
                                <Text style={{
                                    fontSize: 19,
                                    color:'white'
                                }}>
                                    立即购买
                                </Text>
                            </View>
                        </TouchableOpacity>

                    </View>
            </View>

        )
    }
}

let styles = StyleSheet.create({
    item_layout: {
        backgroundColor: 'white',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center'
    },
    item_view_icon: {
        width: 10,
        height: 15,
    },
});
