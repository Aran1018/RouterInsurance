/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * 资料填写
 */

import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
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
                        <View style={{
                            backgroundColor: 'black',
                            flexDirection: 'row',
                            width: width,
                            height: height / 6.3
                        }}>
                            <View style={{
                                marginTop: px2dp(40),
                                marginLeft: 16,
                            }}>
                                <Text style={{marginTop: 15, fontSize: 18, color: 'white'}}>保费合计:￥</Text>
                            </View>
                            <View style={{
                                marginTop: 28,
                                marginBottom: 9
                            }}>
                                <Text style={{marginBottom: 11, fontSize: 45, color: 'white'}}>5940.00</Text>
                            </View>
                        </View>

                        {/*姓名*/}
                        <View style={{flexDirection: 'row'}}>
                            <View style={[{flexDirection: 'row', alignItems: 'center',}]}>
                                < Image source={require('../img/changeInformation/name.png')}
                                        style={[styles.imgStyle = {
                                            width: 25,
                                            height: 25,
                                            marginLeft: 15,
                                            marginTop: 10
                                        }]}/>
                                <Text style={{marginLeft: 5, marginTop: 12, fontSize: 16}}>
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
                                placeholderTextColor="#fe2b00"
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
                        <View style={{flexDirection: 'row', width: width}}>
                            <View>
                                <View style={{flexDirection: 'row', width: width, marginTop: 5}}>
                                    < Image source={require('../img/changeInformation/address.png')}
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
                        <Dividing/>

                        {/*身份证*/}
                        <View style={{flexDirection: 'row', width: width}}>
                            <View>
                                <View style={{flexDirection: 'row', width: width, marginTop: 5}}>
                                    < Image source={require('../img/imgaskprice/idCard.png')}
                                            style={[styles.imgStyle = {
                                                width: 20,
                                                height: 20,
                                                marginLeft: 15,
                                                marginTop: 14
                                            }]}/>
                                    <Text style={{marginLeft: 5, marginTop: 14, fontSize: 15}}>
                                        身份证
                                    </Text>

                                    <Text
                                        style={{
                                            marginLeft: 5,
                                            marginRight: 5,
                                            fontSize: 16,
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
                                                height: 65,
                                                width: 100,
                                                marginTop: 15,
                                                marginLeft: 35,
                                            }}>

                                                <Image source={require('../img/imgaskprice/camera.png')}
                                                       style={[styles.imgStyle = {
                                                           width: 18,
                                                           height: 12,
                                                           marginLeft: 43,
                                                           marginTop: 18,
                                                           position: 'absolute'
                                                       }]}/>
                                                <Text style={[styles.imgStyle = {
                                                    width: 75,
                                                    height: 18,
                                                    marginLeft: 24,
                                                    marginTop: 41,
                                                    position: 'absolute',
                                                    fontSize: 8,
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
                                                height: 65,
                                                width: 100,
                                                marginTop: 15,
                                                marginLeft: 20,
                                                marginRight: 15,
                                            }}>

                                                <Image source={require('../img/imgaskprice/camera.png')}
                                                       style={[styles.imgStyle = {
                                                           width: 18,
                                                           height: 12,
                                                           marginLeft: 43,
                                                           marginTop: 18,
                                                           position: 'absolute'
                                                       }]}/>
                                                <Text style={[styles.imgStyle = {
                                                    width: 75,
                                                    height: 18,
                                                    marginLeft: 24,
                                                    marginTop: 41,
                                                    position: 'absolute',
                                                    fontSize: 8,
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
                        <TouchableOpacity onPress={()=>{
                            this.props.navigation.navigate('MyPolicy')
                        }}>
                            <View style={{
                                width: width - 25,
                                height: 55,
                                backgroundColor: '#fe2b00',
                                marginLeft: 15,
                                marginRight: 15,
                                marginBottom: 5,
                                marginTop: 15
                            }}>
                                <Text style={{  alignSelf: 'center', marginTop: 15, fontSize: 18, color: 'white'}}>确定购买</Text>
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
