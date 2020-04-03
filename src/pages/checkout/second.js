import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get("window");

export default class second extends Component {

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
                    <TouchableOpacity style={{ alignSelf: 'center', marginLeft: 15 }}
                        onPress={() => { this.props.navigation.navigate('routesBottom') }}>
                        <Image style={{ height: 18, width: 18 }}
                            source={require("./../../assets/arrowleft.png")} />
                    </TouchableOpacity>
                    <Text style={{ color: "#1f1f1f", fontWeight: 'bold', fontSize: 14, alignSelf: 'center', marginLeft: 114 }}>CHECKOUT</Text>
                    <View style={{ height: 1.5, width: '33.3%', backgroundColor: 'green', position: 'absolute', marginTop: 62 }}></View>
                </View>
                <View style={styles.container}>

                    <Image style={{ height: 85, width: 85, marginTop: 30 }}
                        source={require("./../../assets/icon2.png")} />

                    <Text style={{ color: '#1f1f1f', fontSize: 20, fontWeight: 'bold', marginTop: 20, textAlign: 'center' }}>Welcome to your new online pharmacist</Text>
                    <Text style={{ color: '#A0A0A0', fontSize: 12, marginTop: 5 }}>How do you wish to continue?</Text>

                    <TouchableOpacity style={styles.box, { marginTop: 40 }}
                        onPress={() => { this.props.navigation.navigate('third') }}>
                        <Image style={{ height: 50, width: 300, borderRadius: 10 }}
                            source={require("./../../assets/background.png")} />
                        <Image style={{ height: 18, width: 18, position: 'absolute', marginVertical: 16, marginLeft: 15 }}
                            source={require("./../../assets/arrowright.png")} />
                        <Text style={{ color: '#f1f1f1', fontSize: 14, marginLeft: 10, position: 'absolute', marginVertical: 15, marginLeft: 50 }}>Continue as guest</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ marginBottom: 100 }}
                        onPress={() => { alert('Option under development') }}>
                        <View style={styles.box}>
                            <Image style={{ height: 18, width: 18, position: 'absolute', marginVertical: 16, marginLeft: 15 }}
                                source={require("./../../assets/plus.png")} />
                            <Text style={{ color: '#1f1f1f', fontSize: 14, marginLeft: 10, position: 'absolute', marginVertical: 15, marginLeft: 50 }}>Create an account</Text>
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
        flexDirection: 'row',
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