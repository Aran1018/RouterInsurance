/**
 *那当自己都萎靡到
 *无法被依靠的时候该如何振作？
 *
 *除过自己心中笃信的那一点不灭的光亮
 *我觉得这世间再没有别的东西比它值得被如此依靠。
 *
 * 底部一件询价
 */
import React,{Component} from "react";
import {Image, TouchableHighlight, View, StyleSheet, Text, Dimensions, TouchableOpacity} from "react-native";
import MyPolicyItem from "../modules/MyPolicyItem";
import AskPrice from "./AskPrice";
import {StackNavigator,
    createStackNavigator} from "react-navigation";
import px2dp from "../utils/px2dpUtils";

let widthOfWindow = Dimensions.get('window').width;
let heightOfWindow = Dimensions.get('window').height;

export default class MyPolicy extends Component{

    render(){

        return(
            <View>
                <MyPolicyItem routeName={this.props}/>

                <View style={{
                    flex:1,
                    position: "absolute",
                    height:Dimensions.get('window').height,
                    paddingBottom:px2dp(80),
                    // marginTop:Dimensions.get('window').height*0.85,
                    flexDirection:"column",
                    alignItems:"center",
                    justifyContent:"flex-end"}}>
                    <TouchableHighlight
                        onPress={()=>{
                            this.props.navigation.navigate('Inquiry')
                        }}
                    >
                        <View style={{backgroundColor:"#4d4d4d",width:Dimensions.get('window').width,height:Dimensions.get('window').height*0.08,
                            alignItems:"center",
                            justifyContent:"center"}}>
                            <Text style={{fontSize:px2dp(15),color:"#fff"}}>一键询价</Text>
                        </View>
                    </TouchableHighlight>

                </View>

            </View>
        )

    }

}
let styles = StyleSheet.create({
    imgCss:{
        resizeMode: 'contain',
        width:widthOfWindow,
        height:px2dp(135)
    },
    Underline: {
        marginTop: px2dp(5),
        marginBottom:px2dp(5),
        height: px2dp(1.5),
        backgroundColor: '#bebebe'
    },
    JumpOutButton:{
        resizeMode: 'contain',
        position: "absolute",
        textAlignVertical: 'center',
        height:px2dp(50),
        marginTop:px2dp(20),
        marginLeft:px2dp(30),
        marginRight:px2dp(30),
        backgroundColor:'#000000',
    },
    TextJumpOutButton:{
        marginLeft:widthOfWindow/3,
        marginTop:px2dp(15),
        color:'#FFFFFF',
        fontSize:px2dp(15)
    },
});