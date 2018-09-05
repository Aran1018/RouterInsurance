/**
 *那当自己都萎靡到
 *无法被依靠的时候该如何振作？
 *Creat by Aran  at  2018/7/16
 *除过自己心中笃信的那一点不灭的光亮
 *我觉得这世间再没有别的东西比它值得被如此依靠。
 */
import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, Text, TextInput, TouchableHighlight, View} from 'react-native';
import px2dp from "../utils/px2dpUtils";

let MARGIN_TWO_SIDES = px2dp(13);
let widthOfWindow = Dimensions.get('window').width;

export default class ImageRadio extends Component{

    show(text) {
        alert(text);
    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('./image/459361238862144447.png')}
                       style={styles.TitleImg}
                />

                <View style={styles.InputViewStyle}>
                    <Image source={require('./image/phone.png')}
                           style={styles.InputImageStyle}
                    />
                    <Text style={styles.IconText}>
                        电话
                    </Text>
                    <TextInput style={styles.textInputStyle} placeholder={'请输入手机号'} underlineColorAndroid='transparent'
                               placeholderTextColor={'#a8b4c6'}
                    >


                    </TextInput>
                </View>
                <View style={styles.Underline}/>

                <View style={styles.InputViewStyle}>
                    <Image source={require('./image/card.png')}
                           style={styles.InputImageStyle}
                    />
                    <Text style={styles.IconText}>
                        行驶证
                    </Text>

                    <TouchableHighlight style={{underlayColor: '#ffffff'}}
                                        onPress={this.show.bind(this, 'aaa')}>

                        <Image source={require('./image/4862144447.png')}
                               style={styles.TakePhoto}
                        />

                    </TouchableHighlight>


                </View>
                <View style={styles.Underline}/>

                <View style={styles.PictureDescriptionView}>

                    <Text style={styles.PictureDescription}>

                        请选择投保公司：
                    </Text>
                </View>
                {
                    /*===组件复用部分===*/
                }

                <View>
                    <CirclePicture/>
                </View>
                {
                    /*===组件复用部分===*/
                }


                <View style={styles.InputViewStyle}>
                    <Image source={require('./image/card.png')}
                           style={styles.InputImageStyle}
                    />
                    <Text style={styles.IconText}>
                        身份证
                    </Text>

                    <TouchableHighlight style={{underlayColor: '#ffffff'}}
                                        onPress={this.show.bind(this, 'aaa')}>

                        <Image source={require('./image/4862144447.png')}
                               style={styles.TakePhoto}
                        />

                    </TouchableHighlight>


                </View>
                <View style={styles.Underline}/>

                <View style={styles.InputViewStyle}>
                    <Image source={require('./image/list.png')}
                           style={styles.InputImageStyle}
                    />
                    <Text style={styles.XianZhongXuanZe}>
                        险种选择（建议填写）
                    </Text>

                </View>
                <View style={styles.Underline}/>
                {/*===跳转按钮===*/}
                <TouchableHighlight
                    style={styles.JumpOutButton}
                    onPress={this.show.bind(this, '跳转下一页面')}>
                    <View>
                        <Text style={styles.TextJumpOutButton}>一键询价</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}
let styles = StyleSheet.create({


    PictureDescriptionView: {
        marginTop: MARGIN_TWO_SIDES,
        marginLeft: MARGIN_TWO_SIDES,
    },

    PictureDescription: {
        backgroundColor: '#f4f4f4',
        textAlign: 'left',
        fontSize: px2dp(13),

    },
    JumpOutButton:{

        resizeMode: 'contain',
        textAlignVertical: 'center',
        height:px2dp(50),
        marginTop:px2dp(20),
        marginLeft:px2dp(30),
        marginRight:px2dp(30),
        backgroundColor:'#000000',

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
        fontSize: px2dp(15),
    },
    Underline: {
        marginTop: px2dp(5),
        marginBottom:px2dp(5),
        marginLeft: MARGIN_TWO_SIDES,
        marginRight: MARGIN_TWO_SIDES,
        height:px2dp(1.5),
        backgroundColor: '#bebebe'
    },

    TitleImg: {
        width: widthOfWindow,
        marginBottom:px2dp(5),
        resizeMode: 'contain',
        height: px2dp(127),
    },

    InputImageStyle: {
        textAlignVertical: 'center',
        marginTop: px2dp(9),
        textAlign: 'center',
        width: px2dp(20),
        height: px2dp(20),

    },
    XianZhongXuanZe:{
        marginLeft: px2dp(5),
        color: '#b6b6b6',
        width: px2dp(130),
        height:px2dp(40),
        textAlignVertical: 'center',
        alignItems: 'center',
        fontSize: px2dp(13)

    },
    IconText: {
        marginLeft: px2dp(5),
        color: '#5d5d5d',
        width: px2dp(40),
        height:px2dp(40),
        textAlignVertical: 'center',
        alignItems: 'center',
        fontSize: px2dp(13)
    },

    InputViewStyle: {
        marginLeft: MARGIN_TWO_SIDES,
        flexDirection: 'row'
    },
    container: {
        backgroundColor: '#f4f4f4',
    },
    textInputStyle: {
        width: px2dp(260),
        textAlign: 'right',
        fontSize: px2dp(13),
    },
    TextJumpOutButton:{

        /*不规范*/
        marginLeft:widthOfWindow/3,
        marginTop:px2dp(15),
        color:'#FFFFFF',
        fontSize:px2dp(15)
    },

});