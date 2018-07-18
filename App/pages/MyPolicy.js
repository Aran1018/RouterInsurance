/**
 *那当自己都萎靡到
 *无法被依靠的时候该如何振作？
 *
 *除过自己心中笃信的那一点不灭的光亮
 *我觉得这世间再没有别的东西比它值得被如此依靠。
 */
import React,{Component} from "react";
import {Image, TouchableHighlight, View, StyleSheet, Text, Dimensions} from "react-native";
import Test from "../Test";



let widthOfWindow = Dimensions.get('window').width;

export default class MyPolicy extends Component{
    jump(){

        const{navigator} = this.props;
        /*that存储了上一个this*/
        let that = this;
        if(navigator){
            /*push主要掌管页面跳转 返回的component属性决定了呈现哪一个class*/
            navigator.push({
                name : "AskPrice",
                component : Test,
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
                <View>
                    <Image source={require('../img/MyPolicy/logo.png')}
                           style={styles.imgCss}>

                    </Image>
                </View>
                <View>
                    {/*===跳转按钮===*/}
                    <TouchableHighlight
                        style={styles.JumpOutButton}
                        onPress={this.jump.bind(this)}
                    >
                        <View>
                            <Text style={styles.TextJumpOutButton}>一键询价</Text>
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