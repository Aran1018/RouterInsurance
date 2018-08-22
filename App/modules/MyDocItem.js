/**
 *那当自己都萎靡到
 *无法被依靠的时候该如何振作？
 *
 *除过自己心中笃信的那一点不灭的光亮
 *我觉得这世间再没有别的东西比它值得被如此依靠。
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

let {height, width} = Dimensions.get('window');

export default class MyDocItem extends Component {
    render() {
        return (

                <ScrollView contentContainerStyle={styles.contentContainer}>

                    <View style={{flexDirection: 'column', backgroundColor: '#e9ebee', width: width}}>
                        <ScrollView>
                            {/*大图片*/}
                            <View style={{marginTop: 10, alignItems: 'center', flex: 1}}>
                                <Image source={require('../img/imgMyDocuments/qqq.png')}
                                       style={[styles.imageStyle = {
                                           width: width - 60,
                                           height: height / 3,
                                       }]}/>
                            </View>

                            {/*交强险*/}
                            <View style={{
                                flexDirection: 'row',
                                width: width - 40,
                                height: height / 14,
                                backgroundColor: 'white',
                                marginTop: 15,
                                flex: 1,
                                alignSelf: 'center'
                            }}>
                                <Text style={{alignSelf: 'center', marginLeft: 10, color: 'black', fontSize: 13,}}>
                                    交强险
                                </Text>
                                <View style={{flex: 1, marginRight: 10, alignSelf: 'center'}}>
                                    <Text style={{
                                        fontSize: 13,
                                        color: 'black',
                                        alignSelf: 'flex-end',
                                    }}>
                                        ￥980.00
                                    </Text>
                                </View>
                            </View>


                            {/*税费*/}
                            <View style={{
                                flexDirection: 'row',
                                width: width - 40,
                                height: height / 14,
                                backgroundColor: 'white',
                                marginTop: 2,
                                flex: 1,
                                alignSelf: 'center'
                            }}>
                                <Text style={{alignSelf: 'center', marginLeft: 10, fontSize: 13, color: 'black',}}>
                                    税费
                                </Text>
                                <View style={{flex: 1, marginRight: 10, alignSelf: 'center'}}>
                                    <Text style={{
                                        fontSize: 13,
                                        color: 'black',
                                        alignSelf: 'flex-end',
                                    }}>
                                        ￥980.00
                                    </Text>
                                </View>
                            </View>

                            {/*商业险*/}
                            <View style={{
                                flexDirection: 'row',
                                width: width - 40,
                                height: height / 14,
                                backgroundColor: 'white',
                                marginTop: 2,
                                flex: 1,
                                alignSelf: 'center'
                            }}>
                                <Text style={{alignSelf: 'center', marginLeft: 10, fontSize: 13, color: 'black',}}>
                                    商业险
                                </Text>
                                <View style={{flex: 1, marginRight: 10, alignSelf: 'center'}}>
                                    <Text style={{
                                        fontSize: 13,
                                        color: 'black',
                                        alignSelf: 'flex-end',
                                    }}>
                                        ￥3980.00
                                    </Text>
                                </View>
                            </View>


                            {/*保费合计*/}
                            <View style={{
                                flexDirection: 'row', justifyContent: 'flex-end', width: width - 40,
                                height: height / 17,
                                backgroundColor: 'black',
                                flex: 1,
                                alignSelf: 'center'
                            }}>
                                <View style={{alignSelf: 'flex-end', marginBottom: 8}}>
                                    <Text style={{alignSelf: 'flex-end', fontSize: 13, color: 'white',}}>
                                        保费合计：
                                    </Text>
                                </View>
                                <View style={{marginRight: 10, alignSelf: 'center'}}>
                                    <Text style={{
                                        fontSize: 18,
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
                                width: width - 40,
                                height: height / 14,
                                backgroundColor: 'white',
                                marginTop: 15,
                                flex: 1,

                                alignSelf: 'center'
                            }}>
                                <Text style={{
                                    alignSelf: 'center',
                                    marginLeft: 10,
                                    fontSize: 15,
                                    color: '#fe2b00',
                                    fontWeight: 'bold',
                                }}>
                                    油卡 / 路游侠补贴
                                </Text>
                                <View style={{flex: 1, marginRight: 10, alignSelf: 'center'}}>
                                    <Text style={{
                                        fontSize: 15,
                                        color: '#fe2b00',
                                        alignSelf: 'flex-end',
                                    }}>
                                        ￥1000.00
                                    </Text>
                                </View>
                            </View>


                            {/*保费合计*/}
                            <View style={{
                                flexDirection: 'row', justifyContent: 'flex-end', width: width - 40,
                                height: height / 17,
                                backgroundColor: '#fe2b00',
                                flex: 1,
                                alignSelf: 'center'
                            }}>
                                <View style={{alignSelf: 'flex-end', marginBottom: 8}}>
                                    <Text style={{alignSelf: 'flex-end', fontSize: 13, color: 'white',}}>
                                        保费合计：
                                    </Text>
                                </View>
                                <View style={{marginRight: 10, alignSelf: 'center'}}>
                                    <Text style={{
                                        fontSize: 18,
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
                                    marginTop: 15, flex: 1, flexDirection: 'row', alignSelf: 'center',
                                    width: width - 40,marginBottom:15
                                }}>
                                    <Image source={require('../img/imgMyDocuments/aaa.png')}
                                           style={[styles.imageStyle = {
                                               width: (width - 40) / 2,
                                               height: height / 8,
                                           }]}/>

                                    <View style={{
                                        backgroundColor: '#dadada',
                                        height: height / 8,
                                        width: (width - 40) / 2,
                                        justifyContent: 'flex-end',
                                        alignSelf: 'center'
                                    }}>
                                        {/*了解详情*/}
                                        <View style={{marginTop: 10}}>
                                            <Text style={{
                                                fontSize: 9,
                                                alignSelf: 'flex-end',
                                                flexWrap: 'nowrap',
                                                color: '#414141',
                                                fontWeight: 'bold',
                                                marginRight: 10
                                            }}>了解详情</Text>
                                        </View>

                                        <View
                                            style={{
                                                width: 20,
                                                height: 50,
                                                flexDirection: 'row',
                                                marginTop: 2,

                                            }}>
                                            <Text style={{
                                                fontSize: 37,
                                                color: '#fe2b00',
                                                width: 75,
                                                height: 50,
                                                marginLeft: 18,
                                                marginBottom: 10,
                                                fontWeight: 'bold',
                                            }}>获得</Text>

                                            <View>
                                                {/*竖线*/}
                                                <View style={{
                                                    marginTop: 10,
                                                    height: 33,
                                                    marginLeft: 4,
                                                    width: 0.5,
                                                    backgroundColor: '#1d0075',
                                                    position: 'absolute',
                                                }}>
                                                </View>
                                                {/*垂直布局*/}
                                                <View
                                                    style={{flexDirection: 'column', marginTop: 5, marginLeft: 1}}>
                                                    <View>
                                                        <Text style={{
                                                            fontSize: 13,
                                                            color: '#fe2b00',
                                                            width: 90,
                                                            height: 20,
                                                            marginLeft: 6,
                                                            fontWeight: 'bold',
                                                        }}>￥860.00</Text>
                                                    </View>

                                                    <View style={{marginBottom: 15}}>
                                                        <Text style={{
                                                            fontSize: 13,
                                                            color: '#fe2b00',
                                                            width: 90,
                                                            marginLeft: 7,
                                                            height: 30,
                                                            fontWeight: 'bold',
                                                        }}>维修基金</Text>
                                                    </View>
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
        height: 45,
        alignItems: 'center',
        justifyContent: 'center'
    },
    item_view_icon: {
        width: 10,
        height: 15,
    },
});
