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
                                <Image style={{height:20,width:100}} source={require('../img/imgMypolicy/number.png')}/>
                                <Text  style={{fontSize:10,margin:2,marginLeft:10,color:"#FFF",position: "absolute"}} >{json[i].CarId}</Text>
                            </View>
                            <View style={styles.singleStateItem}>
                                <View style={styles.brandAndDataView}>
                                    <Image style={{resizeMode:'stretch',width:100,height:50}} source={require('../img/imgMypolicy/brand.png')}/>
                                    <Text style={{marginLeft:30,fontSize:10}}>保险到期日期：{json[i].Data}</Text>
                                </View>
                                <View  style={styles.buttonAndCallUsView}>
                                    <TouchableHighlight onPress={this.continueDoc.bind(this)}>
                                        <View style={{flexDirection:"column",
                                            alignItems:"center",
                                            marginTop:10,
                                            justifyContent:"center",}}>
                                            <Image style={{resizeMode:'stretch',width:80,height:25}} source={require('../img/imgMypolicy/colorbutton101.png')}/>
                                            <Text style={{color:"#fff",position: "absolute",fontSize:10}}>续保</Text>
                                        </View>
                                    </TouchableHighlight>
                                    <Text style={{marginTop:10,fontSize:10}}>联系我们</Text>
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
                <View style={{height: 50, backgroundColor: '#FFFFFF'}}>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        <View style={{marginTop: 8}}>
                            <TouchableOpacity>
                                <Image source={require('../imgs/back.png')}
                                       style={{
                                           width: 35, height: 30, alignItems: 'center',
                                           marginTop: 32
                                       }}/>
                            </TouchableOpacity>
                        </View>


                    </View>

                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text
                            style={{color: '#3f3f3f', fontSize: 20, marginLeft: 3, marginTop: 20}}>我的保险</Text>

                    </View>
                    <View style={{
                        alignItems: 'center',
                        flex: 1,
                        flexDirection: 'row',
                        marginBottom: 20,
                        marginLeft: 340
                    }}>
                        <TouchableOpacity>
                            <Text style={{width: 60, height: 18, marginRight: 8}}>
                                历史保单
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {this.setTheStateItem(json)}
                <View style={{marginTop: 100}}>

                </View>
            </ScrollView>
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
