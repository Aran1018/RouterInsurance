/**
 *那当自己都萎靡到
 *无法被依靠的时候该如何振作？
 *
 *除过自己心中笃信的那一点不灭的光亮
 *我觉得这世间再没有别的东西比它值得被如此依靠。
 */
import React from 'react';
import {Button, Image, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';
import {px2dp} from "../utils/px2dpUtils";

class TitleBarBackButton extends React.Component {
    render() {
        return(
            <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
                <Image style={{width:px2dp(25),height:px2dp(25),margin:px2dp(8),
                    resizeMode: "contain"}} source={require('../img/titlebar/back.png')}/>

            </TouchableOpacity>

        )
        // return <Button style={{
        //     color:"#ff53ed"
        // }} title=" " onPress={() => { this.props.navigation.goBack() }} >
        // </Button>;
    }
}

export default withNavigation(TitleBarBackButton);