/**
 *那当自己都萎靡到
 *无法被依靠的时候该如何振作？
 *Creat by Aran  at  2018/7/18
 *除过自己心中笃信的那一点不灭的光亮
 *我觉得这世间再没有别的东西比它值得被如此依靠。
 */

import React, {Component} from 'react';
import {
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View
} from 'react-native';
import TheSingleStateItem from "./TheSingleStateItem";
import {px2dp} from "../utils/px2dpUtils";
let json=require('../data/mypolicy');
export default class MyPolicyItem extends Component{



    continueDoc(){
        alert("续保")
    }

    setTheStateItem(json){

        let map={
            606:{
                imgUrl:require('../img/imgMypolicy/colorbutton606.png'),
                text:"请等候"
            },
            707:{
                imgUrl:require('../img/imgMypolicy/colorbutton707.png'),
                text:"马上购买"
            },
            808:{
                imgUrl:require('../img/imgMypolicy/colorbutton707.png'),
                text:"修改资料"
            },
        };


        let arr=[];
        for (let i=0;i<json.length;i++){
            switch (json[i].state) {
                case 101:
                    arr.push(

                        <View key={i} style={styles.theBigView}>
                            <View>
                                <Image style={{height:px2dp(20),width:px2dp(100)}} source={require('../img/imgMypolicy/number.png')}/>
                                <Text  style={{fontSize:px2dp(10),margin:px2dp(2),marginLeft:px2dp(10),color:"#FFF",position: "absolute"}} >{json[i].CarId}</Text>
                            </View>
                            <View style={styles.singleStateItem}>
                                <View style={styles.brandAndDataView}>
                                    <Image style={{resizeMode:'stretch',width:px2dp(100),height:px2dp(50)}} source={require('../img/imgMypolicy/brand.png')}/>
                                    <Text style={{marginLeft:px2dp(30),fontSize:px2dp(10)}}>保险到期日期：{json[i].Data}</Text>
                                </View>
                                <View  style={styles.buttonAndCallUsView}>
                                    <TouchableOpacity onPress={this.continueDoc.bind(this)}>
                                        <View style={{flexDirection:"column",
                                            alignItems:"center",
                                            marginTop:px2dp(10),
                                            justifyContent:"center",}}>
                                            <Image style={{resizeMode:'stretch',width:px2dp(80),height:px2dp(25)}} source={require('../img/imgMypolicy/colorbutton101.png')}/>
                                            <Text style={{color:"#fff",position: "absolute",fontSize:px2dp(10)}}>续保</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <Text style={{marginTop:px2dp(10),fontSize:px2dp(10)}}>联系我们</Text>
                                </View>
                            </View>
                        </View>
                    );
                    break;
                case 606:
                    arr.push(
                        <TheSingleStateItem routeName={this.props.routeName} jumpState={606} key={i} carId={json[i].CarId} name={map["606"]}/>
                    );
                    break;
                case 707:
                    arr.push(
                        <TheSingleStateItem routeName={this.props.routeName} jumpState={707} key={i} carId={json[i].CarId} name={map["707"]}/>
                    );
                    break;
                case 808:
                    arr.push(
                        <TheSingleStateItem routeName={this.props.routeName} jumpState={808} key={i} carId={json[i].CarId} name={map["808"]}/>
                    );
                    break;
            }
        }
        return arr;
    }


    render(){
        return(
            <ScrollView>

                {/*导航栏*/}
                {this.setTheStateItem(json)}

                <View style={{height:Dimensions.get('window').height/6}}>

                </View>
            </ScrollView>
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
        shadowColor:"#000",elevation:3,

    },
    brandAndDataView:{
        width:(Dimensions.get('window').width-px2dp(20))/2,
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",

        marginLeft:0
    },
    buttonAndCallUsView:{
        width:(Dimensions.get('window').width-px2dp(50))/2,
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        marginRight:0,
        marginLeft:px2dp(50)

    },
});
