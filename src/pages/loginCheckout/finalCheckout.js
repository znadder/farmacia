import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const { width } = Dimensions.get("window");

export default class finalCheckout extends Component {

    constructor(props) {
        super(props);

        this.state = {

            basic_infos: {
                name: 'Arthur',
                number: '33485352',
                location: 'Londrina',
                type_building: 'Casa',
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
                    product_Name: 'Ibiprofeno',
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
        // this.getInfos()
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
            <View style={{ paddingVertical: 16, borderBottomColor: '#f3f3f7', borderBottomWidth: 1.5 }}>

                <Text style={{ fontSize: 15, color: '#1f1f1f', fontWeight: 'bold', marginTop: 4 }}>{item.product_price} DHS</Text>

                <Text style={{ fontSize: 13, color: '#7b7b7b', marginTop: 6 }}>{item.product_Name}</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>

                    <Text style={{ fontSize: 13, color: '#1f1f1f' }}>Qty {item.qnt}</Text>

                    <Image style={{ height: 5, width: 7, marginHorizontal: 5 }}
                        source={require("./../../assets/largearrowdown.png")} />

                    <Text style={{ fontSize: 13, color: '#1f1f1f' }}>Total {total}Dhs / Description 5 pens</Text>
                </View>
            </View>
        )
    }

    render() {

        return (
            <View style={{ flex: 1 }}>
                <View style={styles.header}>

                    <TouchableOpacity style={{ alignSelf: 'center', marginLeft: 15 }}
                        onPress={() => { this.props.navigation.navigate('infosCheckout') }}>

                        <Image style={{ height: 18, width: 18 }}
                            source={require("./../../assets/arrowleft.png")} />

                    </TouchableOpacity>

                    <Text style={{ color: "#1f1f1f", fontWeight: 'bold', fontSize: 14, alignSelf: 'center', marginLeft: 114 }}>CHECKOUT</Text>

                </View>

                <ScrollView
                    contentContainerStyle={{ paddingVertical: 14, paddingHorizontal: 20 }}
                    style={styles.container}>

                        <Text>Ola</Text>

                    <View style={styles.boxOpen}>

                        <TouchableOpacity style={{ alignItems: 'flex-start', paddingVertical: 15, paddingHorizontal: 15 }}

                            onPress={() => { this.setState({ show_info: !this.state.show_info }) }}>

                            <Text style={{ fontSize: 18, color: '#1f1f1f', fontWeight: 'bold' }}>Basic Info & Address</Text>

                            {
                                this.state.show_info ?

                                    <Image style={{ height: 30, width: 30, position: 'absolute', right: -12, marginTop: 14 }}
                                        source={require("./../../assets/arrowUpWhite.png")} />

                                    :

                                    <Image style={{ height: 30, width: 30, position: 'absolute', right: -12, marginTop: 14 }}
                                        source={require("./../../assets/arrowdownWhite.png")} />
                            }

                            {
                                this.state.show_info &&
                                <>
                                    <Text style={{ fontSize: 16, color: '#1f1f1f', fontWeight: 'bold', marginTop: 10, marginLeft: 2 }}>Name</Text>
                                    <Text style={{ fontSize: 16, color: '#7b7b7b', marginLeft: 2 }}>{this.state.basic_infos.name}</Text>
                                    <Text style={{ fontSize: 16, color: '#1f1f1f', fontWeight: 'bold', marginTop: 16, marginLeft: 2 }}>Phone Number</Text>
                                    <Text style={{ fontSize: 16, color: '#7b7b7b', marginLeft: 2 }}>{this.state.basic_infos.number}</Text>
                                    <Text style={{ fontSize: 16, color: '#1f1f1f', fontWeight: 'bold', marginTop: 16, marginLeft: 2 }}>State - Country</Text>
                                    <Text style={{ fontSize: 16, color: '#7b7b7b', marginLeft: 2 }}>{this.state.basic_infos.location} - Brazil</Text>
                                    <Text style={{ fontSize: 16, color: '#1f1f1f', fontWeight: 'bold', marginTop: 16, marginLeft: 2 }}>Type building</Text>
                                    <Text style={{ fontSize: 16, color: '#7b7b7b', marginLeft: 2 }}>{this.state.basic_infos.type_building}</Text>
                                </>
                            }

                        </TouchableOpacity>
                    </View>

                    <View style={styles.boxOpen}>

                        <TouchableOpacity style={{ alignItems: 'flex-start', paddingVertical: 15, paddingHorizontal: 15 }}
                            onPress={() => { this.setState({ show_products: !this.state.show_products }) }}>

                            <Text style={{ fontSize: 18, color: '#1f1f1f', fontWeight: 'bold' }}>Your Order</Text>

                            {
                                this.state.show_products ?

                                    <Image style={{ height: 30, width: 30, position: 'absolute', right: -12, marginTop: 14 }}
                                        source={require("./../../assets/arrowUpWhite.png")} />

                                    :

                                    <Image style={{ height: 30, width: 30, position: 'absolute', right: -12, marginTop: 14 }}
                                        source={require("./../../assets/arrowdownWhite.png")} />
                            }

                            {
                                this.state.show_products &&

                                <>

                                    <FlatList
                                        style={{ width: "100%" }}
                                        contentContainerStyle={{ paddingVertical: 10 }}
                                        data={this.state.orders}
                                        keyExtractor={item => item.name}
                                        renderItem={this.renderItem}
                                    />

                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ width: "50%", paddingVertical: 8 }}>

                                            <Text style={{ fontSize: 15, color: '#5e5e5e' }}>Shipping</Text>
                                            <Text style={{ fontSize: 15, color: '#1f1f1f', fontWeight: 'bold', marginTop: 4 }}>Total</Text>


                                        </View>

                                        <View style={{ width: "50%", paddingVertical: 8, alignItems: 'flex-end' }}>
                                            <Text style={{ fontSize: 14, color: '#1dc6d2' }}>Free</Text>
                                            <Text style={{ fontSize: 16, color: '#1f1f1f', fontWeight: 'bold' }}>{this.state.value_total} Dhs</Text>

                                        </View>
                                    </View>


                                </>
                            }

                        </TouchableOpacity>
                    </View>

                    <View style={styles.boxOpen}>

                        <TouchableOpacity style={{ alignItems: 'flex-start', paddingVertical: 15, paddingHorizontal: 15 }}
                            onPress={() => { this.setState({ show_payment: !this.state.show_payment }) }}>

                            <Text style={{ fontSize: 18, color: '#1f1f1f', fontWeight: 'bold' }}>Payment Method</Text>


                            {
                                this.state.show_payment ?

                                    <Image style={{ height: 30, width: 30, position: 'absolute', right: -12, marginTop: 14 }}
                                        source={require("./../../assets/arrowUpWhite.png")} />

                                    :

                                    <Image style={{ height: 30, width: 30, position: 'absolute', right: -12, marginTop: 14 }}
                                        source={require("./../../assets/arrowdownWhite.png")} />
                            }

                            {
                                this.state.show_payment &&

                                <>

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

                                </>
                            }

                        </TouchableOpacity>

                    </View>

                    <View style={{ marginTop: 345 }}>
                        <TouchableOpacity style={styles.box}
                            onPress={() => { this.props.navigation.navigate('routesBottom') }}>

                            <Image style={{ height: 40, width: "100%", borderRadius: 20 }}
                                source={require("./../../assets/background.png")} />

                            <Text style={{ color: '#f1f1f1', fontSize: 14, fontWeight: 'bold', position: 'absolute', alignSelf: 'center', marginTop: 10 }}>CONFIRM</Text>

                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    header: {
        paddingVertical: 20,
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

    card: {
        paddingVertical: 32,
        width: "100%",
        borderRadius: 15,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#f4f4f7',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25
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

    boxOpen: {
        flexGrow: 1,
        borderRadius: 10,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        // marginHorizontal: 30,
        elevation: 2,
        marginBottom: 14
    },

    box: {
        width: "100%",
        backgroundColor: "white",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
})