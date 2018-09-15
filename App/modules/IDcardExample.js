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
import React, {Component} from 'react'
import {Image, Text, Dimensions, TouchableOpacity, View, StatusBar} from "react-native";
import Orientation from 'react-native-orientation'

let TopVlaue = 20;
export default class IDcardExample extends Component {
    componentWillMount() {
        Orientation.lockToPortrait()
    }

    render() {
        return (
            <View style={{
                backgroundColor: "#000",
                height: Dimensions.get('window').height,
                alignItems: "center",
            }}>
                <StatusBar hidden={true}/>
                <View style={{
                    height: Dimensions.get('window').height,
                    width: Dimensions.get('window').height,
                    alignItems: "center",
                    justifyContent: "center",
                    transform: [{rotate:'90deg'}],
                }}>
                    <View style={{

                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        <Image style={{
                            width: 400,
                            height: 250,
                            marginTop: TopVlaue,
                            borderRadius: 25,
                        }} source={this.props.navigation.getParam('imgSource')}/>
                        {/*图片路径*/}
                        <Text style={{
                            color: "#fff", marginTop: TopVlaue
                        }}>请以此上下方向拍摄证件{this.props.navigation.getParam('PositiveOrNegative')}，以确保审核准确</Text>
                        <TouchableOpacity onPress={()=>{
                            this.props.navigation.navigate('Camera');

                        // ,{
                        //
                        //         PositiveOrNegative:this.props.navigation.getParam('PositiveOrNegative')
                        //
                        //     }

                        }} style={{marginTop: TopVlaue}}>
                            <View style={{
                                backgroundColor: "#0bc2d4",
                                width: 90,
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: 15,
                                height: 30
                            }}>
                                <Text style={{color: "#fff"}}>
                                    确定
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}