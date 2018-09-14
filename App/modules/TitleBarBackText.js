/**
 *那当自己都萎靡到
 *无法被依靠的时候该如何振作？
 *
 *除过自己心中笃信的那一点不灭的光亮
 *我觉得这世间再没有别的东西比它值得被如此依靠。
 */
import React from 'react';
import {Button, Image, Text, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';
import {px2dp, setSpText} from "../utils/px2dpUtils";

class TitleBarBackButton extends React.Component {
    render() {
        return(
            <TouchableOpacity  onPress={()=>{this.props.navigation.goBack()}}>
                <Text style={{
                    // fontSize:px2dp(),
                    fontSize: setSpText(9),
                    margin: px2dp(4), color: "#4d4d4d",
                    marginLeft: px2dp(10),
                }}>撤销保单</Text>
            </TouchableOpacity>

        )
        // return <Button style={{
        //     color:"#ff53ed"
        // }} title=" " onPress={() => { this.props.navigation.goBack() }} >
        // </Button>;
    }
}

export default withNavigation(TitleBarBackButton);