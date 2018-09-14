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
import {Text,TouchableHighlight,Dimensions, View} from "react-native";
import {px2dp, setSpText} from "../utils/px2dpUtils";
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
            <TouchableHighlight style={{
                height: px2dp(55),
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor:"#000000"
            }} onPress={()=>{this._onPress()}}>

                <View style={{
                    width:this.props.style.width?this.props.style.width:Dimensions.get('window').width-px2dp(25),
                    height: px2dp(50),
                    backgroundColor: this.props.style.backgroundColor,
                    position:this.props.style.position?this.props.style.position:"relative",
                    // marginLeft: px2dp(15),
                    marginBottom: this.props.style.marginBottom?this.props.style.marginBottom:0,
                    marginTop: px2dp(10),
                    elevation: px2dp(20),
                    shadowOffset: {width: px2dp(20), height:px2dp(12)},
                    shadowColor: 'black',
                    shadowOpacity: px2dp(20),
                    shadowRadius: px2dp(1),

                }}>
                    <Text style={{
                        alignSelf: 'center',
                        marginTop: px2dp(13), fontSize: setSpText(12), color: 'white'
                    }}>{this._setButtonText()}</Text>
                </View>
            </TouchableHighlight>
        )

    }
}