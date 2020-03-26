import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions, TextInput } from 'react-native';

const { width } = Dimensions.get("window");

export default class second extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            number: '',
        }
    }

    componentDidMount() {

    }

    getName = (text) => {
        this.setState({ name: text });
    }

    getNumber = (text) => {
        this.setState({ number: text });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.header}>
                    <TouchableOpacity style={{ alignSelf: 'center', marginLeft: 15 }}
                        onPress={() => { this.props.navigation.navigate('second') }}>
                        <Image style={{ height: 18, width: 18 }}
                            source={require("./../../assets/arrowleft.png")} />
                    </TouchableOpacity>
                    <Text style={{ color: "#1f1f1f", fontWeight: 'bold', fontSize: 14, alignSelf: 'center', marginLeft: 114 }}>CHECKOUT</Text>
                    <View style={{ height: 1.5, width: '66.6%', backgroundColor: 'green', position: 'absolute', marginTop: 62 }}></View>
                </View>
                <View style={styles.container}>

                    <Image style={{ height: 85, width: 85 }}
                        source={require("./../../assets/icon3.png")} />

                    <Text style={{ color: '#1f1f1f', fontSize: 20, fontWeight: 'bold', marginTop: 20, textAlign: 'center' }}>We will need some basic information</Text>
                    <Text style={{ color: '#A0A0A0', fontSize: 12, marginTop: 5 }}>Just so we get to know a little more about</Text>

                    <View style={styles.boxInput}>
                        <Image style={{ height: 25, width: 25, alignSelf: 'center', marginLeft: 8 }}
                            source={require("./../../assets/userName.png")} />

                        <TextInput style={{ marginLeft: 8 }}
                            underlineColorAndroid="transparent"
                            placeholder="Your name here."
                            placeholderTextColor="#b7bbc7"
                            autoCapitalize="words"
                            autoCompleteType="name"
                            onChangeText={this.getName}

                        />
                    </View>

                    <View style={styles.boxInput1}>
                        <Image style={{ height: 25, width: 25, alignSelf: 'center', marginLeft: 8 }}
                            source={require("./../../assets/phone.png")} />

                        <TextInput style={{ marginLeft: 8 }}
                            underlineColorAndroid="transparent"
                            placeholder="Your mobile number."
                            placeholderTextColor="#b7bbc7"
                            autoCapitalize="none"
                            autoCompleteType="tel"
                            dataDetectorTypes="phoneNumber"
                            editable={true}
                            onChangeText={this.getNumber}
                        />
                    </View>


                    <TouchableOpacity style={{ height: 40, width: 300, justifyContent: 'center', alignItems: 'center', marginTop: 15, marginBottom: 40 }}
                        onPress={() => { this.props.navigation.navigate('fourth', { name: this.state.name, number: this.state.number }) }}>
                        <Image style={{ height: 45, width: 300, borderRadius: 50 }}
                            source={require("./../../assets/background.png")} />
                        <Text style={{ color: '#f1f1f1', fontSize: 16, fontWeight: 'bold', position: 'absolute', marginVertical: 15 }}>NEXT</Text>
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

    boxInput: {
        height: 40,
        width: 300,
        borderRadius: 10,
        backgroundColor: "white",
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: { width: 12, height: 12 },
        shadowOpacity: 0.20,
        shadowRadius: 12.00,
        elevation: 12,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 35,
    },

    boxInput1: {
        height: 40,
        width: 300,
        borderRadius: 10,
        backgroundColor: "white",
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: { width: 12, height: 12 },
        shadowOpacity: 0.20,
        shadowRadius: 12.00,
        elevation: 12,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 15,
    },
})