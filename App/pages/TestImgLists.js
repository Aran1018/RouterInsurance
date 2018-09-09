/**
 *那当自己都萎靡到
 *无法被依靠的时候该如何振作？
 *Creat by Aran  at  2018/7/29
 *除过自己心中笃信的那一点不灭的光亮
 *我觉得这世间再没有别的东西比它值得被如此依靠。
 */
import React,{PureComponent} from "react"
import {Text, View} from "react-native";
import ImageRadioGroup from "../modules/ImageRadioGroup";
import {px2dp} from "../utils/px2dpUtils";
export default class TestImgLists extends PureComponent{

    constructor(props) {
        super(props);
        this.state = {
            sexArray: [

                {
                    title: '中国平安',
                    imgBrand: require("../img/ImageRadios/brand.png"),
                    image:  require('../img/ImageRadios/noselected.png'),
                    image2:require('../img/ImageRadios/selected.png'),
                },

                {
                    title: '中国人寿',
                    imgBrand: require("../img/ImageRadios/brand.png"),

                    image:  require('../img/ImageRadios/noselected.png'),
                    image2:require('../img/ImageRadios/selected.png'),
                },
                {
                    title: '太平洋保险',
                    imgBrand: require("../img/ImageRadios/brand.png"),
                    image:  require('../img/ImageRadios/noselected.png'),
                    image2:require('../img/ImageRadios/selected.png'),
                },

            ],
        };
    }

    render(){
        return(
            <View>
                <ImageRadioGroup
                    style={{flexDirection: 'row'}}//整个组件的样式----这样可以垂直和水平
                    conTainStyle={{height: px2dp(44), width: px2dp(60)}}//图片和文字的容器样式
                    imageStyle={{width: px2dp(25), height: px2dp(25)}}//图片样式
                    selectIndex={''}//空字符串,表示不选中,数组索引表示默认选中
                    data={this.state.sexArray}//数据源
                    onPress={(index, item)=> {
                        console.warn(item.title);
                        console.warn(index)
                    }}
                />
            </View>
        )
    }
}