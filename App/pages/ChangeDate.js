/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity,
    Dimensions,
    PixelRatio, View
} from 'react-native';

let content = '';
import ImageRadioGroup from "../modules/ImageRadioGroup";

let {height, width} = Dimensions.get('window');

type Props = {};






/**
 * 设置text为sp
 * @param size sp
 * return number dp
 */

export default class App extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            animationType: 'none',
            modalVisible: false,
            transparent: true,
            sexArray: [

                {
                    title: '中国平安',
                    imgBrand: require("../img/ImageRadios/brand.png"),
                    image: require('../img/ImageRadios/noselected.png'),
                    image2: require('../img/ImageRadios/selected.png'),
                },

                {
                    title: '中国人寿',
                    imgBrand: require("../img/ImageRadios/pingan.png"),
                    image: require('../img/ImageRadios/noselected.png'),
                    image2: require('../img/ImageRadios/selected.png'),
                },
                {
                    title: '太平洋保险',
                    imgBrand: require("../img/ImageRadios/PICC.png"),
                    image: require('../img/ImageRadios/noselected.png'),
                    image2: require('../img/ImageRadios/selected.png'),
                },

            ],
        };
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
                                        <Image source={require('../img/changedate/back.png')}
                                               style={{
                                                   width: 35, height: 30, alignItems: 'center',
                                                   marginTop: 32
                                               }}/>
                                    </View>
                                </TouchableOpacity>

                            </View>

                            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                <Text
                                    style={{color: '#3f3f3f', fontSize: 20, marginLeft: 3, marginTop: 20}}>修改资料</Text>

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
                                    <Image source={require('../img/changedate/phone.png')}
                                           style={{width: 21, height: 18, marginRight: 8, alignItems: 'center'}}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/*广告图*/}
                        <View style={{alignItems: 'center', flex: 1}}>
                            <TouchableOpacity>
                                <Image source={require('../img/changedate/ad.png')}
                                       style={[styles.imageStyle = {
                                           width: width,
                                           height: (height + 22) / 5,
                                           resizeMode: Image.resizeMode.stretch,
                                       }]}/>
                            </TouchableOpacity>
                        </View>
                        {/*电话*/}
                        <View style={{flexDirection: 'row', width: width}}>
                            <View>
                                <View style={{flexDirection: 'row', width: width, marginTop: 5}}>
                                    < Image source={require('../img/changedate/mobilephone.png')}
                                            style={[styles.imgStyle = {
                                                width: 25,
                                                height: 25,
                                                marginLeft: 15,
                                                marginTop: 10
                                            }]}/>
                                    <Text style={{marginLeft: 5, marginTop: 12, fontSize: 16}}>
                                        电话
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
                                        placeholder="12345678912(请重新编写)"
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
                            </View>
                        </View>

                        {/*分界线*/}
                        <View style={{
                            marginTop: 3,
                            width: width * 13 / 14,
                            marginLeft: 15,
                            marginRight: 15,
                            height: 1,
                            backgroundColor: '#7b7b7b'
                        }}>

                        </View>
                        {/*行驶证*/}
                        <View style={{flexDirection: 'row', width: width}}>
                            <View>
                                <View style={{flexDirection: 'row', width: width, marginTop: 5}}>
                                    < Image source={require('../img/changedate/IDcard.png')}
                                            style={[styles.imgStyle = {
                                                width: 25,
                                                height: 25,
                                                marginLeft: 15,
                                                marginTop: 10
                                            }]}/>
                                    <Text style={{marginLeft: 5, marginTop: 12, fontSize: 16}}>
                                        行驶证
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

                                    {/*拍摄行驶证正本*/}

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

                                                <Image source={require('../img/changedate/camera.png')}
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
                                                    拍摄行驶证正本
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>


                                    {/*拍摄行驶证副本*/}
                                    <View>
                                        <TouchableOpacity>
                                            <View style={{
                                                backgroundColor: '#83878c',
                                                height: 70,
                                                width: 110,
                                                marginTop: 15,
                                                marginRight: 15,
                                            }}>

                                                <Image source={require('../img/changedate/camera.png')}
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
                                                    拍摄行驶证副本
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        {/*分界线*/}
                        <View style={{
                            marginTop: 15,
                            width: width * 13 / 14,
                            marginLeft: 15,
                            marginRight: 15,
                            height: 1,
                            backgroundColor: '#7b7b7b'
                        }}>
                        </View>
                        {/*投保公司*/}
                        <View style={{flexDirection: 'row', width: Dimensions.get('window').width}}>
                            <Text style={{color: '#c0c2c5', fontSize: 16, marginTop: 10, marginLeft: 15}}>
                                请选择投保公司
                            </Text>
                        </View>

                        {/*单选按钮*/}

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

                        {/*身份证*/}
                        <View style={{flexDirection: 'row', width: Dimensions.get('window').width}}>
                            <View>
                                <View
                                    style={{flexDirection: 'row', width: Dimensions.get('window').width, marginTop: 5}}>
                                    < Image source={require('../img/changedate/IDcard.png')}
                                            style={[styles.imgStyle = {
                                                width: 25,
                                                height: 25,
                                                marginLeft: 15,
                                                marginTop: 10
                                            }]}/>
                                    <Text style={{marginLeft: 5, marginTop: 12, fontSize: 16}}>
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
                                                height: 70,
                                                width: 110,
                                                marginTop: 15,
                                                marginLeft: 50,
                                                marginRight: 15,
                                            }}>

                                                <Image source={require('../img/changedate/camera.png')}
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

                                                <Image source={require('../img/changedate/camera.png')}
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
                        {/*分界线*/}
                        <View style={{
                            marginTop: 15,
                            width: Dimensions.get('window').width * 13 / 14,
                            marginLeft: 15,
                            marginRight: 15,
                            height: 1,
                            backgroundColor: '#7b7b7b'
                        }}>
                        </View>
                        {/*险选种类*/}
                        <View style={{flexDirection: 'row', width: Dimensions.get('window').width}}>
                            <View>
                                <View
                                    style={{flexDirection: 'row', width: Dimensions.get('window').width, marginTop: 5}}>
                                    < Image source={require('../img/changedate/list.png')}
                                            style={[styles.imgStyle = {
                                                width: 25,
                                                height: 25,
                                                marginLeft: 15,
                                                marginTop: 10
                                            }]}/>
                                    <Text style={{marginLeft: 5, marginTop: 12, fontSize: 16, color: '#c0c2c5'}}>
                                        险选种类(建议填写)
                                    </Text>
                                    <TouchableOpacity>
                                        < Image source={require('../img/changedate/pull-down.png')}
                                                style={[styles.imgStyle = {
                                                    width: 18,
                                                    height: 18,
                                                    marginLeft: 180,
                                                    marginTop: 15
                                                }]}/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        {/*分界线*/}
                        <View style={{
                            marginTop: 15,
                            width: width * 13 / 14,
                            marginLeft: 15,
                            marginRight: 15,
                            height: 1,
                            backgroundColor: '#7b7b7b'
                        }}>
                        </View>

                        {/*补充资料*/}
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{
                                marginLeft: 15,
                                marginTop: 12,
                                fontSize: 16,
                                color: '#fe2b00'
                            }}>
                                补充资料
                            </Text>
                            <View>
                                <TouchableOpacity>
                                    <View style={{
                                        backgroundColor: '#babfc4',
                                        height: 70,
                                        width: 110,
                                        marginTop: 15,
                                        marginLeft: 15
                                    }}>
                                    </View>

                                    <Image source={require('../img/changedate/add.png')}
                                           style={[styles.imgStyle = {
                                               width: 18,
                                               height: 18,
                                               marginLeft: 60,
                                               marginTop: 42,
                                               position: 'absolute'
                                           }]}/>

                                </TouchableOpacity>
                            </View>
                        </View>
                        {/*提交按钮*/}
                        <TouchableOpacity>
                            <View style={{
                                width: Dimensions.get('window').width - 25,
                                height: 55,
                                backgroundColor: '#000',
                                marginLeft: 15,
                                marginRight: 15,
                                marginBottom: 5,
                                marginTop: 15
                            }}>
                                <Text style={{
                                    marginLeft: 170,
                                    marginTop: 15, fontSize: 18, color: 'white'
                                }}>提交</Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        );

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
    contentContainer: {},
});
