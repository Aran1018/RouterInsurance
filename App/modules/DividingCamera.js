import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Dimensions} from 'react-native';
import {px2dp} from "../utils/px2dpUtils";

let {height, width} = Dimensions.get('window');
type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <View style={{
                    width: width -30,
                    marginLeft: px2dp(15),
                    marginRight: px2dp(15),
                    height: px2dp(0.8),
                    marginTop:px2dp(15),
                    backgroundColor: '#aca8a9'
                }}>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
