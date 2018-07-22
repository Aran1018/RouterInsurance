/**
 *那当自己都萎靡到
 *无法被依靠的时候该如何振作？
 *Creat by Aran  at  2018/7/19
 *除过自己心中笃信的那一点不灭的光亮
 *我觉得这世间再没有别的东西比它值得被如此依靠。
 */
import React,{Component} from "react"
import {StyleSheet,Dimensions,Image, ScrollView, Text, TouchableOpacity, View} from "react-native";

let {height, width} = Dimensions.get('window');


export default class MyDocuments extends Component{

    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            width: 400,
            height: 260,
            padding: 30,
        };
    }


    render() {
        return (
            <View style={{flexDirection: 'column'}}>

                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <View style={{backgroundColor: '#eeeeee'}}>
                        {/*导航栏*/}
                        <View style={{height: 50, backgroundColor: '#FFFFFF'}}>
                            <View style={{flex: 1, justifyContent: 'center'}}>
                                <TouchableOpacity>
                                    <View style={{
                                        justifyContent: 'flex-start',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        marginTop: 30
                                    }}>
                                        <Text style={{
                                            color: '#707070',
                                            fontSize: 13,
                                            marginLeft: 10,
                                            marginTop: 10
                                        }}>撤销保单</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                <Text
                                    style={{color: '#3f3f3f', fontSize: 20, marginLeft: 3, marginTop: 20}}>我的报价单</Text>

                            </View>

                            <View style={{
                                marginRight: 8,
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                flex: 1,
                                flexDirection: 'row',
                                marginBottom: 20
                            }}>
                                <TouchableOpacity>
                                    <Image source={require('../img/imgMyDocuments/phone.png')}
                                           style={{width: 24, height: 24, marginRight: 8, alignItems: 'center'}}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/*大图片*/}
                        <View style={{marginTop: 15, alignItems: 'center', flex: 1}}>
                            <Image source={require('../img/imgMyDocuments/qqq.png')}
                                   style={[styles.imageStyle = {
                                       width: this.state.width,
                                       height: this.state.height,
                                       padding: this.state.padding
                                   }]}/>
                        </View>

                        {/*保险栏*/}
                        <View>
                            <View style={{
                                backgroundColor: 'white',
                                marginTop: 20,
                                marginRight: 20,
                                marginLeft: 20,
                                flexDirection: 'row'
                            }}>
                                <View
                                    style={{width: 60, height: 40, margin: 5, backgroundColor: 'white'}}>
                                    <Text
                                        style={{marginTop: 8, fontSize: 15, color: 'black', marginRight: 10}}>交强险</Text>
                                </View>
                                <View style={{
                                    width: 60,
                                    height: 40,
                                    margin: 5,
                                    backgroundColor: 'white',
                                    marginLeft: 200
                                }}>
                                    <Text style={{marginTop: 8, fontSize: 15, color: 'black'}}>￥980</Text>
                                </View>
                            </View>

                            <View style={{
                                flexDirection: 'row',
                                backgroundColor: 'white',
                                marginTop: 3,
                                marginRight: 20,
                                marginLeft: 20
                            }}>
                                <View style={{width: 40, height: 40, margin: 5, marginLeft: 8}}>
                                    <Text style={{marginTop: 8, fontSize: 16, color: 'black'}}>税费</Text>
                                </View>
                                <View style={{
                                    width: 60,
                                    height: 40,
                                    margin: 5,
                                    backgroundColor: 'white',
                                    marginLeft: 220
                                }}>
                                    <Text style={{marginTop: 8, fontSize: 15, color: 'black'}}>￥980</Text>
                                </View>
                            </View>

                            <View style={{
                                backgroundColor: 'white',
                                marginTop: 3,
                                marginRight: 20,
                                marginLeft: 20,
                                flexDirection: 'row'
                            }}>
                                <View style={{width: 60, height: 40, margin: 5, marginLeft: 8}}>
                                    <Text style={{marginTop: 8, fontSize: 16, color: 'black'}}>商业险</Text>
                                </View>
                                <View style={{
                                    width: 60,
                                    height: 40,
                                    margin: 5,
                                    backgroundColor: 'white',
                                    marginLeft: 190
                                }}>
                                    <Text style={{marginTop: 8, fontSize: 15, color: 'black'}}>￥3980</Text>
                                </View>
                            </View>

                            <View style={{backgroundColor: 'black', marginTop: 3, marginRight: 20, marginLeft: 20}}>
                                <View style={{width: 200, height: 40, margin: 5, marginLeft: 165}}>
                                    <Text style={{marginTop: 8, fontSize: 16, color: 'white'}}>合计保费: ￥5940.00</Text>
                                </View>
                            </View>
                        </View>
                        {/*补贴*/}
                        <View>
                            <View style={{
                                backgroundColor: 'white',
                                marginTop: 20,
                                marginRight: 20,
                                marginLeft: 20,
                                flexDirection: 'row'
                            }}>
                                <View style={{width: 150, height: 40, margin: 5, backgroundColor: 'white'}}>
                                    <Text style={{marginTop: 8, fontSize: 18, color: '#fe2b00'}}>油卡/路由侠补贴</Text>
                                </View>
                                <View style={{
                                    width: 60,
                                    height: 40,
                                    margin: 5,
                                    backgroundColor: 'white',
                                    marginLeft: 91
                                }}>
                                    <Text style={{marginTop: 8, fontSize: 18, color: '#fe2b00'}}>￥1000</Text>
                                </View>
                            </View>


                            <View style={{backgroundColor: '#fe2b00', marginTop: 3, marginRight: 20, marginLeft: 20}}>
                                <View style={{width: 200, height: 40, margin: 5, marginLeft: 160}}>
                                    <Text style={{marginTop: 8, fontSize: 16, color: 'white'}}>保费合计: ￥4940.00</Text>
                                </View>
                            </View>
                        </View>


                        {/*下面图片*/}
                        <View style={{
                            marginLeft: 20,
                            marginRight: 20,
                            marginTop: 20,
                            alignItems: 'center',
                            flexDirection: 'row'
                        }}>
                            <Image source={require('../img/imgMyDocuments/aaa.png')}
                                   style={[styles.backgroundImage = {
                                       flex: 1,
                                       alignItems: 'center',
                                       justifyContent: 'center',
                                       width: 290,
                                       height: 70,
                                       resizeMode: Image.resizeMode.stretch,
                                       backgroundColor: 'rgba(0,0,0,0)'
                                   }]}/>
                            <View style={{backgroundColor: '#dadada', height: 70}}>
                                <View style={{width: 170, height: 50, margin: 5}}>
                                    <View
                                        style={{width: 20, height: 50, flexDirection: 'row'}}>
                                        <Text style={{
                                            fontSize: 37,
                                            color: '#fe2b00',
                                            width: 75,
                                            height: 50,
                                            marginLeft: 20,
                                            marginBottom: 10
                                        }}>获得</Text>

                                        <View>
                                            {/*竖线*/}
                                            <View style={{
                                                marginBottom: 10,
                                                height: height * 15.5/ 200,
                                                marginLeft:2,
                                                width: 1,
                                                backgroundColor: '#000',
                                                position: 'absolute',
                                            }}>
                                            </View>

                                            {/*垂直布局*/}
                                            <View style={{flexDirection: 'column', marginTop: 5,marginLeft:1}}>

                                                <View>
                                                    <Text style={{
                                                        fontSize: 15,
                                                        color: '#fe2b00',
                                                        width: 90,
                                                        height: 20,
                                                        marginLeft:4,

                                                    }}>￥860.00</Text>
                                                </View>

                                                <View style={{marginBottom: 15}}>
                                                    <Text style={{
                                                        fontSize: 15,
                                                        color: '#fe2b00',
                                                        width: 90,
                                                        marginLeft:5,
                                                        height: 30,
                                                    }}>维修基金</Text>
                                                </View>
                                            </View>

                                        </View>

                                    </View>
                                    <TouchableOpacity>
                                        <View style={{marginBottom: 15}}>
                                            <Text style={{
                                                fontSize: 10,
                                                width: 90,
                                                height: 30,
                                                marginLeft:120,
                                                color: 'black',
                                            }}>了解详情</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={[styles.imgStyle = {
                            marginTop: 15,
                            fontSize: 20,
                            position: 'absolute',
                            color: 'white',
                            width: width,
                            height: 70,
                            backgroundColor: 'blue',
                        }]}>111111</Text>
                    </View>
                    {/*ButtonTabBar*/}
                    <View style={{backgroundColor: 'white', marginTop: 15, flexDirection: 'row'}}>
                        <View style={{
                            width: 73,
                            height: 40,
                            margin: 5,
                            backgroundColor: 'white',
                            marginTop: 11,
                            marginLeft: 8
                        }}>
                            <Text style={{marginTop: 8, fontSize: 16, color: 'black'}}>保费合计:</Text>
                        </View>
                        <View style={{width: 160, height: 50, backgroundColor: 'white', marginTop: 6, marginBottom: 9}}>
                            <Text style={{marginTop: 7, fontSize: 25, color: 'black'}}>￥4940.00</Text>
                        </View>
                        <TouchableOpacity>
                            <View style={{width: 250, height: 70, backgroundColor: '#fe2b00'}}>
                                <Text style={{marginLeft: 22, marginTop: 23, fontSize: 18, color: 'white'}}>立即购买</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

            </View>

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
    contentContainer: {},
});
