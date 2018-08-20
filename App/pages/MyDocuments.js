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
import MyDocItem from "../modules/MyDocItem";

let {screenHeight, screenWidth} = Dimensions.get('window');
let chuanwidth = 325;
let chuanheight = 220;
export default class MyDocuments extends Component {

    constructor(props) {
        super(props);
        // 初始状态
        
    }

    render() {
        return (
            <View style={{
                backgroundColor:"#ffffff",
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems:'flex-end',
                height: Dimensions.get('window').height-60
            }}>
                <MyDocItem/>
                    {/*ButtonTabBar*/}
                    <View style={{
                        flexDirection: 'row',
                        width: screenWidth,
                        height: 60,
                        justifyContent: 'space-between',

                    }}>
                        <View style={{width: screenWidth * 0.67, flexDirection: 'row'}}>
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
                        <TouchableOpacity onPress={()=>{
                            this.props.navigation.navigate('ChangeInformation')
                        }}>
                            <View style={{width: screenWidth * 0.33, height: 40, backgroundColor: '#fe2b00', flex: 1}}>
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
});
