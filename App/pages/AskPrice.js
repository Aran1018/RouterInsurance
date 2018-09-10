/**
 *那当自己都萎靡到
 *无法被依靠的时候该如何振作？
 *Creat by Aran  at  2018/7/17
 *除过自己心中笃信的那一点不灭的光亮
 *我觉得这世间再没有别的东西比它值得被如此依靠。
 *
 * 一件询价
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
    TouchableOpacity, ScrollView
} from 'react-native';
import MyPolicy from "./MyPolicy";
import ImageRadioGroup from "../modules/ImageRadioGroup";
import TitleBarBackButton from "../modules/TitleBarBackButton";
import Dividing from "../modules/Dividing";
import {px2dp, setSpText} from "../utils/px2dpUtils";

let AboutSpacing = px2dp(15);
let FontSize = px2dp(15);
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

    // static navigationOptions = {
    //
    //     headerTitle: '一键询价',
    //
    //     headerTitleStyle: {
    //         flex: 1, textAlign: 'center',fontSize:setSpText(18)
    //     },
    //     headerLeft: (
    //         <TitleBarBackButton/>
    //     ),
    //     headerRight: (
    //         <TouchableOpacity>
    //             <Image style={{
    //                 width: px2dp(30),
    //                 height: px2dp(30),
    //                 margin: px2dp(8),
    //                 resizeMode: "contain"
    //             }} source={require('../img/titlebar/phone.png')}/>
    //         </TouchableOpacity>
    //     )
    // };
    //

    jump() {
        const {navigator} = this.props;
        /*that存储了上一个this*/
        let that = this;
        if (navigator) {
            navigator.push({
                name: "MyPolicy",
                component: MyPolicy,
                /*params :{
                    title:this.state.title,
                    id:123,
                    getUser:function(user){
                        that.setState({
                            user:user
                        })

                    }
                }*/
            })
        }
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
                    <ScrollView>
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
                                        width: px2dp(400), height: px2dp(240), backgroundColor: "#ffffff",
                                        alignItems: "center",
                                        justifyContent: "flex-end",
                                    }}>
                                        <Image style={{
                                            resizeMode: 'stretch',
                                            marginTop: px2dp(20),
                                            width: px2dp(100),
                                            height: px2dp(100)
                                        }}
                                               source={require('../img/imgaskprice/dialogimg.png')}/>
                                        <Text style={{
                                            marginTop: MarginTop,
                                            fontSize: FontSize,
                                            fontWeight: "bold"
                                        }}>提交成功</Text>
                                        <Text style={{marginTop: MarginTop, fontSize: FontSize}}>保险专员会尽快与您联系</Text>

                                        <View>
                                            <TouchableOpacity onPress={
                                                () => {
                                                    this.finalSubmit()
                                                }
                                            }
                                                              style={{
                                                                  width: px2dp(300),
                                                                  height: px2dp(40),
                                                                  backgroundColor: "#000",
                                                                  alignItems: "center",
                                                                  justifyContent: "center",
                                                                  marginTop: MarginTop
                                                              }}>
                                                <Text style={{color: "#fff"}}>OK</Text>
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
                                autoFocus={false}
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


                                    <View
                                        style={[{flexDirection: 'row', height: px2dp(50), alignItems: 'flex-start',}]}>
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
                            <Text style={{
                                color: '#c0c2c5',
                                fontSize: px2dp(13),
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
                                imageStyle={{width: px2dp(10), height: px2dp(10)}}
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
                                    <View
                                        style={[{flexDirection: 'row', height: px2dp(50), alignItems: 'flex-start',}]}>
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
                        <View style={[{flexDirection: 'row', height: px2dp(50), alignItems: 'center',}]}>
                            <View style={[{flexDirection: 'row', height: px2dp(50), alignItems: 'center',}]}>
                                < Image source={require('../img/imgaskprice/list.png')}
                                        style={[styles.imgStyle = {
                                            width: px2dp(17),
                                            height: px2dp(17),
                                            marginLeft: px2dp(15),
                                            alignSelf: 'center',
                                            marginTop: px2dp(10)
                                        }]}/>
                                <Text style={{
                                    marginLeft: px2dp(5),
                                    marginTop: px2dp(10),
                                    fontSize: px2dp(13),
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
                                    fontSize: px2dp(15),
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
        padding: 40,
    },
    innerContainer: {
        borderRadius: 10,
        alignItems: 'center',
    },

    PictureDescriptionView: {
        marginTop: MARGIN_TWO_SIDES,
        marginLeft: MARGIN_TWO_SIDES,
    },

    PictureDescription: {
        textAlign: 'left',
        fontSize: 13,

    },
    JumpOutButton: {
        marginBottom: 20,
        height: 50,
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: '#000000',

    },

    TakePhoto: {
        marginTop: 5,
        marginLeft: 190,
        resizeMode: 'contain',
        width: 70,
        height: 30
    },
    ButtonTextInputStyle: {
        width: 150,
        backgroundColor: '#bebebe',
        textAlign: 'right',
        fontSize: 15,
    },
    Underline: {
        marginTop: 5,
        marginBottom: 5,
        marginLeft: MARGIN_TWO_SIDES,
        marginRight: MARGIN_TWO_SIDES,
        height: 1.5,
        backgroundColor: '#bebebe'
    },

    TitleImg: {
        width: widthOfWindow,
        marginBottom: 5,
        resizeMode: 'contain',
        height: 127,
    },

    InputImageStyle: {
        marginTop: 9,
        width: 20,
        height: 20,

    },
    XianZhongXuanZe: {
        marginLeft: 5,
        color: '#b6b6b6',
        width: 130,
        height: 40,
        alignItems: 'center',
        fontSize: 13

    },
    IconText: {
        marginLeft: 5,
        color: '#5d5d5d',
        width: 40,
        height: 40,
        textAlignVertical: 'center',
        alignItems: 'center',
        fontSize: 13
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

        marginLeft: 50,
        width: 260,
        backgroundColor: '#f4f4f4',
        textAlign: 'right',
        fontSize: 13,
    },
    TextJumpOutButton: {

        /*不规范*/
        marginLeft: widthOfWindow / 3,
        marginTop: 15,
        color: '#FFFFFF',
        fontSize: 15
    },

});