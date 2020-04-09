import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { CheckBox } from 'react-native-elements';

const { width } = Dimensions.get("window");

export default class prescriptionCheckout extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selected: '',

            show_itensList: false,

            currentOrderSelecet: -1,

            prescriptions: [],

            insurance: [],

            prescriptionTotal: 0,

            total_value: 0,

            checked: false,

            box_options: [
                {
                    id: 1,
                    name: "Prescription",
                },
                {
                    id: 2,
                    name: "Insurance",
                },

            ],

        }
    }

    componentDidMount() {

    }

    renderPrescription = ({ item }) => {
        return (

            <View style={{ width: "100%", backgroundColor: "white", paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#f1f1f1', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                <Text style={{ fontSize: 11, color: '#1f1f1f', marginLeft: 10 }}>{item.name}</Text>
                <TouchableOpacity
                    onPress={() => { this.setState({ prescriptions: [] }) }}>
                    <Image style={{ height: 13, width: 13, marginRight: 5 }}
                        source={require("./../../assets/x.png")} />
                </TouchableOpacity>

            </View>
        )
    }

    renderInsurance = ({ item }) => {
        return (

            <View style={{ width: "100%", backgroundColor: "white", paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#f1f1f1', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                <Text style={{ fontSize: 11, color: '#1f1f1f', marginLeft: 10 }}>{item.name}</Text>
                <TouchableOpacity
                    onPress={() => { this.setState({ insurance: [] }) }}>
                    <Image style={{ height: 13, width: 13, marginRight: 5 }}
                        source={require("./../../assets/x.png")} />
                </TouchableOpacity>

            </View>
        )
    }

    renderOrder = ({ item }) => {
        return (

            <View style={{ width: "100%", backgroundColor: "white", justifyContent: 'center', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#f1f1f1' }}>

                <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#1f1f1f', marginLeft: 10 }}>{item.name}</Text>
                <Text style={{ fontSize: 10, color: '#777a80', marginLeft: 10 }}>Unit price {item.subTotal} / Qty {item.qty} / Total {item.total} </Text>

            </View>
        )
    }

    renderSeparedBlock = ({ item }) => {

        let image = require("./../../assets/prescription.png")

        if (item.name == "Insurance") {
            image = require("./../../assets/insurance.png")
        }


        return (

            <View style={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, marginBottom: 15, paddingVertical: 1 }}>

                <View style={styles.contentInfos}>

                    {/* view que alinha os dois blocos  */}
                    <TouchableOpacity style={this.state.currentOrderSelecet == item.id ? styles.firstBoxOpen : styles.firstBox}
                        onPress={() => {
                            this.setState({
                                currentOrderSelecet: this.state.currentOrderSelecet == item.id ? -1 : item.id,
                                show_itensList: !this.state.show_itensList
                            })
                        }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image style={{ height: 55, width: 55 }}
                                source={image} />

                            <View style={{ paddingLeft: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                                <Text style={{ color: '#9699a2', fontSize: 16 }}>{item.name}</Text>

                                <TouchableOpacity style={{ marginLeft: 100 }}
                                    onPress={() => {
                                        if (item.name == "Prescription") {
                                            this.setState({

                                                prescriptions: [
                                                    {
                                                        name: "Prescription 1.pdf"
                                                    }
                                                ]
                                            })
                                        } else {
                                            this.setState({

                                                insurance: [
                                                    {
                                                        name: "Insurance 1.pdf"
                                                    }
                                                ]
                                            })
                                        }
                                    }}>

                                    <Image style={{ height: 20, width: 20 }}
                                        source={require("./../../assets/plus.png")} />
                                </TouchableOpacity>

                            </View>
                        </View>

                        {
                            this.state.currentOrderSelecet == item.id && item.name == 'Prescription' &&

                            <>
                                <FlatList
                                    style={{ paddingTop: 10, paddingBottom: 5 }}
                                    contentContainerStyle={{}}
                                    data={this.state.prescriptions}
                                    keyExtractor={item => item.name}
                                    renderItem={this.renderPrescription}
                                />
                            </>
                        }

                        {
                            this.state.currentOrderSelecet == item.id && item.name == 'Insurance' &&

                            <>
                                <FlatList
                                    style={{ paddingTop: 10, paddingBottom: 5 }}
                                    contentContainerStyle={{}}
                                    data={this.state.insurance}
                                    keyExtractor={item => item.name}
                                    renderItem={this.renderInsurance}
                                />
                            </>
                        }

                    </TouchableOpacity>

                </View>

            </View >

        )
    }

    render() {
        return (
            <View style={{ flexGrow: 1 }}>
                <View style={styles.header}>
                    <Text style={{ color: "#1f1f1f", fontWeight: 'bold', fontSize: 14 }}>CHECKOUT</Text>
                </View>

                <View style={styles.container}>

                    <View style={styles.boxName}>
                        <Text style={{ color: '#1f1f1f', fontSize: 21, fontWeight: 'bold', textAlign: 'center' }}>Let's upload your documents</Text>
                        <Text style={{ color: '#9699a2', fontSize: 15, textAlign: 'center' }}>Select a file and then click the upload button to get started</Text>
                    </View>

                    <FlatList
                        style={{ flex: 1 }}
                        contentContainerStyle={{ paddingBottom: "30%" }}
                        data={this.state.box_options}
                        keyExtractor={item => item.name}
                        renderItem={this.renderSeparedBlock}
                        showsVerticalScrollIndicator={false}
                    />

                    <View style={{ flex: 1, position: "absolute", bottom: 0, paddingBottom: 30, paddingTop: 5, width: "100%", paddingHorizontal: 10, backgroundColor: "white" }}>
                        <View style={{}}>
                            {
                                this.state.prescriptionTotal > 0 &&

                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
                                    onPress={() => this.setState({ checked: !this.state.checked })}>
                                    {
                                        this.state.checked ?
                                            <Image style={{ height: 30, width: 30 }} source={require('./../../assets/circleselect.png')} />
                                            :
                                            <Image style={{ height: 30, width: 30 }} source={require('./../../assets/circleunselect.png')} />
                                    }

                                    <Text style={{ color: '#6d707b', fontSize: 15, marginLeft: 5 }}>I have prescription files to upload</Text>

                                </TouchableOpacity>
                            }
                        </View>

                        <TouchableOpacity
                            style={{}}
                            activeOpacity={this.state.prescriptions.length > 0 ? 0.2 : 1}
                            onPress={() => {
                                if (this.state.prescriptions.length > 0) {
                                    if (this.state.insurance.length > 0) {
                                        this.props.navigation.navigate('finalCheckout')
                                        //vai direto pro final finalCheckout
                                    } else {
                                        this.props.navigation.navigate('haveInsurance')
                                        //vai pra pagina de verificação do insurance
                                    }
                                }
                            }}>

                            {
                                this.state.prescriptions.length > 0 ?
                                    <Image style={{ height: 40, width: "100%", borderRadius: 20 }}
                                        source={require("./../../assets/background.png")} />
                                    :
                                    <View style={{ height: 40, width: "100%", borderRadius: 20, backgroundColor: '#eaeaea' }}></View>
                            }

                            {
                                this.state.checked ?
                                    <Text style={{ color: '#f1f1f1', fontSize: 16, fontWeight: 'bold', position: 'absolute', alignSelf: 'center', marginTop: 10 }}>CONTINUE</Text>
                                    :
                                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', position: 'absolute', alignSelf: 'center', marginTop: 10 }}>CONTINUE</Text>
                            }

                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    header: {
        paddingVertical: 20,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center',
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
        flexGrow: 1,
        backgroundColor: '#fcfeff'
    },

    textUnselect: {
        color: '#1f1f1f',
        fontSize: 16,
        fontWeight: 'bold'
    },

    textSelect: {
        color: '#ff394a',
        fontSize: 16,
        fontWeight: 'bold',
        borderBottomColor: '#ff394a',
        borderBottomWidth: 3
    },

    textMiddleUnselect: {
        color: '#1f1f1f',
        fontSize: 16,
        fontWeight: 'bold',
    },

    textMiddleSelect: {
        color: '#ff394a',
        fontSize: 16,
        fontWeight: 'bold',
        borderBottomColor: '#ff394a',
        borderBottomWidth: 3
    },

    boxName: {
        paddingVertical: 18,
        paddingHorizontal: 20,
        backgroundColor: '#fcfeff',
    },

    firstBox: {
        width: "100%",
        backgroundColor: 'white',
        marginTop: 0,
        borderRadius: 8,
        flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 2,
        paddingHorizontal: 16,
        paddingVertical: 16
    },

    firstBoxOpen: {
        width: "100%",
        backgroundColor: 'white',
        marginTop: 0,
        borderTopLeftRadius: 8,
        borderTopLeftRadius: 8,
        borderBottomStartRadius: 8,
        borderBottomEndRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        paddingHorizontal: 16,
        paddingVertical: 16
    },

    contentInfos: {
        width: '100%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,

        borderRadius: 10,
    }
})