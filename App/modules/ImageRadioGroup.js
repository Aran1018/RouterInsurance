/**
 *那当自己都萎靡到
 *无法被依靠的时候该如何振作？
 *Creat by Aran  at  2018/7/28
 *除过自己心中笃信的那一点不灭的光亮
 *我觉得这世间再没有别的东西比它值得被如此依靠。
 */
import React, {Component} from "react";
import {Button, StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";


export default class RadioGroup extends Component {


    constructor(props) {
        super(props);

        this.state = {
            selectIndex: this.props.selectIndex ? this.props.selectIndex : '',
            data: this.props.data ? this.props.data : [{title: '男',}, {title: '女'}],
        };
    }


    render() {
        let newArray = this.state.data;
        return (
            <View style={[this.props.style]}>
                {
                    newArray.map((item, index) =>

                        this.renderRadioButton(newArray, item, this.onPress, index, this.state.selectIndex)
                    )
                }
            </View>
        )
    }


    onPress = (index, item)=> {
        let array = this.state.data;
        for (let i = 0; i < array.length; i++) {
            let item = array[i];
            item.select = false;
            if (i === index) {
                item.select = true;
            }
        }
        this.setState({selectIndex: index});
        this.props.onPress ? this.props.onPress(index, item) : ()=> {
        }
    };

    renderRadioButton(array, item, onPress, index, sexIndex) {

        let backgroundColor = 'red';
        let image = item.image;
        let imgBrand = item.imgBrand;
        if (item.select === true) {
            image = item.image2;
        } else {
            image = item.image;
        }

        if (sexIndex === index && sexIndex !== '') {
            image = item.image2;
        }


        return (
            <TouchableOpacity key={index} onPress={()=> {
                onPress(index, item)}} style={{height: 60, margin: 10}}>
                <Image
                    style={{
                        width: 100, height: 50, resizeMode: 'contain',
                        alignItems: 'flex-end',
                    }}
                    source={imgBrand}/>
                <Image style={{
                    justifyContent: "flex-end",
                    width: 18,
                    marginTop: 30,
                    marginLeft: 80,
                    resizeMode: 'contain',
                    position: 'absolute'
                }} source={image}/>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({





});
