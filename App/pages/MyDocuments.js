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


var {height, width} = Dimensions.get('window');

export default class NavBarAndroidColored extends Component {

    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            width: 400,
            height: 260,
            padding: 30,
        };
    }

    componentDidMount() {
        Image.getSize(this.props.image, (width, height) => {
            height = screenWidth * height / width;
            this.setState({screenWidth, height});
        });
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
                                    <Image source={require('./imgs/phone.png')}
                                           style={{width: 24, height: 24, marginRight: 8, alignItems: 'center'}}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/*大图片*/}
                        <View style={{marginTop: 15, alignItems: 'center', flex: 1}}>
                            <Image source={require('./imgs/qqq.png')}
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

                                    flex: 1,
                                    width: 60,
                                    height: 40,
                                    margin: 5,
                                    backgroundColor: 'white',
                                }}>
                                    <Text style={{
                                        marginTop: 8,
                                        fontSize: 15,
                                        color: 'black',
                                        alignSelf: 'flex-end',
                                    }}>￥980</Text>
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
                                    flex: 1,
                                    width: 60,
                                    height: 40,
                                    margin: 5,
                                    backgroundColor: 'white',
                                    marginLeft: 220
                                }}>
                                    <Text style={{
                                        marginTop: 8,
                                        fontSize: 15,
                                        alignSelf: 'flex-end',
                                        color: 'black'
                                    }}>￥980</Text>
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
                                    flex: 1,
                                    margin: 5,
                                    backgroundColor: 'white',
                                    marginLeft: 190
                                }}>
                                    <Text style={{
                                        marginTop: 8,
                                        fontSize: 15,
                                        color: 'black',
                                        alignSelf: 'flex-end',
                                    }}>￥3980</Text>
                                </View>
                            </View>

                            <View style={{backgroundColor: 'black', marginTop: 3, marginRight: 20, marginLeft: 20}}>
                                <View style={{width: 200, height: 40, margin: 5, marginLeft: 165, flex: 1,}}>
                                    <Text style={{marginTop: 8, fontSize: 16, color: 'white', alignSelf: 'flex-end'}}>合计保费:
                                        ￥5940.00</Text>
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
                                    flex: 1,
                                    height: 40,
                                    margin: 5,
                                    backgroundColor: 'white',
                                    marginLeft: 91
                                }}>
                                    <Text style={{
                                        marginTop: 8,
                                        fontSize: 18,
                                        color: '#fe2b00',
                                        alignSelf: 'flex-end'
                                    }}>￥1000</Text>
                                </View>
                            </View>


                            <View style={{backgroundColor: '#fe2b00', marginTop: 3, marginRight: 20, marginLeft: 20}}>
                                <View style={{flex: 1, width: 200, height: 40, margin: 5, marginLeft: 160}}>
                                    <Text style={{marginTop: 8, fontSize: 16, color: 'white', alignSelf: 'flex-end'}}>保费合计:
                                        ￥4940.00</Text>
                                </View>
                            </View>
                        </View>


                        {/*下面图片*/}
                        <TouchableOpacity>
                            <View style={{
                                marginLeft: 20,
                                marginRight: 20,
                                marginTop: 20,
                                alignItems: 'center',
                                flexDirection: 'row'
                            }}>
                                <Image source={require('./imgs/aaa.png')}
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
                                    <View style={{width: 170, height: 50, marginTop: 5}}>

                                        {/*了解详情*/}
                                        <View style={{marginBottom: 0}}>
                                            <Text style={{
                                                fontSize: 10,
                                                width: 90,
                                                height: 13,
                                                marginLeft: 120,
                                                color: 'black',
                                            }}>了解详情</Text>
                                        </View>

                                        <View
                                            style={{
                                                width: 20,
                                                height: 50,
                                                backgroundColor: 'grew',
                                                flexDirection: 'row'
                                            }}>
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
                                                    marginTop: 10,
                                                    height: 33,
                                                    marginLeft: 2,
                                                    width: 0.7,
                                                    backgroundColor: '#000',
                                                    position: 'absolute',
                                                }}>
                                                </View>

                                                {/*垂直布局*/}
                                                <View style={{flexDirection: 'column', marginTop: 5, marginLeft: 1}}>

                                                    <View>
                                                        <Text style={{
                                                            fontSize: 15,
                                                            color: '#fe2b00',
                                                            width: 90,
                                                            height: 20,
                                                            marginLeft: 4,

                                                        }}>￥860.00</Text>
                                                    </View>

                                                    <View style={{marginBottom: 15}}>
                                                        <Text style={{
                                                            fontSize: 15,
                                                            color: '#fe2b00',
                                                            width: 90,
                                                            marginLeft: 5,
                                                            height: 30,
                                                        }}>维修基金</Text>
                                                    </View>
                                                </View>

                                            </View>

                                        </View>


                                    </View>
                                </View>

                            </View>
                        </TouchableOpacity>
                    </View>

                    {/*ButtonTabBar*/}
                    <View style={{backgroundColor: 'white', marginTop: 15, flexDirection: 'row', width: width}}>
                        <View style={{width: width * 0.67, flexDirection: 'row'}}>
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
                            <View style={{
                                width: 160,
                                height: 50,
                                backgroundColor: 'white',
                                marginTop: 6,
                                marginBottom: 9
                            }}>
                                <Text style={{marginTop: 7, fontSize: 25, color: 'black'}}>￥4940.00</Text>
                            </View>
                        </View>
                        <TouchableOpacity>
                            <View style={{width: width * 0.33, height: 70, backgroundColor: '#fe2b00', flex: 1}}>
                                <Text style={{
                                    alignSelf: 'center',
                                    marginTop: 23,
                                    fontSize: 18,
                                    color: 'white',
                                }}>立即购买</Text>
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
