import React,{Component} from "react"

import {Dimensions} from 'react-native'
import {
    TabNavigator,
    StackNavigator,


    DrawerNavigator,
} from 'react-navigation';
import MyPolicy from "./App/pages/MyPolicy";
import AskPrice from "./App/pages/AskPrice";
import ChangeDate from "./App/pages/ChangeDate";
import MyDocuments, {SimulateNativeBack} from "./App/pages/MyDocuments";
import {Image, Text, TouchableOpacity} from "react-native";
import ChangeInformation from "./App/pages/ChangeInformation";
import TitleBarBackButton from "./App/modules/TitleBarBackButton";
import  {px2dp, setSpText} from "./App/utils/px2dpUtils";

export default Stack = StackNavigator({



    MyPolicy:{
        screen:MyPolicy,
        navigationOptions: {
            headerTitle: '我的保险',

            headerTitleStyle: {
                flex: 1, textAlign: 'center',color:"#4d4d4d",fontSize:px2dp(20)
            },
            headerLeft: (
                <TitleBarBackButton/>

            ),
            headerRight: (
                <TouchableOpacity>
                    <Text style={{
                        // fontSize:px2dp(),
                        fontSize: setSpText(15),
                        margin:10,color:"#4d4d4d"
                    }}>历史保单</Text>
                </TouchableOpacity>
            )
        }
    },
    Inquiry:{
        screen:AskPrice,
        // navigationOptions: {
        //     headerTitle: '一键询价',
        //
        //     headerTitleStyle: {
        //         flex: 1, textAlign: 'center'
        //     },
        //     headerLeft: (
        //         <TouchableOpacity>
        //             <Image style={{width:40,height:40,margin:10,
        //                 resizeMode: "contain"}} source={require('../RouterInsurance/App/img/titlebar/back.png')}/>
        //         </TouchableOpacity>
        //     ),
        //     headerRight: (
        //         <TouchableOpacity>
        //             <Image style={{
        //                 width:40,
        //                 height:40,
        //                 margin:10,
        //                 resizeMode: "contain"
        //             }} source={require('../RouterInsurance/App/img/titlebar/phone.png')}/>
        //         </TouchableOpacity>
        //     )
        // }
    },
    MyDoc:{
        screen:MyDocuments,
        navigationOptions: {
            headerTitle: '我的报价单',

            headerTitleStyle: {
                flex: 1, textAlign: 'center',fontSize:px2dp(20)
            },
            headerLeft: (
                <TitleBarBackButton/>

            ),
            headerRight: (
                <TouchableOpacity>
                    <Image style={{width:40,height:40,margin:10,
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
                flex: 1, textAlign: 'center',fontSize:px2dp(20)
            },
            headerLeft: (
                <TitleBarBackButton/>
            ),
            headerRight: (
                <TouchableOpacity>
                    <Image style={{width:40,height:40,margin:10,
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
                flex: 1, textAlign: 'center',fontSize:px2dp(20)
            },
            headerLeft: (
                <TitleBarBackButton/>

            ),
            headerRight: (
                <TouchableOpacity>
                    <Image style={{width:40,height:40,margin:10,
                        resizeMode: "contain"}} source={require('../RouterInsurance/App/img/titlebar/phone.png')}/>
                </TouchableOpacity>
            )
        }
    },

})