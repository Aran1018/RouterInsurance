/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 *
 *
 * ?????????
 * @format
 * @flow
 *
 * 修改资料
 */

import React, {Component} from 'react';
import {
    Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity,
    Dimensions,
    PixelRatio, View, TouchableHighlight
} from 'react-native';
import ImageRadioGroup from "../modules/ImageRadioGroup";
import Dividing from "../modules/Dividing";
import px2dp from "../utils/px2dpUtils";

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
            <View style={{}}>
                <View style={{flexDirection: 'column'}}>

                    <ScrollView>
                        {/*广告图*/}
                        <View style={{alignItems: 'center', flex: 1}}>
                            <TouchableOpacity>
                                <Image source={require('../img/imgaskprice/ad.png')}
                                       style={[styles.imageStyle = {
                                           width: width,
                                           height: (height + 22) / 5,
                                           resizeMode: Image.resizeMode.stretch,
                                       }]}/>
                            </TouchableOpacity>
                        </View>

                        {/*电话*/}
                        <View style={{flexDirection: 'row'}}>
                            <View style={[{flexDirection: 'row', alignItems: 'center',}]}>
                                < Image source={require('../img/imgaskprice/mobilephone.png')}
                                        style={[styles.imgStyle = {
                                            width: px2dp(17),
                                            height: px2dp(17),
                                            marginLeft: px2dp(15),
                                        }]}/>
                                <Text style={{marginLeft: px2dp(5), fontSize: px2dp(13)}}>
                                    电话
                                </Text>
                            </View>
                            <TextInput
                                style={{
                                    fontSize: px2dp(14),
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

                        {/*分界线*/}
                        <Dividing/>

                        {/*行驶证*/}
                        <View style={{flexDirection: 'row', width: width}}>
                            <View>
                                <View style={{flexDirection: 'row', width: width, marginTop: px2dp(5)}}>


                                    <View style={[{flexDirection: 'row', height: 50, alignItems: 'flex-start',}]}>
                                        <View style={[{flexDirection: 'row', alignItems: 'center',}]}>
                                            <Image source={require('../img/imgaskprice/idCard.png')}
                                                   style={[styles.imgStyle = {
                                                       width: px2dp(17),
                                                       height: px2dp(17),
                                                       marginLeft: px2dp(15),
                                                       marginTop: px2dp(10)
                                                   }]}/>
                                            <Text style={{
                                                marginLeft: px2dp(5),
                                                marginTop: px2dp(10),
                                                fontSize: px2dp(13)
                                            }}>
                                                行驶证
                                            </Text>
                                        </View>
                                    </View>

                                    <Text
                                        style={{
                                            marginLeft: px2dp(5),
                                            marginRight: px2dp(5),
                                            fontSize: px2dp(13),
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
                                                    拍摄行驶证副本
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>


                        <Dividing/>

                        {/*投保公司*/}
                        <View style={{flexDirection: 'row', width: Dimensions.get('window').width}}>
                            <Text style={{color: '#c0c2c5', fontSize: 13, marginTop: 10, marginLeft: 15}}>
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
                                    console.warn(item.title);
                                    console.warn(index)
                                }}
                            />
                        </View>

                        {/*身份证*/}
                        <View style={{flexDirection: 'row', width: width}}>
                            <View>
                                <View style={{flexDirection: 'row', width: width, marginTop: px2dp(5)}}>
                                    <View style={[{flexDirection: 'row', height: 50, alignItems: 'flex-start',}]}>
                                        <View style={[{flexDirection: 'row', alignItems: 'center',}]}>
                                            < Image source={require('../img/imgaskprice/idCard.png')}
                                                    style={[styles.imgStyle = {
                                                        width: px2dp(17),
                                                        height: px2dp(17),
                                                        marginLeft: px2dp(15),
                                                        marginTop: px2dp(10)
                                                    }]}/>
                                            <Text style={{
                                                marginLeft: px2dp(5),
                                                marginTop: px2dp(10),
                                                fontSize: px2dp(13)
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


                        {/*分界线*/}
                        <Dividing/>

                        {/*险选种类*/}
                        <View style={{flexDirection: 'row',}}>
                            <View style={[{flexDirection: 'row', height: 50, alignItems: 'center',}]}>
                                < Image source={require('../img/imgaskprice/list.png')}
                                        style={[styles.imgStyle = {
                                            width: px2dp(17),
                                            height: px2dp(17),
                                            marginLeft: px2dp(15),
                                            marginTop: px2dp(10)
                                        }]}/>
                                <Text style={{
                                    marginLeft: px2dp(5),
                                    marginTop: px2dp(10),
                                    fontSize: px2dp(13),
                                    color: '#bdbdbd'
                                }}>
                                    险种选择(建议填写)
                                </Text>
                                <TouchableOpacity>
                                    < Image source={require('../img/imgaskprice/pull-down.png')}
                                            style={[styles.imgStyle = {
                                                width: px2dp(15),
                                                height: px2dp(15),
                                                marginTop: px2dp(10),
                                                flex: 1,
                                                justifyContent: 'flex-end'
                                            }]}/>
                                </TouchableOpacity>
                            </View>

                        </View>

                        {/*分界线*/}
                        <Dividing/>

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
                                height: px2dp(50),
                                width: width * 13 / 14,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'black',
                                margin: px2dp(5),
                                marginTop: px2dp(15),
                                marginLeft: px2dp(12),
                            }}>
                                <Text style={{
                                    fontSize: 15,
                                    color: '#FFFFFF'
                                }}>
                                    提交
                                </Text>
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
