/**
 *那当自己都萎靡到
 *无法被依靠的时候该如何振作？
 *
 *除过自己心中笃信的那一点不灭的光亮
 *我觉得这世间再没有别的东西比它值得被如此依靠。
 */
import React,{Component} from "react";
import {Image, TouchableHighlight, View, StyleSheet, Text, Dimensions} from "react-native";
import MyPolicyItem from "../modules/MyPolicyItem";
import AskPrice from "./AskPrice";

let widthOfWindow = Dimensions.get('window').width;
let heightOfWindow = Dimensions.get('window').height;

export default class MyPolicy extends Component{
    jump(){

        const{navigator} = this.props;
        /*that存储了上一个this*/
        let that = this;
        if(navigator){
            navigator.push({
                name : "AskPrice",
                component : AskPrice,
                /*params :{
                    title:this.state.title,
                    id:123,
                    getUser:function(user){
                        that.setState({
                            user:user
                        })
                    }
                }*/
            })
        }
    }
    render(){

        return(

            <View>
                <MyPolicyItem routeName={this.props}/>

                <View style={{position: "absolute",
                    margin:20,
                    marginTop:Dimensions.get('window').height*0.75,
                    flexDirection:"column",
                    alignItems:"flex-end",
                    justifyContent:"center"}}>
                    <TouchableHighlight
                        onPress={()=>{this.props.navigation.navigate('Inquiry')
                        }}
                    >
                        <View style={{backgroundColor:"#000",width:Dimensions.get('window').width-40,height:50,
                            alignItems:"center",
                            justifyContent:"center"}}>
                            <Text style={{fontSize:15,color:"#fff"}}>一键询价</Text>
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
        height:135
    },
    Underline: {
        marginTop: 5,
        marginBottom:5,
        height: 1.5,
        backgroundColor: '#bebebe'
    },
    JumpOutButton:{
        resizeMode: 'contain',
        position: "absolute",
        textAlignVertical: 'center',
        height:50,
        marginTop:20,
        marginLeft:30,
        marginRight:30,
        backgroundColor:'#000000',
    },
    TextJumpOutButton:{
        marginLeft:widthOfWindow/3,
        marginTop:15,
        color:'#FFFFFF',
        fontSize:15
    },
});