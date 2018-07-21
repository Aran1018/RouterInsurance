/**
 *那当自己都萎靡到
 *无法被依靠的时候该如何振作？
 *Creat by Aran  at  2018/7/17
 *除过自己心中笃信的那一点不灭的光亮
 *我觉得这世间再没有别的东西比它值得被如此依靠。
 */
import React, {Component} from 'react';
import {BackHandler,Platform,Dimensions, Image, Modal, StyleSheet, Text, TextInput, TouchableHighlight, View} from 'react-native';
import MyPolicy from "./MyPolicy";

let MARGIN_TWO_SIDES = 13;
let widthOfWindow = Dimensions.get('window').width;


export default class AskPrice extends Component{
    constructor(props) {
        super(props);
        this.state = {
            animationType: 'none',
            modalVisible: false,
            transparent: true,
        };
    }


        componentWillMount() {
            if (Platform.OS === 'android') {
                BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
            }
        }
        componentWillUnmount() {
            if (Platform.OS === 'android') {
                BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
            }
        }
        onBackAndroid = () => {
            const{navigator} = this.props;
            /*that存储了上一个this*/
            let that = this;
            if(navigator){
                navigator.push({
                    name : "MyPolicy",
                    component : MyPolicy,
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
        };


    jump(){
            const{navigator} = this.props;
        /*that存储了上一个this*/
        let that = this;
        if(navigator){
            navigator.push({
                name : "MyPolicy",
                component : MyPolicy,
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
            ? { backgroundColor: '#fff' ,
                justifyContent:"flex-end",}
            : null;


        return (
            <View style={styles.container}>
                <Modal
                    animationType={this.state.animationType}
                    transparent={this.state.transparent}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { this._setModalVisible(false) } }
                >
                    <View style={[styles.aacontainer, modalBackgroundStyle]}>
                        <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
                            <View style={{width:500,height:240,backgroundColor:"#ffffff",
                                alignItems:"center",
                                justifyContent:"flex-end",}}>
                                <Image style={{resizeMode:'stretch',marginTop:20,width:100,height:100}} source={require('../img/imgaskprice/dialogimg.png')}/>
                                <Text style={{marginTop:10,fontSize:20,fontWeight:"bold"}}>提交成功</Text>
                                <Text style={{marginTop:10,fontSize:15}}>保险专员会尽快与您联系</Text>

                                <View>
                                    <TouchableHighlight onPress={this.jump.bind(this)}
                                        style={{
                                        width:300,
                                        height:40,
                                        backgroundColor:"#000",
                                        alignItems:"center",
                                        justifyContent:"center",
                                        marginTop:10
                                    }}>
                                        <Text style={{color:"#fff"}}>OK</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>

                        </View>
                    </View>
                </Modal>


                <Image source={require('../img/imgaskprice/ad.png')}
                       style={styles.TitleImg}
                />

                <View style={styles.InputViewStyle}>
                    <Image source={require('../img/imgaskprice/phone.png')}
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
                    <Image source={require('../img/imgaskprice/idCard.png')}
                           style={styles.InputImageStyle}
                    />
                    <Text style={styles.IconText}>
                        行驶证
                    </Text>

                    <TouchableHighlight
                        onPress={this.showAlter.bind('aaa')}>

                        {/*<Image source={require('../img/4862144447.png')}
                               style={styles.TakePhoto}

                               拍照上传
                        />*/}

                        <Text>拍照上传</Text>
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
                    {/*<CirclePicture/>*/}
                </View>
                {
                    /*===组件复用部分===*/
                }


                <View style={styles.InputViewStyle}>
                    <Image source={require('../img/imgaskprice/idCard.png')}
                           style={styles.InputImageStyle}
                    />
                    <Text style={styles.IconText}>
                        身份证
                    </Text>

                    <TouchableHighlight>

                        {/*<Image

                        //TODO==拍照上传


                        source={require('./image/4862144447.png')}*/}
                        {/*style={styles.TakePhoto}*/}


                        {/*/>*/}
                        <Text>拍照上传</Text>

                    </TouchableHighlight>


                </View>
                <View style={styles.Underline}/>

                <View style={styles.InputViewStyle}>
                    <Image source={require('../img/imgaskprice/list.png')}
                           style={styles.InputImageStyle}
                    />
                    <Text style={styles.XianZhongXuanZe}>
                        险种选择（建议填写）
                    </Text>

                </View>
                <View style={styles.Underline}/>
                {/*===跳转按钮===*/}
                <TouchableHighlight
                    onPress={this._setModalVisible.bind(this,true) }
                    style={styles.JumpOutButton}>
                    <View>
                        <Text style={styles.TextJumpOutButton}>一键询价</Text>
                    </View>
                </TouchableHighlight>
            </View>

        );
    }

    _setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
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
    JumpOutButton:{

        height:50,
        marginTop:20,
        marginLeft:30,
        marginRight:30,
        backgroundColor:'#000000',

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
        marginBottom:5,
        marginLeft: MARGIN_TWO_SIDES,
        marginRight: MARGIN_TWO_SIDES,
        height: 1.5,
        backgroundColor: '#bebebe'
    },

    TitleImg: {
        width: widthOfWindow,
        marginBottom:5,
        resizeMode: 'contain',
        height: 127,
    },

    InputImageStyle: {
        marginTop: 9,
        width: 20,
        height: 20,

    },
    XianZhongXuanZe:{
        marginLeft: 5,
        color: '#b6b6b6',
        width: 130,
        height:40,
        alignItems: 'center',
        fontSize: 13

    },
    IconText: {
        marginLeft: 5,
        color: '#5d5d5d',
        width: 40,
        height:40,
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
        height:Dimensions.get('window').height,
        backgroundColor: '#f4f4f4',
    },
    textInputStyle: {
        width: 260,
        backgroundColor: '#f4f4f4',
        textAlign: 'right',
        fontSize: 13,
    },
    TextJumpOutButton:{

        /*不规范*/
        marginLeft:widthOfWindow/3,
        marginTop:15,
        color:'#FFFFFF',
        fontSize:15
    },

});