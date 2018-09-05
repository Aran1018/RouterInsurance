/**
 *那当自己都萎靡到
 *无法被依靠的时候该如何振作？
 *
 *除过自己心中笃信的那一点不灭的光亮
 *我觉得这世间再没有别的东西比它值得被如此依靠。
 */
'use strict';

import {Dimensions}  from 'react-native'

const deviceH = Dimensions.get('window').height;
const deviceW = Dimensions.get('window').width;

const basePx = 375;

export default function px2dp(px) {
    return px *  deviceW / basePx
}
