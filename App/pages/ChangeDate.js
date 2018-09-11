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
    PixelRatio, View, TouchableHighlight
} from 'react-native';
import ImageRadioGroup from "../modules/ImageRadioGroup";
import Dividing from "../modules/Dividing";
import {px2dp} from "../utils/px2dpUtils";
import ImagePicker from 'react-native-image-picker';
let content = '';
let iconSize =  px2dp(19);
let {height, width} = Dimensions.get('window');

type Props = {};

/**
 * 设置text为sp
 * @param size sp
 * return number dp
 */

export default class ChangeDate extends Component {
    state = {
        avatarSource1: null,
        avatarSource2: null,
        avatarSource3: null,
        avatarSource4: null,
        videoSource: null
    };

    //拍摄行驶证正本
    selectPhotoTapped1() {
        const options = {
            title: '选择图片',
            cancelButtonTitle: '取消',
            takePhotoButtonTitle: '拍照',
            chooseFromLibraryButtonTitle: '选择照片',
            cameraType: 'back',
            mediaType: 'photo',
            videoQuality: 'high',
            durationLimit: 10,
            maxWidth: 300,
            maxHeight: 300,
            quality: 0.8,
            angle: 0,
            allowsEditing: false,
            noData: false,
            storageOptions: {
                skipBackup: true
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = {uri: response.uri};

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource1: source
                });
            }
        });
    }

    //拍摄行驶证副本
    selectPhotoTapped2() {
        const options = {
            title: '选择图片',
            cancelButtonTitle: '取消',
            takePhotoButtonTitle: '拍照',
            chooseFromLibraryButtonTitle: '选择照片',
            cameraType: 'back',
            mediaType: 'photo',
            videoQuality: 'high',
            durationLimit: 10,
            maxWidth: 300,
            maxHeight: 300,
            quality: 0.8,
            angle: 0,
            allowsEditing: false,
            noData: false,
            storageOptions: {
                skipBackup: true
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = {uri: response.uri};

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource2: source
                });
            }
        });
    }

    //拍摄身份证正面
    selectPhotoTapped3() {
        const options = {
            title: '选择图片',
            cancelButtonTitle: '取消',
            takePhotoButtonTitle: '拍照',
            chooseFromLibraryButtonTitle: '选择照片',
            cameraType: 'back',
            mediaType: 'photo',
            videoQuality: 'high',
            durationLimit: 10,
            maxWidth: 300,
            maxHeight: 300,
            quality: 0.8,
            angle: 0,
            allowsEditing: false,
            noData: false,
            storageOptions: {
                skipBackup: true
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = {uri: response.uri};

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource3: source
                });
            }
        });
    }

    //拍摄身份证背面
    selectPhotoTapped4() {
        const options = {
            title: '选择图片',
            cancelButtonTitle: '取消',
            takePhotoButtonTitle: '拍照',
            chooseFromLibraryButtonTitle: '选择照片',
            cameraType: 'back',
            mediaType: 'photo',
            videoQuality: 'high',
            durationLimit: 10,
            maxWidth: 300,
            maxHeight: 300,
            quality: 0.8,
            angle: 0,
            allowsEditing: false,
            noData: false,
            storageOptions: {
                skipBackup: true
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = {uri: response.uri};

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource4: source
                });
            }
        });
    }

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
                    "fileName": require('../img/ImageRadios/brand.png'),
                },
                {
                    "id": 3,
                    "name": "中国大地保险",
                    "fileName": require('../img/ImageRadios/brand.png'),
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
                        <View style={{flexDirection: 'row',height: px2dp(40),}}>
                            <View style={[{flexDirection: 'row', alignItems: 'center',height: px2dp(40),}]}>
                                < Image source={require('../img/imgaskprice/mobilephone.png')}
                                        style={[styles.imgStyle = {
                                            width: iconSize,
                                            height: iconSize,
                                            marginLeft: px2dp(15),
                                            marginTop:8
                                        }]}/>
                                <Text style={{marginLeft: px2dp(5), fontSize: px2dp(13),marginTop:8}}>
                                    电话
                                </Text>
                            </View>
                            <TextInput
                                style={{
                                    fontSize: px2dp(14),
                                    textAlign: 'right',
                                    flex: 1,
                                    color: '#fe2b00',
                                    marginTop:8
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
                                                       width: iconSize,
                                                       height: iconSize,
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
                                                        width:iconSize,
                                                        height:iconSize,
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
                        <View style={[{flexDirection: 'row', height: px2dp(40), alignItems: 'center',}]}>
                            <View style={[{flexDirection: 'row', height: px2dp(40), alignItems: 'center',}]}>
                                < Image source={require('../img/imgaskprice/list.png')}
                                        style={[styles.imgStyle = {
                                            width: iconSize,
                                            height: iconSize,
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

                        {/*补充资料*/}
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{
                                marginLeft: px2dp(15),
                                marginTop: px2dp(12),
                                fontSize: px2dp(14),
                                color: '#fe2b00'
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
                                    fontSize: px2dp(15),
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
