/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * 资料填写
 */

import React, {Component} from 'react';
import {
    Image,
    Modal,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    View
} from 'react-native';
import {Dimensions} from 'react-native';

let {height, width} = Dimensions.get('window');

import ImageRadioGroup from "../modules/ImageRadioInformation";
import Dividing from "../modules/Dividing";
import {px2dp, setSpText} from "../utils/px2dpUtils";
import * as Orientation from "react-native-orientation";
import ToastAndroid from "../modules/ToastAndroid";

let DialogSize = px2dp(240);
let AllIconSize = px2dp(19);
let DialogFontSize = setSpText(8);
let MarginTop = px2dp(10);
let CameraHeight = px2dp(12);
let CameraWidth = px2dp(18);
let AllFontSize = setSpText(9);
let CameraFontSize = setSpText(5.5);
let Orange = '#fe2b00';

type Props = {};

export default class ChangeInformation extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            radioSelect: '',
            confirmButton: '#8a8a8a',
            animationType: 'none',
            modalVisible: false,
            transparent: true,
            sexArray: [

                {
                    title: '支付宝支付',
                    imgBrand: require("../img/changeInformation/alipay.png"),

                    image: require('../img/ImageRadios/noselected.png'),
                    image2: require('../img/ImageRadios/selected.png'),
                },

                {
                    title: '微信支付',
                    imgBrand: require("../img/changeInformation/wechatpay.png"),
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
        return (
            <View style={{}}>
                <View style={{flexDirection: 'column'}}>
                    <ScrollView overScrollMode="never" showsVerticalScrollIndicator={false} overScrollMode="never">
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
                                               source={require('../img/changeInformation/DialogInformation.png')}/>
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

                        {/*保费合计*/}
                        <View style={[{
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: 'black',
                            width: width,
                            height: height / 6,
                        }]}>
                            <View style={{
                                height: height / px2dp(24),
                                width:width,
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginBottom: px2dp(0),
                                backgroundColor:'black'
                            }}>
                                <Text style={{
                                    color: '#FFFFFF',
                                    fontSize: setSpText(9),
                                    marginLeft: px2dp(15),
                                    marginTop: px2dp(19)
                                }}>保费合计：</Text>
                                <Text style={{color: '#FFFFFF', fontSize: setSpText(12), marginTop: px2dp(17)}}>￥</Text>
                                <Text style={{color: '#FFFFFF', fontSize: setSpText(30)}}>5940.00</Text>
                            </View>
                        </View>

                        {/*姓名*/}
                        <View style={{flexDirection: 'row', height: px2dp(50)}}>
                            <View style={[{flexDirection: 'row', alignItems: 'center', height: 50}]}>
                                < Image source={require('../img/changeInformation/name.png')}
                                        style={[styles.imgStyle = {
                                            width: AllIconSize,
                                            height: AllIconSize,
                                            marginLeft: px2dp(16),
                                            marginTop: px2dp(5)
                                        }]}/>
                                <Text style={{marginLeft: px2dp(5), marginTop: px2dp(5), fontSize: AllFontSize}}>
                                    姓名
                                </Text>
                            </View>
                            <TextInput
                                style={{
                                    marginTop: px2dp(5),
                                    fontSize: AllFontSize,
                                    textAlign: 'right',
                                    flex: 1,
                                    color: '#847d80',
                                }}
                                placeholder="请输入您的姓名"
                                placeholderTextColor="#A19D9E"
                                numberOfLines={1}
                                ref={'content'}
                                underlineColorAndroid='transparent'
                                multiline={true}
                                autoFocus={false}
                                onChangeText={(text) => {
                                    content = text;
                                }}/>
                        </View>

                        {/*分割线*/}
                        <View style={{
                            width: width - 30,
                            marginLeft: px2dp(15),
                            marginRight: px2dp(15),
                            height: px2dp(0.5),
                            marginTop: px2dp(5),
                            backgroundColor: '#aca8a9'
                        }}>
                        </View>

                        {/*邮寄地址*/}
                        <View style={{flexDirection: 'row', height: px2dp(50)}}>
                            <View style={[{flexDirection: 'row', alignItems: 'center', height: px2dp(50)}]}>
                                < Image source={require('../img/changeInformation/address.png')}
                                        style={[styles.imgStyle = {
                                            width: AllIconSize,
                                            height: AllIconSize,
                                            marginLeft: px2dp(16),
                                            marginTop: px2dp(5)
                                        }]}/>
                                <Text style={{marginLeft: px2dp(5), marginTop: px2dp(5), fontSize: AllFontSize}}>
                                    保单邮寄地址
                                </Text>
                            </View>
                            <TextInput
                                style={{
                                    marginTop: px2dp(5),
                                    fontSize: AllFontSize,
                                    textAlign: 'right',
                                    flex: 1,
                                    color: '#847d80',
                                }}
                                placeholder="请输入您的保单邮寄地址"
                                placeholderTextColor="#A19D9E"
                                numberOfLines={1}
                                ref={'content'}
                                underlineColorAndroid='transparent'
                                multiline={true}
                                autoFocus={false}
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
                                                    backUrl: 'Inquiry',
                                                    imgSource: require("../img/cameraImg/cardFront.png"),
                                                    PositiveOrNegative: '正面'
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
                                                    position: 'absolute'
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
                                                    backUrl: 'Inquiry',
                                                    imgSource: require("../img/cameraImg/cardBack.png"),
                                                    PositiveOrNegative: '背面'
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
                                                    position: 'absolute'
                                                }}>
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
                            <Text style={{
                                marginLeft: px2dp(15),
                                fontSize: AllFontSize,
                                color: '#595959',
                                marginTop: 20
                            }}>
                                请选择支付方式
                            </Text>
                        </View>

                        {/*支付方式*/}
                        <View>
                            <ImageRadioGroup
                                style={{flexDirection: 'row'}}
                                conTainStyle={{height: px2dp(20), width: px2dp(20)}}
                                imageStyle={{width: px2dp(8), height: px2dp(8)}}
                                selectIndex={'1'}
                                data={this.state.sexArray}
                                onPress={(index, item) => {
                                    // console.warn(item.title);
                                    // console.warn(index);
                                    this.setState({
                                        radioSelect: index,
                                    });

                                }}
                            />
                        </View>
                        {/*确定购买*/}

                        {this.renderConfirmButton()}

                    </ScrollView>
                </View>
            </View>
        );
        let innerContainerTransparentStyle = this.state.transparent
            ? {
                justifyContent: "flex-end",
            }
            : null;
    }

    _setModalVisible = (visible) => {
        if (this.state.radioSelect === '') {

        }
        this.setState({modalVisible: visible});
    };

    renderConfirmButton() {

        if (this.state.radioSelect === '') {
            return (
                <TouchableOpacity onPress={()=>{ToastAndroid.show('请选择支付方式',ToastAndroid.SHORT)}}>
                    <View style={{
                        height: px2dp(50),
                        width: width * 13 / 14,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: this.state.confirmButton,
                        margin: px2dp(5),
                        marginTop: px2dp(15),
                        marginLeft: px2dp(15),

                    }}>
                        <Text style={{
                            fontSize: setSpText(12),
                            color: '#FFFFFF'
                        }}>
                            确定购买
                        </Text>
                    </View>
                </TouchableOpacity>
            )
        } else {
            return (
                <TouchableOpacity onPress={this._setModalVisible.bind(this, true)}>
                    <View style={{
                        height: px2dp(50),
                        width: width * 13 / 14,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: Orange,
                        margin: px2dp(5),
                        marginTop: px2dp(15),
                        marginLeft: px2dp(15),

                    }}>
                        <Text style={{
                            fontSize: setSpText(12),
                            color: '#FFFFFF'
                        }}>
                            确定购买
                        </Text>
                    </View>
                </TouchableOpacity>
            )
        }
    }
}

const styles = StyleSheet.create({
    aacontainer: {
        flex: 1,
        justifyContent: 'center',
        padding: px2dp(40),
    },
    innerContainer: {
        borderRadius: px2dp(10),
        alignItems: 'center',
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: setSpText(10),
        textAlign: 'center',
        margin: px2dp(10),
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: px2dp(5),
    },
});
