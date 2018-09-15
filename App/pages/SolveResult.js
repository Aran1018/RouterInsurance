/**
 *Created by Aran on 2018/9/13.
 *
 *那当自己都萎靡到
 *无法被依靠的时候该如何振作？
 *
 *除过自己心中笃信的那一点不灭的光亮
 *我觉得这世间再没有别的东西比它值得被如此依靠。
 *
 */
import React, {Component} from 'react'
import {Image,
    Dimensions,
    View,
    AsyncStorage,
    StatusBar,
    TouchableOpacity
} from "react-native";
import * as Orientation from "react-native-orientation";

let TopVlaue = 20;
export default class SolveResult extends Component {


    componentWillMount() {
        Orientation.lockToPortrait()

    }

    renderTheImage(data) {
        if (data.width > data.width) {
            return (
                <Image style={{
                    width: Dimensions.get('window').width,
                    height: Dimensions.get('window').height,
                    // marginTop: TopVlaue,

                }}
                       source={{uri: 'file:///data/data/com.tts.aran.routerinsurance/cache/Camera/' + this.splitString(this.props.navigation.getParam('photoUrl'))}}
                />
            )
        } else {
            return (
                <Image style={{
                    height: Dimensions.get('window').width,
                    width: Dimensions.get('window').height,
                    // marginTop: TopVlaue,
                    // marginBottom: -70,
                    transform: [{rotate: '-90deg'}],

                }}
                       source={{uri: 'file:///data/data/com.tts.aran.routerinsurance/cache/Camera/' + this.splitString(this.props.navigation.getParam('photoUrl'))}}
                />
            )
        }
    }

    splitString(str) {
        console.log("=============width" + this.props.navigation.getParam("data").width);
        console.log("=============height" + this.props.navigation.getParam("data").height);
        const group = str.split("/Camera/");
        return group[1]
    }
// /data/data/com.tts.aran.routerinsurance/cache/Camera/7a1fd75e-a8eb-4655-8d09-f590be77826a.jpg
    _onPressConfirm(){
        this._storeData();
        this.props.navigation.navigate('Inquiry');

    }
    _storeData() {
    //     let ImageData = {
    //         imageName:this.props.navigation.getParam('PositiveOrNegative'),
    //         path:'file:///data/data/com.tts.aran.routerinsurance/cache/Camera/' + this.splitString(this.props.navigation.getParam('photoUrl'))
    //     };
    //     AsyncStorage.setItem("ImageData", JSON.stringify(ImageData), () => {
    //         AsyncStorage.mergeItem("ImageData", JSON.stringify(ImageData), () => {
    //             AsyncStorage.getItem("ImageData", (err, result) => {
    //                 console.log(result);
    //             });
    //         });
    //     });
    };

    render() {
        return (
            <View style={{
                alignItems: "center",
                justifyContent: "center"
            }}>
                <StatusBar hidden={true}/>
                <View style={{
                    height: Dimensions.get('window').height,
                    width: Dimensions.get('window').height,
                    alignItems: "center",
                    justifyContent: "center",
                    // backgroundColor:"#ff5765"
                }}>
                    {this.renderTheImage(this.props.navigation.getParam("data"))}
                    <View style={{
                        position: "absolute",
                        transform: [{translateX: -Dimensions.get('window').width / 2.8}],
                        width: 50,
                        height: Dimensions.get('window').height,
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
                            <View style={{}}>
                                <Image style={{
                                    width: 50,
                                    height: 50,
                                    transform: [{rotate: '90deg'}],

                                }} source={require("../img/cameraImg/cancel.png")}/>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{
                            this._onPressConfirm()
                        }}>
                            <View style={{
                                marginTop: 50,
                            }}>
                                <Image style={{
                                    width: 50,
                                    height: 50,
                                    transform: [{rotate: '90deg'}],

                                }} source={require("../img/cameraImg/confirm.png")}/>

                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
    }
}