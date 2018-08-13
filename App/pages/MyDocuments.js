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
            width: 325,
            height: 220,
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
                                    <Image source={require('../img/imgMyDocuments/phone.png')}
                                           style={{width: 24, height: 24, marginRight: 8, alignItems: 'center'}}/>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/*分割线*/}
                        <View style={{
                            height: 0.2,
                            width: width,
                            backgroundColor: '#000',
                        }}>
                        </View>

                        {/*大图片*/}
                        <View style={{marginTop: 10, alignItems: 'center', flex: 1}}>
                            <Image source={require('../img/imgMyDocuments/qqq.png')}
                                   style={[styles.imageStyle = {
                                       width: this.state.width,
                                       height: this.state.height,
                                       resizeMode: Image.resizeMode.stretch,
                                   }]}/>
                        </View>

                        {/*分割线*/}
                        <View style={{
                            height: 0.2,
                            width: 370,
                            backgroundColor: '#000',
                            marginTop: 10,
                            marginRight: 20,
                            marginLeft: 20,
                        }}>
                        </View>

                        {/*保险栏*/}
                        <View>
                            <View style={{
                                backgroundColor: 'white',
                                marginRight: 20,
                                marginLeft: 20,
                                flexDirection: 'row'
                            }}>
                                <View
                                    style={{
                                        marginLeft: 12,
                                        width: 60,
                                        height: 40,
                                        margin: 5,
                                        backgroundColor: 'white'
                                    }}>
                                    <Text
                                        style={{marginTop: 8, fontSize: 15, color: 'black', marginRight: 10}}>交强险</Text>
                                </View>
                                <View style={{
                                    marginRight: 12,
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
                                    }}>￥980.00</Text>
                                </View>
                            </View>

                            <View style={{
                                flexDirection: 'row',
                                backgroundColor: 'white',
                                marginTop: 3,
                                marginRight: 20,
                                marginLeft: 20
                            }}>
                                <View style={{width: 40, height: 40, margin: 5, marginLeft: 12}}>
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
                                        color: 'black',
                                        marginRight: 7
                                    }}>￥980.00</Text>
                                </View>
                            </View>

                            <View style={{
                                backgroundColor: 'white',
                                marginTop: 3,
                                marginRight: 20,
                                marginLeft: 20,
                                flexDirection: 'row'
                            }}>
                                <View style={{width: 60, height: 40, margin: 5, marginLeft: 12}}>
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
                                        marginRight: 7
                                    }}>￥3980.00</Text>
                                </View>
                            </View>
                            {/*保费合计*/}
                            <View style={{backgroundColor: 'black', marginTop: 3, marginRight: 20, marginLeft: 20}}>
                                <View style={{
                                    width: 200,
                                    height: 32,
                                    margin: 5,
                                    marginLeft: 170,
                                    flexDirection: 'row',
                                    flex: 1
                                }}>
                                    <View style={{marginLeft: 23}}>
                                        <Text style={{marginTop: 6, fontSize: 16, color: 'white'}}>保费合计:
                                        </Text>
                                    </View>
                                    <View >
                                        <Text
                                            style={{marginTop: 2.6, fontSize: 20, color: 'white',}}> ￥5940.00
                                        </Text>
                                    </View>
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
                                <View style={{
                                    width: 150,
                                    height: 40,
                                    margin: 5,
                                    backgroundColor: 'white',
                                    marginLeft: 12
                                }}>
                                    <Text style={{marginTop: 8, fontSize: 18, color: '#fe2b00'}}>油卡/路游侠补贴</Text>
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
                                        alignSelf: 'flex-end',
                                        marginRight: 7
                                    }}>￥1000.00</Text>
                                </View>
                            </View>


                            <View style={{backgroundColor: '#fe2b00', marginTop: 3, marginRight: 20, marginLeft: 20}}>
                                <View style={{
                                    width: 200,
                                    height: 32,
                                    margin: 5,
                                    marginLeft: 170,
                                    flexDirection: 'row',
                                    flex: 1
                                }}>
                                    <View style={{marginLeft: 23}}>
                                        <Text style={{marginTop: 6, fontSize: 16, color: 'white'}}>保费合计:
                                        </Text>
                                    </View>
                                    <View stylr={{}}>
                                        <Text
                                            style={{marginTop: 2.6, fontSize: 20, color: 'white',}}> ￥4940.00
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>


                        {/*下面图片*/}
                        <View>
                            <TouchableOpacity>
                                <View style={{
                                    marginLeft: 20,
                                    marginRight: 20,
                                    marginTop: 20,
                                    flexDirection: 'row',
                                    marginBottom: 15
                                }}>
                                    <Image source={require('../img/imgMyDocuments/aaa.png')}
                                           style={[styles.backgroundImage = {
                                               flex: 1,
                                               alignItems: 'center',
                                               justifyContent: 'center',
                                               width: (width - 20) / 2,
                                               height: 90,
                                           }]}/>
                                    <View style={{backgroundColor: '#dadada', height: 90, width: (width - 20) / 2}}>
                                        <View style={{width: (width - 20) / 2, height: 50}}>

                                            {/*了解详情*/}
                                            <View style={{marginTop: 10}}>
                                                <Text style={{
                                                    fontSize: 10,
                                                    width: 90,
                                                    height: 13,
                                                    marginLeft: 145,
                                                    color: '#414141',
                                                    fontWeight:'bold',
                                                }}>了解详情</Text>
                                            </View>

                                            <View
                                                style={{
                                                    width: 20,
                                                    height: 50,
                                                    flexDirection: 'row',
                                                    marginTop: 2,
                                                    marginLeft: 20,

                                                }}>
                                                <Text style={{
                                                    fontSize: 37,
                                                    color: '#fe2b00',
                                                    width: 75,
                                                    height: 50,
                                                    marginLeft: 18,
                                                    marginBottom: 10,
                                                    fontWeight:'bold',
                                                }}>获得</Text>

                                                <View>
                                                    {/*竖线*/}
                                                    <View style={{
                                                        marginTop: 10,
                                                        height: 33,
                                                        marginLeft:4,
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
                                                                fontSize: 15,
                                                                color: '#fe2b00',
                                                                width: 90,
                                                                height: 20,
                                                                marginLeft: 6,
                                                                fontWeight:'bold',
                                                            }}>￥860.00</Text>
                                                        </View>

                                                        <View style={{marginBottom: 15}}>
                                                            <Text style={{
                                                                fontSize: 15,
                                                                color: '#fe2b00',
                                                                width: 90,
                                                                marginLeft: 7,
                                                                height: 30,
                                                                fontWeight:'bold',
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
                    </View>

                    {/*ButtonTabBar*/}
                    <View style={{
                        flexDirection: 'row',
                        width: width,
                        height: 60
                    }}>
                        <View style={{width: width * 0.67, flexDirection: 'row'}}>
                            <View style={{
                                width: 73,
                                height: 40,
                                margin: 5,
                                marginTop: 11,
                                marginLeft: 18
                            }}>
                                <Text style={{marginTop: 8, fontSize: 16, color: 'black'}}>保费合计:</Text>
                            </View>
                            <View style={{
                                width: 160,
                                height: 50,
                                marginTop: 4,
                                marginBottom: 9
                            }}>
                                <Text style={{marginTop: 7, fontSize: 25, color: 'black'}}>￥4940.00</Text>
                            </View>
                        </View>
                        <TouchableOpacity>
                            <View style={{width: width * 0.33, height: 40, backgroundColor: '#fe2b00', flex: 1}}>
                                <Text style={{
                                    alignSelf: 'center',
                                    marginTop: 16,
                                    fontSize: 21,
                                    color: 'white',
                                    marginLeft: 2
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
