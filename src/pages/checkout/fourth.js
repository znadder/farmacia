import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions, TextInput } from 'react-native';
import { ThemeProvider } from 'styled-components';
import SelectBox from 'react-native-multi-selectbox';
import { xor } from 'lodash';
import Select2 from './../../components/ASelect';

const { width } = Dimensions.get("window");

const mockData = [
    { id: 1, name: 'Paraná' },
    { id: 2, name: 'Santa Catarina' },
    { id: 3, name: 'São Paulo' },
    { id: 4, name: 'Rio de Janeiro' },
    { id: 5, name: 'Mato Grosso' },
    { id: 6, name: 'Pará' },
    { id: 7, name: 'Rio Grande do Sul' },
];

export default class fourth extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            number: '',
            location: '',
            type: '',
        }
    }

    componentDidMount() {
        this.setState({
            name: this.props.navigation.getParam('name'),
            number: this.props.navigation.getParam('number'),
        })
    }

    getType = (text) => {
        this.setState({ type: text });
    }

    render() {

        return (
            <View style={{ flex: 1 }}>
                <View style={styles.header}>
                    <TouchableOpacity style={{ alignSelf: 'center', marginLeft: 15 }}
                        onPress={() => { this.props.navigation.navigate('third') }}>
                        <Image style={{ height: 18, width: 18 }}
                            source={require("./../../assets/arrowleft.png")} />
                    </TouchableOpacity>
                    <Text style={{ color: "#1f1f1f", fontWeight: 'bold', fontSize: 14, alignSelf: 'center', marginLeft: 114 }}>CHECKOUT</Text>
                    <View style={{ height: 1.5, width: '95%', backgroundColor: 'green', position: 'absolute', marginTop: 62 }}></View>
                </View>
                <View style={styles.container}>

                    <Image style={{ height: 85, width: 85 }}
                        source={require("./../../assets/house2.png")} />

                    <Text style={{ color: '#1f1f1f', fontSize: 20, fontWeight: 'bold', marginTop: 20, textAlign: 'center' }}>Where do you want this delivered?</Text>
                    <Text style={{ color: '#A0A0A0', fontSize: 12, marginTop: 5 }}>Just so we know exaclty how to find you</Text>

                    <View style={styles.boxInput3}>
                        <Image style={{ height: 25, width: 25, alignSelf: 'center', marginLeft: 10 }}
                            source={require("./../../assets/house.png")} />

                        <Select2
                            isSelectSingle
                            style={{ alignSelf: 'center' }}
                            colorTheme={'#ff4c51'}
                            popupTitle='Select state'
                            title="Select item"
                            showSearchBox={false}
                            cancelButtonText={'Return'}
                            selectButtonText={'Select'}
                            data={mockData}
                            onSelect={data => {
                                let aux = mockData[data - 1].name
                                this.setState({ location: aux });
                            }}
                            onRemoveItem={data => {
                                this.setState({ data });
                            }}
                        />

                    </View>

                    <View style={styles.boxInput1}>
                        <Image style={{ height: 25, width: 25, alignSelf: 'center', marginLeft: 10 }}
                            source={require("./../../assets/build.png")} />

                        <TextInput style={{ marginLeft: 12 }}
                            underlineColorAndroid="transparent"
                            placeholder="Street/ building / apt"
                            placeholderTextColor="#b7bbc7"
                            autoCapitalize="none"
                            onChangeText={this.getType}

                        />
                    </View>

                    <TouchableOpacity style={{ height: 40, width: 300, justifyContent: 'center', alignItems: 'center', marginTop: 15, marginBottom: 40 }}
                        onPress={() => {
                            this.props.navigation.navigate('final', {
                                name: this.state.name,
                                number: this.state.number,
                                location: this.state.location,
                                type: this.state.type,
                            })
                        }}>

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
        borderRadius: 50,
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

    boxInput3: {
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
        marginTop: 30,
    },
})