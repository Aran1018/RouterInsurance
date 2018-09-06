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
import px2dp from "../utils/px2dpUtils";
import MyDocItemDividing from "../modules/MyDocItemDividing";

let {height, width} = Dimensions.get('window');

export default class MyDocItem extends Component {
    render() {
        return (
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={{flexDirection: 'column', backgroundColor: '#e9ebee', width: width}}>
                    <ScrollView>
                        {/*大图片*/}
                        <View style={{marginTop: 10, alignItems: 'center'}}>
                            <Image source={require('../img/imgMyDocuments/quotation.png')}
                                   style={[styles.imageStyle = {
                                       width: width / 1.17,
                                       height: height / 3.3,
                                       resizeMode: Image.resizeMode.stretch,
                                   }]}/>
                        </View>

                        {/*交强险*/}
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
                                color: 'black',
                                fontSize: px2dp(13),
                            }}>
                                交强险
                            </Text>
                            <View style={{flex: 1, marginRight: px2dp(10), alignSelf: 'center'}}>
                                <Text style={{
                                    fontSize: px2dp(13),
                                    color: 'black',
                                    alignSelf: 'flex-end',
                                }}>
                                    ￥980.00
                                </Text>
                            </View>
                        </View>

                        <MyDocItemDividing/>

                        {/*税费*/}
                        <View style={{
                            flexDirection: 'row',
                            width: width - px2dp(40),
                            height: height / 17,
                            backgroundColor: 'white',
                            flex: 1,
                            alignSelf: 'center'
                        }}>
                            <Text style={{
                                alignSelf: 'center',
                                marginLeft: px2dp(10),
                                fontSize: px2dp(13),
                                color: 'black',
                            }}>
                                税费
                            </Text>
                            <View style={{flex: 1, marginRight: px2dp(10), alignSelf: 'center'}}>
                                <Text style={{
                                    fontSize: px2dp(13),
                                    color: 'black',
                                    alignSelf: 'flex-end',
                                }}>
                                    ￥980.00
                                </Text>
                            </View>
                        </View>

                        <MyDocItemDividing/>

                        {/*商业险*/}
                        <View style={{
                            flexDirection: 'row',
                            width: width - px2dp(40),
                            height: height / 17,
                            backgroundColor: 'white',
                            flex: 1,
                            alignSelf: 'center'
                        }}>
                            <Text style={{
                                alignSelf: 'center',
                                marginLeft: px2dp(10),
                                fontSize: px2dp(13),
                                color: 'black',
                            }}>
                                商业险
                            </Text>
                            <View style={{flex: 1, marginRight: px2dp(10), alignSelf: 'center'}}>
                                <Text style={{
                                    fontSize: px2dp(13),
                                    color: 'black',
                                    alignSelf: 'flex-end',
                                }}>
                                    ￥3980.00
                                </Text>
                            </View>
                        </View>


                        {/*保费合计*/}
                        <View style={{
                            flexDirection: 'row', justifyContent: 'flex-end', width: width - px2dp(40),
                            height: height / 19,
                            backgroundColor: 'black',
                            flex: 1,
                            alignSelf: 'center'
                        }}>
                            <View style={{alignSelf: 'center', marginRight: px2dp(10)}}>
                                <Text style={{alignSelf: 'flex-end', fontSize: px2dp(13), color: 'white',}}>
                                    保费合计:
                                </Text>
                            </View>
                            <View style={{marginRight: px2dp(10), alignSelf: 'center'}}>
                                <Text style={{
                                    fontSize: px2dp(18),
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
                                fontSize: px2dp(15),
                                color: '#fe2b00',
                                fontWeight: 'bold',
                            }}>
                                油卡 / 路游侠补贴
                            </Text>
                            <View style={{flex: 1, marginRight: px2dp(10), alignSelf: 'center'}}>
                                <Text style={{
                                    fontSize: px2dp(15),
                                    color: '#fe2b00',
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
                            backgroundColor: '#fe2b00',
                            flex: 1,
                            alignSelf: 'center'
                        }}>
                            <View style={{alignSelf: 'center', marginRight: px2dp(10)}}>
                                <Text style={{alignSelf: 'flex-end', fontSize: px2dp(13), color: 'white',}}>
                                    保费合计:
                                </Text>
                            </View>
                            <View style={{marginRight: px2dp(10), alignSelf: 'center'}}>
                                <Text style={{
                                    fontSize: px2dp(18),
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
                                           height: height / 8,
                                       }]}/>

                                <View style={[{
                                    flexDirection: 'column',
                                    alignItems: 'flex-end',
                                    backgroundColor: '#dadada',
                                    height: height / 8,
                                    width: (width - px2dp(40)) / 2,
                                    alignSelf: 'center',
                                    justifyContent: 'center'
                                }]}>
                                    <View>
                                        <Text style={{
                                            fontSize: px2dp(9),
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
                                                color: '#fe2b00',
                                                fontSize: px2dp(33),
                                                fontWeight: 'bold',
                                            }}>获得</Text>
                                        </View>
                                        {/*竖线*/}
                                        <View style={{
                                            height: px2dp(33),
                                            marginLeft: px2dp(4),
                                            width: px2dp(0.5),
                                            backgroundColor: '#7a7a7a',
                                            marginTop: px2dp(5)
                                        }}>
                                        </View>
                                        <View style={[{
                                            flexDirection: 'column',
                                            alignItems: 'flex-end',
                                            marginLeft: px2dp(4),
                                            marginTop: px2dp(3)
                                        }]}>
                                            {/*￥860.00*/}
                                            <View>
                                                <Text style={{
                                                    color: '#fe2b00',
                                                    fontWeight: 'bold',
                                                    fontSize: px2dp(13),
                                                }}>￥860.00</Text>
                                            </View>
                                            {/*维修基金*/}
                                            <View>
                                                <Text style={{
                                                    color: '#fe2b00',
                                                    fontWeight: 'bold',
                                                    fontSize: px2dp(13),
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
});
