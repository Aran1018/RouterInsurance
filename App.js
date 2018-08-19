import React,{Component} from "react"

import {
    TabNavigator,
    StackNavigator,
    DrawerNavigator,
} from 'react-navigation';
import MyPolicy from "./App/pages/MyPolicy";
import AskPrice from "./App/pages/AskPrice";
import ChangeDate from "./App/pages/ChangeDate";
import MyDocuments from "./App/pages/MyDocuments";
import {Image, Text, TouchableOpacity} from "react-native";

export default Stack = StackNavigator({
    MyPolicy:{
        screen:MyPolicy,
        navigationOptions: {
            headerTitle: '我的保险',

            headerTitleStyle: {
                flex: 1, textAlign: 'center'
            },
            headerLeft: (
                <TouchableOpacity>
                    <Image style={{width:50,height:50,margin:10,
                        resizeMode: "contain"}} source={require('../RouterInsurance/App/img/titlebar/back.png')}/>
                </TouchableOpacity>
            ),
            headerRight: (
                <TouchableOpacity>
                    <Text style={{
                        fontSize:14 ,
                        margin:10
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
                flex: 1, textAlign: 'center'
            },
            headerLeft: (
                <TouchableOpacity>
                    <Image style={{width:50,height:50,margin:10,
                        resizeMode: "contain"}} source={require('../RouterInsurance/App/img/titlebar/back.png')}/>
                </TouchableOpacity>
            ),
            headerRight: (
                <TouchableOpacity>
                    <Image style={{width:50,height:50,margin:10,
                        resizeMode: "contain"}} source={require('../RouterInsurance/App/img/titlebar/phone.png')}/>
                </TouchableOpacity>
            )
        }
    },
    MyDoc:{
        screen:MyDocuments,
        navigationOptions: {
            headerTitle: '我的报价单',

            headerTitleStyle: {
                flex: 1, textAlign: 'center'
            },
            headerLeft: (
                <TouchableOpacity>
                    <Image style={{width:50,height:50,margin:10,
                        resizeMode: "contain"}} source={require('../RouterInsurance/App/img/titlebar/back.png')}/>
                </TouchableOpacity>
            ),
            headerRight: (
                <TouchableOpacity>
                    <Image style={{width:50,height:50,margin:10,
                        resizeMode: "contain"}} source={require('../RouterInsurance/App/img/titlebar/phone.png')}/>
                </TouchableOpacity>
            )
        }
    },
    ChangeDate:{
        screen:ChangeDate,
        navigationOptions: {
            headerTitle: '首页',

            headerTitleStyle: {
                flex: 1, textAlign: 'center'
            },
            headerLeft: (
                <TouchableOpacity>
                    <Image style={{width:50,height:50,margin:10,
                        resizeMode: "contain"}} source={require('../RouterInsurance/App/img/titlebar/back.png')}/>
                </TouchableOpacity>
            ),
            headerRight: (
                <TouchableOpacity>
                    <Image style={{width:50,height:50,margin:10,
                        resizeMode: "contain"}} source={require('../RouterInsurance/App/img/titlebar/phone.png')}/>
                </TouchableOpacity>
            )
        }
    }

})