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
                    title: 'Open'
                },
                {
                    title: 'Near'
                },
                {
                    title: 'Price'
                },
            ]
        }
    }

    componentDidMount() {

    }

    renderItem = ({item}) => {
        return(
            <TouchableOpacity style={{ marginHorizontal: 4, height: 35, width: 100, borderRadius: 20, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{ color: '#1f1f1f', fontSize: 14 }}>{item.title}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>

                <View style={styles.header}>

                    <View style={styles.boxInput1}>

                        <Image style={{ height: 25, width: 25, alignSelf: 'center', marginLeft: 8 }}
                            source={require("./../../assets/userName.png")} />

                        <TextInput style={{ marginLeft: 8 }}
                            underlineColorAndroid="transparent"
                            placeholder="Your name here."
                            placeholderTextColor="#b7bbc7"
                        />

                    </View>

                    <View style={styles.boxInput}>
                        <Image style={{ height: 25, width: 25, alignSelf: 'center', marginLeft: 10 }}
                            source={require("./../../assets/house.png")} />
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
                        showsHorizontalScrollIndicator={false}
                        onMomentumScrollEnd={this._onMomentumScrollEnd}
                        scrollEventThrottle={16}
                        renderItem={this.renderItem}
                    />

                </View>
                <View style={styles.container}>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: "#f0f0f0",
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
        justifyContent: "center",
        alignItems: 'center',
        paddingHorizontal: 50,
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