/**
 * Sample React Native App
 * https://github.com/facebook/react-native
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
    PixelRatio, View, TouchableHighlight, Modal
} from 'react-native';
import ImageRadioGroup from "../modules/ImageRadioGroup";
import Dividing from "../modules/Dividing";
import {px2dp, setSpText} from "../utils/px2dpUtils";
import ImagePicker from 'react-native-image-picker';
import * as Orientation from "react-native-orientation";

let content = '';
let iconSize = px2dp(19);
let {height, width} = Dimensions.get('window');

let DialogFontSize = setSpText(8);
let Orange = '#fe2b00';
let AllIconSize = px2dp(19);
let CameraHeight = px2dp(12);
let CameraWidth = px2dp(18);
let AllFontSize = setSpText(9);
let CameraFontSize = setSpText(5.5);
let DialogSize = px2dp(240);

let MarginTop = px2dp(10);
let MARGIN_TWO_SIDES = px2dp(13);

type Props = {};

/**
 * 设置text为sp
 * @param size sp
 * return number dp
 */

export default class ChangeDate extends Component {


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
                    "fileName": require('../img/ImageRadios/brand.png'),
                },
                {
                    "id": 2,
                    "name": "中国平安",
                    "fileName": require('../img/ImageRadios/pingan.png'),
                },
                {
                    "id": 3,
                    "name": "中国大地保险",
                    "fileName": require('../img/ImageRadios/dadi.png'),
                }
            ],
        };
        this.statea = {
            inputValue: "",
        }
    }


    componentWillMount() {
        Orientation.lockToPortrait()

    }



    finalSubmit() {
        this._setModalVisible(!this.state.modalVisible);
        this.props.navigation.navigate('MyPolicy')
    }

    render() {
        let modalBackgroundStyle = {
            backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : 'red',
        };
        let innerContainerTransparentStyle = this.state.transparent
            ? {
                justifyContent: "flex-end",
            }
            : null;

        return (
            <View style={{}}>
                <View style={{flexDirection: 'column'}}>

                    <ScrollView overScrollMode="never" showsVerticalScrollIndicator={false}>

                        <Modal
                            animationType={this.state.animationType}
                            transparent={this.state.transparent}
                            visible={this.state.modalVisible}
                            onRequestClose={() => {
                                this._setModalVisible(false)
                            }}
                        >
                            <View style={[styles.aacontainer, modalBackgroundStyle]}>
                                <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
                                    <View style={{
                                        width:px2dp(250), height:px2dp(250), backgroundColor: "#ffffff",
                                        alignItems: "center",
                                        justifyContent: "flex-end",
                                    }}>
                                        <Image style={{
                                            resizeMode: 'stretch',
                                            marginTop: px2dp(10),
                                            width: px2dp(85),
                                            height: px2dp(90),
                                        }}
                                               source={require('../img/imgaskprice/dialogimg.png')}/>
                                        <Text style={{
                                            marginTop: px2dp(8),
                                            fontSize: DialogFontSize,
                                            fontWeight: "bold",
                                        }}>提交成功</Text>
                                        <Text
                                            style={{marginTop: MarginTop,marginBottom:px2dp(30),fontSize: setSpText(8)}}>保险专员会尽快与您联系</Text>

                                        <View>
                                            <TouchableOpacity onPress={
                                                () => {
                                                    this.finalSubmit()
                                                }
                                            }
                                                              style={{
                                                                  width:px2dp(250),
                                                                  height: px2dp(40),
                                                                  backgroundColor: "#000",
                                                                  alignItems: "center",
                                                                  justifyContent: "center",
                                                                  marginTop: MarginTop
                                                              }}>
                                                <Text style={{color: "#fff",fontSize:DialogFontSize}}>完成</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                </View>
                            </View>
                        </Modal>

                        {/*广告图*/}
                        <View style={{alignItems: 'center', flex: 1}}>
                            <TouchableOpacity>
                                <Image source={require('../img/imgaskprice/ad.png')}
                                       style={[styles.imageStyle = {
                                           width: width,
                                           height: (height + 22) / 5,
                                           resizeMode: 'stretch',
                                       }]}/>
                            </TouchableOpacity>
                        </View>

                        {/*电话*/}
                        <View style={{flexDirection: 'row', height: px2dp(40),}}>
                            <View style={[{flexDirection: 'row', alignItems: 'center', height: px2dp(40),}]}>
                                < Image source={require('../img/imgaskprice/mobilephone.png')}
                                        style={[styles.imgStyle = {
                                            width: AllIconSize,
                                            height: AllIconSize,
                                            marginLeft: px2dp(15),
                                            marginTop: px2dp(10)
                                        }]}/>
                                <Text style={{marginLeft: px2dp(5), fontSize: AllFontSize, marginTop: px2dp(10)}}>
                                    电话
                                </Text>
                            </View>
                            <TextInput
                                style={{
                                    fontSize: AllFontSize,
                                    textAlign: 'right',
                                    flex: 1,
                                    color: '#000',
                                    marginTop: px2dp(10)
                                }}
                                placeholder="请重新编写您的电话号"
                                placeholderTextColor="#9b9b9b"
                                numberOfLines={1}
                                ref={'content'}
                                maxLength={11}
                                keyboardType={'numeric'}
                                underlineColorAndroid='transparent'
                                multiline={false}
                                autoFocus={false}
                                onChangeText={(text) => {
                                    const newText = text.replace(/[^\d]+/, '');
                                    //可以打印看看是否过滤掉了非数字
                                    console.log(newText);
                                    this.setState({inputValue: newText})
                                }}
                                value={this.state.inputValue}/>
                        </View>

                        {/*分界线*/}
                        <Dividing/>

                        {/*行驶证*/}
                        <View style={{flexDirection: 'row', width: width}}>
                            <View>
                                <View style={{flexDirection: 'row', width: width, marginTop: px2dp(5)}}>
                                    <View
                                        style={[{flexDirection: 'row', height: px2dp(50), alignItems: 'flex-start',}]}>
                                        <View style={[{flexDirection: 'row', alignItems: 'center',}]}>
                                            <Image source={require('../img/imgaskprice/idCard.png')}
                                                   style={[styles.imgStyle = {
                                                       width: AllIconSize,
                                                       height: AllIconSize,
                                                       marginLeft: px2dp(15),
                                                       marginTop: px2dp(10)
                                                   }]}/>
                                            <Text style={{
                                                marginLeft: px2dp(5),
                                                marginTop: px2dp(10),
                                                fontSize: AllFontSize
                                            }}>
                                                行驶证
                                            </Text>
                                        </View>
                                    </View>

                                    {/*拍摄行驶证正本*/}
                                    <View>
                                        <TouchableOpacity onPress={() => {
                                            this.props.navigation.navigate(
                                                'IDcardExample', {
                                                    backUrl:'Inquiry',
                                                    imgSource:require("../img/cameraImg/licenseFront.png"),
                                                    PositiveOrNegative:'正本'
                                                })
                                        }}>
                                            <View style={{
                                                backgroundColor: '#83878c',
                                                height: px2dp(65),
                                                width: px2dp(100),
                                                marginTop: px2dp(10),
                                                marginLeft: px2dp(62),
                                                flexDirection: 'column',
                                                alignItems: 'center'
                                            }}>
                                                <Image source={require('../img/imgaskprice/camera.png')}
                                                       style={[styles.imgStyle = {
                                                           width: CameraWidth,
                                                           height: CameraHeight,
                                                           marginTop: px2dp(18),
                                                       }]}>
                                                </Image>
                                                <Text style={{
                                                    marginTop: px2dp(41),
                                                    fontSize: CameraFontSize,
                                                    color: '#fff',
                                                    position:'absolute'
                                                }}>
                                                    拍摄行驶证正本
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>


                                    {/*拍摄行驶证副本*/}

                                    <View>
                                        <TouchableOpacity onPress={() => {
                                            this.props.navigation.navigate(
                                                'IDcardExample', {
                                                    backUrl:'Inquiry',
                                                    imgSource:require("../img/cameraImg/licenseBack.png"),
                                                    PositiveOrNegative:'副本'
                                                })
                                        }}>
                                            <View style={{
                                                backgroundColor: '#83878c',
                                                height: px2dp(65),
                                                width: px2dp(100),
                                                marginTop: px2dp(10),
                                                marginLeft: px2dp(26),
                                                flexDirection: 'column',
                                                alignItems: 'center'
                                            }}>
                                                <Image source={require('../img/imgaskprice/camera.png')}
                                                       style={[styles.imgStyle = {
                                                           width: CameraWidth,
                                                           height: CameraHeight,
                                                           marginTop: px2dp(18),
                                                       }]}>
                                                </Image>
                                                <Text style={{
                                                    marginTop: px2dp(41),
                                                    fontSize: CameraFontSize,
                                                    color: '#fff',
                                                    position:'absolute'
                                                }}>
                                                    拍摄行驶证副本
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>


                        {/*分界线*/}
                        <Dividing/>

                        {/*投保公司*/}
                        <View style={{flexDirection: 'row', width: Dimensions.get('window').width}}>
                            <Text style={{
                                color: '#a3a5a8',
                                fontSize: AllFontSize,
                                marginTop: px2dp(10),
                                marginLeft: px2dp(15)
                            }}>
                                请选择投保公司
                            </Text>
                        </View>

                        {/*单选按钮*/}

                        <View>
                            <ImageRadioGroup
                                style={{flexDirection: 'row'}}
                                conTainStyle={{height: px2dp(20), width: px2dp(20)}}
                                imageStyle={{width: px2dp(8), height: px2dp(8)}}
                                selectIndex={0}
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
                                    <View
                                        style={[{flexDirection: 'row', height: px2dp(50), alignItems: 'flex-start',}]}>
                                        <View style={[{flexDirection: 'row', alignItems: 'center',}]}>
                                            <Image source={require('../img/imgaskprice/idCard.png')}
                                                   style={[styles.imgStyle = {
                                                       width: AllIconSize,
                                                       height: AllIconSize,
                                                       marginLeft: px2dp(15),
                                                       marginTop: px2dp(10)
                                                   }]}/>
                                            <Text style={{
                                                marginLeft: px2dp(5),
                                                marginTop: px2dp(10),
                                                fontSize: AllFontSize
                                            }}>
                                                身份证
                                            </Text>
                                        </View>
                                    </View>

                                    {/*拍摄身份证正面*/}
                                    <View>
                                        <TouchableOpacity onPress={() => {
                                            this.props.navigation.navigate(
                                                'IDcardExample', {
                                                    backUrl:'Inquiry',
                                                    imgSource:require("../img/cameraImg/cardFront.png"),
                                                    PositiveOrNegative:'正面'
                                                })
                                        }}>
                                            <View style={{
                                                backgroundColor: '#83878c',
                                                height: px2dp(65),
                                                width: px2dp(100),
                                                marginTop: px2dp(10),
                                                marginLeft: px2dp(62),
                                                flexDirection: 'column',
                                                alignItems: 'center'
                                            }}>
                                                <Image source={require('../img/imgaskprice/camera.png')}
                                                       style={[styles.imgStyle = {
                                                           width: CameraWidth,
                                                           height: CameraHeight,
                                                           marginTop: px2dp(18),
                                                       }]}>
                                                </Image>
                                                <Text style={{
                                                    marginTop: px2dp(41),
                                                    fontSize: CameraFontSize,
                                                    color: '#fff',
                                                    position:'absolute'
                                                }}>
                                                    拍摄身份证正面
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>


                                    {/*拍摄身份证背面*/}

                                    <View>
                                        <TouchableOpacity onPress={() => {
                                            this.props.navigation.navigate(
                                                'IDcardExample', {
                                                    backUrl:'Inquiry',
                                                    imgSource:require("../img/cameraImg/cardBack.png"),
                                                    PositiveOrNegative:'背面'
                                                })
                                        }}>
                                            <View style={{
                                                backgroundColor: '#83878c',
                                                height: px2dp(65),
                                                width: px2dp(100),
                                                marginTop: px2dp(10),
                                                marginLeft: px2dp(26),
                                                flexDirection: 'column',
                                                alignItems: 'center'
                                            }}>
                                                <Image source={require('../img/imgaskprice/camera.png')}
                                                       style={[styles.imgStyle = {
                                                           width: CameraWidth,
                                                           height: CameraHeight,
                                                           marginTop: px2dp(18),
                                                       }]}>
                                                </Image>
                                                <Text style={{
                                                    marginTop: px2dp(41),
                                                    fontSize: CameraFontSize,
                                                    color: '#fff',
                                                    position:'absolute'
                                                }}>
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
                        <View style={[{flexDirection: 'row', height: px2dp(40), alignItems: 'center',}]}>
                            <View style={[{flexDirection: 'row', height: px2dp(40), alignItems: 'center',}]}>
                                < Image source={require('../img/imgaskprice/list.png')}
                                        style={[styles.imgStyle = {
                                            width: AllIconSize,
                                            height: AllIconSize,
                                            marginLeft: px2dp(15),
                                            alignSelf: 'center',
                                            marginTop: px2dp(10)
                                        }]}/>
                                <Text style={{
                                    marginLeft: px2dp(5),
                                    marginTop: px2dp(10),
                                    fontSize: AllFontSize,
                                    alignSelf: 'center',
                                    color: '#969696'
                                }}>
                                    险种选择(建议填写)
                                </Text>
                            </View>
                            <View style={{flex: 1, marginRight: px2dp(10), alignSelf: 'center'}}>
                                <TouchableOpacity>
                                    < Image source={require('../img/imgaskprice/pull-down.png')}
                                            style={[styles.imgStyle = {
                                                width: px2dp(16),
                                                height: px2dp(16),
                                                marginLeft: px2dp(15),
                                                marginTop: px2dp(10),
                                                alignSelf: 'flex-end',
                                                marginRight: px2dp(10),
                                            }]}/>
                                </TouchableOpacity>

                            </View>
                        </View>

                        {/*分界线*/}
                        <Dividing/>

                        {/*补充资料*/}
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{
                                marginLeft: px2dp(15),
                                marginTop: px2dp(12),
                                fontSize:AllFontSize,
                                color: Orange
                            }}>
                                补充资料
                            </Text>
                            <View>
                                <TouchableOpacity>
                                    <View style={{
                                        backgroundColor: '#babfc4',
                                        height: px2dp(70),
                                        width: px2dp(110),
                                        marginTop: px2dp(15),
                                        marginLeft: px2dp(15)
                                    }}>
                                    </View>

                                    <Image source={require('../img/changedate/add.png')}
                                           style={[styles.imgStyle = {
                                               width: px2dp(18),
                                               height: px2dp(18),
                                               marginLeft: px2dp(60),
                                               marginTop: px2dp(42),
                                               position: 'absolute'
                                           }]}/>

                                </TouchableOpacity>
                            </View>
                        </View>
                        {/*提交按钮*/}
                        <TouchableOpacity onPress={this._setModalVisible.bind(this, true)}>
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
                                    fontSize:setSpText(12),
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

    _setModalVisible = (visible) => {
        this.setState({modalVisible: visible});
    };
}
let styles = StyleSheet.create({
    aacontainer: {
        flex: 1,
        justifyContent: 'center',
        padding: px2dp(40),
    },
    innerContainer: {
        borderRadius: px2dp(10),
        alignItems: 'center',
    },
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
    contentContainer: {},
    avatar1: {

        width: 150,
        height: 100
    },
    avatar2: {

        width: 150,
        height: 100
    },
    avatar3: {

        width: 150,
        height: 100
    },
    avatar4: {

        width: 150,
        height: 100
    }
});
