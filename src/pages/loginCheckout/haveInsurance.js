import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get("window");

export default class haveInsurance extends Component {

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

                    {/* <TouchableOpacity style={{ alignSelf: 'center', marginLeft: 15 }}
                        onPress={() => { this.props.navigation.navigate('routesBottom') }}>
                        <Image style={{ height: 18, width: 18 }}
                            source={require("./../../assets/arrowleft.png")} />
                    </TouchableOpacity> */}

                    <Text style={{ color: "#1f1f1f", fontWeight: 'bold', fontSize: 14 }}>CHECKOUT</Text>

                </View>

                <View style={{ height: "1.5%", width: '33.3%', backgroundColor: 'green', position: 'absolute', marginTop: 62 }}></View>

                <View style={styles.container}>

                    <Image style={{ height: 85, width: 85 }}
                        source={require("./../../assets/insurance.png")} />

                    <Text style={{ color: '#1f1f1f', fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>Do You have insurance?</Text>
                    <Text style={{ color: '#A0A0A0', fontSize: 12, marginTop: 5 }}>How would you like to continue?</Text>

                    <TouchableOpacity style={styles.box, { marginTop: 40 }}
                        onPress={() => { this.props.navigation.navigate('prescriptionCheckout') }}>
                        <Image style={{ height: 50, width: 300, borderRadius: 10 }}
                            source={require("./../../assets/background.png")} />
                        <Image style={{ height: 24, width: 24, position: 'absolute', marginVertical: 14, marginLeft: 15 }}
                            source={require("./../../assets/v.png")} />
                        <Text style={{ color: '#f1f1f1', fontSize: 14, marginLeft: 10, position: 'absolute', marginVertical: 15, marginLeft: 50 }}>I have insurance</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.box}
                        onPress={() => { this.props.navigation.navigate('finalCheckout') }}>
                        <Image style={{ height: 18, width: 18 }}
                            source={require("./../../assets/x.png")} />
                        <Text style={{ color: '#1f1f1f', fontSize: 14, marginLeft: 10 }}>Continue without insurance</Text>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    header: {
        backgroundColor: "white",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        paddingVertical: 20
    },

    container: {
        flex: 1,
        backgroundColor: "#fcfeff",
        justifyContent: "center",
        alignItems: 'center',
        paddingHorizontal: 30,
    },

    box: {
        width: "100%",
        borderRadius: 10,
        backgroundColor: "white",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.20,
        shadowRadius: 10,
        elevation: 5,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 14,
        marginTop: 10
    },
})