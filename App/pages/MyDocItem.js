/**
 *那当自己都萎靡到
 *无法被依靠的时候该如何振作？
 *
 *除过自己心中笃信的那一点不灭的光亮
 *我觉得这世间再没有别的东西比它值得被如此依靠。
 *
 * 我的报价单
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

import {Dimensions} from 'react-native';
import {px2dp, setSpText} from "../utils/px2dpUtils";
import MyDocItemDividing from "../modules/MyDocItemDividing";
import ZoomImage from "../modules/ZoomImage";
import * as Orientation from "react-native-orientation";

let Orange = '#fe2b00';

let AllFontSize = setSpText(9);

let {height, width} = Dimensions.get('window');

let json = require('../data/mydocument');

export default class MyDocItem extends Component {


    setTheState(json) {

        let array = [];
        for (let m = 0; m < json.length; m++) {
            switch (json[m].state) {
                case 101:
                    array.push(
                        <View key={m}>
                            <View style={styles.theWhiteView}>
                                <Text style={{
                                    alignSelf: 'center',
                                    marginLeft: px2dp(10),
                                    color: 'black',
                                    fontSize: AllFontSize
                                }}>
                                    {json[m].Insurance}
                                </Text>
                                <Text style={{
                                    fontSize: AllFontSize,
                                    color: 'black',
                                    alignSelf: 'center',
                                    marginRight: px2dp(10)
                                }}>
                                    ￥{json[m].Money}
                                </Text>
                            </View>
                        </View>
                    );
                    break;
            }
        }
        return array;
    }


    componentWillMount() {
        Orientation.lockToPortrait()

    }


    render() {
        return (
            <ScrollView contentContainerStyle={styles.contentContainer}
                    overScrollMode="never" bounces={true} showsVerticalScrollIndicator={false}>
                <View style={{flexDirection: 'column', backgroundColor: '#e9ebee', width: width}}>
                    <ScrollView showsVerticalScrollIndicator={false} overScrollMode="never">
                        {/*大图片*/}
                        <TouchableOpacity>
                            <View style={{marginTop: px2dp(10), alignItems: 'center'}}>
                                <View style={styles.imgItem}>
                                    <ZoomImage
                                        source={require('../img/imgMyDocuments/quotation.png')}
                                        //source={{url: 'http://120.25.96.141/guest/quotation.png'}}
                                        imgStyle={{
                                            width: width / 1.17,
                                            height: height / 3.3,
                                            marginBottom: px2dp(10),
                                            resizeMode: 'stretch',
                                        }}
                                        style={styles.immg}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>

                        {/*保险*/}
                        {this.setTheState(json)}

                        {/*保费合计*/}
                        <View style={{
                            flexDirection: 'row', justifyContent: 'flex-end', width: width - px2dp(40),
                            height: height / px2dp(19),
                            backgroundColor: 'black',
                            flex: 1,
                            alignSelf: 'center'
                        }}>
                            <View style={{alignSelf: 'center', marginRight: px2dp(10)}}>
                                <Text style={{alignSelf: 'flex-end', fontSize: AllFontSize, color: 'white',}}>
                                    保费合计:
                                </Text>
                            </View>
                            <View style={{marginRight: px2dp(10), alignSelf: 'center'}}>
                                <Text style={{
                                    fontSize: setSpText(11),
                                    color: 'white',
                                    alignSelf: 'flex-end',
                                }}>
                                    ￥5940.00
                                </Text>
                            </View>
                        </View>

                        {/*油卡*/}
                        <View style={{
                            flexDirection: 'row',
                            width: width - px2dp(40),
                            height: height / 17,
                            backgroundColor: 'white',
                            marginTop: px2dp(15),
                            flex: 1,
                            alignSelf: 'center'
                        }}>
                            <Text style={{
                                alignSelf: 'center',
                                marginLeft: px2dp(10),
                                fontSize: setSpText(11),
                                color: Orange,
                                fontWeight: 'bold',
                            }}>
                                油卡 / 路游侠补贴
                            </Text>
                            <View style={{flex: 1, marginRight: px2dp(10), alignSelf: 'center'}}>
                                <Text style={{
                                    fontSize: setSpText(11),
                                    color: Orange,
                                    alignSelf: 'flex-end',
                                }}>
                                    ￥1000.00
                                </Text>
                            </View>
                        </View>

                        {/*保费合计*/}
                        <View style={{
                            flexDirection: 'row', justifyContent: 'flex-end', width: width - px2dp(40),
                            height: height / 19,
                            backgroundColor: Orange,
                            flex: 1,
                            alignSelf: 'center'
                        }}>
                            <View style={{alignSelf: 'center', marginRight: px2dp(10)}}>
                                <Text style={{alignSelf: 'flex-end', fontSize: AllFontSize, color: 'white',}}>
                                    保费合计:
                                </Text>
                            </View>
                            <View style={{marginRight: px2dp(10), alignSelf: 'center'}}>
                                <Text style={{
                                    fontSize: setSpText(11),
                                    color: 'white',
                                    alignSelf: 'flex-end',
                                }}>
                                    ￥4940.00
                                </Text>
                            </View>
                        </View>

                        {/*整体大图*/}
                        <TouchableOpacity>
                            <View style={{
                                marginTop: px2dp(15), flex: 1, flexDirection: 'row', alignSelf: 'center',
                                width: width - px2dp(40), marginBottom: px2dp(15)
                            }}>
                                <Image source={require('../img/imgMyDocuments/discountsAD.png')}
                                       style={[styles.imageStyle = {
                                           width: (width - px2dp(40)) / 2,
                                           height: height / 9,
                                       }]}/>

                                <View style={[{
                                    flexDirection: 'column',
                                    alignItems: 'flex-end',
                                    backgroundColor: '#dadada',
                                    height: height / 9,
                                    width: (width - px2dp(40)) / 2,
                                    alignSelf: 'center',
                                    justifyContent: 'center'
                                }]}>
                                    <View>
                                        <Text style={{
                                            fontSize: setSpText(7),
                                            alignSelf: 'flex-end',
                                            flexWrap: 'nowrap',
                                            color: '#414141',
                                            fontWeight: 'bold',
                                            marginRight: px2dp(15)
                                        }}>了解详情</Text>
                                    </View>
                                    <View style={[{
                                        flexDirection: 'row',
                                        justifyContent: 'flex-end',
                                        marginRight: px2dp(15)
                                    }]}>
                                        {/*获得*/}
                                        <View>
                                            <Text style={{
                                                color: Orange,
                                                fontSize: setSpText(21),
                                                fontWeight: 'bold',
                                            }}>获得</Text>
                                        </View>
                                        {/*竖线*/}

                                        <View style={[{
                                            flexDirection: 'column',
                                            alignItems: 'flex-end',
                                            marginLeft: px2dp(4),
                                            marginTop: px2dp(3)
                                        }]}>
                                            {/*￥860.00*/}
                                            <View>
                                                <Text style={{
                                                    color: Orange,
                                                    fontWeight: 'bold',
                                                    fontSize: setSpText(8.5),
                                                }}>￥860.00</Text>
                                            </View>
                                            {/*维修基金*/}
                                            <View>
                                                <Text style={{
                                                    color: Orange,
                                                    fontWeight: 'bold',
                                                    fontSize: setSpText(8.5),
                                                }}>维修基金</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </ScrollView>

        )
    }
}
let styles = StyleSheet.create({
    item_layout: {
        backgroundColor: 'white',
        height: px2dp(45),
        alignItems: 'center',
        justifyContent: 'center'
    },
    item_view_icon: {
        width: px2dp(10),
        height: px2dp(15),
    },
    imgItem: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        fontSize: setSpText(7),
        color: '#f0f0f0'
    },
    theWhiteView: {
        flexDirection: 'row',
        width: width - px2dp(40),
        height: height / 17,
        backgroundColor: 'white',
        marginTop: px2dp(0.5),
        //flex: 1,
        alignSelf: 'center',
        justifyContent: 'space-between'
    },
});
