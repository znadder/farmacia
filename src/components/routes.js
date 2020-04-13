import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import index from './../pages/find/index';
import first from './../pages/checkout/first';
import second from './../pages/checkout/second';
import third from './../pages/checkout/third';
import fourth from './../pages/checkout/fourth';
import final from './../pages/checkout/final';
import QRCodeScreen from './../pages/checkout/qrcode';
import routesBottom from './../navigate/routesBottom';
import infosCheckout from './../pages/loginCheckout/infosCheckout'; 
import prescriptionCheckout from './../pages/loginCheckout/prescriptionCheckout';
import haveInsurance from './../pages/loginCheckout/haveInsurance'; 
import finalCheckout from './../pages/loginCheckout/finalCheckout'; 

export default createAppContainer(createStackNavigator({
    routesBottom,
    infosCheckout,
    prescriptionCheckout,
    haveInsurance,
    finalCheckout,
    index,
    first,
    second,
    third,
    fourth,
    final,
},
    {
        headerMode: 'null',
    }));