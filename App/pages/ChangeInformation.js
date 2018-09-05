/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * 资料填写
 */

import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import {Dimensions} from 'react-native';

let {height, width} = Dimensions.get('window');

import ImageRadioGroup from "../modules/ImageRadioInformation";
import Dividing from "../modules/Dividing";
import px2dp from "../utils/px2dpUtils";

type Props = {};

export default class ChangeInformation extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            animationType: 'none',
            modalVisible: false,
            transparent: true,
            sexArray: [

                {
                    title: '微信支付',
                    imgBrand: require("../img/changeInformation/wechatpay.png"),
                    image: require('../img/ImageRadios/noselected.png'),
                    image2: require('../img/ImageRadios/selected.png'),
                },

                {
                    title: '支付宝支付',
                    imgBrand: require("../img/changeInformation/alipay.png"),

                    image: require('../img/ImageRadios/noselected.png'),
                    image2: require('../img/ImageRadios/selected.png'),
                },

            ],
        };
    }

    state = {
        visible: false,
        transparent: true,
    };

    static showAlter(text) {
        alert(text);
    }

    render() {
        return (
            <View style={{}}>
                <View style={{flexDirection: 'column'}}>
                    <ScrollView>

                        {/*保费合计*/}

                            <View style={[{
                                flexDirection: 'row',
                                alignItems: 'center',
                                backgroundColor: 'black',
                                width: width,
                                height: height / 6.3,

                            }]}>
                                <Text style={{color:'#FFFFFF',fontSize:px2dp(20),marginLeft: px2dp(15),}}>保费合计：</Text>
                                <Text style={{color:'#FFFFFF',fontSize:px2dp(23)}}>￥</Text>
                                <Text style={{color:'#FFFFFF',fontSize:px2dp(40)}}>5940.00</Text>
                            </View>


                        {/*姓名*/}
                        <View style={{flexDirection: 'row'}}>
                            <View style={[{flexDirection: 'row', alignItems: 'center',}]}>
                                < Image source={require('../img/changeInformation/name.png')}
                                        style={[styles.imgStyle = {
                                            width: px2dp(23),
                                            height: px2dp(23),
                                            marginLeft: px2dp(16),
                                            marginTop: px2dp(10)
                                        }]}/>
                                <Text style={{marginLeft: px2dp(5), marginTop: px2dp(10), fontSize: px2dp(14)}}>
                                    姓名
                                </Text>
                            </View>
                            <TextInput
                                style={{
                                    marginTop: px2dp(14),
                                    fontSize: px2dp(14),
                                    textAlign: 'right',
                                    flex: 1,
                                    color: '#d5cdd1',
                                }}
                                placeholder="请输入您的姓名"
                                placeholderTextColor="#A19D9E"
                                numberOfLines={1}
                                ref={'content'}
                                underlineColorAndroid='transparent'
                                multiline={true}
                                autoFocus={true}
                                onChangeText={(text) => {
                                    content = text;
                                }}/>
                        </View>

                        {/*分割线*/}
                        <Dividing/>

                        {/*邮寄地址*/}
                        <View style={{flexDirection: 'row'}}>
                            <View style={[{flexDirection: 'row', alignItems: 'center',}]}>
                                < Image source={require('../img/changeInformation/address.png')}
                                        style={[styles.imgStyle = {
                                            width: px2dp(25),
                                            height: px2dp(25),
                                            marginLeft: px2dp(15),
                                            marginTop: px2dp(10)
                                        }]}/>
                                <Text style={{marginLeft: px2dp(3), marginTop: px2dp(10), fontSize: px2dp(14)}}>
                                    保单邮寄地址
                                </Text>
                            </View>
                            <TextInput
                                style={{
                                    marginTop: px2dp(14),
                                    fontSize: px2dp(14),
                                    textAlign: 'right',
                                    flex: 1,
                                    color: '#d5cdd1',
                                }}
                                placeholder="请输入您的保单邮寄地址"
                                placeholderTextColor="#A19D9E"
                                numberOfLines={1}
                                ref={'content'}
                                underlineColorAndroid='transparent'
                                multiline={true}
                                autoFocus={true}
                                onChangeText={(text) => {
                                    content = text;
                                }}/>
                        </View>
                        {/*分割线*/}
                        <Dividing/>

                        {/*身份证*/}
                        <View style={{flexDirection: 'row', width: width}}>
                            <View>
                                <View style={{flexDirection: 'row', width: width, marginTop: px2dp(5)}}>
                                    <View style={[{flexDirection: 'row', height: px2dp(50), alignItems: 'flex-start',}]}>
                                        <View style={[{flexDirection: 'row', alignItems: 'center',}]}>
                                            < Image source={require('../img/imgaskprice/idCard.png')}
                                                    style={[styles.imgStyle = {
                                                        width: px2dp(18),
                                                        height: px2dp(18),
                                                        marginLeft: px2dp(15),
                                                        marginTop: px2dp(10)
                                                    }]}/>
                                            <Text style={{
                                                marginLeft: px2dp(5),
                                                marginTop: px2dp(10),
                                                fontSize: px2dp(14)
                                            }}>
                                                身份证
                                            </Text>
                                        </View>
                                    </View>

                                    <Text
                                        style={{
                                            marginLeft: px2dp(5),
                                            marginRight: px2dp(5),
                                            fontSize: px2dp(16),
                                            textAlign: 'right',
                                            flex: 1,
                                            color: '#fe2b00',
                                        }}
                                        underlineColorAndroid='transparent'
                                        numberOfLines={1}
                                        ref={'content'}
                                        multiline={true}
                                        autoFocus={true}
                                        onChangeText={(text) => {
                                            content = text;
                                        }}/>

                                    {/*拍摄身份证正面*/}
                                    <View>
                                        <TouchableOpacity>
                                            <View style={{
                                                backgroundColor: '#83878c',
                                                height: px2dp(65),
                                                width: px2dp(100),
                                                marginTop: px2dp(10),
                                                marginLeft: px2dp(35),
                                            }}>

                                                <Image source={require('../img/imgaskprice/camera.png')}
                                                       style={[styles.imgStyle = {
                                                           width: px2dp(18),
                                                           height: px2dp(12),
                                                           marginLeft: px2dp(43),
                                                           marginTop: px2dp(18),
                                                           position: 'absolute'
                                                       }]}/>
                                                <Text style={[styles.imgStyle = {
                                                    width: px2dp(75),
                                                    height: px2dp(18),
                                                    marginLeft: px2dp(24),
                                                    marginTop: px2dp(41),
                                                    position: 'absolute',
                                                    fontSize: px2dp(8),
                                                    color: '#fff'
                                                }]}>
                                                    拍摄身份证正面
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>


                                    {/*拍摄身份证背面*/}

                                    <View>
                                        <TouchableOpacity>
                                            <View style={{
                                                backgroundColor: '#83878c',
                                                height: px2dp(65),
                                                width: px2dp(100),
                                                marginTop: px2dp(10),
                                                marginLeft: px2dp(20),
                                                marginRight: px2dp(15),
                                            }}>

                                                <Image source={require('../img/imgaskprice/camera.png')}
                                                       style={[styles.imgStyle = {
                                                           width: px2dp(18),
                                                           height: px2dp(12),
                                                           marginLeft: px2dp(43),
                                                           marginTop: px2dp(18),
                                                           position: 'absolute'
                                                       }]}/>
                                                <Text style={[styles.imgStyle = {
                                                    width: px2dp(75),
                                                    height: px2dp(18),
                                                    marginLeft: px2dp(24),
                                                    marginTop: px2dp(41),
                                                    position: 'absolute',
                                                    fontSize: px2dp(8),
                                                    color: '#fff'
                                                }]}>
                                                    拍摄身份证背面
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>

                        {/*分割线*/}
                        <Dividing/>

                        {/* 请选择支付方式*/}
                        <View>
                            <Text style={{marginLeft: px2dp(15), fontSize: px2dp(14), marginTop: px2dp(13),color:'#c7c7c7'}}>
                                请选择支付方式
                            </Text>
                        </View>

                        {/*支付方式*/}

                        <View>
                            <ImageRadioGroup
                                style={{flexDirection: 'row'}}
                                conTainStyle={{height: px2dp(44), width: px2dp(60)}}
                                imageStyle={{width: px2dp(25), height: px2dp(25)}}
                                selectIndex={'1'}
                                data={this.state.sexArray}
                                onPress={(index, item) => {
                                    console.warn(item.title);
                                    console.warn(index)
                                }}
                            />
                        </View>
                        {/*确定购买*/}
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('MyPolicy')
                        }}>
                            <View style={{
                                height: px2dp(50),
                                width: width * 13 / 14,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#fe2b00',
                                margin: px2dp(5),
                                marginTop: px2dp(15),
                                marginLeft: px2dp(15),
                            }}>
                                <Text style={{
                                    fontSize: 17,
                                    color: '#FFFFFF'
                                }}>
                                    确定购买
                                </Text>
                            </View>
                        </TouchableOpacity>


                    </ScrollView>
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
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: px2dp(20),
        textAlign: 'center',
        margin: px2dp(10),
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: px2dp(5),
    },
});
