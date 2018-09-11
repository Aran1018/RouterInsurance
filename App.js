import React,{Component} from "react"

import {Dimensions} from 'react-native'
import {
    TabNavigator,
    StackNavigator,


    DrawerNavigator, withNavigation,
} from 'react-navigation';
import MyPolicy from "./App/pages/MyPolicy";
import AskPrice from "./App/pages/AskPrice";
import ChangeDate from "./App/pages/ChangeDate";
import MyDocuments, {SimulateNativeBack} from "./App/pages/MyDocuments";
import {Image, Text, TouchableOpacity} from "react-native";
import ChangeInformation from "./App/pages/ChangeInformation";
import TitleBarBackButton from "./App/modules/TitleBarBackButton";
import  {px2dp, setSpText} from "./App/utils/px2dpUtils";

let NavIconSize = 30;

export default Stack = StackNavigator({

    MyPolicy:{
        screen:MyPolicy,
        navigationOptions: {
            headerTitle: '我的保险',

            headerTitleStyle: {
                flex: 1, textAlign: 'center',color:"#4d4d4d",fontSize:px2dp(18)
            },
            headerLeft: (
                <TitleBarBackButton/>

            ),
            headerRight: (
                <TouchableOpacity>
                    <Text style={{
                        // fontSize:px2dp(),
                        fontSize: setSpText(6),
                        margin:4,color:"#4d4d4d",
                        marginRight:10
                    }}>历史保单</Text>
                </TouchableOpacity>
            )
        }
    },
    Inquiry:{
        screen:AskPrice,
        navigationOptions: {
            headerTitle: '一键询价',

            headerTitleStyle: {
                flex: 1, textAlign: 'center',fontSize:px2dp(18)
            },
            headerLeft: (
                <TitleBarBackButton/>
            ),
            headerRight: (
                <TouchableOpacity>
                    <Image style={{
                        width:NavIconSize,
                        height:NavIconSize,
                        margin:8,
                        resizeMode: "contain"
                    }} source={require('../RouterInsurance/App/img/titlebar/phone.png')}/>
                </TouchableOpacity>
            )
        }
    },
    MyDoc:{
        screen:MyDocuments,
        navigationOptions: {
            headerTitle: '我的报价单',

            headerTitleStyle: {
                flex: 1, textAlign: 'center',fontSize:px2dp(18)
            },
            headerLeft: (
                <TouchableOpacity>
                    <Text style={{
                        // fontSize:px2dp(),
                        fontSize: setSpText(6),
                        margin:4,color:"#4d4d4d",
                        marginLeft:10,
                    }}>撤销保单</Text>
                </TouchableOpacity>

            ),
            headerRight: (
                <TouchableOpacity>
                    <Image style={{width:NavIconSize,height:NavIconSize,margin:8,
                        resizeMode: "contain"}} source={require('../RouterInsurance/App/img/titlebar/phone.png')}/>
                </TouchableOpacity>
            )
        }
    },
    ChangeDate:{
        screen:ChangeDate,
        navigationOptions: {
            headerTitle: '修改资料',

            headerTitleStyle: {
                flex: 1, textAlign: 'center',fontSize:px2dp(18)
            },
            headerLeft: (
                <TitleBarBackButton/>
            ),
            headerRight: (
                <TouchableOpacity>
                    <Image style={{width:NavIconSize,height:NavIconSize,margin:8,
                        resizeMode: "contain"}} source={require('../RouterInsurance/App/img/titlebar/phone.png')}/>
                </TouchableOpacity>
            )
        }
    },
    ChangeInformation:{
        screen:ChangeInformation,
        navigationOptions: {
            headerTitle: '资料填写',

            headerTitleStyle: {
                flex: 1, textAlign: 'center',fontSize:px2dp(18)
            },
            headerLeft: (
                <TitleBarBackButton/>
            ),
            headerRight: (
                <TouchableOpacity>
                    <Image style={{width:NavIconSize,height:NavIconSize,margin:8,
                        resizeMode: "contain"}} source={require('../RouterInsurance/App/img/titlebar/phone.png')}/>
                </TouchableOpacity>
            )
        }
    },

})
