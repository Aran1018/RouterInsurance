/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 *
 *
 * ?????????
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity,
    Dimensions,
    PixelRatio, View
} from 'react-native';
import ImageRadioGroup from "../modules/ImageRadioGroup";

let content = '';

let {height, width} = Dimensions.get('window');

type Props = {};

/**
 * 设置text为sp
 * @param size sp
 * return number dp
 */

export default class ChangeDate extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            animationType: 'none',
            modalVisible: false,
            transparent: true,
            sexArray: [
                {
                "id": 1,
                "name": "中国人民保险公司",
                "fileName":require('../img/ImageRadios/brand.png'),
                },
                {
                    "id": 2,
                    "name": "中国平安",
                    "fileName":require('../img/ImageRadios/brand.png'),
                },
                {
                    "id": 3,
                    "name": "中国大地保险",
                    "fileName":require('../img/ImageRadios/brand.png'),
                }
            ],
        };
    }

    render() {
        return (
            <View style={{backgroundColor: 'white'}}>
                <View style={{flexDirection: 'column'}}>

                    <ScrollView>
                        {/*广告图*/}
                        <View style={{alignItems: 'center', flex: 1}}>
                            <TouchableOpacity>
                                <Image source={require('../img/changedate/ad.png')}
                                       style={[styles.imageStyle = {
                                           width: width,
                                           height: (height + 22) / 5,
                                           resizeMode: "contain",
                                       }]}/>
                            </TouchableOpacity>
                        </View>
                        {/*电话*/}
                        <View style={{flexDirection: 'row', width: width}}>
                            <View>
                                <View style={{flexDirection: 'row', width: width, marginTop: 5}}>
                                    <Image source={require('../img/imgaskprice/mobilephone.png')}
                                            style={[styles.imgStyle = {
                                                width: 19,
                                                height: 19,
                                                marginLeft: 15,
                                                marginTop: 14
                                            }]}/>
                                    <Text style={{marginLeft: 5, marginTop: 13, fontSize: 15}}>
                                        电话
                                    </Text>

                                    <TextInput
                                        style={{
                                            marginLeft: 2,
                                            marginRight: 15,
                                            fontSize: 14,
                                            textAlign: 'right',
                                            flex: 1,
                                            color: '#fe2b00',
                                        }}
                                        placeholder="12345678912  (请重新编写)"
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
                                    < Image source={require('../img/imgaskprice/idCard.png')}
                                            style={[styles.imgStyle = {
                                                width: 20,
                                                height: 20,
                                                marginLeft: 15,
                                                marginTop: 14
                                            }]}/>
                                    <Text style={{marginLeft: 5, marginTop: 14, fontSize: 15}}>
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
                                conTainStyle={{height: 20, width: 20}}
                                imageStyle={{width: 10, height: 10}}
                                selectIndex={'1'}
                                data={this.state.sexArray}
                                onPress={(index, item) => {
                                    console.warn(item.name);
                                    console.warn(index)
                                }}
                            />
                        </View>

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

                        {/*分界线*/}
                        <View style={{
                            marginTop: 15,
                            width: Dimensions.get('window').width * 13 / 14,
                            marginLeft: 15,
                            marginRight: 15,
                            height: 0.5,
                            backgroundColor: '#7b7b7b'
                        }}>
                        </View>

                        {/*险选种类*/}
                        <View style={{flexDirection: 'row', width: Dimensions.get('window').width}}>
                            <View>
                                <View
                                    style={{flexDirection: 'row', width: Dimensions.get('window').width, marginTop: 5}}>
                                    < Image source={require('../img/imgaskprice/list.png')}
                                            style={[styles.imgStyle = {
                                                width: 21,
                                                height: 21,
                                                marginLeft: 15,
                                                marginTop: 12
                                            }]}/>
                                    <Text style={{marginLeft: 5, marginTop: 12, fontSize: 14, color: '#c0c2c5'}}>
                                        险选种类(建议填写)
                                    </Text>
                                    <View style={{flex: 1}}>
                                        <TouchableOpacity>
                                            < Image source={require('../img/imgaskprice/pull-down.png')}
                                                    style={[styles.imgStyle = {
                                                        width: 17,
                                                        height: 17,
                                                        alignSelf: 'flex-end',
                                                        marginTop: 15,
                                                        marginRight: 20
                                                    }]}/>
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
                            height: 0.5,
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
                                marginBottom: 5,
                                marginTop: 15
                            }}>
                                <Text style={{
                                    alignSelf: 'center',
                                    marginTop: 15, fontSize: 16, color: 'white'
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
