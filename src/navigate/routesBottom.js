import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import profile from './../pages/bottomNavigate/profile';
import index from './../pages/find/index';
import orders from './../pages/bottomNavigate/orders';

// import AIcon from '../components/index';

const App = createBottomTabNavigator(
  {
    Profile: {
      screen: profile,
      navigationOptions: {

      }
    },
    Search: {
      screen: index,
      navigationOptions: {

      }
    },
    Orders: {
      screen: orders,
      navigationOptions: {

      }
    },
    // Leaders: {
    //   screen: leadersPage,
    //   navigationOptions: {

    //   }
    // },
    // Settings: {
    //   screen: settingsPage,
    //   navigationOptions: {

    //   }
    // }

  },
  {
    defaultNavigationOptions: ({ navigation }) => ({

      //   tabBarIcon: ({ focused, horizontal, tintColor }) => {
      //     const { routeName } = navigation.state;

      //     let iconName = "earth";

      //     if (routeName === "Home") {
      //       iconName = "home";
      //     }
      //     else if (routeName === "Scan") {
      //       iconName = "checkbox-unchecked";
      //     }
      //     else if (routeName === "Leaders") {
      //       iconName = "trophy";
      //     }
      //     else if (routeName === "Settings") {
      //       iconName = "cog";
      //     }

      //     return <View style={{ marginTop: 8 }}>
      //           <AIcon name={iconName} size={20} color={tintColor}/>
      //     </View>;
      //   },
    }),
    tabBarOptions: {
      activeTintColor: '#CE1B29',
      inactiveTintColor: "#c1c1c1",
      justifyContent: 'center',
      alignItems: 'center',
      upperCaseLabel: true,
      style: {
        height: 40,
        backgroundColor: 'f6f6f6',
        shadowColor: "#000",
        shadowOffset: {
          width: -80,
          height: -80,
        },
        shadowOpacity: 0.10,
        shadowRadius: 1.65,
        elevation: 1,
        borderTopWidth: 0.001,
        borderTopColor: "#D0D0D0",
      },
      tabStyle: {
      },
      labelStyle: {
        margin: 0,
        fontSize: 14,
        justifyContent: 'center',
        alignSelf: 'center',
        fontFamily: 'GentiumPlus-I',
      },
      indicatorStyle: {
        borderTopColor: "#CE1B29",
        top: -1,
        borderTopWidth: 20,
      },
    }
  }
);

export default createAppContainer(App);