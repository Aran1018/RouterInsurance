
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Dimensions} from 'react-native';

let {height, width} = Dimensions.get('window');
type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <View style={{
                    width: width * 13 / 14,
                    marginLeft: 15,
                    marginRight: 15,
                    height: 0.5,
                    marginTop:10,
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
