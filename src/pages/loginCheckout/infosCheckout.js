import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { CheckBox } from 'react-native-elements';

const { width } = Dimensions.get("window");

export default class orders extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selected: '',

            show_itensList: false,

            currentOrderSelecet: -1,

            items_cart: [
                {
                    id: 1,
                    name: 'Insulin Apidra',
                    qty: 2,
                    subTotal: 10,
                    total: 19,
                    description: '9 pens',
                    weight: "50g",
                    prescription: false
                },
                {
                    id: 2,
                    name: 'Acitamol',
                    qty: 2,
                    subTotal: 25,
                    total: 10,
                    description: '5 pens',
                    weight: "10g",
                    prescription: false
                },
                {
                    id: 3,
                    name: 'Augmentin',
                    qty: 3,
                    subTotal: 30,
                    total: 25,
                    description: '6 pens',
                    weight: "1g",
                    prescription: true
                },
                {
                    id: 4,
                    name: 'Crocine',
                    qty: 4,
                    subTotal: 8,
                    total: 16,
                    description: '15 pens',
                    weight: "500 mg",
                    prescription: true
                },
            ],

            prescriptionTotal: 0,

            total_value: 0,

            checked: false,

            box_options: [
                {
                    id: 1,
                    name: "item_cart",
                    description: "ITEMS IN CART",
                },
                {
                    id: 3,
                    name: "order_amount",
                    description: "ORDER AMOUNT",
                },
            ],

        }
    }

    componentDidMount() {
        this.needInfos()
    }

    needInfos = () => {

        let num = 0
        let price_total = 0

        for (let i = 0; i < this.state.items_cart.length; i++) {

            price_total = price_total + this.state.items_cart[i].total

            if (this.state.items_cart[i].prescription == true) {
                num = num + 1
                //verificando prescricao medica
            }
        }

        this.setState({ total_value: price_total })

        if (num > 0) {
            this.setState({
                box_options: [
                    {
                        id: 1,
                        name: "item_cart",
                        description: "ITEMS IN CART",
                    },
                    {
                        id: 2,
                        name: "prescription",
                        description: "REQUIRE PRESCRIPTION",
                    },
                    {
                        id: 3,
                        name: "order_amount",
                        description: "ORDER AMOUNT",
                    },
                ], prescriptionTotal: num
            })
        }
    }

    renderItens = ({ item }) => {
        return (

            <View style={{ width: "100%", backgroundColor: "white", justifyContent: 'center', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#f1f1f1' }}>

                <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#1f1f1f', marginLeft: 10 }}>{item.name}</Text>
                <Text style={{ fontSize: 10, color: '#777a80', marginLeft: 10 }}>Qty {item.qty} / Description {item.description}</Text>

            </View>
        )
    }

    renderPrescription = ({ item }) => {

        if (item.prescription == true) {
            return (
                <View style={{ width: "100%", backgroundColor: "white", paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#f1f1f1', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#1f1f1f' }}>{item.name} {item.weight}</Text>
                    <TouchableOpacity
                        onPress={() => { alert("Still in development") }}>
                        <Image style={{ height: 13, width: 13, marginRight: 5 }}
                            source={require("./../../assets/x.png")} />
                    </TouchableOpacity>

                </View>
            )
        }
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

        let num = this.state.items_cart.length
        let image = require("./../../assets/cartVerify.png")

        if (item.name == 'prescription') {
            num = this.state.prescriptionTotal
            image = require("./../../assets/prescription.png")
        } else if (item.name == 'order_amount') {
            num = this.state.total_value
            image = require("./../../assets/money.png")
        }

        return (

            <View style={{ justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, marginBottom: 15, paddingVertical: 1 }}>

                <View style={styles.contentInfos}>

                    {/* view que alinha os dois blocos  */}
                    <TouchableOpacity style={this.state.currentOrderSelecet == item.id ? styles.firstBoxOpen : styles.firstBox}
                        onPress={() => {
                            this.setState({
                                currentOrderSelecet: this.state.currentOrderSelecet == item.id ? -1 : item.id,
                                show_itensList: !this.state.show_itensList
                            })
                        }}>

                        {
                            this.state.currentOrderSelecet == item.id ?

                                <Image style={{ height: 30, width: 30, position: 'absolute', right: -12, marginTop: 14 }}
                                    source={require("./../../assets/arrowUpWhite.png")} />

                                :

                                <Image style={{ height: 30, width: 30, position: 'absolute', right: -12, alignSelf: 'center' }}
                                    source={require("./../../assets/arrowdownWhite.png")} />
                        }

                        <View style={{ flexDirection: 'row' }}>
                            <Image style={{ height: 55, width: 55 }}
                                source={image} />

                            <View style={{ paddingLeft: 20 }}>

                                {
                                    item.name == 'prescription' ?

                                        <Text style={{ color: '#ff4858', fontSize: 26, fontWeight: 'bold' }}>{num}</Text>

                                        :

                                        <Text style={{ color: '#1f1f1f', fontSize: 26, fontWeight: 'bold' }}>{num}</Text>

                                }

                                <Text style={{ color: '#9699a2', fontSize: 12 }}>{item.description}</Text>

                            </View>
                        </View>

                        {
                            this.state.currentOrderSelecet == item.id && item.name == 'item_cart' &&

                            <>
                                <FlatList
                                    style={{ paddingTop: 10, paddingBottom: 15 }}
                                    contentContainerStyle={{}}
                                    data={this.state.items_cart}
                                    keyExtractor={item => item.name}
                                    renderItem={this.renderItens} renderPrescription
                                />
                            </>
                        }

                        {
                            this.state.currentOrderSelecet == item.id && item.name == 'prescription' &&

                            <View>
                                <View>
                                    <FlatList
                                        style={{ paddingTop: 10, paddingBottom: 15 }}
                                        contentContainerStyle={{}}
                                        data={this.state.items_cart}
                                        keyExtractor={item => item.name}
                                        renderItem={this.renderPrescription}
                                    />
                                </View>
                                <View style={{ height: '25%' }}>
                                    <Text style={{ fontSize: 13, color: '#c2c5cb', textAlign: 'justify' }}>These medications requiere a prescription. If you have a prescription, you can proceed and upload your files. Otherwide, you must remove these items to continue.</Text>
                                </View>
                            </View>
                        }

                        {
                            this.state.currentOrderSelecet == item.id && item.name == 'order_amount' &&

                            <>
                                <FlatList
                                    style={{ paddingTop: 10, paddingBottom: 5 }}
                                    contentContainerStyle={{}}
                                    data={this.state.items_cart}
                                    keyExtractor={item => item.name}
                                    renderItem={this.renderOrder}
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

                        <Text style={{ color: '#1f1f1f', fontSize: 22, fontWeight: 'bold' }}>Hi, Michael</Text>
                        <Text style={{ color: '#9699a2', fontSize: 18 }}>Here is summary of your order</Text>

                    </View>

                    <FlatList
                        style={{ backgroundColor: '#fcfeff' }}
                        data={this.state.box_options}
                        keyExtractor={item => item.name}
                        renderItem={this.renderSeparedBlock}
                    />

                    <View style={{ backgroundColor: '#fcfeff' }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                            <CheckBox
                                checkedIcon={<Image style={{ height: 30, width: 30, borderRadius: 4 }} source={require('./../../assets/circleselect.png')} />}
                                uncheckedIcon={<Image style={{ height: 30, width: 30, borderRadius: 4 }} source={require('./../../assets/circleunselect.png')} />}
                                checked={this.state.checked}
                                onPress={() => this.setState({ checked: !this.state.checked })}
                            />

                            <Text style={{ fontSize: 16, color: '#666a76', marginRight: 20 }}>I Have prescription files to upload</Text>
                        </View>

                        <TouchableOpacity>

                            <Image style={{ height: 40, width: "100%", borderRadius: 20 }}
                                source={require("./../../assets/background.png")} />

                            <Text style={{ color: '#f1f1f1', fontSize: 16, fontWeight: 'bold', position: 'absolute', alignSelf: 'center', marginTop: 10 }}>CONTINUE</Text>

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
        flex: 10,
        backgroundColor: '#f1f1f1',
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