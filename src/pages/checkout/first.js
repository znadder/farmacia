import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get("window");

export default class first extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.header}>
                    <Text style={{ color: "#1f1f1f", fontWeight: 'bold', fontSize: 14 }}>CHECKOUT</Text>
                </View>
                <View style={styles.container}>

                    <Image style={{ height: 85, width: 85 }}
                        source={require("./../../assets/icon1.png")} />

                    <Text style={{ color: '#1f1f1f', fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>First time on here?</Text>
                    <Text style={{ color: '#A0A0A0', fontSize: 12, marginTop: 5 }}>Getting your medications only takes a minute</Text>

                    <TouchableOpacity style={styles.box, { marginTop: 40 }}
                    onPress={() => { this.props.navigation.navigate('second') }}>
                        <Image style={{ height: 50, width: 300, borderRadius: 10 }}
                            source={require("./../../assets/background.png")} />
                        <Image style={{ height: 24, width: 24, position: 'absolute', marginVertical: 14, marginLeft: 15 }}
                            source={require("./../../assets/user.png")} />
                        <Text style={{ color: '#f1f1f1', fontSize: 14, marginLeft: 10, position: 'absolute', marginVertical: 15, marginLeft: 50 }}>New User</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ marginBottom: 100 }}
                    onPress={() => { alert('Option under development') }}>
                        <View style={styles.box}>
                            <Image style={{ height: 24, width: 24, position: 'absolute', marginVertical: 14, marginLeft: 15 }}
                                source={require("./../../assets/userE.png")} />
                            <Text style={{ color: '#1f1f1f', fontSize: 14, marginLeft: 10, position: 'absolute', marginVertical: 15, marginLeft: 50 }}>Existing Customer</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    header: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },

    container: {
        flex: 10,
        backgroundColor: "#fcfeff",
        justifyContent: "center",
        alignItems: 'center',
        paddingHorizontal: 50,
    },

    box: {
        height: 50,
        width: 300,
        borderRadius: 10,
        backgroundColor: "white",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.20,
        shadowRadius: 10,
        elevation: 5,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    },
})