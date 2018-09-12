/**
 *那当自己都萎靡到
 *无法被依靠的时候该如何振作？
 *Creat by Aran  at  2018/7/19
 *除过自己心中笃信的那一点不灭的光亮
 *我觉得这世间再没有别的东西比它值得被如此依靠。
 *
 */

import React, {Component} from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MyDocuments from "../pages/MyDocuments";
import ChangeDate from "../pages/ChangeDate";
import {px2dp, setSpText} from "../utils/px2dpUtils";

let AllFontSize = setSpText(8);

export default class TheSingleStateItem extends Component{

    constructor() {
        super();
        this.state={
            theJumpState:null
        }
    }

    componentWillMount() {
        switch (this.props.jumpState) {
            case 606:
                break;
            case 707:
                this.setState({theJumpState: 'MyDoc'});
                break;
            case 808:
                this.setState({theJumpState: 'ChangeDate'});
                break;
        }
    }


    cancelDoc(){
        alert("你说啥？？？")
    }

    selectableJump() {
        // alert(this.state.theJumpState.toString())
        if (this.state.theJumpState === null) {

        }else {
            // const{navigator} = this.props.routeName;
            // if(navigator){
            //     navigator.push({
            //         component : this.state.theJumpState,
            //
            //     })
            // }
            this.props.routeName.navigation.navigate(this.state.theJumpState)
        }

    }

    render(){
        return(
            <View style={styles.theBigView}>
                <View >
                    <Image style={{height:px2dp(20),width:px2dp(100)}} source={require('../img/imgMypolicy/number.png')}/>
                    <Text  style={{fontSize:AllFontSize,margin:px2dp(3),marginLeft:px2dp(12),color:"#FFF",position: "absolute"}} >{this.props.carId}</Text>
                </View>
                <View style={styles.singleStateItem}>
                    <View style={styles.brandAndDataView}>
                        <Image style={{resizeMode:'stretch',width:px2dp(100),height:px2dp(50)}} source={require('../img/imgMypolicy/brand.png')}/>
                        <TouchableOpacity onPress={this.selectableJump.bind(this)}>
                        <View style={{flexDirection:"column",
                            alignItems:"center",
                            marginTop:px2dp(10),
                            justifyContent:"center",}}>
                            <Image style={{resizeMode:'stretch',width:px2dp(80),height:px2dp(25)}} source={this.props.name.imgUrl}/>
                            <Text style={{color:"#fff",position: "absolute",fontSize:AllFontSize}}>{this.props.name.text}</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                    <View  style={styles.buttonAndCallUsView}>

                        <TouchableOpacity onPress={this.cancelDoc.bind(this)}>
                        <Text style={{marginTop:px2dp(10),fontSize:AllFontSize}}>撤销保单</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

}
const styles = StyleSheet.create({

    theBigView:{
        marginTop:px2dp(10),
        marginLeft:px2dp(20),
        marginRight:px2dp(20),
        marginBottom:px2dp(10)
    },
    singleStateItem:{
        width:Dimensions.get('window').width-px2dp(40),
        height:(Dimensions.get('window').width)/3.5,
        backgroundColor:"#ffffff",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        shadowColor:"#000",elevation:px2dp(3),

    },
    brandAndDataView:{
        width:(Dimensions.get('window').width-px2dp(20))/2,
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",

    },
    buttonAndCallUsView:{
        width:(Dimensions.get('window').width-px2dp(20))/2,
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        marginRight:px2dp(0),
        marginLeft:px2dp(50)

    },
});

