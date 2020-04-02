import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get("window");

export default class profile extends Component {

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
                    <Image style={{ height: 28, width: 28, marginLeft: 10 }}
                        source={require("./../../assets/menu.png")} />
                    <Text style={{ color: "#1f1f1f", fontWeight: 'bold', fontSize: 14, marginLeft: 120 }}>PROFILE</Text>
                </View>

                <View style={styles.container}>

                    <View style={{ flex: 1, backgroundColor: 'fcfeff' }}>
                        <Image style={{ height: "70%", width: "100%" }}
                            source={require("./../../assets/backgroundProfile.png")} />

                        <TouchableOpacity style={{ alignSelf: 'center', position: 'absolute', marginTop: 80, backgroundColor: '#ff4a53', height: 105, width: 105, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
                            <Image style={{ height: 100, width: 100, borderRadius: 50 }}
                                source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHxrzpnb9vBUszUOHV3buKsmiePRMjyvc8IPZrMUw-4twHh_6J&s" }} />
                        </TouchableOpacity>

                    </View>

                    <View style={{ flex: 2, backgroundColor: 'fcfeff', alignItems: 'center', paddingHorizontal: 20 }}>

                        <TouchableOpacity style={styles.box}
                            onPress={() => { alert('aa') }}>

                            <Image style={{ height: 28, width: 28, position: 'absolute', marginVertical: 12, marginLeft: 15 }}
                                source={require("./../../assets/userName.png")} />

                            <Text style={{ color: '#1f1f1f', fontSize: 14, marginLeft: 10, position: 'absolute', marginVertical: 16, marginLeft: 52, }}>Basic Info</Text>

                            <Image style={{ height: 25, width: 25, position: 'absolute', marginVertical: 14, marginLeft: 280 }}
                                source={require("./../../assets/arrowrightcircle.png")} />

                        </TouchableOpacity>

                        <TouchableOpacity style={styles.box}
                            onPress={() => { alert('aa') }}>

                            <Image style={{ height: 28, width: 28, position: 'absolute', marginVertical: 12, marginLeft: 15 }}
                                source={require("./../../assets/password.png")} />

                            <Text style={{ color: '#1f1f1f', fontSize: 14, marginLeft: 10, position: 'absolute', marginVertical: 16, marginLeft: 52, }}>Password</Text>

                            <Image style={{ height: 25, width: 25, position: 'absolute', marginVertical: 14, marginLeft: 280 }}
                                source={require("./../../assets/arrowrightcircle.png")} />
                                
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.box}
                            onPress={() => { alert('aa') }}>

                            <Image style={{ height: 28, width: 28, position: 'absolute', marginVertical: 12, marginLeft: 15 }}
                                source={require("./../../assets/card.png")} />

                            <Text style={{ color: '#1f1f1f', fontSize: 14, marginLeft: 10, position: 'absolute', marginVertical: 16, marginLeft: 52, }}>Payment Methods</Text>

                            <Image style={{ height: 25, width: 25, position: 'absolute', marginVertical: 14, marginLeft: 280 }}
                                source={require("./../../assets/arrowrightcircle.png")} />
                                
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.box}
                            onPress={() => { alert('aa') }}>

                            <Image style={{ height: 28, width: 28, position: 'absolute', marginVertical: 12, marginLeft: 15 }}
                                source={require("./../../assets/build.png")} />

                            <Text style={{ color: '#1f1f1f', fontSize: 14, marginLeft: 10, position: 'absolute', marginVertical: 16, marginLeft: 52, }}>Addresses</Text>

                            <Image style={{ height: 25, width: 25, position: 'absolute', marginVertical: 14, marginLeft: 280 }}
                                source={require("./../../assets/arrowrightcircle.png")} />
                                
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.box}
                            onPress={() => { alert('aa') }}>

                            <Image style={{ height: 28, width: 28, position: 'absolute', marginVertical: 12, marginLeft: 15 }}
                                source={require("./../../assets/cart.png")} />

                            <Text style={{ color: '#1f1f1f', fontSize: 14, marginLeft: 10, position: 'absolute', marginVertical: 16, marginLeft: 52, }}>Orders</Text>

                            <Image style={{ height: 25, width: 25, position: 'absolute', marginVertical: 14, marginLeft: 280 }}
                                source={require("./../../assets/arrowrightcircle.png")} />
                                
                        </TouchableOpacity>

                    </View>





                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    header: {
        flex: 1,
        backgroundColor: "white",
        alignItems: 'center',
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
    },

    box: {
        height: 50,
        width: "100%",
        borderRadius: 10,
        flexDirection: 'row',
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