import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const { width } = Dimensions.get("window");

export default class orders extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selected: '',

            show_itensList: false,

            currentOrderSelecet: -1,

            pharmacy: [
                {
                    id: 3,
                    name: 'LIFE PHARMACY',
                    location: 'Brasil, Internacional City,',
                    point: 'T-7589, 8.9Km Street',
                    dhs: '70',
                    image: 'https://www.alseef.ae/-/media/project/meraasecosystem/alseef/shops/life-pharmacy/logo.png',
                    verify: 'Verified',
                    puchaseData: '25.12.2018, 14:23',
                    products: [
                        {
                            id: 1,
                            name: 'Insulin Apidra',
                            qty: 2,
                            subTotal: 10,
                            total: 20,
                            description: '5 pens',
                        },
                        {
                            id: 2,
                            name: 'Acitamol',
                            qty: 2,
                            subTotal: 25,
                            total: 50,
                            description: '5 pens',
                        },
                    ]
                },
                {
                    id: 1,
                    name: 'ASTER PHARMACY',
                    location: 'Dubai, International City,',
                    point: 'T-9001, 2.2Km Away',
                    dhs: '59',
                    image: 'http://www.asterdmhealthcare.com/wp-content/uploads/2019/11/Aster-Pharmacy.jpg',
                    verify: 'Verifying',
                    puchaseData: '05.08.2018, 19:00',
                    products: [
                        {
                            id: 1,
                            name: 'Paracetamol',
                            qty: 1,
                            subTotal: 15,
                            total: 15,
                            description: '5 pens',
                        },
                        {
                            id: 2,
                            name: 'Acitamol',
                            qty: 3,
                            subTotal: 6,
                            total: 12,
                            description: '5 pens',
                        },
                        {
                            id: 3,
                            name: 'Estomazil',
                            qty: 4,
                            subTotal: 8,
                            total: 32,
                            description: '5 pens',
                        },
                    ]
                },
                {
                    id: 2,
                    name: 'TOPPER PHARMACY',
                    location: 'Londres, International City,',
                    point: 'T-801, 10.3Km Away',
                    dhs: '90',
                    image: 'https://image.freepik.com/free-vector/medical-pharmacy-logo_7888-26.jpg',
                    verify: 'Complete',
                    puchaseData: '08.08.2018, 15:00',
                    products: [
                        {
                            id: 1,
                            name: 'Apidra Insulin',
                            qty: 3,
                            subTotal: 30,
                            total: 90,
                            description: '5 pens',
                        },
                    ]
                },
            ]
        }
    }

    componentDidMount() {
        this.setState({ selected: 'all' })
    }


    renderItensPharmacy = ({ item }) => {
        return (

            <View style={{ width: "100%", backgroundColor: "white", justifyContent: 'center', paddingVertical: 15, borderBottomWidth: 1.6, borderBottomColor: '#f1f1f1', borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}>

                <Text style={{ fontSize: 11, fontWeight: 'bold', color: '#1f1f1f', marginLeft: 10 }}>{item.subTotal} DHS</Text>
                <Text style={{ fontSize: 9, fontWeight: 'bold', color: '#1f1f1f', marginLeft: 10, marginTop: 4 }}>{item.name}</Text>
                <Text style={{ fontSize: 9, fontWeight: 'bold', color: '#1f1f1f', marginLeft: 10, marginTop: 2 }}>Qty {item.qty} / Total {item.total} Dhs / Description {item.description}</Text>

            </View>
        )
    }

    renderSeparedBlock = ({ item }) => {

        let selec_image = require("./../../assets/completed.png")

        if (item.verify == 'Verifying') {
            selec_image = require("./../../assets/verifying.png")
        }
        else if (item.verify == 'Verified') {
            selec_image = require("./../../assets/verified.png")
        }

        return (

            <View style={{ justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10, marginBottom: 15, paddingVertical: 1 }}>

                <View style={styles.contentInfos}>

                    {/* view que alinha os dois blocos  */}
                    <TouchableOpacity style={this.state.currentOrderSelecet == item.id ? styles.firstBoxOpen : styles.firstBox}
                        onPress={() => {
                            this.setState({
                                currentOrderSelecet: this.state.currentOrderSelecet == item.id ? -1 : item.id,
                                show_itensList: !this.state.show_itensList
                            })
                        }}>

                        {/* view com as informações basicas  */}
                        <View style={{ width: "71%", backgroundColor: 'white', justifyContent: 'center' }}>

                            <View style={{ flexDirection: 'row' }}>

                                <Image style={{ height: 70, width: 70, marginTop: 5 }}
                                    source={{ uri: item.image }} />

                                <View>

                                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#1F1F1F', marginTop: 10 }}>{item.name}  {this.state.currentOrderSelecet == item.id ?  

                                        <Image style={{ height: 13, width: 13, marginLeft: 4}}
                                         source={require("./../../assets/arrowUpBlack.png")}/>  

                                        :
                                        
                                        <Image style={{ height: 13, width: 13, marginLeft: 4}}
                                         source={require("./../../assets/arrowdownBlack.png")}/>  
                                    } 
                                    </Text>
                                    <Text style={{ fontSize: 10, color: '#b8bbc2', marginTop: 1 }}>{item.location}</Text>
                                    <Text style={{ fontSize: 10, color: '#b8bbc2' }}>{item.point}</Text>

                                </View>

                            </View>

                            <View style={{ paddingVertical: 10, backgroundColor: 'white', justifyContent: 'center', }}>

                                <View style={{ flexDirection: 'row' }}>

                                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#b8bbc2', marginLeft: 1 }}>STATUS</Text>
                                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#b8bbc2', marginLeft: 60 }}>PURCHASE DATE </Text>

                                </View>

                                <View style={{ flexDirection: 'row', marginTop: 5, alignItems: 'center' }}>

                                    <Image style={{ height: 14, width: 14 }}
                                        source={selec_image} />

                                    <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#1f1f1f', marginLeft: 4 }}>{item.verify}</Text>
                                    <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#1f1f1f', marginLeft: 105, position: 'absolute' }}>{item.puchaseData}</Text>

                                </View>

                            </View>

                        </View>

                        <View style={{ backgroundColor: '#f1f1f1', width: "0.6%", height: "115%" }}>

                        </View>

                        {/* view com o dinheiro  */}
                        <View style={{ width: "23%", backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>

                            <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#1f1f1f' }}>{item.dhs}</Text>
                            <Text style={{ fontSize: 10, color: '#b8bbc2' }}>Dhs</Text>

                        </View>

                    </TouchableOpacity>

                    {
                        this.state.currentOrderSelecet == item.id &&

                        <View style={{ backgroundColor: 'white', width: "100%", borderBottomLeftRadius: 10, borderBottomRightRadius: 10, shadowColor: "#000", shadowOffset: { width: 0, height: 1, }, shadowOpacity: 0.22, shadowRadius: 2.22, elevation: 3, }}>

                            <View style={{ width: "100%", height: 1.6, backgroundColor: "#f1f1f1", marginTop: 10 }}></View>

                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#b8bbc2', marginTop: 10, marginLeft: 10 }}>ORDER N° {item.id}</Text>

                            <FlatList
                                style={{}}
                                data={item.products}
                                keyExtractor={item => item.name}
                                renderItem={this.renderItensPharmacy}
                            />

                        </View>
                    }

                </View>

                {
                    item.verify == 'Complete' &&

                    < TouchableOpacity style={{ paddingVertical: 6, width: "85%", backgroundColor: '#ffffff', borderBottomStartRadius: 8, borderBottomEndRadius: 8, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', borderTopWidth: 1, borderColor: '#f1f1f1', alignSelf: 'center', shadowColor: "#000", shadowOffset: { width: 0, height: 1, }, shadowOpacity: 0.20, shadowRadius: 1.41, elevation: 2, }}
                        onPress={() => { alert("Adicionado no carrinho!") }}>
                        <Image style={{ height: 25, width: 25 }}
                            source={require("./../../assets/cart.png")} />
                        <Text style={{ fontSize: 14, color: '#ff4c51', marginLeft: 5, alignSelf: 'center' }}>Re-order</Text>
                    </TouchableOpacity>
                }

                {
                    item.verify == 'Verified' &&

                    < TouchableOpacity style={{ paddingVertical: 6, width: "85%", backgroundColor: '#ffffff', borderBottomStartRadius: 8, borderBottomEndRadius: 8, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', borderTopWidth: 1, borderColor: '#f1f1f1', alignSelf: 'center', shadowColor: "#000", shadowOffset: { width: 0, height: 1, }, shadowOpacity: 0.20, shadowRadius: 1.41, elevation: 2, }}
                        onPress={() => { this.props.navigation.navigate('infosCheckout') }}>
                        <Image style={{ height: 25, width: 25 }}
                            source={require("./../../assets/cart.png")} />
                        <Text style={{ fontSize: 14, color: '#ff4c51', marginLeft: 5, alignSelf: 'center' }}>Proceed to payment</Text>
                    </TouchableOpacity>
                }

            </View >

        )
    }

    render() {
        return (
            <View style={{ flexGrow: 1 }}>

                <View style={styles.header}>

                    <Text style={{ color: "#1f1f1f", fontWeight: 'bold', fontSize: 14 }}>ORDERS</Text>

                </View>

                <View style={styles.container}>

                    <View style={styles.optionsbox}>

                        <TouchableOpacity
                            onPress={() => { this.setState({ selected: 'all' }) }}>

                            <Text style={this.state.selected == 'all' ? styles.textSelect : styles.textUnselect}>All</Text>

                        </TouchableOpacity>

                        <TouchableOpacity style={{ paddingHorizontal: 25 }}
                            onPress={() => { this.setState({ selected: 'pres' }) }}>

                            <Text style={this.state.selected == 'pres' ? styles.textMiddleSelect : styles.textMiddleUnselect}>Prescription</Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => { this.setState({ selected: 'non' }) }}>

                            <Text style={this.state.selected == 'non' ? styles.textSelect : styles.textUnselect}>Non-Prescription</Text>

                        </TouchableOpacity>

                    </View>

                    <FlatList
                        style={{ backgroundColor: '#fcfeff' }}
                        data={this.state.pharmacy}
                        keyExtractor={item => item.name}
                        renderItem={this.renderSeparedBlock}
                    />

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

    optionsbox: {
        paddingVertical: 16,
        backgroundColor: '#fcfeff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    firstBox: {
        paddingBottom: 10,
        width: "100%",
        backgroundColor: 'white',
        marginTop: 0,
        borderRadius: 8,
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

        elevation: 2,
    },

    firstBoxOpen: {
        width: "100%",
        backgroundColor: 'white',
        marginTop: 0,
        borderTopLeftRadius: 8,
        borderTopLeftRadius: 8,
        borderBottomStartRadius: 0,
        borderBottomEndRadius: 0,
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

        borderRadius: 10
    }
})