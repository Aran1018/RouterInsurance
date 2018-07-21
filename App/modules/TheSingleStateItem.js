/**
 *那当自己都萎靡到
 *无法被依靠的时候该如何振作？
 *Creat by Aran  at  2018/7/19
 *除过自己心中笃信的那一点不灭的光亮
 *我觉得这世间再没有别的东西比它值得被如此依靠。
 */

import React, {Component} from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
export default class TheSingleStateItem extends Component{

    render(){
        return(
            <View style={styles.theBigView}>
                <View>
                    <Image style={{height:25,width:120}} source={require('../img/imgMypolicy/number.png')}/>
                    <Text  style={{fontSize:10,margin:3,marginLeft:10,color:"#FFF",position: "absolute"}} >{this.props.carId}</Text>
                </View>
                <View style={styles.singleStateItem}>
                    <View style={styles.brandAndDataView}>
                        <Image style={{resizeMode:'stretch',width:100,height:50}} source={require('../img/imgMypolicy/brand.png')}/>
                        <View style={{flexDirection:"column",
                            alignItems:"center",
                            marginTop:10,
                            justifyContent:"center",}}>
                            <Image style={{resizeMode:'stretch',width:80,height:25}} source={this.props.name.imgUrl}/>
                            <Text style={{color:"#fff",position: "absolute",fontSize:10}}>{this.props.name.text}</Text>
                        </View>
                    </View>
                    <View  style={styles.buttonAndCallUsView}>

                        <Text style={{marginTop:10,fontSize:10}}>撤销保单</Text>
                    </View>
                </View>
            </View>
        )
    }

}
const styles = StyleSheet.create({

    theBigView:{
        marginTop:10,
        marginLeft:20,
        marginRight:20,
        marginBottom:10
    },
    singleStateItem:{
        width:Dimensions.get('window').width-40,
        height:(Dimensions.get('window').width)/3.5,
        backgroundColor:"#ffffff",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        shadowColor:"#000",elevation:3,

    },
    brandAndDataView:{
        width:(Dimensions.get('window').width-20)/2,
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",

        marginLeft:0
    },
    buttonAndCallUsView:{
        width:(Dimensions.get('window').width-20)/2,
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        marginRight:0,
        marginLeft:50

    },
});

