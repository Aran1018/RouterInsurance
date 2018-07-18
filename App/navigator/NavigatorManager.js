/**
 *那当自己都萎靡到
 *无法被依靠的时候该如何振作？
 *Creat by Aran  at  2018/7/17
 *除过自己心中笃信的那一点不灭的光亮
 *我觉得这世间再没有别的东西比它值得被如此依靠。
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Navigator} from "react-native-deprecated-custom-components";

import MyPolicy from "../pages/MyPolicy";
export default class NavigatorManager extends Component{
    render(){

        let defaultName="TheEntrance";
        let defaultComponent=MyPolicy;
        return(
            <Navigator
                initialRoute={{name:defaultName,component:defaultComponent}}
                configureScene = {(route)=>{return Navigator.SceneConfigs.FloatFromRight}
                }
                renderScene = {(route,navigator)=>{
                    let Component = route.component;
                    return <Component{...route.params} navigator={navigator}/>
                }}
            >

            </Navigator>
        )
    }

}