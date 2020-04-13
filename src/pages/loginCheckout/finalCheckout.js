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

            prescriptionTotal: 0,

            total_value: 0,

            value_total: 0,

            checked: false,

            orders: [
                {
                    product_Id: 1,
                    product_Name: 'Acitamol',
                    product_price: 25,
                    qnt: 2,
                },
                {
                    product_Id: 2,
                    product_Name: 'Insulin Apidra',
                    product_price: 10,
                    qnt: 2,
                },
            ],

            box_options: [
                {
                    id: 1,
                    name: "basic_Infos",
                    description: "Basic Info & Address",
                },
                {
                    id: 2,
                    name: "shipping",
                    description: "Shipping",
                },
                {
                    id: 3,
                    name: "order",
                    description: "Your Order",
                },
                {
                    id: 4,
                    name: "payment",
                    description: "Payment Method",
                },
            ],

            basic_infos: [{
                name: 'Arthur',
                number: '33485352',
                location: 'Londrina',
                type_building: 'Casa',
            }],

            payment_option_card: false,
            payment_option_cash: false,

        }
    }

    componentDidMount() {
        let sum = 0;

        if (this.state.orders.length) {
            for (let i = 0; i < this.state.orders.length; i++) {

                sum += (this.state.orders[i].product_price * this.state.orders[i].qnt)
            }

            this.setState({ value_total: sum })
        }
    }

    renderBasicInfos = ({ item }) => {
        return (
            <View style={{ width: "100%", backgroundColor: "white", justifyContent: 'center' }}>
                <Text style={{ fontSize: 16, color: '#1f1f1f', fontWeight: 'bold' }}>Name</Text>
                <Text style={{ fontSize: 16, color: '#7b7b7b', }}>{this.state.basic_infos[0].name}</Text>
                <Text style={{ fontSize: 16, color: '#1f1f1f', fontWeight: 'bold', paddingTop: 6 }}>Phone Number</Text>
                <Text style={{ fontSize: 16, color: '#7b7b7b' }}>{this.state.basic_infos[0].number}</Text>
                <Text style={{ fontSize: 16, color: '#1f1f1f', fontWeight: 'bold', paddingTop: 6 }}>State - Country</Text>
                <Text style={{ fontSize: 16, color: '#7b7b7b' }}>{this.state.basic_infos[0].location} - Brazil</Text>
                <Text style={{ fontSize: 16, color: '#1f1f1f', fontWeight: 'bold', paddingTop: 6 }}>Type building</Text>
                <Text style={{ fontSize: 16, color: '#7b7b7b' }}>{this.state.basic_infos[0].type_building}</Text>
            </View>
        )
    }

    renderShipping = ({ item }) => {

        return (
            <View style={{ width: "100%", backgroundColor: "white", justifyContent: 'center' }}>

                <Text style={{ fontSize: 16, color: '#1f1f1f', fontWeight: 'bold', paddingTop: 6 }}>State - Country</Text>
                <Text style={{ fontSize: 16, color: '#7b7b7b' }}>{this.state.basic_infos[0].location} - Brazil</Text>
                <Text style={{ fontSize: 16, color: '#1f1f1f', fontWeight: 'bold', paddingTop: 6 }}>Type building</Text>
                <Text style={{ fontSize: 16, color: '#7b7b7b' }}>{this.state.basic_infos[0].type_building}</Text>
                <Text style={{ fontSize: 16, color: '#1f1f1f', fontWeight: 'bold', paddingTop: 6 }}>Price</Text>
                <Text style={{ fontSize: 14, color: '#1dc6d2' }}>Free</Text>

            </View>
        )
    }

    renderOrder = ({ item }) => {
        let total = item.qnt * item.product_price
        return (

            <View style={{ width: "100%", backgroundColor: "white", justifyContent: 'center', paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#f1f1f1' }}>

                <Text style={{ fontSize: 15, color: '#1f1f1f', fontWeight: 'bold' }}>{item.product_price} DHS</Text>

                <Text style={{ fontSize: 13, color: '#7b7b7b', paddingVertical: 4 }}>{item.product_Name}</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                    <Text style={{ fontSize: 13, color: '#1f1f1f' }}>Qty {item.qnt}</Text>

                    <Image style={{ height: 5, width: 7, marginHorizontal: 5 }}
                        source={require("./../../assets/largearrowdown.png")} />

                    <Text style={{ fontSize: 13, color: '#1f1f1f' }}>Total {total}Dhs / Description 5 pens</Text>

                </View>
            </View>
        )
    }

    renderPayment = ({ item }) => {
        return (

            <View style={{ width: "100%", backgroundColor: "white", justifyContent: 'center', paddingTop: 15 }}>

                <TouchableOpacity style={styles.card}
                    onPress={() => {
                        this.setState({ payment_option_card: !this.state.payment_option_card })

                        if (this.state.payment_option_cash = true) {
                            this.setState({ payment_option_cash: !this.state.payment_option_cash })
                        }
                    }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}>
                        <Image style={{ height: 25, width: 28 }}
                            source={require("./../../assets/card.png")} />
                        <Text style={{ fontSize: 15, color: '#7b7b7b', fontWeight: 'normal', marginLeft: 6 }}>Card</Text>
                    </View>

                    {
                        this.state.payment_option_card ?
                            <Image style={{ height: 25, width: 25, marginRight: 18 }}
                                source={require("./../../assets/circleselect.png")} />
                            :
                            <Image style={{ height: 25, width: 25, marginRight: 18 }}
                                source={require("./../../assets/circleunselect.png")} />
                    }

                </TouchableOpacity>

                <TouchableOpacity style={styles.cash}
                    onPress={() => {
                        this.setState({ payment_option_cash: !this.state.payment_option_cash })

                        if (this.state.payment_option_card = true) {
                            this.setState({ payment_option_card: !this.state.payment_option_card })
                        }
                    }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}>

                        <Image style={{ height: 25, width: 28 }}
                            source={require("./../../assets/cash.png")} />
                        <Text style={{ fontSize: 15, color: '#7b7b7b', fontWeight: 'normal', marginLeft: 6 }}>Cash</Text>

                    </View>

                    {
                        this.state.payment_option_cash ?
                            <Image style={{ height: 25, width: 25, marginRight: 18 }}
                                source={require("./../../assets/circleselect.png")} />
                            :
                            <Image style={{ height: 25, width: 25, marginRight: 18 }}
                                source={require("./../../assets/circleunselect.png")} />
                    }
                </TouchableOpacity>

            </View >
        )
    }

    renderSeparedBlock = ({ item }) => {

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

                        {
                            this.state.currentOrderSelecet == item.id ?

                                <Image style={{ height: 30, width: 30, position: 'absolute', right: -12, marginTop: 14 }}
                                    source={require("./../../assets/arrowUpWhite.png")} />

                                :

                                <Image style={{ height: 30, width: 30, position: 'absolute', right: -12, alignSelf: 'center' }}
                                    source={require("./../../assets/arrowdownWhite.png")} />
                        }

                        <View style={{ flexDirection: 'row' }}>

                            <Text style={{ color: '#1f1f1f', fontSize: 16, fontWeight: 'bold' }}>{item.description}</Text>

                        </View>

                        {
                            this.state.currentOrderSelecet == item.id && item.name == 'basic_Infos' &&

                            <>
                                <FlatList
                                    style={{ paddingTop: 10, paddingBottom: 5 }}
                                    contentContainerStyle={{}}
                                    data={this.state.basic_infos}
                                    keyExtractor={item => item.name}
                                    renderItem={this.renderBasicInfos}
                                />
                            </>
                        }

                        {
                            this.state.currentOrderSelecet == item.id && item.name == 'shipping' &&

                            <>
                                <FlatList
                                    style={{ paddingTop: 10, paddingBottom: 5 }}
                                    contentContainerStyle={{}}
                                    data={this.state.basic_infos}
                                    keyExtractor={item => item.name}
                                    renderItem={this.renderShipping}
                                />
                            </>
                        }

                        {
                            this.state.currentOrderSelecet == item.id && item.name == 'order' &&

                            <>
                                <FlatList
                                    style={{ paddingTop: 10, paddingBottom: 5 }}
                                    contentContainerStyle={{}}
                                    data={this.state.orders}
                                    keyExtractor={item => item.product_Name}
                                    renderItem={this.renderOrder}
                                />
                                <View style={{ flexGrow: 1 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ width: "50%", paddingVertical: 6 }}>

                                            <Text style={{ fontSize: 15, color: '#5e5e5e' }}>Shipping</Text>
                                            <Text style={{ fontSize: 15, color: '#1f1f1f', fontWeight: 'bold', marginTop: 4 }}>Total</Text>

                                        </View>

                                        <View style={{ width: "50%", paddingVertical: 6, alignItems: 'flex-end' }}>
                                            <Text style={{ fontSize: 14, color: '#1dc6d2' }}>Free</Text>
                                            <Text style={{ fontSize: 16, color: '#1f1f1f', fontWeight: 'bold' }}>{this.state.value_total} Dhs</Text>

                                        </View>
                                    </View>
                                </View>

                            </>
                        }

                        {
                            this.state.currentOrderSelecet == item.id && item.name == 'payment' &&

                            <>
                                <FlatList
                                    style={{ paddingTop: 10, paddingBottom: 5 }}
                                    contentContainerStyle={{}}
                                    data={this.state.basic_infos}
                                    keyExtractor={item => item.name}
                                    renderItem={this.renderPayment}
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
                        <Text style={{ color: '#1f1f1f', fontSize: 20, fontWeight: 'bold' }}>Please review your order</Text>
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

                        {
                            (this.state.payment_option_card || this.state.payment_option_cash) ?

                                <TouchableOpacity
                                    style={{ marginTop: 10 }}
                                    activeOpacity={0.2}
                                    onPress={() => {
                                        this.props.navigation.navigate('routesBottom')
                                    }}>

                                    <Image style={{ height: 40, width: "100%", borderRadius: 20 }}
                                        source={require("./../../assets/background.png")} />

                                    <Text style={{ color: '#f1f1f1', fontSize: 16, fontWeight: 'bold', position: 'absolute', alignSelf: 'center', marginTop: 10 }}>CONTINUE</Text>

                                </TouchableOpacity>

                                :

                                <TouchableOpacity
                                    style={{ marginTop: 10 }}
                                    activeOpacity={this.state.checked ? 0.2 : 1}
                                    onPress={() => {
                                        if (this.state.checked) {
                                            this.props.navigation.navigate('prescriptionCheckout')
                                        }
                                    }}>
                                    <View style={{ height: 40, width: "100%", borderRadius: 20, backgroundColor: '#eaeaea' }}></View>

                                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', position: 'absolute', alignSelf: 'center', marginTop: 10 }}>CONTINUE</Text>

                                </TouchableOpacity>
                        }

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
        alignItems: 'center',
        justifyContent: 'center'
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
    },

    card: {
        paddingVertical: 32,
        width: "100%",
        borderRadius: 15,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#f4f4f7',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    cash: {
        paddingVertical: 32,
        width: "100%",
        borderRadius: 15,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#f4f4f7',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
})