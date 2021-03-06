/**
 *那当自己都萎靡到
 *无法被依靠的时候该如何振作？
 *Creat by Aran  at  2018/7/18
 *除过自己心中笃信的那一点不灭的光亮
 *我觉得这世间再没有别的东西比它值得被如此依靠。
 *
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
import {px2dp, setSpText} from "../utils/px2dpUtils";

let json = require('../data/mypolicy');

let AllFontSize = setSpText(9);

export default class MyPolicyItem extends Component {

    continueDoc() {
        alert("续保")
    }

    alterDoc() {
        alert("联系我们")
    }

    setTheStateItem(json) {

        let map = {
            606: {
                imgUrl: require('../img/imgMypolicy/colorbutton606.png'),
                text: "请等候"
            },
            707: {
                imgUrl: require('../img/imgMypolicy/colorbutton707.png'),
                text: "马上购买"
            },
            808: {
                imgUrl: require('../img/imgMypolicy/colorbutton707.png'),
                text: "修改资料"
            },
        };

        let arr = [];
        for (let i = 0; i < json.length; i++) {
            switch (json[i].state) {
                case 101:
                    arr.push(
                        <View key={i} style={styles.theBigView}>
                            <View showsVerticalScrollIndicator={false}>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={{
                                        height: px2dp(20), width: px2dp(75), backgroundColor: 'black',
                                        justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <Text style={{color: 'white', position: 'absolute', fontSize: setSpText(8)}}>
                                            {json[i].CarId}
                                        </Text>
                                    </View>
                                    <View style={{
                                        borderTopWidth: px2dp(20),
                                        borderTopColor: 'transparent',
                                        borderRightWidth: px2dp(0),
                                        borderRightColor: 'transparent',
                                        borderLeftWidth: px2dp(20),
                                        borderLeftColor: 'balck',
                                        borderBottomWidth: px2dp(0),
                                        borderBottomColor: 'transparent',
                                    }}>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.singleStateItem}>
                                <View style={{
                                    width: (Dimensions.get('window').width - px2dp(20)) / 2,
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginLeft: px2dp(40),
                                }}>
                                    <View style={[{justifyContent: 'space-around', flexDirection: 'column',}]}>
                                        <Image style={{
                                            resizeMode: 'stretch',
                                            width: px2dp(100),
                                            height: px2dp(50),
                                        }}
                                               source={require('../img/imgMypolicy/brand.png')}/>
                                        <Text style={{
                                            fontSize: AllFontSize,
                                            marginBottom: px2dp(9.5)
                                        }}>保险到期日期:{json[i].Data}</Text>
                                    </View>
                                </View>

                                <View style={styles.buttonAndCallUsView}>
                                    <View
                                        style={[{alignItems: 'flex-end',}]}>
                                        <View
                                            style={{
                                                flexDirection: 'column',
                                                justifyContent: 'space-around',
                                            }}>
                                            <TouchableOpacity onPress={this.continueDoc.bind(this)}>
                                                <View style={{
                                                    flexDirection: "column",
                                                    alignItems: "center",
                                                    marginTop: px2dp(10),
                                                    justifyContent: "center",
                                                }}>
                                                    <Image style={{
                                                        resizeMode: 'stretch',
                                                        width: px2dp(80),
                                                        height: px2dp(25)
                                                    }} source={require('../img/imgMypolicy/colorbutton101.png')}/>
                                                    <Text style={{
                                                        color: "#fff",
                                                        position: "absolute",
                                                        fontSize: AllFontSize
                                                    }}>续保</Text>
                                                </View>
                                            </TouchableOpacity>

                                            <TouchableOpacity onPress={this.alterDoc.bind(this)}>
                                                <View style={{
                                                    flexDirection: "column",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                }}>
                                                    <Text style={{
                                                        marginTop: px2dp(10),
                                                        fontSize: AllFontSize,
                                                        marginBottom: px2dp(9.5)
                                                    }}>联系我们</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    );
                    break;
                case 606:
                    arr.push(
                        <TheSingleStateItem routeName={this.props.routeName} jumpState={606} key={i}
                                            carId={json[i].CarId} name={map["606"]}/>
                    );
                    break;
                case 707:
                    arr.push(
                        <TheSingleStateItem routeName={this.props.routeName} jumpState={707} key={i}
                                            carId={json[i].CarId} name={map["707"]}/>
                    );
                    break;
                case 808:
                    arr.push(
                        <TheSingleStateItem routeName={this.props.routeName} jumpState={808} key={i}
                                            carId={json[i].CarId} name={map["808"]}/>
                    );
                    break;
            }
        }
        return arr;
    }

    render() {
        return (
            <ScrollView overScrollMode="never">

                {/*导航栏*/}
                {this.setTheStateItem(json)}

                <View style={{height: Dimensions.get('window').height / 7}}>

                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({

    theBigView: {
        marginTop: px2dp(10),
        marginLeft: px2dp(20),
        marginRight: px2dp(20),
        marginBottom: px2dp(10)
    },
    singleStateItem: {
        width: Dimensions.get('window').width - px2dp(40),
        height: (Dimensions.get('window').width) / 3.5,
        backgroundColor: "#ffffff",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000", elevation: 3,
    },
    brandAndDataView: {
        width: (Dimensions.get('window').width - px2dp(20)) / 2,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 0
    },
    buttonAndCallUsView: {
        width: (Dimensions.get('window').width - px2dp(50)) / 2,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 0,
        marginLeft: px2dp(20)
    },
});
