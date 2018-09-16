/**
 *Created by Aran on 2018/9/11.
 *
 *那当自己都萎靡到
 *无法被依靠的时候该如何振作？
 *
 *除过自己心中笃信的那一点不灭的光亮
 *我觉得这世间再没有别的东西比它值得被如此依靠。
 *
 */
import React, {Component} from 'react';
import {
    Dimensions,
    Image,
    StatusBar,
    StyleSheet, Text,
    TouchableHighlight,
    TouchableOpacity,
    View
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import * as Orientation from "react-native-orientation";


export default class Camera extends Component {

    constructor() {
        super();
    }

    componentWillMount() {
        Orientation.lockToPortrait()
    }
    render() {


        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                // backgroundColor: 'rgba(0, 0, 0, 0.2)',
            }}>
                <StatusBar hidden={true}/>

                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.auto}
                    // permissionDialogTitle={'Permission to use camera'}
                    // permissionDialogMessage={'We need your permission to use your camera phone'}
                >

                    <View style={{
                        height: Dimensions.get('window').height,
                        justifyContent: "space-between",
                        marginLeft: 15,
                        marginTop: 30,
                    }}>
                        <TouchableHighlight
                            onPress={() => {
                                this.props.navigation.goBack()
                            }}
                            underlayColor={"rgba(0,0,0,0.2)"}
                            style={{
                            borderRadius: 25,
                            transform: [{rotate: '90deg'}],
                        }}>
                            <View style={{
                                width: 50,
                                height: 50,
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <Image style={{
                                    width: 50,
                                    height: 50,
                                    resizeMode: "contain"
                                }} source={require("../img/cameraImg/back.png")}/>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor={"rgba(0,0,0,0.2)"}
                            onPress={()=>{
                                this.takePicture()
                            }}
                            style={{
                                borderRadius: 25,
                                transform: [{rotate: '90deg'}],
                            }}>
                            <View style={{
                                width: 50,
                                height: 50,
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <Image style={{
                                    width: 50,
                                    height: 50,
                                    resizeMode: "contain"
                                }} source={require("../img/cameraImg/takepic.png")}/>
                            </View>
                        </TouchableHighlight>
                        <View style={{
                            width: 50,
                            height: 50,
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                        </View>
                    </View>
                    <View style={{
                        height: Dimensions.get('window').height
                    }}>
                        <TouchableOpacity onPress={()=>{

                        }} style={{
                            transform: [{rotate: '90deg'}],
                        }}>
                            <View style={{
                                width: 50,
                                height: 50,
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                            </View>
                        </TouchableOpacity>
                    </View>
                </RNCamera>
            </View>
        )
    }

    takePicture = async function (){
        if (this.camera) {
            const options = {quality: 0.5, base64: true};
            const data = await this.camera.takePictureAsync(options);
            this.props.navigation.navigate('SolveResult', {
                PositiveOrNegative:this.props.navigation.getParam('PositiveOrNegative'),
                photoUrl: data.uri,
                data: data,
            // 页面间传递数据
            });
            console.log(data.uri);
        }
    };
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        // alignItems: 'center',
        // backgroundColor: '#0039c4'
        // opacity:0.5
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        position: "absolute",
        marginBottom: 200,
        backgroundColor: '#ff4b5a',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20
    }
});