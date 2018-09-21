/**
 *那当自己都萎靡到
 *无法被依靠的时候该如何振作？
 *Creat by Aran  at  2018/7/17
 *除过自己心中笃信的那一点不灭的光亮
 *我觉得这世间再没有别的东西比它值得被如此依靠。
 *
 * 一键询价
 */
import React, {Component} from 'react';
import {
    BackHandler,
    Platform,
    Dimensions,
    Image,
    Modal,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    View,
    TouchableOpacity, ScrollView, StatusBar
} from 'react-native';
import MyPolicy from "./MyPolicy";
import ImageRadioGroup from "../modules/ImageRadioGroup";
import Dividing from "../modules/Dividing";
import {px2dp, setSpText} from "../utils/px2dpUtils";
import DividingCamera from "../modules/DividingCamera";
import * as Orientation from "react-native-orientation";

let DialogSize = px2dp(240);
let AllIconSize = px2dp(19);
let CameraHeight = px2dp(12);
let CameraWidth = px2dp(18);
let AllFontSize = setSpText(9);
let CameraFontSize = setSpText(5.5);
let Orange = '#fe2b00';
let DialogFontSize = setSpText(10);

let MarginTop = px2dp(10);

let MARGIN_TWO_SIDES = px2dp(13);
let widthOfWindow = Dimensions.get('window').width;

let {height, width} = Dimensions.get('window');
export default class AskPrice extends Component {

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



    static showAlter(text) {
        alert(text);
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
            <View>
                <View style={{flexDirection: 'column'}}>
                    <ScrollView overScrollMode="never" bounces={true} showsVerticalScrollIndicator={false}>

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
                            <StatusBar hidden={false}/>

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
                        <View style={{flexDirection: 'row', height: px2dp(40)}}>
                            <View style={[{flexDirection: 'row', alignItems: 'center', height: px2dp(40),}]}>
                                < Image source={require('../img/imgaskprice/mobilephone.png')}
                                        style={[styles.imgStyle = {
                                            width: AllIconSize,
                                            height: AllIconSize,
                                            marginLeft: px2dp(15),
                                            marginTop: px2dp(10),
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
                                placeholder="请输入您的电话号"
                                placeholderTextColor="#9b9b9b"
                                numberOfLines={1}
                                maxLength={11}
                                keyboardType={'numeric'}
                                underlineColorAndroid='transparent'
                                selectTextOnFocus={true}
                                clearTextOnFocus={true}
                                onChangeText={(text) => {
                                    const newText = text.replace(/[^\d]+/, '');
                                    console.log(newText)
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

                        {/*===跳转按钮===*/}
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
                                    fontSize: setSpText(12),
                                    color: '#FFFFFF'
                                }}>
                                    一键询价
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        )
            ;
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

    PictureDescriptionView: {
        marginTop: MARGIN_TWO_SIDES,
        marginLeft: MARGIN_TWO_SIDES,
    },

    PictureDescription: {
        textAlign: 'left',
        fontSize: setSpText(6.5),

    },
    JumpOutButton: {
        marginBottom: px2dp(20),
        height: px2dp(50),
        marginTop: px2dp(20),
        marginLeft: px2dp(30),
        marginRight: px2dp(30),
        backgroundColor: '#000000',

    },

    TakePhoto: {
        marginTop: px2dp(5),
        marginLeft: px2dp(190),
        resizeMode: 'contain',
        width: px2dp(70),
        height: px2dp(30)
    },
    ButtonTextInputStyle: {
        width: px2dp(150),
        backgroundColor: '#bebebe',
        textAlign: 'right',
        fontSize: setSpText(7.5),
    },
    Underline: {
        marginTop: px2dp(5),
        marginBottom: px2dp(5),
        marginLeft: MARGIN_TWO_SIDES,
        marginRight: MARGIN_TWO_SIDES,
        height: px2dp(1.5),
        backgroundColor: '#bebebe'
    },

    TitleImg: {
        width: widthOfWindow,
        marginBottom: px2dp(5),
        resizeMode: 'contain',
        height: px2dp(127),
    },

    InputImageStyle: {
        marginTop: px2dp(9),
        width: px2dp(20),
        height: px2dp(20),

    },
    XianZhongXuanZe: {
        marginLeft: px2dp(5),
        color: '#b6b6b6',
        width: px2dp(130),
        height: px2dp(40),
        alignItems: 'center',
        fontSize: setSpText(6.5)

    },
    IconText: {
        marginLeft: px2dp(5),
        color: '#5d5d5d',
        width: px2dp(40),
        height: px2dp(40),
        textAlignVertical: 'center',
        alignItems: 'center',
        fontSize: setSpText(6.5)
    },

    InputViewStyle: {
        marginLeft: MARGIN_TWO_SIDES,
        marginTop: 0,
        flexDirection: 'row',
    },
    container: {
        height: Dimensions.get('window').height,
        backgroundColor: '#f4f4f4',
    },
    textInputStyle: {

        marginLeft: px2dp(50),
        width: px2dp(260),
        backgroundColor: '#f4f4f4',
        textAlign: 'right',
        fontSize: setSpText(6.5)
    },
    TextJumpOutButton: {

        /*不规范*/
        marginLeft: widthOfWindow / 3,
        marginTop: px2dp(15),
        color: '#FFFFFF',
        fontSize: setSpText(7.5)
    },

});