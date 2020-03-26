import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const { width } = Dimensions.get("window");

export default class final extends Component {

    constructor(props) {
        super(props);

        this.state = {

            basic_infos: {
                name: '',
                nuermb: '',
                location: '',
                type_building: '',
            },

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
                {
                    product_Id: 3,
                    product_Name: 'Paracetamol',
                    product_price: 5,
                    qnt: 3,
                },
                {
                    product_Id: 4,
                    product_Name: 'Iboprofeno',
                    product_price: 9,
                    qnt: 1,
                },
            ],

            payment_option_card: false,
            payment_option_cash: false,

            show_info: false,
            show_products: false,
            show_payment: false,

            value_total: 0,
        }
    }

    componentDidMount() {
        this.calcTotal()
        this.getInfos()
    }

    getInfos = () => {
        this.setState({
            basic_infos: {
                ...this.state.basic_infos,
                name: this.props.navigation.getParam('name'),
                number: this.props.navigation.getParam('number'),
                location: this.props.navigation.getParam('location'),
                type_building: this.props.navigation.getParam('type'),
            }
        })
    }

    calcTotal = () => {

        let sum = 0;

        if (this.state.orders.length) {
            for (let i = 0; i < this.state.orders.length; i++) {

                sum += (this.state.orders[i].product_price * this.state.orders[i].qnt)
            }

            this.setState({ value_total: sum })
        }
    }

    renderItem = ({ item }) => {
        console.log(item)
        let total = item.qnt * item.product_price
        return (
            <View style={{ flexGrow: 1, height: 80 }}>
                <Text style={{ fontSize: 15, color: '#1f1f1f', fontWeight: 'bold', marginLeft: 15, marginTop: 4 }}>$ {item.product_price}</Text>
                <Text style={{ fontSize: 10, color: '#7b7b7b', marginLeft: 15 }}>{item.product_Name}</Text>
                <Text style={{ fontSize: 12, color: '#7b7b7b', marginLeft: 15 }}>Qty {item.qnt}  <Image style={{ height: 7, width: 7, marginLeft: 10 }}
                    source={require("./../../assets/arrowdown.png")} />  Total $ {total}</Text>
                <View style={{ backgroundColor: '#eeeeee', height: 1, width: 250, marginTop: 20, alignSelf: 'center' }}></View>
            </View>
        )
    }

    render() {

        return (
            <View style={{ flex: 1 }}>
                <View style={styles.header}>
                    <TouchableOpacity style={{ alignSelf: 'center', marginLeft: 15 }}
                        onPress={() => { this.props.navigation.navigate('fourth') }}>
                        <Image style={{ height: 18, width: 18 }}
                            source={require("./../../assets/arrowleft.png")} />
                    </TouchableOpacity>
                    <Text style={{ color: "#1f1f1f", fontWeight: 'bold', fontSize: 14, alignSelf: 'center', marginLeft: 114 }}>CHECKOUT</Text>
                </View>

                <ScrollView
                    contentContainerStyle={{ paddingVertical: 14 }}
                    style={styles.container}>

                    <View style={styles.boxOpen}>

                        <TouchableOpacity onPress={() => { this.setState({ show_info: !this.state.show_info }) }}>
                            <Text style={{ fontSize: 18, color: '#1f1f1f', fontWeight: 'bold', marginLeft: 15, marginTop: 15, marginBottom: 15 }}>Basic Info & Address</Text>
                            <Image style={{ height: 30, width: 30, position: 'absolute', marginLeft: 280, marginTop: 15 }}
                                source={require("./../../assets/arrowdownWhite.png")} />
                        </TouchableOpacity>
                        {
                            this.state.show_info &&
                            <>
                                <Text style={{ fontSize: 14, color: '#1f1f1f', fontWeight: 'bold', marginLeft: 15 }}>Name</Text>
                                <Text style={{ fontSize: 16, color: '#7b7b7b', marginLeft: 20 }}>{this.state.basic_infos.name}</Text>
                                <Text style={{ fontSize: 14, color: '#1f1f1f', fontWeight: 'bold', marginLeft: 15, marginTop: 20 }}>Phone Number</Text>
                                <Text style={{ fontSize: 16, color: '#7b7b7b', marginLeft: 20 }}>{this.state.basic_infos.number}</Text>
                                <Text style={{ fontSize: 14, color: '#1f1f1f', fontWeight: 'bold', marginLeft: 15, marginTop: 20 }}>State - Country</Text>
                                <Text style={{ fontSize: 16, color: '#7b7b7b', marginLeft: 20 }}>{this.state.basic_infos.location} - Brazil</Text>
                                <Text style={{ fontSize: 14, color: '#1f1f1f', fontWeight: 'bold', marginLeft: 15, marginTop: 20 }}>Type building</Text>
                                <Text style={{ fontSize: 16, color: '#7b7b7b', marginLeft: 20, marginBottom: 10 }}>{this.state.basic_infos.type_building}</Text>
                            </>
                        }
                    </View>

                    <View style={styles.products}>
                        <TouchableOpacity onPress={() => { this.setState({ show_products: !this.state.show_products }) }}>
                            <Text style={{ fontSize: 18, color: '#1f1f1f', fontWeight: 'bold', marginLeft: 15, marginTop: 15, marginBottom: 15 }}>Your Order</Text>
                            <Image style={{ height: 30, width: 30, position: 'absolute', marginLeft: 280, marginTop: 15 }}
                                source={require("./../../assets/arrowdownWhite.png")} />
                        </TouchableOpacity>
                        {
                            this.state.show_products &&
                            <>
                                <FlatList
                                    contentContainerStyle={{ flexGrow: 1 }}
                                    style={styles.flatlistItens}
                                    data={this.state.orders}
                                    keyExtractor={item => item.name}
                                    renderItem={this.renderItem}
                                />
                                <View style={{ paddingHorizontal: 30, flexDirection: 'row', marginTop: 10 }}>
                                    <Text style={{ fontSize: 14, color: '#5e5e5e' }}>Shipping</Text>
                                    <Text style={{ fontSize: 14, color: '#1dc6d2', marginLeft: 162 }}>Free</Text>
                                </View>
                                <View style={{ paddingHorizontal: 30, flexDirection: 'row', marginTop: 2, marginBottom: 20 }}>
                                    <Text style={{ fontSize: 14, color: '#1f1f1f', fontWeight: 'bold' }}>Total</Text>
                                    <Text style={{ fontSize: 16, color: '#1f1f1f', fontWeight: 'bold', marginLeft: 182 }}>{this.state.value_total} $</Text>
                                </View>
                            </>

                        }


                    </View>

                    <View style={styles.payment}>

                        <TouchableOpacity onPress={() => { this.setState({ show_payment: !this.state.show_payment }) }}>
                            <Text style={{ fontSize: 18, color: '#1f1f1f', fontWeight: 'bold', marginLeft: 15, marginTop: 15, marginBottom: 15 }}>Payment Method</Text>
                            <Image style={{ height: 30, width: 30, position: 'absolute', marginLeft: 280, marginTop: 15 }}
                                source={require("./../../assets/arrowdownWhite.png")} />
                        </TouchableOpacity>

                        {
                            this.state.show_payment &&
                            <>
                                <View style={styles.card}>

                                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
                                        onPress={() => { this.setState({ payment_option_card: !this.state.payment_option_card }) }}>

                                        <Image style={{ height: 25, width: 28, alignSelf: 'center', marginLeft: 18 }}
                                            source={require("./../../assets/card.png")} />
                                        <Text style={{ fontSize: 15, color: '#7b7b7b', alignSelf: 'center', marginLeft: 10, fontWeight: 'normal' }}>Card</Text>

                                        {
                                            this.state.payment_option_card ?
                                                <Image style={{ height: 25, width: 25, marginLeft: 100 }}
                                                    source={require("./../../assets/circleselect.png")} />
                                                :
                                                <Image style={{ height: 25, width: 25, marginLeft: 100 }}
                                                    source={require("./../../assets/circleunselect.png")} />
                                        }

                                    </TouchableOpacity>

                                </View>

                                <View style={styles.cash}>

                                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
                                        onPress={() => { this.setState({ payment_option_cash: !this.state.payment_option_cash }) }}>

                                        <Image style={{ height: 25, width: 28, alignSelf: 'center', marginLeft: 18 }}
                                            source={require("./../../assets/cash.png")} />
                                        <Text style={{ fontSize: 15, color: '#7b7b7b', alignSelf: 'center', marginLeft: 10, fontWeight: 'normal' }}>Cash</Text>

                                        {
                                            this.state.payment_option_cash ?
                                                <Image style={{ height: 25, width: 25, marginLeft: 100 }}
                                                    source={require("./../../assets/circleselect.png")} />
                                                :
                                                <Image style={{ height: 25, width: 25, marginLeft: 100 }}
                                                    source={require("./../../assets/circleunselect.png")} />
                                        }
                                    </TouchableOpacity>

                                </View>
                            </>
                        }

                    </View>



                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    header: {
        flex: 0.1,
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
        flex: 1,
        backgroundColor: "#fafafa",
    },

    flatlistItens: {
        paddingHorizontal: 14,
        backgroundColor: 'white',
    },

    card: {
        height: 80,
        width: 250,
        borderRadius: 15,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#f4f4f7',
        flexDirection: 'row',
    },

    cash: {
        height: 80,
        width: 250,
        borderRadius: 15,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#f4f4f7',
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 15
    },

    box: {
        height: 60,
        width: "100%",
        marginHorizontal: 35,
        borderRadius: 10,
        backgroundColor: "white",
        // flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: { width: 30, height: 12 },
        shadowOpacity: 0.00,
        shadowRadius: 12.00,
        elevation: 8,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 25,
    },

    boxOpen: {
        flexGrow: 1,
        marginHorizontal: 30,
        borderRadius: 10,
        backgroundColor: "white",
        // flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: { width: 30, height: 12 },
        shadowOpacity: 0.00,
        shadowRadius: 12.00,
        elevation: 8,
        marginBottom: 14
    },

    products: {
        flexGrow: 1,
        marginHorizontal: 30,
        borderRadius: 10,
        backgroundColor: "white",
        shadowColor: '#000',
        shadowOffset: { width: 30, height: 12 },
        shadowOpacity: 0.00,
        shadowRadius: 12.00,
        elevation: 8,
        marginBottom: 14
    },

    payment: {
        flexGrow: 1,
        marginHorizontal: 30,
        borderRadius: 10,
        backgroundColor: "white",
        // flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: { width: 30, height: 12 },
        shadowOpacity: 0.00,
        shadowRadius: 12.00,
        elevation: 8,
    },
})