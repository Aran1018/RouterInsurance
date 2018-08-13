/**
 *那当自己都萎靡到
 *无法被依靠的时候该如何振作？
 *Creat by Aran  at  2018/7/17
 *除过自己心中笃信的那一点不灭的光亮
 *我觉得这世间再没有别的东西比它值得被如此依靠。
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

let MARGIN_TWO_SIDES = 13;
let widthOfWindow = Dimensions.get('window').width;

var {height, width} = Dimensions.get('window');
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


    showAlter(text) {
        alert(text);
    }


    render() {
        let modalBackgroundStyle = {
            backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : 'red',
        };
        let innerContainerTransparentStyle = this.state.transparent
            ? {
                backgroundColor: '#fff',
                justifyContent: "flex-end",
            }
            : null;


        return (
            <View>
                <View style={{flexDirection: 'column'}}>
                    <ScrollView>
                        <View style={{height: 50, backgroundColor: '#FFFFFF'}}>
                            <View style={{flex: 1, justifyContent: 'center'}}>
                                <TouchableOpacity>
                                    <View style={{marginTop: 8}}>
                                        <Image source={require('../img/imgaskprice/back.png')}
                                               style={{
                                                   width: 35, height: 30, alignItems: 'center',
                                                   marginTop: 32
                                               }}/>
                                    </View>
                                </TouchableOpacity>

                            </View>

                            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                <Text
                                    style={{color: '#3f3f3f', fontSize: 20, marginLeft: 3, marginTop: 20}}>一键询价
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
                                    <Image source={require('../img/imgaskprice/phone.png')}
                                           style={{width: 21, height: 18, marginRight: 8, alignItems: 'center'}}/>
                                </TouchableOpacity>
                            </View>
                        </View>


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
                                        width: 500, height: 240, backgroundColor: "#ffffff",
                                        alignItems: "center",
                                        justifyContent: "flex-end",
                                    }}>
                                        <Image style={{resizeMode: 'stretch', marginTop: 20, width: 100, height: 100}}
                                               source={require('../img/imgaskprice/dialogimg.png')}/>
                                        <Text style={{marginTop: 10, fontSize: 20, fontWeight: "bold"}}>提交成功</Text>
                                        <Text style={{marginTop: 10, fontSize: 15}}>保险专员会尽快与您联系</Text>

                                        <View>
                                            <TouchableHighlight onPress={this.jump.bind(this)}
                                                                style={{
                                                                    width: 300,
                                                                    height: 40,
                                                                    backgroundColor: "#000",
                                                                    alignItems: "center",
                                                                    justifyContent: "center",
                                                                    marginTop: 10
                                                                }}>
                                                <Text style={{color: "#fff"}}>OK</Text>
                                            </TouchableHighlight>
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
                                           height: 160,
                                           resizeMode: Image.resizeMode.stretch,
                                       }]}/>
                            </TouchableOpacity>
                        </View>

                        {/*电话*/}
                        <View style={{flexDirection: 'row', width: width}}>
                            <View>
                                <View style={{flexDirection: 'row', width: width, marginTop: 5}}>
                                    < Image source={require('../img/imgaskprice/mobilephone.png')}
                                            style={[styles.imgStyle = {
                                                width: 25,
                                                height: 25,
                                                marginLeft: 15,
                                                marginTop: 10
                                            }]}/>
                                    <Text style={{marginLeft: 5, marginTop: 12, fontSize: 16}}>
                                        电话
                                    </Text>

                                    <TextInput style={styles.textInputStyle} placeholder={'请输入您的手机号'}
                                               underlineColorAndroid='transparent'
                                               placeholderTextColor={'#a8b4c6'}
                                    >
                                    </TextInput>
                                </View>
                            </View>
                        </View>

                        {/*分界线*/}
                        <View style={styles.Underline}/>

                        {/*行驶证*/}
                        <View style={{flexDirection: 'row', width: Dimensions.get('window').width}}>
                            <View>
                                <View
                                    style={{flexDirection: 'row', width: Dimensions.get('window').width, marginTop: 5}}>
                                    < Image source={require('../img/imgaskprice/idCard.png')}
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

                                    {/*拍摄行驶证正面*/}

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

                                                <Image source={require('../img/imgaskprice/camera.png')}
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
                                                    拍摄行驶证正面
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>


                                    {/*拍摄行驶证背面*/}
                                    <View>
                                        <TouchableOpacity>
                                            <View style={{
                                                backgroundColor: '#83878c',
                                                height: 70,
                                                width: 110,
                                                marginTop: 15,
                                                marginRight: 15,
                                            }}>

                                                <Image source={require('../img/imgaskprice/camera.png')}
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
                                                    拍摄行驶证背面
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>

                        {/*分界线*/}
                        <View style={styles.Underline}/>

                        {/*请选择投保公司*/}
                        <View style={styles.PictureDescriptionView}>

                            <Text style={styles.PictureDescription}>
                                请选择投保公司：
                            </Text>
                        </View>
                        {
                            /*===组件复用部分===*/
                        }

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
                        {
                            /*===组件复用部分===*/
                        }

                        {/*身份证*/}
                        <View style={{flexDirection: 'row', width: Dimensions.get('window').width}}>
                            <View>
                                <View
                                    style={{flexDirection: 'row', width: Dimensions.get('window').width, marginTop: 5}}>
                                    < Image source={require('../img/imgaskprice/idCard.png')}
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

                                                <Image source={require('../img/imgaskprice/camera.png')}
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

                                                <Image source={require('../img/imgaskprice/camera.png')}
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
                        <View style={styles.Underline}/>

                        {/*险选种类*/}
                        <View style={{flexDirection: 'row', width: Dimensions.get('window').width}}>
                            <View>
                                <View
                                    style={{flexDirection: 'row', width: Dimensions.get('window').width, marginTop: 5}}>
                                    < Image source={require('../img/imgaskprice/list.png')}
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
                                        < Image source={require('../img/imgaskprice/pull-down.png')}
                                                style={[styles.imgStyle = {
                                                    width: 18,
                                                    height: 18,
                                                    marginLeft: 140,
                                                    marginTop: 15
                                                }]}/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        {/*分界线*/}
                        <View style={styles.Underline}/>

                        {/*===跳转按钮===*/}
                        <TouchableHighlight
                            onPress={this._setModalVisible.bind(this, true)}
                            style={styles.JumpOutButton}>
                            <View>
                                <Text style={styles.TextJumpOutButton}>一键询价</Text>
                            </View>
                        </TouchableHighlight>


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
        backgroundColor: '#f4f4f4',
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

        marginLeft:50,
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