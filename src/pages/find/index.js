import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions, TextInput, FlatList } from 'react-native';
import Select2 from './../../components/ASelect';

const { width } = Dimensions.get("window");

const mockData = [
    { id: 1, name: 'Insulin Apidra' },
    { id: 2, name: 'Acitamol' },
    { id: 3, name: 'Parecetamol' },
    { id: 4, name: 'Ibiprofeno' },
];

export default class index extends Component {

    constructor(props) {
        super(props);

        this.state = {
            options: [
                {
                    title: 'Open',
                    imageUnsel: "https://i.ibb.co/BsDMmvJ/clock.png",
                    imageSelec: "https://i.ibb.co/xsR1TT4/clockselect.png",
                },
                {
                    title: 'Near',
                    imageUnsel: "https://i.ibb.co/bNRqTrB/navigate.png",
                    imageSelec: "https://i.ibb.co/HVR9yRz/navigate-Select.png",
                },
                {
                    title: 'Price',
                    imageUnsel: "https://i.ibb.co/n7QjvvN/Updown.png",
                    imageSelec: "https://i.ibb.co/1fnCvLB/Updown-Select.png",
                },
            ],

            selected: '',

            pharmacy: [
                {
                    id: 1,
                    name: 'ASTER PHARMACY0',
                    location: 'Dubai, International City,',
                    point: 'T-9001, 2.2Km Away',
                    wHours: '01:00 - 17:00',
                    inStock: '2/2',
                    dhs: '31',
                    image: 'http://www.asterdmhealthcare.com/wp-content/uploads/2019/11/Aster-Pharmacy.jpg'
                },
                {
                    id: 2,
                    name: 'TOPPER PHARMACY0',
                    location: 'Londres, International City,',
                    point: 'T-801, 10.3Km Away',
                    wHours: '00:00 - 23:00',
                    inStock: '8/20',
                    dhs: '33',
                    image: 'https://image.freepik.com/free-vector/medical-pharmacy-logo_7888-26.jpg'
                },
            ]

        }
    }

    componentDidMount() {

    }

    selected = (item) => { this.setState({ selected: item.title }) }

    renderItem = ({ item }) => {

        return (

            <TouchableOpacity style={this.state.selected == item.title ? styles.selected : styles.unselected}
                onPress={() => { this.selected(item) }}>

                {
                    this.state.selected == item.title ?

                        <Image style={{ height: 24, width: 24 }}
                            source={{ uri: item.imageSelec }} />

                        :

                        <Image style={{ height: 24, width: 24 }}
                            source={{ uri: item.imageUnsel }} />
                }

                <Text style={this.state.selected == item.title ? styles.selectedTex : styles.UnselectedTex}>{item.title} </Text>

            </TouchableOpacity >
        )
    }

    renderPharmacy = ({ item }) => {
        return (
            <View style={{ height: 180, width: "100%", backgroundColor: 'transparent', marginVertical: 5, justifyContent: 'center', alignItems: 'center' }}>

                <View style={{ height: 130, width: "100%", backgroundColor: 'transparent', marginTop: 5, borderRadius: 15, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                    <View style={{ height: 130, width: "75%", backgroundColor: 'white', borderRadius: 15, borderTopEndRadius: 0, borderBottomEndRadius: 0, marginRight: 2, justifyContent: 'center', paddingLeft: 11 }}>

                        <View style={{ flex: 1, flexDirection: 'row', marginBottom: 30, }}>

                            <Image style={{ height: 70, width: 70 }}
                                source={{ uri: item.image }} />

                            <View style={{}}>

                                <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#1F1F1F', marginTop: 10 }}>{item.name}</Text>
                                <Text style={{ fontSize: 10, color: '#b8bbc2', marginTop: 1 }}>{item.location}</Text>
                                <Text style={{ fontSize: 10, color: '#b8bbc2' }}>{item.point}</Text>

                            </View>

                        </View>

                        <View style={{ flex: 1, backgroundColor: 'white' }}>

                            <View style={{ flexDirection: 'row' }}>

                                <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#b8bbc2', marginLeft: 10 }}>WORKING HOURS</Text>
                                <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#b8bbc2', marginLeft: 20 }}>IN STOCK</Text>

                            </View>

                            <View style={{ flexDirection: 'row' }}>

                                <Text style={{ fontSize: 11, fontWeight: 'bold', color: '#1f1f1f', marginLeft: 15 }}>{item.wHours}</Text>
                                <Text style={{ fontSize: 11, fontWeight: 'bold', color: '#1f1f1f', marginLeft: 48 }}>{item.inStock}</Text>

                            </View>

                        </View>

                    </View>

                    <View style={{ height: 130, width: "25%", backgroundColor: 'white', borderRadius: 15, borderTopStartRadius: 0, borderBottomStartRadius: 0, justifyContent: 'center', alignItems: 'center' }}>

                        <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#1f1f1f' }}>{item.dhs}</Text>
                        <Text style={{ fontSize: 10, color: '#b8bbc2' }}>Dhs</Text>

                    </View>

                </View>

                <View style={{ height: 40, width: "90%", backgroundColor: 'white', borderBottomStartRadius: 15, borderBottomEndRadius: 15, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}
                        onPress={() => { alert("Adicionado no carrinho!") }}>
                        <Image style={{ height: 25, width: 25 }}
                            source={require("./../../assets/cart.png")} />
                        <Text style={{ fontSize: 14, color: '#ff4c51', marginLeft: 5 }}>Order Now</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>

                <View style={styles.header}>

                    <View style={styles.boxInput1}>

                        <Image style={{ height: 25, width: 25, alignSelf: 'center', marginLeft: 12 }}
                            source={require("./../../assets/menu.png")} />

                        <TextInput style={{ marginLeft: 10 }}
                            underlineColorAndroid="transparent"
                            placeholder="Your name here."
                            placeholderTextColor="#b7bbc7"
                        />

                    </View>

                    <View style={styles.boxInput}>
                        <Image style={{ height: 25, width: 25, alignSelf: 'center', marginLeft: 10 }}
                            source={require("./../../assets/link.png")} />

                        <Select2
                            style={{ alignSelf: 'center' }}
                            colorTheme={'#ff4c51'}
                            popupTitle='Select state'
                            title="Select item"
                            showSearchBox={false}
                            cancelButtonText={'Return'}
                            selectButtonText={'Select'}
                            data={mockData}
                            onSelect={data => {
                                this.setState({ data })
                            }}
                            onRemoveItem={data => {
                                this.setState({ data });
                            }}
                        />

                    </View>

                    <FlatList
                        data={this.state.options}
                        style={{ marginTop: 10 }}
                        pagingEnabled={true}
                        horizontal={true}
                        keyExtractor={item => item.name}
                        showsHorizontalScrollIndicator={false}
                        onMomentumScrollEnd={this._onMomentumScrollEnd}
                        scrollEventThrottle={16}
                        renderItem={this.renderItem}
                    />

                </View>

                <View style={styles.container}>

                    <View style={{ flex: 1, backgroundColor: 'black' }}>

                        <Image style={{ height: 145, width: "100%" }}
                            source={require("./../../assets/maps.png")} />

                    </View>

                    <View style={{ flex: 2.6, paddingHorizontal: 20, backgroundColor: '#f6f6f6' }}>

                        <View style={{ flex: 1, backgroundColor: '#f6f6f6' }}>

                            <FlatList
                                style={styles.flatlistItens}
                                contentContainerStyle={{ paddingBottom: 1 }}
                                data={this.state.pharmacy}
                                keyExtractor={item => item.name}
                                renderItem={this.renderPharmacy}
                            />
                        </View>
                    </View>


                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    selectedTex: {
        color: 'white',
        fontSize: 14,
        marginHorizontal: 4
    },

    UnselectedTex: {
        color: '#1f1f1f',
        fontSize: 14,
        marginHorizontal: 4
    },

    selected: {
        marginHorizontal: 4,
        height: 35,
        width: 100,
        borderRadius: 20,
        backgroundColor: '#ff4e4d',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },

    unselected: {
        marginHorizontal: 4,
        height: 35,
        width: 100,
        borderRadius: 20,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },

    header: {
        flex: 1,
        backgroundColor: "#f6f6f6",
        justifyContent: "center",
        alignItems: 'center',
        shadowColor: "#000",
        paddingHorizontal: 15,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },

    container: {
        flex: 3.1,
        backgroundColor: "#fcfeff",
    },

    boxInput1: {
        height: 40,
        width: "100%",
        borderRadius: 20,
        backgroundColor: "white",
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: { width: 12, height: 12 },
        shadowOpacity: 0.20,
        shadowRadius: 12.00,
        elevation: 12,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 20,
    },

    boxInput: {
        height: 40,
        width: "100%",
        borderRadius: 20,
        backgroundColor: "white",
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: { width: 12, height: 12 },
        shadowOpacity: 0.20,
        shadowRadius: 12.00,
        elevation: 12,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    },
})