/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Dimensions} from 'react-native';

var {height, width} = Dimensions.get('window');

import ImageRadioGroup from "../modules/ImageRadioInformation";

type Props = {};

export default class App extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            animationType: 'none',
            modalVisible: false,
            transparent: true,
            sexArray: [

                {
                    title: '微信支付',
                    imgBrand: require("../imgs/wechatpay.png"),
                    image: require('../img/ImageRadios/noselected.png'),
                    image2: require('../img/ImageRadios/selected.png'),
                },

                {
                    title: '支付宝支付',
                    imgBrand: require("../imgs/alipay.png"),

                    image: require('../img/ImageRadios/noselected.png'),
                    image2: require('../img/ImageRadios/selected.png'),
                },

            ],
        };
    }

    state = {
        visible: false,
        transparent: true,
    }

    showAlter(text) {
        alert(text);
    }

    render() {
        return (
            <View style={{backgroundColor: 'white'}}>
                <View style={{flexDirection: 'column'}}>
                    <ScrollView>
                        {/*导航栏*/}
                        <View style={{height: 50, backgroundColor: '#FFFFFF'}}>
                            <View style={{flex: 1, justifyContent: 'center'}}>
                                <TouchableOpacity>
                                    <View style={{marginTop: 8}}>
                                        <Image source={require('../imgs/back.png')}
                                               style={{
                                                   width: 35, height: 30, alignItems: 'center',
                                                   marginTop: 32
                                               }}/>
                                    </View>
                                </TouchableOpacity>

                            </View>

                            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                <Text
                                    style={{color: '#3f3f3f', fontSize: 20, marginLeft: 3, marginTop: 20}}>资料填写
                                </Text>

                            </View>

                            <View style={{
                                marginRight: 8,
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                flex: 1,
                                flexDirection: 'row',
                                marginBottom: 20
                            }}>
                                <TouchableOpacity>
                                    <Image source={require('../imgs/phone.png')}
                                           style={{width: 21, height: 18, marginRight: 8, alignItems: 'center'}}/>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/*保费合计*/}
                        <View style={{
                            backgroundColor: 'black',
                            flexDirection: 'row',
                            width: width,
                            height: height / 6.3
                        }}>
                            <View style={{
                                width: 100,
                                height: 40,
                                //backgroundColor: 'green',
                                marginTop: 40,
                                marginLeft: 16,

                            }}>
                                <Text style={{marginTop: 15, fontSize: 18, color: 'white'}}>保费合计:￥</Text>
                            </View>
                            <View style={{
                                width: 165,
                                height: 50,
                                //backgroundColor: 'yellow',
                                marginTop: 28,
                                marginBottom: 9
                            }}>
                                <Text style={{marginBottom: 11, fontSize: 45, color: 'white'}}>5940.00</Text>
                            </View>
                        </View>

                        {/*Name*/}
                        <View style={{flexDirection: 'row', width: width}}>
                            <View>
                                <View style={{flexDirection: 'row', width: width, marginTop: 5}}>
                                    < Image source={require('../imgs/name.png')}
                                            style={[styles.imgStyle = {
                                                width: 25,
                                                height: 25,
                                                marginLeft: 15,
                                                marginTop: 10
                                            }]}/>
                                    <Text style={{marginLeft: 5, marginTop: 12, fontSize: 16}}>
                                        姓名
                                    </Text>

                                    <TextInput
                                        style={{
                                            marginLeft: 5,
                                            marginRight: 5,
                                            fontSize: 16,
                                            textAlign: 'right',
                                            flex: 1,
                                            color: '#fe2b00',
                                        }}
                                        placeholder="请输入您的姓名"

                                        numberOfLines={1}
                                        ref={'content'}
                                        underlineColorAndroid='transparent'
                                        multiline={true}
                                        autoFocus={true}
                                        onChangeText={(text) => {
                                            content = text;
                                        }}/>
                                </View>
                            </View>
                        </View>
                        {/*分割线*/}
                        <View style={{
                            marginTop: 3,
                            width: width * 13 / 14,
                            marginLeft: 15,
                            marginRight: 15,
                            height: 1,
                            backgroundColor: '#7b7b7b'
                        }}>
                        </View>

                        {/*邮寄地址*/}
                        <View style={{flexDirection: 'row', width: width}}>
                            <View>
                                <View style={{flexDirection: 'row', width: width, marginTop: 5}}>
                                    < Image source={require('../imgs/address.png')}
                                            style={[styles.imgStyle = {
                                                width: 25,
                                                height: 25,
                                                marginLeft: 15,
                                                marginTop: 10
                                            }]}/>
                                    <Text style={{marginLeft: 5, marginTop: 12, fontSize: 16}}>
                                        保单邮寄地址
                                    </Text>

                                    <TextInput
                                        style={{
                                            marginLeft: 5,
                                            marginRight: 5,
                                            fontSize: 16,
                                            textAlign: 'right',
                                            flex: 1,
                                            color: '#fe2b00',
                                        }}
                                        placeholder="请输入您的保单邮寄地址"

                                        numberOfLines={1}
                                        ref={'content'}
                                        underlineColorAndroid='transparent'
                                        multiline={true}
                                        autoFocus={true}
                                        onChangeText={(text) => {
                                            content = text;
                                        }}/>
                                </View>
                            </View>
                        </View>
                        {/*分割线*/}
                        <View style={{
                            marginTop: 3,
                            width: width * 13 / 14,
                            marginLeft: 15,
                            marginRight: 15,
                            height: 1,
                            backgroundColor: '#7b7b7b'
                        }}>
                        </View>

                        {/*身份证*/}
                        <View style={{flexDirection: 'row', width: width}}>
                            <View>
                                <View style={{flexDirection: 'row', width: width, marginTop: 5}}>
                                    < Image source={require('../imgs/IDcard.png')}
                                            style={[styles.imgStyle = {
                                                width: 25,
                                                height: 25,
                                                marginLeft: 15,
                                                marginTop: 12
                                            }]}/>
                                    <Text style={{marginLeft: 5, marginTop: 12, fontSize: 16}}>
                                        身份证
                                    </Text>


                                    {/*拍摄身份证正面*/}

                                    <View>
                                        <TouchableOpacity>
                                            <View style={{
                                                backgroundColor: '#83878c',
                                                height: 70,
                                                width: 110,
                                                marginTop: 15,
                                                marginLeft: 50,
                                                marginRight: 15,
                                            }}>

                                                <Image source={require('../imgs/camera.png')}
                                                       style={[styles.imgStyle = {
                                                           width: 21,
                                                           height: 14,
                                                           marginLeft: 45,
                                                           marginTop: 20,
                                                           position: 'absolute'
                                                       }]}/>
                                                <Text style={[styles.imgStyle = {
                                                    width: 75,
                                                    height: 18,
                                                    marginLeft: 20,
                                                    marginTop: 45,
                                                    position: 'absolute',
                                                    fontSize: 10,
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
                                                height: 70,
                                                width: 110,
                                                marginTop: 15,
                                                marginRight: 15,
                                            }}>

                                                <Image source={require('../imgs/camera.png')}
                                                       style={[styles.imgStyle = {
                                                           width: 21,
                                                           height: 14,
                                                           marginLeft: 45,
                                                           marginTop: 20,
                                                           position: 'absolute'
                                                       }]}/>
                                                <Text style={[styles.imgStyle = {
                                                    width: 75,
                                                    height: 18,
                                                    marginLeft: 20,
                                                    marginTop: 45,
                                                    position: 'absolute',
                                                    fontSize: 10,
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
                        <View style={{
                            marginTop: 14,
                            width: width * 13 / 14,
                            marginLeft: 15,
                            marginRight: 15,
                            height: 1,
                            backgroundColor: '#7b7b7b'
                        }}>
                        </View>

                        {/* 请选择支付方式*/}
                        <View>
                            <Text style={{marginLeft: 15, fontSize: 16, marginTop: 13}}>
                                请选择支付方式
                            </Text>
                        </View>

                        {/*支付方式*/}

                        <View>
                            <ImageRadioGroup
                                style={{flexDirection: 'row'}}
                                conTainStyle={{height: 44, width: 60}}
                                imageStyle={{width: 25, height: 25}}
                                selectIndex={'1'}
                                data={this.state.sexArray}
                                onPress={(index, item) => {
                                    console.warn(item.title);
                                    console.warn(index)
                                }}
                            />
                        </View>
                        {/*确定购买*/}
                        <TouchableOpacity>
                            <View style={{
                                width: width - 25,
                                height: 55,
                                backgroundColor: '#fe2b00',
                                marginLeft: 15,
                                marginRight: 15,
                                marginBottom: 5,
                                marginTop: 15
                            }}>
                                <Text style={{marginLeft: 162, marginTop: 15, fontSize: 18, color: 'white'}}>确定购买</Text>
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
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
