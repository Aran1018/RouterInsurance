/**
 *那当自己都萎靡到
 *无法被依靠的时候该如何振作？
 *
 *除过自己心中笃信的那一点不灭的光亮
 *我觉得这世间再没有别的东西比它值得被如此依靠。
 *
 * Created by Aran on 2018/9/7.
 */
import React,{Component} from 'react'
import {Text,Dimensions, TouchableOpacity, View} from "react-native";
import px2dp from "../utils/px2dpUtils";
export default class ConfirmButton extends Component{


    constructor() {
        super();
        this._onPress=this._onPress.bind(this)

    }




    _onPress(){
        const clickTime = Date.now();
        if (!this.lastClickTime || Math.abs(this.lastClickTime - clickTime) > 350) {  //350的时间可以延长，根据需要改变
            this.lastClickTime = clickTime;
            if(this.props.onPress){
                this.props.onPress()
            }else{
                return ''
            }

        }
    }
    _setButtonText(){
        return this.props.text
    }


    render(){
        return(
            <TouchableOpacity style={{
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }} onPress={()=>{this._onPress()}}
            
            >
                <View style={{
                    width:this.props.style.width?this.props.style.width:Dimensions.get('window').width-px2dp(25),
                    height: px2dp(55),
                    backgroundColor: this.props.style.backgroundColor,
                    // marginLeft: px2dp(15),
                    marginBottom: this.props.style.marginBottom?this.props.style.marginBottom:0,
                    marginTop: px2dp(15)
                }}>
                    <Text style={{
                        alignSelf: 'center',
                        marginTop: px2dp(15), fontSize: px2dp(16), color: 'white'
                    }}>{this._setButtonText()}</Text>
                </View>
            </TouchableOpacity>
        )

    }
}