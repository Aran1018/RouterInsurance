/**
 *那当自己都萎靡到
 *无法被依靠的时候该如何振作？
 *Creat by Aran  at  2018/7/22
 *除过自己心中笃信的那一点不灭的光亮
 *我觉得这世间再没有别的东西比它值得被如此依靠。
 */
import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

let content = '';
import RadioModal from 'react-native-radio-master';
import {Dimensions} from 'react-native';

let {height, width} = Dimensions.get('window');


export default class ChangeDate extends Component{

    render() {
        return (
            <View style={{backgroundColor: 'white'}}>
                <View style={{flexDirection: 'column'}}>

                    <ScrollView>
                        {/*导航栏*/}
                        <View style={{height: (height - 490) / 2, backgroundColor: '#FFFFFF'}}>
                            <View style={{flex: 1, justifyContent: 'center'}}>
                                <TouchableOpacity>
                                    <Image source={require('../img/changedate/back.png')}
                                           style={{
                                               width: (width - 10) / 8,
                                               height: (height - 490) / 3,
                                               marginRight: (height - 490) / 6,
                                               alignItems: 'center',
                                               marginTop: (height - 490) / 2.6
                                           }}/>

                                </TouchableOpacity>
                            </View>

                            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                <Text
                                    style={{color: '#3f3f3f', fontSize: 20, marginLeft: 3, marginTop: 20}}>修改资料</Text>
                            </View>
                            <View style={{
                                marginRight: (height - 580) / 8,
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                flex: 1,
                                flexDirection: 'row',
                                marginBottom: 20
                            }}>
                                <TouchableOpacity>
                                    <Image source={require('../img/changedate/phone.png')}
                                           style={{
                                               width: (width - 10) / 16,
                                               height: (height - 490) / 6,
                                               marginRight: 8,
                                               alignItems: 'center'
                                               ,
                                               marginTop: 4
                                           }}/>
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

                                    <TextInput
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

                                    < Image source={require('../img/changedate/identity.png')}
                                            style={[styles.imgStyle = {
                                                width: 127.5,
                                                height: 75,
                                                marginTop: 10,
                                                marginRight: 10
                                            }]}/>
                                    <TouchableOpacity>
                                        < Image source={require('../img/changedate/modoule.png')}
                                                style={[styles.imgStyle = {
                                                    width: 127.5,
                                                    height: 75,
                                                    marginTop: 10,
                                                    marginRight: 30
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
                        {/*投保公司*/}
                        <View style={{flexDirection: 'row', width: width}}>
                            <Text style={{color: '#c0c2c5', fontSize: 16, marginTop: 10, marginLeft: 15}}>
                                请选择投保公司
                            </Text>
                        </View>
                        <View style={{marginTop: 15}}>
                            <RadioModal
                                seledImg={require('../img/changedate/check.png')}
                                onValueChange={(id, item) => this.setState({initId: id, initItem: item})}
                                style={{
                                    flexDirection: 'row',
                                    width: width,
                                    alignItems: 'flex-start',
                                }}
                            >
                                <Text value="1">
                                    <Image source={require('../img/changedate/PICC.png')}
                                           style={[styles.imgStyle = {
                                               width: 115,
                                               height: 70,
                                               marginTop: 10,
                                           }]}/>
                                </Text>
                                <Text value="2">
                                    <Image source={require('../img/changedate/pingan.png')}
                                           style={[styles.imgStyle = {
                                               width: 200,
                                               height: 100,
                                               marginTop: 50,
                                               marginRight: 10
                                           }]}/>
                                </Text>
                                <Text value="3">
                                    <Image source={require('../img/changedate/dadi.png')}
                                           style={[styles.imgStyle = {
                                               width: 115,
                                               height: 70,
                                               marginTop: 10,
                                               marginRight: 10
                                           }]}/>
                                </Text>
                            </RadioModal>
                        </View>

                        {/*身份证*/}
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
                                        身份证
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
                                        underlineColorAndroid='transparent'
                                        numberOfLines={1}
                                        ref={'content'}
                                        multiline={true}
                                        autoFocus={true}
                                        onChangeText={(text) => {
                                            content = text;
                                        }}/>

                                    < Image source={require('../img/changedate/silence.png')}
                                            style={[styles.imgStyle = {
                                                width: 127.5,
                                                height: 75,
                                                marginTop: 10,
                                                marginRight: 10
                                            }]}/>
                                    <TouchableOpacity>
                                        < Image source={require('../img/changedate/modoule.png')}
                                                style={[styles.imgStyle = {
                                                    width: 127.5,
                                                    height: 75,
                                                    marginTop: 10,
                                                    marginRight: 30
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
                        {/*电话*/}
                        <View style={{flexDirection: 'row', width: width}}>
                            <View>
                                <View style={{flexDirection: 'row', width: width, marginTop: 5}}>
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
                                                    marginLeft: 140,
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
                                width: width - 25,
                                height: 55,
                                backgroundColor: '#000',
                                marginLeft: 15,
                                marginRight: 15,
                                marginBottom: 5,
                                marginTop:15
                            }}>
                                <Text style={{marginLeft: 150, marginTop: 15, fontSize: 18, color: 'white'}}>提交</Text>
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
